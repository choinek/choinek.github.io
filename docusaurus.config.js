module.exports = {
    title: 'Choinek Dinosaurus Test',
    tagline: 'Static Site Generator with Extra Features',
    url: 'https://choinek.github.io',
    baseUrl: '/choinek.github.io/',
    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',
    organizationName: 'choinek', // GitHub username or organization
    projectName: 'choinek.github.io', // Repository name
    deploymentBranch: 'gh-pages', // Deployment branch
    plugins: [
        [
            'docusaurus-lunr-search',
            {
                languages: ['en'], // Add more languages if needed
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
