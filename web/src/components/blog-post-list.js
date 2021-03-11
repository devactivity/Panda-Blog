import React from 'react'
import { Link } from 'gatsby'
import { css } from '@emotion/react'

import { getBlogUrl } from '../utils/helpers'
import { rhythm } from '../utils/typography'

function BlogPostList(props) {
  return (
  <>
    {
      props.nodes &&
        props.nodes.map(node => (
          <div key={node.id}>
            <Link
              to={getBlogUrl(node.publishedAt, node.slug.current)}
              css={css`
                text-decoration: none;
                color: inherit;
              `}
            >
              <h3 css={css`margin-bottom: ${rhythm(1/4)};`}>
                {node.title}
                <span css={css`color:#555;`}>- {node.publishedAt.slice(0,10)}</span>
              </h3>
              <p>{node.excerpt[0].children[0].text}</p>
            </Link>
          </div>
        ))
    }
  </>
  )
}

BlogPostList.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostList
