export function mapEdgesToNodes(data) {
  if (!data.edges) return []
  return data.edges.map(edge => edge.node)
}

export function filterSlugs({ slug }) {
  return (slug || {}).current
}

export function getBlogUrl(publishedAt, slug) {
  return `/blog/${publishedAt.slice(0, 10)}/${slug.current || slug}/`
}

export function buildImageObj(source) {
  const imgObj = {
    asset: { _ref: source.asset._ref || source.asset._id }
  }

  if (source.crop) imgObj.crop = source.crop
  if (source.hotspot) imgObj.hotspot = source.hotspot

  return imgObj
}
