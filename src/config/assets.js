// Image URLs served from the GitHub repository.

import { SITE_URL } from './site'

export const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO || 'Siddharthuppal08/HouseOfDhaarna'
export const GITHUB_BRANCH = import.meta.env.VITE_GITHUB_BRANCH || 'main'
export const GITHUB_IMAGE_BASE_URL = `https://raw.githubusercontent.com/${GITHUB_REPO}/${GITHUB_BRANCH}/public/products/images/`
export const LOGO_URL = '/logo.jpg'

export function buildGithubImageUrl(file) {
  if (!file) return ''
  return `${GITHUB_IMAGE_BASE_URL}${file}`
}

function resolveImage(entry) {
  if (!entry) return ''

  if (typeof entry === 'string') {
    if (entry.startsWith('http')) return entry
    const file = entry.replace(/^\/products\/images\//, '')
    return buildGithubImageUrl(file)
  }

  return entry.url || entry.githubImageUrl || buildGithubImageUrl(entry.file)
}

export function getProductImageUrl(product) {
  if (product?.image?.startsWith('http')) return product.image
  if (product?.githubImageUrl) return product.githubImageUrl
  if (product?.imageFile) return buildGithubImageUrl(product.imageFile)
  return resolveImage(product?.gallery?.[0]) || ''
}

export function getProductGallery(product) {
  if (Array.isArray(product?.gallery) && product.gallery.length > 0) {
    return product.gallery.map((entry) => resolveImage(entry)).filter(Boolean)
  }

  const primary = getProductImageUrl(product)
  return primary ? [primary] : []
}

function getGalleryEntryShareUrl(entry) {
  if (!entry) return ''

  if (typeof entry === 'string') {
    if (entry.startsWith('http')) return entry
    if (entry.startsWith('/')) return `${SITE_URL}${entry}`
    return `${GITHUB_IMAGE_BASE_URL}${entry}`
  }

  if (entry.githubImageUrl) return entry.githubImageUrl
  if (entry.sourceImageUrl?.startsWith('http')) return entry.sourceImageUrl
  if (entry.path?.startsWith('http')) return entry.path
  if (entry.path) return `${SITE_URL}${entry.path}`
  if (entry.file) return `${GITHUB_IMAGE_BASE_URL}${entry.file}`

  return ''
}

export function getShareableImageUrl(imagePath, product) {
  if (!imagePath && !product) return ''

  if (imagePath?.startsWith('http')) return imagePath

  if (product?.galleryEntries?.length) {
    for (const entry of product.galleryEntries) {
      const resolvedPath = resolveImage(entry)
      const shareUrl = getGalleryEntryShareUrl(entry)

      if (
        imagePath &&
        (resolvedPath === imagePath ||
          imagePath.endsWith(resolvedPath) ||
          (typeof entry === 'object' && entry.file && imagePath.includes(entry.file)))
      ) {
        return shareUrl || `${SITE_URL}${resolvedPath}`
      }
    }
  }

  if (product?.gallery?.length) {
    for (const entry of product.gallery) {
      const resolvedPath = resolveImage(entry)
      const shareUrl = getGalleryEntryShareUrl(entry)

      if (
        imagePath &&
        (resolvedPath === imagePath ||
          imagePath.endsWith(resolvedPath) ||
          (typeof entry === 'object' && entry.file && imagePath.includes(entry.file)))
      ) {
        return shareUrl || `${SITE_URL}${resolvedPath}`
      }
    }
  }

  if (product?.githubImageUrl) return product.githubImageUrl
  if (product?.sourceImageUrl?.startsWith('http')) return product.sourceImageUrl

  if (imagePath) {
    if (imagePath.startsWith('/')) return `${SITE_URL}${imagePath}`
    return `${GITHUB_IMAGE_BASE_URL}${imagePath}`
  }

  const primary = getProductImageUrl(product)
  if (!primary) return ''
  if (primary.startsWith('http')) return primary
  return `${SITE_URL}${primary}`
}
