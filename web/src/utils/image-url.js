import sanityConfig from '../../../studio/sanity.json'
import imageUrlBuilder from '@@sanity/image-url'

const builder = imageUrlBuilder(sanityConfig.api)

export function imageUrlForComponent(source) {
  return builder.image(source)
}
