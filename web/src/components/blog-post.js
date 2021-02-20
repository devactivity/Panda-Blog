import { format, formatDistance, differenceInDays } from 'date-fns'
import React from 'react'
// import function from utils
// import body article
// import detail writter

function BlogPost(props) {
  const { _rawBody, writter, categories, title, mainImage, publishedAt } = props

  return (
    <article>
      {/* headline image component */}

      <>
        <div>
          <div>
            <h1>{title}</h1>

            {/* show body article */}
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

            {
              categories && (
                <div>
                  <h3>Categories</h3>
                  <ul>
                    {categories.map(catogory => (
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
