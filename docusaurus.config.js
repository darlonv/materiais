// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Materiais',
  tagline: '',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://darlonv.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/materiais/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'darlonv', // Usually your GitHub org/user name.
  projectName: 'materiais', // Usually your repo name.
  trailingSlash: false,

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-br',
    locales: ['pt-br'],
    path: 'i18n'
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/darlonv/algoritmos/tree/main/',
          remarkPlugins: [math],
          rehypePlugins: [katex],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],


  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'DV',
        logo: {
          alt: 'Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'sidebarAlgoritmos',
            position: 'left',
            label: 'Algoritmos',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sidebarRC',
            position: 'left',
            label: 'RC',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sidebarSO',
            position: 'left',
            label: 'SO',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sidebarCD',
            position: 'left',
            label: 'Ciência de Dados',
          },
          // {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/darlonv/algoritmos',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Material',
                to: '/docs/intro',
              },
            ],
          },
          // {
          //   title: 'Outros materiais',
          //   items: [
          //     {
          //       label: 'AED',
          //       href: 'https://darlonv.github.io/algoritmos',
          //     },
          //     {
          //       label: 'Redes',
          //       href: 'https://darlonv.github.io/redes',
          //     },
          //     // {
          //     //   label: 'Twitter',
          //     //   href: 'https://twitter.com/docusaurus',
          //     // },
          //   ],
          // },
          {
            title: 'Mais',
            items: [
              {
                label: 'Créditos',
                to: '/creditos',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/darlonv/materiais',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Darlon Vasata. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
};

module.exports = config;
