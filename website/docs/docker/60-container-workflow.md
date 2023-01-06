---
id: container-workflow
title: The Container Workflow
---

## Related Videos
<video
  url={[
    "https://www.youtube-nocookie.com/embed/HQ2pZENTVQk",
  ]}
/>

---

To summarize the previous lessons a simple workflow of creating container images may look like this:

1. Login with `docker login <your-dockerhub-username>`
2. Change application code and/or change the `Dockerfile`
3. Create a local image with `docker -t <your-image> .`
4. Test your local image with `docker run -p <computer-port>:<container-port> <your-image>`
5. Tag your image with `docker tag <your-image> <your-dockerhub-username>/<your-image>:<tag>`
6. Push the tagged image with `docker push <your-dockerhub-username>/<your-image>:<tag>`
