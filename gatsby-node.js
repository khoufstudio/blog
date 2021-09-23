const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: `/posts${value}`,
    })
  }
}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const result = await graphql
  (`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              published
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges.filter(edge => edge.node.frontmatter.published)
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)

  // create index page
  createPage({
    path: `/`,
    component: path.resolve(`./src/components/BrowseBlogPosts/index.js`),
    context: {
      limit: 6,
      skip: 0,
      numPages,
      currentPage: 1
    }
  })

  Array.from({ length: numPages }).forEach((_, i) => {
    if (i > 0) {
      createPage({
        path: `/page/${i+1}`,
        component: path.resolve(`./src/components/BrowseBlogPosts/index.js`),
        context: {
          limit: 6,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1
        }
      })
    }
  })

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/post-page-template.js`),
      context: { id: node.id },
    })
  })
}
