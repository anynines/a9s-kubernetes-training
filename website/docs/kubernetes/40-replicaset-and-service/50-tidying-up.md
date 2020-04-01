---
id: tidyup
title: Tyding Up
---
Removing all artefacts is simple: replace `apply` with `delete` in all `kubectl`-commands and execute them in reverse order:

    kubectl delete -f 40-ingress-hello-world-a9s.yaml
    kubectl delete -f 35-service-hello-world.yaml
    kubectl delete -f 20-rs-hello-world.yaml

You can use the `kubectl`-commands you have learned to verify that all resources have actually been deleted.