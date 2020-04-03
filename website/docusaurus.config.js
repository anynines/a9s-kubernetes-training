const siteConfig = {
  title: 'Kubernetes Training', // Title for your website.
  tagline: 'Learn how to containerize and deploy your apps to Kubernetes.',
  url: 'https://anynines.github.io', //'https://learn.anynines.com/k8s', // Your website URL
  baseUrl: '/', // '/' // Base URL for your project */
  favicon: 'img/favicon.ico',
  projectName: 'a9s-kubernetes-training', // anynines.github.io
  organizationName: 'anynines',

  themeConfig: {
    navbar: {
      title: 'Kubernetes Training',
      logo: {
        alt: 'anynines',
        src: 'img/logo.svg',
        href: '/training-overview'
      },
      links: [
        {to: 'containerization/container-overview', label: 'Container Training', position: 'left'},
        {to: 'kubernetes/kubernetes-overview', label: 'Kubernetes Training', position: 'left'},
        {
          href: 'https://github.com/anynines',
          label: 'GitHub',
          position: 'right'
        },
        {
          href: 'https://paas.anynines.com',
          label: 'anynines PaaS',
          position: 'right'
        }
      ],
    },   
    footer: {
      logo: {
        alt: 'anynines',
        src: 'img/logo.svg',
        href: 'https://anynines.com',
      },
      copyright: `Copyright © ${new Date().getFullYear()} anynines GmbH.`, // You can also put own HTML here
    },
    image: 'img/logo.svg',
    // Equivalent to `docsSideNavCollapsible`
    sidebarCollapsible: false,
    // ...
  },

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // path: 'docs',
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.json'),
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css')
        },
      }
    ],
  ]
};

module.exports = siteConfig;
