const { createFilePath } = require(`gatsby-source-filesystem`);
const path = require("path")

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`,
      node,
      value: `/blog/posts${value}`,
    })
  }
}

const filter = (process.env.SHOW_PUBLISHED_ONLY == 'true') ? { frontmatter: { published: { eq: true } } } : {frontmatter: { published: { eq: false } }}

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  let queryBlogPost = `
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
  `
  const result = await graphql(queryBlogPost)

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
  }

  // Create blog post pages.
  const posts = (process.env.SHOW_PUBLISHED_ONLY === 'true') ? 
    result.data.allMdx.edges.filter(edge => edge.node.frontmatter.published)
    : result.data.allMdx.edges
  
  const postsPerPage = 6
  const numPages = Math.ceil(posts.length / postsPerPage)

  // create index page
  createPage({
    path: `/blog`,
    component: path.resolve(`./src/components/BrowseBlogPosts/index.js`),
    context: {
      limit: 6,
      skip: 0,
      numPages,
      currentPage: 1,
      filter: (process.env.SHOW_PUBLISHED_ONLY === 'true') ? { frontmatter: { published: { eq: true } } } : { frontmatter: {} }
    }
  })

  Array.from({ length: numPages }).forEach((_, i) => {
    if (i > 0) {
      createPage({
        path: `/blog/page/${i+1}`,
        component: path.resolve(`./src/components/BrowseBlogPosts/index.js`),
        context: {
          limit: 6,
          skip: i * postsPerPage,
          numPages,
          currentPage: i + 1,
          filter: (process.env.SHOW_PUBLISHED_ONLY === 'true') ? { frontmatter: { published: { eq: true } } } : { frontmatter: {}}
        }
      })
    }
  })

  posts.forEach(({ node }, index) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/components/PostPageTemplate/index.js`),
      context: { id: node.id },
    })
  })
}
