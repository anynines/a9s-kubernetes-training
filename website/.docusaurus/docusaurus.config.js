export default {
  "plugins": [],
  "themes": [],
  "customFields": {},
  "themeConfig": {
    "navbar": {
      "title": "Kubernetes Training",
      "logo": {
        "alt": "anynines",
        "src": "img/logo.svg"
      },
      "links": [
        {
          "to": "docs/containerization/container-overview",
          "label": "Container Training",
          "position": "left"
        },
        {
          "to": "docs/kubernetes/kubernetes-overview",
          "label": "Kubernetes Training",
          "position": "left"
        },
        {
          "href": "https://github.com/anynines",
          "label": "GitHub",
          "position": "right"
        },
        {
          "href": "https://paas.anynines.com",
          "label": "anynines PaaS",
          "position": "right"
        }
      ]
    },
    "footer": {
      "logo": {
        "alt": "anynines",
        "src": "img/logo.svg",
        "href": "https://anynines.com"
      },
      "copyright": "Copyright © 2020 anynines GmbH."
    },
    "image": "img/logo.svg",
    "sidebarCollapsible": false
  },
  "title": "Kubernetes Training",
  "tagline": "Learn how to containerize and deploy your apps to Kubernetes.",
  "url": "https://fischerjulian.github.io",
  "baseUrl": "/a9s-kubernetes-training/",
  "favicon": "img/favicon.ico",
  "projectName": "a9s-kubernetes-training",
  "organizationName": "fischerjulian",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "path": "docs",
          "sidebarPath": "/Users/mariusz/Documents/work/a9s-kubernetes-training/website/sidebars.json"
        },
        "theme": {
          "customCss": "/Users/mariusz/Documents/work/a9s-kubernetes-training/website/src/css/custom.css"
        }
      }
    ]
  ]
};