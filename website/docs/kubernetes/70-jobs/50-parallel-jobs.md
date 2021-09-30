---
id: parallel-jobs
title: Parallel Jobs
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/A9c07XS9go4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

In this lesson you will learn about executing tasks in parallel by running multiple Pods simultaneously.

## Job Completion Count

In the previous example using `kubectl get jobs` you may have noticed the field `COMPLETIONS` whose value was `1/1` in case a Job has been completed successfully. More precisely, the count determines the number of successful Pod executions as part of the Job. In case of a failing Job, the failing Pod has been recreated and the completion count has been reached even though the source code describe the task has been very unreliable.

There are tasks requiring more than one iteration to fully accomplish the underlying objective. For this purpose Kubernetes Jobs allow to specify the number of desired completions, e.g. 2 completions by adding `completions: 2`.

Let's give it a try! Create the file `60-simple-job-two-completions.yaml`:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: one-off-job-two-completions
spec:
  completions: 2
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

And apply it:

    kubectl apply -f 60-simple-job-two-completions.yaml

While the Job is running observe its Pods by opening another terminal so you can paste the observation command immediately after executing it. Ideally, you have the command already in your clipboard (CTRL+C):

    kubectl get pods -l job-name=one-off-job-two-completions -w

You should see two Pods. If things happen too fast increase the number of completions to gain more observation time.

    NAME                                READY   STATUS            RESTARTS   AGE
    one-off-job-two-completions-xzhmh   0/1     Pending             0          0s
    one-off-job-two-completions-xzhmh   0/1     Pending             0          0s
    one-off-job-two-completions-xzhmh   0/1     ContainerCreating   0          0s
    one-off-job-two-completions-xzhmh   0/1     Completed           0          3s
    one-off-job-two-completions-pb44m   0/1     Pending             0          0s
    one-off-job-two-completions-pb44m   0/1     Pending             0          0s
    one-off-job-two-completions-pb44m   0/1     ContainerCreating   0          0s
    one-off-job-two-completions-pb44m   0/1     Completed           0          3s

A close observation also reveals that **the Pods run in sequence**. This may be desired if the task requires ordinality and the execution sequence matters to the the task outcome. However, if there is no ordinality requirement **running the Jobs Pods in sequence is a waste of time**.

## Parallel Job Execution

Luckily Kubernets supports parallel Job execution out of the box. Changing the Job definition to enable parallelism is as easy as pie by adding a spec attributed `parallelism: 2`.

Create the Job description in file `70-simple-job-two-completions-parallel.yaml`:

```yaml
apiVersion: batch/v1
kind: Job
metadata:
  name: one-off-job-two-completions-parallel
spec:
  completions: 2
  parallelism: 2
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

Running the Job:

    kubectl apply -f 70-simple-job-two-completions-parallel.yaml

And observing the result:

    kubectl get pods -l job-name=one-off-job-two-completions-parallel -w

The output looks similar to:

    NAME                                         READY   STATUS    RESTARTS   AGE
    one-off-job-two-completions-parallel-s2j5k   0/1     Pending             0          0s
    one-off-job-two-completions-parallel-s2j5k   0/1     Pending             0          0s
    one-off-job-two-completions-parallel-qknz4   0/1     Pending             0          0s
    one-off-job-two-completions-parallel-qknz4   0/1     Pending             0          0s
    one-off-job-two-completions-parallel-s2j5k   0/1     ContainerCreating   0          0s
    one-off-job-two-completions-parallel-qknz4   0/1     ContainerCreating   0          0s
    one-off-job-two-completions-parallel-s2j5k   0/1     Completed           0          3s
    one-off-job-two-completions-parallel-qknz4   0/1     Completed           0          3s

Compare the outputs of the *first non-parallel* and *second parallel* run.

The *first run* the sequence was: `Pending, Pending, ContainerCreating, Completed, ContainerCreating, Completed` which implies sequential execution.

The *second run* shows parallel execution with the sequence: `Pending, Pending, ContainerCreating, ContainerCreating, Completed, Completed`.

As you can see **it is fairly easy to define iterative, parallel Jobs using Kubernetes**.
