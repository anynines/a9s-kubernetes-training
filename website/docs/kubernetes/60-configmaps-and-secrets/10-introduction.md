---
id: configmaps-and-secrets
title: ConfigMaps and Secrets
---

## Related Videos

<VideoContainer
  list={[{
    src: "https://www.youtube-nocookie.com/embed/6hNC66uImgs",
    title: "Introduction & ConfigMaps Part 1"
  }]}
/>

---

ConfigMaps and Secrets are utilities provided by Kubernetes to facilitate the development of cloud-native - or 12 factor [1] compliant - applications. In particular, ConfigMaps relate to chapter 3 _Config_ of the 12 factor manifest. This best practice suggests to store application configuration outside the application, e.g. by using environment variables [2]. This allows a strict separation of functionality and configuration which increases the portability of applications. An application thus can be operated from the same code base among different environments such as staging & production or the application could even be deployed _per customer_ still using a single source code version.

So instead of hard-wiring the application configuration options or access credentials into source code, the better option is to use ConfigMaps and Secrets.

Both **ConfigMaps and Secrets can be thought of key value sets managed using the Kubernetes API**. In the following it will be shown how these key value sets can be created, maintained and retrieved.

## Links

1. The Twelve Factor App, https://12factor.net/
2. Environment Variables, Wikipedia, https://en.wikipedia.org/wiki/Environment_variable
3. Kubernetes Documentation, Tasks, Configure a Pod to Use a ConfigMap, https://kubernetes.io/docs/tasks/configure-pod-container/configure-pod-configmap/
