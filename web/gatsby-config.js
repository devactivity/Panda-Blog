require('dotenv').config()
const { 
  api: { projectId, dataset }
} = requireConfig('../studio/sanity.json')

module.exports = {
  siteMetadata: {
    title: `The Panda`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        token: process.env.SANITY_TOKEN,
        watchMode: true,
        overlayDrafts: true,
      },
    },
  ],
}


function requireConfig(path) {
  try {
    return require(path)
  } catch (err) {
    console.error('Failed to require sanity.json. Fill in projectId and dataset name manually in gatsby-config.js')

    return {
      api: {
        projectId: process.env.SANITY_PROJECT_ID || '',
        dataset: process.env.SANITY_DATASET || '',
      }
    }
  }
}
