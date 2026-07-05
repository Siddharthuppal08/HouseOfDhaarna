import { WHATSAPP_NUMBER } from '../config/site'

export function buildWhatsAppUrl(message) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`
}

export function buildProductOrderMessage(product) {
  const price = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(product.price)

  return [
    'Hi House of Dhaarna!',
    '',
    `I'd like to order: *${product.name}*`,
    `Price: ${price}`,
    '',
    'Please confirm availability and delivery.',
  ].join('\n')
}

export function getProductWhatsAppUrl(product) {
  return buildWhatsAppUrl(buildProductOrderMessage(product))
}
