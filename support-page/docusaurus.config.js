// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'WendyAI',
  tagline: 'Meet your new workplace advisor.',
  favicon: 'img/wendy.ico',

  // Set the production url of your site here
  url: 'https://your-docusaurus-test-site.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'Hölmetrics x InceptionU', // Usually your GitHub org/user name.
  projectName: 'WendyAI', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'WendyAI',
        logo: {
          alt: 'My Site Logo',
          src: 'img/wendy.png',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'right',
            label: 'Help Centre',
          },
          {
            href: 'https://github.com/ollysamm/project-3',
            label: 'GitHub',
            position: 'right',
          },
          {
            href: 'https://holmetrics.com/',
            label: 'Hölmetrics',
            position: 'right',
          },
          {
            type: 'html',
            position: 'right',
            value: '<button>Login</button>',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Helpful Links',
            items: [
              {
                label: 'Help Centre',
                href: 'https://github.com/ollysamm/project-3',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Hölmetrics',
                to: 'https://holmetrics.com/',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/ollysamm/project-3',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Guardians of the Office </br> In collaboration with Hölmetrics Inc and InceptionU Educational Foundation Ltd.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
