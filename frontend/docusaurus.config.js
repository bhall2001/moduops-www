// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

import { themes as prismThemes } from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'ModuOps',
  tagline: 'Simple and Robust Model Railroad Operations',
  url: 'https://moduops.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'bhall2001', // Usually your GitHub org/user name.
  projectName: 'moduops-www', // Usually your repo name.

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang.
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
          sidebarPath: './sidebars.js',
          sidebarCollapsed: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/bhall2001/moduops-www/tree/main/packages/create-docusaurus/templates/shared/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/bhall2001/moduops-www/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'ModuOps',
        logo: {
          alt: 'ModuOps Logo',
          src: 'img/moduops-logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'history',
            position: 'left',
            label: 'Docs',
          },
          {
            type: 'doc',
            docId: 'tutorial/intro',
            position: 'left',
            label: 'Tutorial',
            to: '/docs/tutorial',
          },
          { to: '/blog', label: 'Blog', position: 'left' },
          // {
          //   type: 'doc',
          //   docId: 'tutorial/intro',
          //   position: 'left',
          //   label: 'Tutorial',
          //   to: '/docs/tutorial',
          // },
          {
            href: 'https://github.com/bhall2001/moduops-www',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      docs: {
        sidebar: {
          autoCollapseCategories: true,
        },
      },
      footer: {
        style: 'dark',
        // links: [
        //   {
        //     title: 'Docs',
        //     items: [
        //       {
        //         label: 'Tutorial',
        //         to: '/docs/intro',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'Community',
        //     items: [
        //       {
        //         label: 'Stack Overflow',
        //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
        //       },
        //       {
        //         label: 'Discord',
        //         href: 'https://discordapp.com/invite/docusaurus',
        //       },
        //       {
        //         label: 'Twitter',
        //         href: 'https://twitter.com/docusaurus',
        //       },
        //     ],
        //   },
        //   {
        //     title: 'More',
        //     items: [
        //       {
        //         label: 'Blog',
        //         to: '/blog',
        //       },
        //       {
        //         label: 'GitHub',
        //         href: 'https://github.com/bhall2001/moduops-www',
        //       },
        //     ],
        //   },
        // ],
        copyright: `Copyright © 2015 - ${new Date().getFullYear()} Robert D. Hall`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
