import { WHATSAPP_NUMBER } from '../config/site'
import { getShareableImageUrl } from '../config/assets'

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function buildProductOrderMessage(product, selectedImage) {
  const price = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(product.price)

  const imageUrl = getShareableImageUrl(selectedImage || product.image, product)

  return [
    'Hi House of Dhaarna!',
    '',
    `I'd like to order: *${product.name}*`,
    product.subtitle ? `Details: ${product.subtitle}` : null,
    `Price: ${price}`,
    product.discount > 0 ? `Discount: ${product.discount}% off` : null,
    product.category ? `Category: ${product.category}` : null,
    product.id ? `Product ID: ${product.id}` : null,
    imageUrl ? `Image: ${imageUrl}` : null,
    '',
    'Please confirm availability and delivery.',
  ]
    .filter(Boolean)
    .join('\n')
}

export function getProductWhatsAppUrl(product, selectedImage) {
  return buildWhatsAppUrl(buildProductOrderMessage(product, selectedImage))
}

export function openWhatsApp(url) {
  const isMobile = /Android|iPhone|iPad|iPod|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent,
  )

  if (isMobile) {
    window.location.href = url
    return
  }

  window.open(url, '_blank', 'noopener,noreferrer')
}
