const math = require('remark-math');
const katex = require('rehype-katex');

module.exports = {
  title: '[rsapkf/73]',
  titleDelimiter: '::',
  tagline: "@rsapkf's notes.",
  url: 'https://rsapkf-notes.netlify.app',
  baseUrl: '/',
  favicon: 'img/favicon.svg',
  organizationName: 'rsapkf',
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
    },
    hideableSidebar: true,
    navbar: {
      style: 'dark',
      title: '[rsapkf/73]',
      hideOnScroll: true,
      logo: {
        alt: 'Logo',
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
        {
          to: 'about/',
          label: 'About',
          position: 'left',
        },
        { href: 'https://rsapkf.xyz/blog/', label: 'Blog', position: 'right' },
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
              href: 'https://github.com/rsapkf/20/',
            },
          ],
        },
        {
          href: 'https://github.com/rsapkf/73/',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
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
              label: 'sed',
              to: 'docs/linux/sed/',
            },
            {
              label: 'awk',
              to: 'docs/linux/awk/',
            },
            {
              label: 'jq',
              to: 'docs/linux/jq/',
            },
            {
              label: 'fzf',
              to: 'docs/linux/fzf/',
            },
            {
              label: 'PGP',
              to: 'docs/linux/pgp/',
            },
            {
              label: 'Speedcubing',
              to: 'docs/recreational-mathematics/speedcubing/',
            },
            {
              label: 'Mnemonics',
              to: 'docs/recreational-mathematics/mnemonics/',
            },
            {
              label: 'Poems',
              to: 'docs/miscellaneous/poems/',
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
              label: 'Recreational mathematics',
              to: 'docs/recreational-mathematics/speedcubing/',
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
              label: 'Source',
              href: 'https://github.com/rsapkf/73/',
            },
            {
              label: 'Dotfiles',
              href: 'https://github.com/rsapkf/config/',
            },
            {
              label: '?',
              href: 'https://math.dartmouth.edu/~carlp/sheldon02132019.pdf',
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
          remarkPlugins: [math],
          rehypePlugins: [katex],
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
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
};
