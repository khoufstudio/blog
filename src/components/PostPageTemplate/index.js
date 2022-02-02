/* eslint-disable no-unused-vars */
import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../Layout'
import { Disqus } from 'gatsby-plugin-disqus'

import CodeBlock from '../CodeBlock' 

const components = {
  pre: CodeBlock
}

export const query = graphql
`
query PostsByID($id: String!) {
  mdx(
    id: { eq: $id }
  ){
    id,
    body,
    fields {
      slug
    }, 
    frontmatter {
      title
      date(formatString: "Do MMMM YYYY", locale: "id")
      thumbnail {
        publicURL
      }
    }
  }
}
`

export default ({ data }) => {
  const { id, frontmatter, body, fields } = data.mdx
  const title = frontmatter.title
  const disqusConfig = {
    url: 'https://khoufstudio.my.id/' + fields.slug,
    identifier: id,
    title: frontmatter.title
  }

  return (
    <Layout title={title}>
      <div className="mt-4" />      
      <h1>{frontmatter.title}</h1>
      <p className="font-weight-lighter">{frontmatter.date}</p>
      <MDXRenderer components={components}>{body}</MDXRenderer>
      <Disqus config={disqusConfig}></Disqus>
    </Layout>
  )
}
