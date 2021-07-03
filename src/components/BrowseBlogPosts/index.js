import React from "react"
import { Container, Button, Navbar, Pagination } from "react-bootstrap"
import { graphql, Link } from 'gatsby'
import Layout from '../Layout'
import Card from '../Card'

export default function Home({ data }) {
  const siteMetadata = data.site.siteMetadata
  // 6 = total per page
  const totalPages = Math.ceil(data.allMdx.pageInfo.totalCount/6)
  const activePage = data.allMdx.pageInfo.currentPage

  return (
    <>
      <Layout title={'Page ' + activePage}>
        <div className="d-flex flex-wrap justify-content-around justify-content-md-between">
          {data.allMdx.nodes.map(({ excerpt, frontmatter, fields}, index) => (
            <Card 
              key={index}
              slug={fields.slug} 
              style={{ marginTop: "40px" }} 
              title={ frontmatter.title } 
              desc={ excerpt.substring(0, 50) + '..' }
              thumbnail={ frontmatter.thumbnail }
            />
           ))}
          { data.allMdx.nodes.length % 2 != 0 && 
            <div style={{ width: "19rem" }} />
          }
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Pagination>
            <Pagination.First href="1" />
            <Pagination.Prev />
            {
              Array.from({ length: totalPages }).map((_, index) => ( 
                <Pagination.Item key={++index} href={(index > 1) ? '/page/' + index.toString() : '/' } active={index == activePage}>{index}</Pagination.Item>
              ))
            }
            <Pagination.Next />
            <Pagination.Last href={totalPages.toString()} />
          </Pagination>
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
            date
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
