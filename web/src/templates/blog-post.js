import React from 'react'
import { graphql } from 'gatsby'
// import error component
// import article page 
import SEO from '../components/seo'
import GraphQLErrorList from '../components/GraphQLErrorList.js'
import Layout from '../components/layout'

export const query = graphql`
  query BlogPostTemplateQuery($id: String!) {
    post: sanityPost(id: { eq: $id }) {
      id
      publishedAt
      categories {
        _id
        title
      }
      mainImage {
        crop {
          _key
          _type
          top
          bottom
          left
          right
        }
        hotspot {
          _key
          _type
          x
          y
          height
          width
        }
        asset {
          _id
        }
        alt
      }
      title
      slug {
        current
      }
      _rawBody
      writter {
        _key
        person {
          image {
            crop {
              _key
              _type
              top
              bottom
              left
              right
            }
            hotspot {
              _key
              _type
              x
              y
              height
              width
            }
            asset {
              _id
            }
          }
          name
        }
        roles
      }
    }
  }
`

const BlogPostTemplate = props => {
  const { data, errors } = props
  console.log(data)

  return (
    <Layout>
      {errors && <SEO title='GraphQL Error' />}
      {psot && <SEO title={post.title || 'Untitled'}/>}

      {
        errors && (
          <GraphQLErrorList errors={errors} />
        )
      }


    </Layout>
  )
}
