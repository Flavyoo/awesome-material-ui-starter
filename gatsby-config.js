/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Project Name`,
    description: `Project Description`,
    author: `@flavyoo`,
  },
  plugins: [
    `gatsby-plugin-material-ui`,
    {
      resolve: `gatsby-plugin-typescript`,
      options: {
        isTSX: true,
        jsxPragma: `jsx`,
        allExtensions: true,
      },
    },
    {
      resolve: 'gatsby-plugin-ts-checker',
      // More info on the options: https://www.npmjs.com/package/fork-ts-checker-webpack-plugin
      options: {
        typescript: {
          memoryLimit: 4096,
          mode: 'write-tsbuildinfo',
        },
        eslint: {
          enabled: true,
          files: './src/**/*.{ts,tsx,js,jsx}',
        },
      },
    },
  ],
};
