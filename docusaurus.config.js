module.exports = {
  title: 'Docusaurus Site',
  tagline: 'Static Site Generator with Search',
  url: 'https://choinek.github.io',
  baseUrl: '/',
  organizationName: 'choinek',
  projectName: 'choinek.github.io'
  deploymentBranch: 'main',
  plugins: [
    [
      require.resolve('docusaurus-lunr-search'),
      {
        languages: ['en'],
      },
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
  },
};
