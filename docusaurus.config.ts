import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Adrian\'s Homepage',
  tagline: 'I always... sometimes...',
  favicon: 'img/favicon.ico',
  clientModules: [
    require.resolve("./src/clientModules/visitorCounter"),
  ],
  plugins: [
    require.resolve('docusaurus-lunr-search')
  ],
  // Set the production url of your site here
  url: 'https://choinek.github.io/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',
  trailingSlash: true,
  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'choinek', // Usually your GitHub org/user name.
  projectName: 'choinek.github.io', // Usually your repo name.
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'log',
  onBrokenMarkdownLinks: 'log',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'pl'],
    localeConfigs: {
      en: {label: 'English'},
      pl: {label: 'Polski'},
    },
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/choinek/choinek.github.io/tree/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/choinek/choinek.github.io/tree/main/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    mermaid: {
      theme: {light: 'dark', dark: 'dark'},
    },
    navbar: {
      title: "Adrian's Homepage",
      logo: {
        alt: 'Choinek',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          type: 'docSidebar',
          sidebarId: 'guideSidebar',
          position: 'left',
          label: '📖 Guide',
        },
        {
          type: 'docSidebar',
          sidebarId: 'standardsSidebar',
          position: 'left',
          label: '🛠️ Standards',
        },
        {
          to: 'blog', 
          label: 'Blog',
          position: 'left'
        },
        {
          position: 'right',
          href: "/contact",
          label: '💬 Adrian',
        },
        {
          href: 'https://github.com/choinek',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub Profile',
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
              label: 'Guide',
              to: '/docs/guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/choinek',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Choinek\'s project. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
