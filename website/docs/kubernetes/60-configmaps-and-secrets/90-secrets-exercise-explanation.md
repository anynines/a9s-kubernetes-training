---
id: secrets-exercise-explanation
title: Secrets Exercise Explanation
---

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/vFGlpm1ctYw" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Here you can find possible solutions to the previous exercise.

**Create a Pod and consume the previously created Secret `area51` as environment variables**:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox-secrets
spec:
  containers:
    - image: busybox
      name: busybox-secrets-container
      command:
        - "env"
      env:
        - name: USERNAME
          valueFrom:
            secretKeyRef:
              name: area51
              key: username
        - name: PASSWORD
          valueFrom:
            secretKeyRef:
              name: area51
              key: password
  restartPolicy: Never
```

**Create a Pod and consume the previously created Secret `area52` as a mounted volume**:

```yaml
apiVersion: v1
kind: Pod
metadata:
  name: busybox-secrets-files
spec:
  containers:
    - image: busybox
      name: busybox-secrets-files-container
      command:
        - "sh"
        - "-c"
      args:
        - "ls /secrets; cat /secrets/90-username.txt; echo \" \"; cat /secrets/AA-password.txt"
      volumeMounts:
        - name: secrets-volume
          mountPath: /secrets
  volumes:
    - name: secrets-volume
      secret:
        secretName: area52
  restartPolicy: Never
```
