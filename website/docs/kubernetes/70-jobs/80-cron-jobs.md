---
id: cron-jobs
title: CronJobs
---

## Related Videos

<VideoContainer
  list={[{
    src: "https://www.youtube-nocookie.com/embed/Lye_qdofqjg",
    title: "CronJobs"
  }]}
/>

---

Cron [1] is a daemon available as a package for most Unix/Linux operating systems and is a time-based job scheduler.

## Linux/Unix Cron Jobs and Cron Tab

A so-called Cron Job is represented as an entry in a Cron Tab describing when a particular command is to be executed. A Cron Tab entry may look like this [1]:

    # ┌───────────── minute (0 - 59)
    # │ ┌───────────── hour (0 - 23)
    # │ │ ┌───────────── day of the month (1 - 31)
    # │ │ │ ┌───────────── month (1 - 12)
    # │ │ │ │ ┌───────────── day of the week (0 - 6) (Sunday to Saturday;
    # │ │ │ │ │                                   7 is also Sunday on some systems)
    # │ │ │ │ │
    # │ │ │ │ │
    # * * * * * command to execute

The following entry, for example, writes `Hello World` to `/var/log/hello.log` at 00:01 o'clock every day.

    1 0 * * * printf "Hello World\n" >> /var/log/hello.log

## Kubernetes Cron Jobs

In Kubernetes a Cron Job is a Kubernetes Job that is executed according to a given schedule described in the classical Cron Tab format. The Cron Tab format is quite expressive and there are online tools helping to express a particular schedule such as [2].

Respectively, the pattern `1 0 * * *` also schedules a CronJob for daily execution at 00:01 (12:01 a.m.).

The following example runs a CRON Job every 2 minutes. This frequency is most likely inappropriate for a Kubernetes CRON Job but good to observe what CRON Jobs do.

Create the file `90-cron-job.yaml`:

```yaml
apiVersion: batch/v1
kind: CronJob
metadata:
  name: cron-job-hello-world
spec:
  # See https://crontab.guru/
  # At every 2nd minute.
  schedule: '*/2 * * * *'

  # See https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/#writing-a-job-spec
  jobTemplate:
    spec:
      template:
        spec:
          containers:
            - name: simple-one-off-job-container
              image: busybox
              imagePullPolicy: Always
              command: ['echo']
              args:
                - 'I represent a very important maintenance task'
          restartPolicy: OnFailure
```

And apply it:

    kubectl apply -f 90-cron-job.yaml

Verify its creation:

    kubectl get cronjobs

And obtain CRON Job details:

    kubectl describe cronjob cron-job-hello-world

The `Events` section will list a number of Jobs. **Apparently, CRON Jobs are used to derive Jobs which in turn create Pods.**

The CRON Job should be executed periodically every 2 minutes.

So let's look for the Jobs:

    kubectl get jobs

    NAME                                   COMPLETIONS   DURATION   AGE
    cron-job-hello-world-1583929080        1/1           3s         5m18s
    cron-job-hello-world-1583929200        1/1           3s         3m18s

As expected Jobs are created regularly and their names contain a suffix to uniquely distinguish them from another.

You can retrieve the Pods corresponding to a particular Job:

    kubectl get pods -l job-name=cron-job-hello-world-1583929440

Or watch Pods being created:

    kubectl get pods -w

    NAME                                         READY   STATUS      RESTARTS   AGE
    cron-job-hello-world-1583928480-mqxqj        0/1     Completed   0          5m20s
    cron-job-hello-world-1583928600-5l8gb        0/1     Completed   0          3m20s
    cron-job-hello-world-1583928720-x7bpj        0/1     Completed   0          80s

**Kubernetes CRON Jobs are a convenient way to execute containerized workloads as Jobs, periodically.**

## Tidying Up

Delete the CRON Job:

    kubectl delete cronjob cron-job-hello-world

Have a look at Jobs and Pods:

    kubectl get jobs
    kubectl get pods

You will notice that **deleting the CRON Job will also delete corresponding Jobs and Pods**.

## Links

1. Wikipedia, cron, https://en.wikipedia.org/wiki/Cron
2. crontab guru, https://crontab.guru/
