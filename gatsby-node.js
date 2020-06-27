const path = require(`path`)
const slugify = require("slugify")

exports.onCreateWebpackConfig = ({ getConfig, stage }) => {
  const config = getConfig()
  if (stage.startsWith("develop") && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      "react-dom": "@hot-loader/react-dom",
    }
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postLayout = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const { data, errors } = await graphql(`
    {
      allDatoCmsArticle {
        nodes {
          title
          id
        }
      }
    }
  `)
  if (errors) reporter.panicOnBuild('ERROR: Loading "createPages" query!!!')

  const articles = data.allDatoCmsArticle.nodes
  articles.forEach(({ title, id }) => {
    const slug = slugify(title, { lower: true })
    createPage({
      path: `articles/${slug}`,
      component: postLayout,
      context: { id, title },
    })
  })
}
