import catalog from './catalog.json'
import { getProductGallery, getProductImageUrl } from '../config/assets'

const productMap = new Map(catalog.products.map((product) => [product.id, product]))

function withImageUrl(product) {
  const gallery = getProductGallery(product)

  return {
    ...product,
    image: getProductImageUrl(product),
    gallery,
  }
}

export function getProduct(id) {
  const product = productMap.get(id)
  return product ? withImageUrl(product) : null
}

export function getProducts(ids) {
  return ids.map((id) => getProduct(id)).filter(Boolean)
}

export const allProducts = catalog.products.map(withImageUrl)

export const newArrivals = getProducts(catalog.collections.newArrivals)
export const bestSellers = getProducts(catalog.collections.bestSellers)

export const categories = [
  {
    id: 'plants',
    name: 'Artificial Plants',
    description: 'Lush greenery that stays vibrant all year',
    href: '#shop-plants',
    image:
      allProducts.find((p) => p.category === 'Plants')?.image ||
      '/products/images/placeholder.jpg',
  },
  {
    id: 'flowers',
    name: 'Artificial Flowers',
    description: 'Timeless blooms for every occasion',
    href: '#shop-flowers',
    image:
      allProducts.find((p) => p.category === 'Flowers')?.image ||
      '/products/images/placeholder.jpg',
  },
  {
    id: 'vases',
    name: 'Vases',
    description: 'Sculptural vessels in wood, metal & ceramic',
    href: '#shop-vases',
    image:
      allProducts.find((p) => p.category === 'Vases')?.image ||
      '/products/images/placeholder.jpg',
  },
  {
    id: 'combos',
    name: 'Combos',
    description: 'Ready-to-style vase and plant pairings',
    href: '#shop-combos',
    image:
      allProducts.find((p) => p.category === 'Combos')?.image ||
      '/products/images/placeholder.jpg',
  },
]

export function getProductsByCategory(categoryName) {
  return allProducts.filter((p) => p.category === categoryName)
}

export const navLinks = [
  { label: 'Shop', href: '#shop' },
  { label: 'New Arrivals', href: '#new-arrivals' },
  { label: 'Collections', href: '#collections' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export const footerShop = [
  { label: 'Artificial Plants', href: '#shop-plants' },
  { label: 'Artificial Flowers', href: '#shop-flowers' },
  { label: 'Vases', href: '#shop-vases' },
  { label: 'Combos', href: '#shop-combos' },
  { label: 'All Products', href: '#all-products' },
]

export const footerPolicy = [
  { label: 'About Us', href: '#about' },
  { label: 'Privacy Policy', href: '#' },
  { label: 'Return Policy', href: '#' },
  { label: 'Shipping Policy', href: '#' },
  { label: 'Terms & Conditions', href: '#' },
]

export const catalogMeta = {
  totalProducts: catalog.totalProducts,
  githubRepo: catalog.githubRepo,
  generatedAt: catalog.generatedAt,
}
