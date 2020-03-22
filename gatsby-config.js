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
          "utils": "src/utils",
          "theming": "src/theming"
        }
      }
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `./src/data/`,
        createChildNodes: true
      },
    },
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: [
            {
              family: 'Source Sans Pro',
              variants: ['400', '600'],
              subsets: ['latin', 'latin-ext']
            }
          ]
        }
      }
    }
  ]
}
