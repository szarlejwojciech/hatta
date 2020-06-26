const path = require(`path`)

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions
  const postLayout = path.resolve(`src/layouts/post.js`)
  // Query for markdown nodes to use in creating pages.
  // You can query for whatever data you want to create pages for e.g.
  // products, portfolio items, landing pages, etc.
  // Variables can be added as the second function parameter
  const { data, errors } = await graphql(`
    {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        }
      }
    }
  `)
  if (errors) reporter.panicOnBuild('ERROR: Loading "createPages" query!!!')

  const articles = data.allMdx.nodes
  articles.forEach(({ frontmatter: { slug, title } }) => {
    createPage({
      path: `articles/${slug}`,
      component: postLayout,
      context: {
        title,
      },
    })
  })
}
