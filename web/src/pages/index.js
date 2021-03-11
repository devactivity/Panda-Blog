import React from "react"
import { graphql } from 'gatsby'
import { css } from '@emotion/react'

import Layout from "../components/layout"
import BlogPostList from '../components/blog-post-list'
import GraphQLErrorList from '../components/GraphQLErrorList'
import { mapEdgesToNodes, filterSlugs } from '../utils/helpers'

export const query = graphql`
  query IndexPageQuery {
    site: sanitySiteSettings {
      title
      description
      keywords
    }

    posts: allSanityPost(limit: 6, sort: { fields: [publishedAt], order: DESC }) {
      edges {
        node {
          id
          publishedAt
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
          excerpt {
            children {
              text
            }
          }
        }
      }
    }
  }
`

const IndexPage = ({data, errors}) =>  {
  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    )
  }

  const site = (data || {}).site
  const postNodes = (data || {}).posts ? mapEdgesToNodes(data.posts).filter(filterSlugs) : []

  if (!site) {
    throw new Error('Missing site settings. Open sanity studio.')
  }

  return (
    <Layout>
      <div>
        <h1 css={css`display:inline-block;`}>{site.description}</h1>
        <h4>{postNodes && postNodes.length} Posts</h4>

        {postNodes && (
          <BlogPostList
            nodes={postNodes}
          />
        )}
      </div>
    </Layout>
  )
}

export default IndexPage
