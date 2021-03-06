import React from 'react'
import { css } from '@emotion/react'

import { buildImageObj } from '../../utils/helpers'
import { imageUrlFor } from '../../utils/image-url'


function Figure(props) {
  return (
    <figure css={css`
      maring: 2rem 0;
      padding: 0;
      & img {
        width: 100%;
        height: auto;
      }
    `}>
      {props.asset && (
        <img src={imageUrlFor(buildImageObj(props)).width(1200).url()} alt={props.alt}/>
      )}
      <figcaption style={{marginTop: '0.5rem'}}>{props.caption}</figcaption>
    </figure>
  )
}

export defaul Figure
