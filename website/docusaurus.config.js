const siteConfig = {
  title: "Kubernetes Training", // Title for your website.
  tagline: "Learn how to containerize and deploy your apps to Kubernetes.",
  url: "https://anynines.github.io", // 'https://learn.anynines.com/k8s', // Your website URL
  baseUrl: "/", // '/' // Base URL for your project */
  favicon: "img/favicon.ico",
  projectName: "a9s-kubernetes-training", // anynines.github.io
  organizationName: "anynines",

  themeConfig: {
    navbar: {
      title: "Kubernetes Training",
      logo: {
        alt: "anynines",
        src: "img/logo.svg",
        href: "/training-overview"
      },
      items: [
        {
          to: "containerization/container-overview",
          label: "Container Training",
          position: "left"
        },
        {
          to: "kubernetes/kubernetes-overview",
          label: "Kubernetes Training",
          position: "left"
        },
        {
          href: "https://github.com/anynines",
          label: "GitHub",
          position: "right"
        },
        {
          href: "https://paas.anynines.com",
          label: "anynines PaaS",
          position: "right"
        }
      ]
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} anynines GmbH.`, // You can also put own HTML here
      links: [
        {
          title: "More from anynines",
          items: [
            {
              label: "anynines.com",
              to:
                "https://anynines.com/?utm_source=k8s-tutorial&utm_medium=web",
              target: "_blank"
            },
            {
              label: "anynines PaaS",
              to:
                "https://paas.anynines.com/?utm_source=k8s-tutorial&utm_medium=web",
              target: "_blank"
            },
            {
              label: "Jobs at anynines",
              to:
                "https://anynines.com/jobs/?utm_source=k8s-tutorial&utm_medium=web",
              target: "_blank"
            }
          ]
        },
        {
          title: "Follow us",
          items: [
            {
              label: "Twitter",
              to: "https://twitter.com/anynines",
              target: "_blank"
            },
            {
              label: "LinkedIn",
              to: "https://www.linkedin.com/company/anynines/",
              target: "_blank"
            },
            {
              label: "Instagram",
              to: "https://instagram.com/anyninescom",
              target: "_blank"
            }
          ]
        },
        {
          title: "Legal",
          items: [
            {
              label: "Imprint",
              to: "https://www.anynines.com/imprint",
              target: "_blank"
            },
            {
              label: "Privacy Policy",
              to: "https://www.anynines.com/data-privacy",
              target: "_blank"
            }
          ]
        }
      ]
    },
    prism: {
      defaultLanguage: "bash",
      theme: require("prism-react-renderer/themes/nightOwl"),
      darkTheme: require("prism-react-renderer/themes/nightOwl")
    },
    image: "img/logo.svg",
    // Equivalent to `docsSideNavCollapsible`
    sidebarCollapsible: false
    // ...
  },

  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          // path: 'docs',
          routeBasePath: "/",
          sidebarPath: require.resolve("./sidebars.json")
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css")
        }
      }
    ]
  ]
};

module.exports = siteConfig;
