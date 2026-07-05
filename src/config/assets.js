// Image URLs served from this repo on GitHub.
// After pushing, images are available at:
// https://raw.githubusercontent.com/Siddharthuppal08/HouseOfDhaarna/main/public/products/images/<filename>

export const GITHUB_REPO = import.meta.env.VITE_GITHUB_REPO || 'Siddharthuppal08/HouseOfDhaarna'
export const GITHUB_BRANCH = import.meta.env.VITE_GITHUB_BRANCH || 'main'

const useGithubCdn = import.meta.env.VITE_USE_GITHUB_CDN === 'true'

export function getProductImageUrl(product) {
  if (useGithubCdn && product.githubImageUrl) {
    return product.githubImageUrl
  }

  if (product.image) {
    return product.image
  }

  if (product.imageFile) {
    return `/products/images/${product.imageFile}`
  }

  return product.sourceImageUrl || ''
}
