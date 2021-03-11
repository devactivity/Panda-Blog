import { format, formatDistance, differenceInDays } from 'date-fns'
import React from 'react'
import { buildImageObj } from '../utils/helpers'
import { imageUrlFor } from '../utils/image-url'
import BodyArticle from './body-article'
import RoleList from './RoleList'

function BlogPost(props) {
  const { _rawBody, writter, categories, title, mainImage, publishedAt } = props

  return (
    <article>
      {/* headline image component */}
      {mainImage && mainImage.asset && (
        <div>
          <img
            src={imageUrlFor(buildImageObj(mainImage))
                .width(1200)
                .height(675)
                .fit('crop')
                .url()
            }
            alt={mainImage.alt}
          />
        </div>
      )}

      <>
        <div>
          <div>
            <h1>{title}</h1>

            {/* show body article */}
            {_rawBody && <BodyArticle blocks={_rawBody} />}
          </div>

          <aside>
            {
              publishedAt && (
                <div>
                  <em>{differenceInDays(new Date(publishedAt), new Date()) > 3
                    ? formatDistance(new Date(publishedAt), new Date())
                    : format(new Date(publishedAt), 'MMMM Do yyyy')}
                  </em>
                </div>
              )
            }

            {/* show writter here */}
            {writter && <RoleList items={writter} title='Writter' />}

            {
              categories && (
                <div>
                  <h3>Categories</h3>
                  <ul>
                    {categories.map(category => (
                      <li key={category._id}>{category.title}</li>
                    ))}
                  </ul>
                </div>
              )
            }
          </aside>
        </div>
      </>
    </article>
  )
}

export default BlogPost
