---
id: advanced-jobs
title: Advanced Job Features
---

## Related Videos
<VideoContainer
  list={[{
   src: "https://www.youtube-nocookie.com/embed/VZB9eGUeJpQ",
   title: "Advanced Job Features"
  }]}
/>

---
Admittedly, running a simple Job as earlier has little advantage over running a single Pod but there is more to Jobs than meets the eye as you will see in the following lessons.

## Automatic Retry-Logic

The Job concept in Kubernetes provides options when a container has not been executed successfully. This does not only cover the creation of Pods and their containers but also the workload running inside them.

### A Failing Job

Run the following Job which will fail with certainty. Create the file `30-failing-job.yaml`:

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
        command: ["/bin/sh","-c"]
        args:
        - "echo \"I represent a failing maintenance task\"; exit 1"
      restartPolicy: OnFailure
```

Apply it:

    kubectl apply -f 30-failing-job.yaml

As usual a `kubectl describe` is executed to obtain more information:

    kubectl describe job simple-one-off-job-from-yaml

Interestingly, this produces an event `SuccessfulCreate` originating from the `job-controller`. Everything seems normal, although we know that the Job must have failed. A closer look reveals there is no contradiction. The event informs that the Pod `simple-one-off-job-from-yaml-5x2xt` has been created successfully and in fact it has been. It's just that the container inside the Pod has failed. So a closer look at the pod is necessary:

    kubectl get pods -l job-name=simple-one-off-job-from-yaml

This time we see a clear indication that something went wrong:

* `STATUS` is `CrashLoopBackOff`
* `RESTARTS` is `4`

And an even closer look with:

    kubectl describe pod simple-one-off-job-from-yaml-547xc

Reveals a warning: `Back-off restarting failed container` which indicated a non-zero return value from starting the container. For those new to Unix/Linux systems [2]:

> For the shell's purposes, a command which exits with a status code of zero has succeeded. A non-zero exit status indicates failure. This seemingly counter-intuitive scheme is used so there is one well-defined way to indicate success and a variety of ways to indicate various failure modes. When a command terminates on a fatal signal whose number is N, Bash uses the value 128+N as the exit status.

Without further specification Kubernetes determines the success of a container start by looking at the exit value of the container startup command to be zero. **Any non-zero value will be considered a failing container start**.

### A Flaky Job

But there is more to the previous example. The field `RESTARTS: 4` suggests that Kubernetes has not given up immediately but only after four (4) failed attempts. This means that if a failure is sporadic, the retry logic can help to accomplish a Job nevertheless.

**Consider a Job that sometimes fails and sometimes succeeds**. While such a case calls for a bugfix by the developer, it is also nice if Kubernetes can help so that the developer does not have to get up at night.

We simulate a flaky Job with the following shell command:

    (( RANDOM%3 == 0 )) && exit 0 || exit 1

This will randomly exit with either success (0) or failure (1) with a bias towards failure.

Use this version of you want to try it without existing your shell:

    (( RANDOM%3 == 0 )) && echo 0 || echo 1

Create the file `40-flaky-job.yaml`:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: flaky-job
spec:
  backoffLimit: 5
  template:
    spec:
      containers:
      - name: flaky-job-container
        image: ubuntu
        imagePullPolicy: Always
        command: ["/bin/bash","-c"]
        args:
        - "echo \"I represent a flaky maintenance task\"; (( RANDOM%3 == 0 )) && exit 0 || exit 1"
      restartPolicy: OnFailure
```

Execute the Job:

    kubectl apply -f 40-flaky-job.yaml

While the Job is being created open another terminal and observe the Pods belonging to the Job:

    kubectl get pods -l job-name=flaky-job -w

The option `-w` as in "watch" keeps `kubectl` polling for changes. So you are likely to see a sequence of events such as:

    flaky-job-b7nj8   0/1     Pending             0          0s
    flaky-job-b7nj8   0/1     Pending             0          0s
    flaky-job-b7nj8   0/1     ContainerCreating   0          1s
    flaky-job-b7nj8   0/1     Error               0          3s
    flaky-job-b7nj8   0/1     Error               1          5s
    flaky-job-b7nj8   0/1     CrashLoopBackOff    1          6s
    flaky-job-b7nj8   0/1     Completed           2          24s

As the containers are failing randomly you may have to delete and create the Job several times to observe a similar sequence. Give it a try.

You can see from the output that the Pod has failed two times before it succeeded. This is free robustness for workloads when using Kubernetes Jobs.

## Links

1. Kubernetes Documentation, Tasks, Jobs, https://kubernetes.io/docs/tasks/job/
2. gnu.org, Bash Manual, https://www.gnu.org/software/bash/manual/html_node/Exit-Status.html
