import React from "react"
import { Container, Button, Navbar, Pagination } from "react-bootstrap"
import { graphql, Link } from 'gatsby'
import './index.scss'
import Layout from '../components/Layout'
import Card from '../components/Card'

export default function Home({ data }) {
  const siteMetadata = data.site.siteMetadata
  return (
    <>
      <Layout title='khoustudio - Blog'>
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
        </div>
        <div className="text-center mt-5">
          <Pagination>
            <Pagination.First />
            <Pagination.Prev />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </Layout>
    </>
  )
}

export const query = graphql
`
  query HomePageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
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
    }
  }
`
