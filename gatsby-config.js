module.exports = {
  siteMetadata: {
    siteName: `Nowa UAP`,
    pages: [
      {
        name: 'Strona główna',
        route: '/'
      },
      {
        name: 'Wydarzenia',
        route: '/events'
      },
      {
        name: 'Statut',
        route: '/statute'
      },
      {
        name: 'Kontakt',
        route: '/contact'
      }
    ]
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
              variants: ['300', '400', '400i', '600', '600i', '700'],
              subsets: ['latin', 'latin-ext']
            }
          ]
        }
      }
    }
  ]
}
