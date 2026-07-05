// Image URLs served from this repo on GitHub.

export const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO || 'Siddharthuppal08/HouseOfDhaarna'
export const GITHUB_BRANCH = import.meta.env.VITE_GITHUB_BRANCH || 'main'
export const LOGO_URL = '/logo.jpg'

const useGithubCdn = import.meta.env.VITE_USE_GITHUB_CDN === 'true'

function resolveImage(entry) {
  if (!entry) return ''

  if (typeof entry === 'string') {
    return entry.startsWith('/') ? entry : `/products/images/${entry}`
  }

  if (useGithubCdn && entry.githubImageUrl) {
    return entry.githubImageUrl
  }

  return entry.path || (entry.file ? `/products/images/${entry.file}` : '')
}

export function getProductImageUrl(product) {
  if (product?.image) return product.image
  return resolveImage(product?.gallery?.[0]) || product?.sourceImageUrl || ''
}

export function getProductGallery(product) {
  if (Array.isArray(product?.gallery) && product.gallery.length > 0) {
    return product.gallery.map((entry) => resolveImage(entry)).filter(Boolean)
  }

  const primary = getProductImageUrl(product)
  return primary ? [primary] : []
}
