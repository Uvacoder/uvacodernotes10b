module.exports = {
  title: '[rsapkf/73]',
  titleDelimiter: '::',
  tagline: '"I\'m writing this down. This is good stuff."',
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
      style: 'dark',
      title: '[rsapkf/73]',
      hideOnScroll: true,
      logo: {
        alt: 'notes logo',
        src: 'img/undraw_Notebook.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'linux/linux',
          position: 'left',
          label: 'Notes',
        },
        {
          type: 'doc',
          docId: 'books/python-tricks/introduction',
          position: 'left',
          label: 'Book notes',
        },
        { href: 'https://rsapkf.xyz/blog/', label: 'Blog', position: 'left' },
        {
          to: 'about/',
          label: 'About',
          position: 'right',
        },
        {
          href: 'https://github.com/rsapkf/73/',
          label: 'GitHub',
          position: 'right',
        },
        {
          type: 'dropdown',
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
              href: 'https://github.com/rsapkf/config/',
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
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Quick links',
          items: [
            {
              label: 'Linux',
              to: 'docs/linux/linux/',
            },
            {
              label: 'Vim',
              to: 'docs/linux/vim/',
            },
            {
              label: 'tmux',
              to: 'docs/linux/tmux/',
            },
            {
              label: 'Git',
              to: 'docs/linux/git/',
            },
            {
              label: "Rubik's Cube",
              to: 'docs/mathematics/speedcubing/',
            },
          ],
        },
        {
          title: 'Categories',
          items: [
            {
              label: 'Linux',
              to: 'docs/linux/linux/',
            },
            {
              label: 'Programming',
              to: 'docs/programming/python/',
            },
            {
              label: 'Mathematics',
              to: 'docs/mathematics/speedcubing/',
            },
            {
              label: 'Privacy',
              to: 'docs/privacy/privacy/',
            },
          ],
        },
        {
          title: 'Etc.',
          items: [
            {
              label: 'All notes',
              to: 'docs/linux/linux/',
            },
            {
              label: 'Book notes',
              to: 'docs/books/python-tricks/introduction/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/rsapkf/73/',
            },
          ],
        },
      ],
      copyright: `© ${new Date().getFullYear()} <a href="https://rsapkf.xyz/">rsapkf</a>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/dracula'),
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/rsapkf/73/blob/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/rsapkf/73/blob/main/',
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
