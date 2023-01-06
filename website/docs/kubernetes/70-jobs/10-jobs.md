---
id: jobs
title: Jobs
---

## Related Videos
<video
  url={[
    "https://www.youtube-nocookie.com/embed/-I8z8RTAa5I",
    "https://www.youtube-nocookie.com/embed/VgrMcXXon1U"
  ]}
/>

---

ReplicaSets and Deployments are Kubernetes resources to describe long-running processes (LRPs). For web applications, for example, application instances, once started, are often running continuously and keeping them alive is a major goal.

However, there are also - compared to LRPs - **short-lived workloads**. These include **one-off tasks** as well as **tasks requiring recurring execution** both of varying complexity.

**One-Off Tasks** will be covered in this lesson while **recurring tasks will be covered in the CRON Job Lesson**.

## When to use a Job?

Whenever it's not a long-running process but still needs to run code from a container image, it may be a Job.

A few examples include running tasks such as

* database schema migrations
* administrative one-off tasks in general
* Analytic workflows
* in general batch jobs which are run (partially) in sequence and/or (partially) in parallel.

Note that these tasks may be "long" running in dimension of hours or even days but compared to the average web application's lifecycle this is still comparatively short.

## What is a Job?

**A Job is a utility to execute short-lived workloads by starting Pods up until successful completion.**

The following examples will help you understand the concept of Jobs in greater details.

## Creating Jobs

Let's start creating Job by creating the simplest Job: a single container one-off Task.

### Single Container One-Off Task

In this example a simple task is to be executed. The task is to run a simple shell command and then exit. In this case a single container will suffice. Neither sequential nor parallel processing of multiple containers or Pods is necessary.

Running a simple Job appears familiar to you as you have already done it in an earlier lesson:

    kubectl run -i --tty busybox --image=busybox --restart=Never -- sh

If all you care about is the outcome of a shell command there is no need to attach an interactive terminal (`-i --tty`):

    kubectl run simple-one-off-task --image=busybox --restart=Never -- echo "I represent a very important maintenance task."

Retrieve the corresponding job:

    kubectl get jobs

As you can see there is no job because `kubectl run` doesn't create one. It's just a regular Pod. If that gets the (metaphorical) job done `kubectl run` is a way to go.

Now proceed with creating a real Job in file `20-simple-job.yaml`:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: simple-one-off-job-from-yaml
spec:
  template:
    spec:
      containers:
      - name: simple-one-off-job-container
        image: busybox
        imagePullPolicy: Always
        command: ["echo"]
        args:
        - "I represent a very important maintenance task"
      restartPolicy: OnFailure
```

Apply it:

    kubectl apply -f 20-simple-job.yaml

And look again at:

    kubectl get jobs

There should be your job.

Let's have a look at its description:

    kubectl describe job simple-one-off-job-from-yaml

You should see a list of events containing a single event from `job-controller`.

As well as a field called `Labels`. It likely contains a key value pair such as `job-name=simple-one-off-job-from-yaml`.

Let's use this Label obtained from our Job metadata to query the corresponding Pod:

    kubectl get pods -l job-name=simple-one-off-job-from-yaml

You should find a completed Pod with a name similar to `simple-one-off-job-from-yaml-bbwkw`. The suffix `bbwkw` is a random string attached by the JobController. Looking up the Pod of a Job in an environment with many Pods may become tricky so searching by label comes in handy.

Now we can also have a look at the Pods log:

    kubectl logs simple-one-off-job-from-yaml-bbwkw

Which will tell us: "`I represent a very important maintenance task`".

So you can see that **both the Job and corresponding Pod(s) exist past their execution**. This is good for debugging but bad if many Jobs are executed and nobody does the garbage collection.

## Deleting a Job

Deleting a Job works as expected:

    kubectl delete job simple-one-off-job-from-yaml

Now look for the corresponding Pods:

    kubectl get pods -l job-name=simple-one-off-job-from-yaml

They are gone too. So keep in mind: **deleting a Job also deletes corresponding Pods**.

## Links

1. Kubernetes Documentation, Tasks, Jobs, https://kubernetes.io/docs/tasks/job/
2. Kubernetes Documentation, Concepts, Jobs - Run to Completion, https://kubernetes.io/docs/concepts/workloads/controllers/jobs-run-to-completion/
