import React from "react"
import { graphql } from 'gatsby'
import Layout from '../Layout'
import Card from '../Card'
import Pagination from '../Pagination'

export default function Home({ data }) {
  const totalPages = Math.ceil(data.allMdx.pageInfo.totalCount/6)
  const activePage = data.allMdx.pageInfo.currentPage

  return (
    <>
      <Layout title={(activePage === 1) ? 'Blog' : 'Blog - Page ' + activePage}>
        <div className="d-flex flex-wrap justify-content-around justify-content-md-between">
          {data.allMdx.nodes.map(({ excerpt, frontmatter, fields}, index) => (
            <Card 
              key={index}
              slug={fields.slug} 
              style={{ marginTop: "40px" }} 
              title={ frontmatter.title } 
              desc={ excerpt.substring(0, 50) + '..' }
              thumbnail={ frontmatter.thumbnail }
              tags={ frontmatter.tags }
              date={ frontmatter.date }
            />
           ))}
          { (data.allMdx.nodes.length % 2 !== 0 || data.allMdx.nodes.length < 3) && 
            <div style={{ width: "19rem" }} />
          }
        </div>
        <div className="d-flex justify-content-center mt-5">
          { (totalPages > 1) &&
            <Pagination 
              totalPages={totalPages}
              activePage={activePage}
            />
          }
        </div>
      </Layout>
    </>
  )
}

export const query = graphql
`
  query HomexPageQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
      limit: $limit
      skip: $skip
    ) {
      totalCount
      edges {
        node {
          id
        }
      }
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
            title
            date(formatString: "DD/MM/YYYY", locale: "id")
            tags
						thumbnail {
							publicURL
						}
        }
        fields {
          slug
        }
      }
      pageInfo {
        currentPage
        hasNextPage
        hasPreviousPage
        itemCount
        pageCount
        perPage
        totalCount
      }
    }
  }
`
