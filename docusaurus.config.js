module.exports = {
  title: '[rsapkf/notes]',
  titleDelimiter: '::',
  tagline: '"I\'m writing this down. This is good stuff." - George McFly',
  // url: 'https://rsapkf.github.io',
  // baseUrl: '/notes/',
  url: 'https://rsapkf-notes.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.ico',
  organizationName: 'rsapkf',
  projectName: 'notes',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    navbar: {
      title: '[rsapkf/notes]',
      logo: {
        alt: 'notes logo',
        src: 'img/undraw_Notebook.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Notes',
          position: 'right',
        },
        { to: 'blog/', label: 'Blog', position: 'right' },
        {
          to: 'about/',
          activeBasePath: 'about',
          label: 'About',
          position: 'right',
        },
        {
          href: 'https://github.com/rsapkf/notes/',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'Links',
          position: 'right',
          items: [
            {
              label: 'Homepage',
              href: 'https://rsapkf.xyz/',
            },
            {
              label: 'Linkroll',
              href: 'https://links.rsapkf.xyz/',
            },
            {
              label: 'Dotfiles',
              href: 'https://github.com/rsapkf/dotfiles/',
            },
            {
              label: 'CFOP algs',
              href: 'https://github.com/rsapkf/rupiks/',
            },
          ],
        },
      ],
    },
    algolia: {
      apiKey: '1de83fa2ba21b6cfbec9865ea4f26935',
      indexName: 'rsapkf',
      // appId: 'app-id', // Optional, if you run the DocSearch crawler on your own
      algoliaOptions: {}, // Optional, if provided by Algolia
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Links',
          items: [
            {
              label: 'Linux',
              to: 'docs/',
            },
            {
              label: 'Vim',
              to: 'docs/linux/vim/',
            },
            {
              label: 'tmux',
              to: 'docs/linux/tmux/',
            },
          ],
        },
        {
          title: 'Categories',
          items: [
            {
              label: 'Linux',
              to: 'docs/',
            },
            {
              label: 'Programming',
              to: 'docs/programming/python/',
            },
            {
              label: 'Mathematics',
              to: 'docs/mathematics/martin-gardner/',
            },
          ],
        },
        {
          title: 'Etc.',
          items: [
            {
              label: 'View all notes',
              to: 'docs/',
            },
            {
              label: 'Blog',
              to: 'blog/',
            },
            {
              label: 'RSS',
              to: 'blog/rss.xml',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rsapkf/notes/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} <a href="https://rsapkf.xyz/">rsapkf</a>`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rsapkf/notes/blob/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rsapkf/notes/blob/master/',
          feedOptions: {
            type: 'all',
            copyright: `Copyright © ${new Date().getFullYear()} rsapkf`,
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
