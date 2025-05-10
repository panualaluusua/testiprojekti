module.exports = {
    title: '{{ cookiecutter.project_name }}',
    url: 'https://{{ cookiecutter.github_username }}.github.io',
    baseUrl: '/{{ cookiecutter.github_repository_name }}/',
    favicon: 'img/favicon.ico',
    organizationName: '{{ cookiecutter.github_username }}',
    projectName: '{{ cookiecutter.github_repository_name }}',
    themeConfig: {
      navbar: {
        title: '{{ cookiecutter.project_name }}',
        logo: {
          alt: '{{ cookiecutter.project_name }} logo',
          src: 'img/logo.svg',
        },
        items: [
          {to: 'docs/', label: 'Dokumentaatio', position: 'left'},
          {href: 'https://github.com/{{ cookiecutter.github_username }}/{{ cookiecutter.github_repository_name }}', label: 'GitHub', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} {{ cookiecutter.author_name }}`,
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
            customCss: require.resolve('./src/css/custom.css'),
          },
        },
      ],
    ],
  };
  