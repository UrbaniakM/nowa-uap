module.exports = {
  siteMetadata: {
    siteName: `Nowa UAP`
  },
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: 'gatsby-plugin-alias-imports',
      options: {
        alias: {
          "components": "src/components",
          "pages": "src/pages",
          "utils": "src/utils"
        }
      }
    }
  ]
}
