module.exports = {
  title: 'Enhanced Docusaurus Site',
  tagline: 'Static Site Generator with Extra Features',
  url: 'https://choinek.github.io',
  baseUrl: '/choinek.github.io/',
  organizationName: 'choinek', // GitHub username or organization
  projectName: 'choinek.github.io', // Repository name
  deploymentBranch: 'gh-pages', // Deployment branch
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
