module.exports = {
    title: 'testiprojekti',
    url: 'https://panualaluusua.fi',
    baseUrl: '/testiprojekti/',
    favicon: 'img/favicon.ico',
    organizationName: 'panualaluusua',
    projectName: 'testiprojekti',
    themeConfig: {
      navbar: {
        title: 'testiprojekti',
        logo: {
          alt: 'testiprojekti logo',
          src: 'img/logo.svg',
          href: 'docs/',
        },
        items: [
          {to: 'docs/', label: 'Dokumentaatio', position: 'left'},
          {href: 'https://github.com/panualaluusua/testiprojekti', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright ${new Date().getFullYear()} panu`,
      },
    },
    presets: [
      [
        '@docusaurus/preset-classic',
        {
          docs: {
            sidebarPath: require.resolve('./sidebars.js'),
          },
          theme: {
            customCss: require.resolve('./src/custom.css'),
          },
        },
      ],
    ],
  };