import React from 'react'
import { graphql } from 'gatsby';

const BlogPage = () => (
  <Layout>
    <h1>Latest Post</h1>
  </Layout>
)

export const pageQuery = graphql`
  query BlogIndexQuery {
    
  allMarkdownRemark {
    edges{
      node{
        id
        frontmatter{
          path
          title
          date
          author
        }
       
      }
    }
  }
}
`


export default BlogPage;

