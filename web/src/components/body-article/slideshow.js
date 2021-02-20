import React, { useState } from 'react'
import { css } from '@emotion/react'
import { buildImageObj } from '../../utils/helpers'
import { imageUrlFor } from '../../utils/image-url'

function Slideshow (props) {
  const [index, setIndex] = useState(0)

  if (!props.slides) return null

  const len = props.slides.length

  function handlePrev () {
    setIndex(Math.max(index - 1, 0))
  }

  function handleNext () {
    setIndex(Math.min(index + 1, len - 1))
  }

  return (
    <div css={css`
      background: #222;
      color: #fff;
      /* margin: 2rem -1.5rem; */
      margin-top: auto;
      margin-bottom: 1rem;
      overflow: hidden;
      padding: 1rem;
    `}>
      <div css={css`
        padding: 0.5rem 0.5rem 1rem;
        display: flex;
        justify-content: space-between;

        & button {
          outline: none;
          -webkit-font-smoothing: inherit;
          appearance: none;
          font: inherit;
          background: none;
          border: none;
          color: inherit;
          margin: 0;
          padding: 0;
      `}>
        <button onClick={handlePrev} disabled={index === 0}>
          Prev
        </button>

        <span>
          {index + 1} of {len}
        </span>

        <button onClick={handleNext} disabled={index === len - 1}>
          Next
        </button>
      </div>

      <ul
        css={css`
          list-style: none;
          margin: 0;
          padding: 0;
          white-space: nowrap;
          transition: transform 250ms;
          transform: translate3d(${index * -100}%, 0, 0);
        `}
        data-index={index}
      >
        {props.slides.map(slide => (
          <li key={slide._key} css={css`
            display: inline-block;
            vertical-align: middle;
            white-space: normal;
            box-sizing: border-box;
            padding: 0 0.5rem;

            & img {
              width: 100%;
              height: auto;
            }
          `}>
            {slide.asset && (
              <img
                src={imageUrlFor(buildImageObj(slide))
                  .width(1200)
                  .height(Math.floor((9 / 16) * 1200))
                  .fit('crop')
                  .url()}
                alt="slideshow"
              />
            )}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Slideshow
