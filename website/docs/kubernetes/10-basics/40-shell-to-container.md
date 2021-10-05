---
id: container-shell
title: Container Shell Access
---

<VideoContainer
  title="Videomaterial for this Chapter"
  list={[{
   src: "https://www.youtube-nocookie.com/embed/IAEVI559jaA",
   title: "Kubernetes Training - Container Shell Access"
  }]}
/>

Sometimes you may want to run commands from within a container and feel how it is to be inside the Kubernetes cluster. This makes it easier to access internal services before anything is exposed to the oustide world, for example.

In order to run a shell we start a Pod with a single container based on a simple container image and remotely attach a tty (terminal) to it:

    kubectl run -i --tty busybox --image=busybox --restart=Never -- sh

An interaction shell should open.

In case you terminate the terminal session but the *busybox* container is still running you can open another shell:

    kubectl exec -it busybox -- sh

Such a Pod can be deleted using the command:

    kubectl delete Pod busybox

## Links

https://kubernetes.io/docs/tasks/debug-application-cluster/get-shell-running-container/
