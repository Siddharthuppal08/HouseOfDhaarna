import { useState } from 'react'
import { getProductWhatsAppUrl } from '../utils/whatsapp'
import ImageLightbox from './ImageLightbox'

function formatPrice(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount)
}

function ProductCard({ product }) {
  const whatsappUrl = getProductWhatsAppUrl(product)
  const gallery = product.gallery?.length ? product.gallery : [product.image].filter(Boolean)
  const [activeImage, setActiveImage] = useState(0)
  const [lightboxOpen, setLightboxOpen] = useState(false)

  return (
    <article className="flex h-full flex-col">
      <div className="relative overflow-hidden rounded-2xl border border-sage-100 bg-sage-50 shadow-sm">
        {product.badge && (
          <span className="absolute left-3 top-3 z-10 rounded-full bg-warm-white px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sage-700 shadow-sm">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => setLightboxOpen(true)}
          className="block w-full cursor-zoom-in overflow-hidden"
          aria-label={`View larger images of ${product.name}`}
        >
          <div className="aspect-square overflow-hidden bg-cream">
            <img
              src={gallery[activeImage]}
              alt={product.name}
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-[1.03]"
            />
          </div>
        </button>

        {gallery.length > 1 && (
          <div className="flex gap-2 border-t border-sage-100 bg-warm-white p-2.5">
            {gallery.slice(0, 4).map((thumb, index) => (
              <button
                key={`${thumb}-${index}`}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`h-12 w-12 overflow-hidden rounded-lg ring-2 transition-all ${
                  index === activeImage ? 'ring-sage-500' : 'ring-transparent opacity-75 hover:opacity-100'
                }`}
                aria-label={`Show image ${index + 1}`}
              >
                <img src={thumb} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
            {gallery.length > 4 && (
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="flex h-12 min-w-12 items-center justify-center rounded-lg bg-sage-50 px-2 text-xs font-semibold text-sage-700"
              >
                +{gallery.length - 4}
              </button>
            )}
          </div>
        )}
      </div>

      <div className="mt-4 flex flex-1 flex-col">
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-stone">
          {product.category}
        </p>
        <h3 className="mt-2 font-display text-lg font-medium leading-snug text-charcoal lg:text-xl">
          {product.name}
        </h3>
        {product.subtitle && (
          <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-stone">{product.subtitle}</p>
        )}
        <div className="mt-auto pt-4">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-lg font-semibold text-charcoal">
              {formatPrice(product.price)}
            </span>
            <span className="text-sm text-stone line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="rounded-full bg-terracotta/10 px-2.5 py-0.5 text-[11px] font-semibold text-terracotta">
              {product.discount}% off
            </span>
          </div>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] py-3 text-sm font-semibold text-white transition-colors hover:bg-[#1fb855]"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Order on WhatsApp
          </a>
        </div>
      </div>

      {lightboxOpen && (
        <ImageLightbox
          images={gallery}
          alt={product.name}
          startIndex={activeImage}
          onClose={() => setLightboxOpen(false)}
        />
      )}
    </article>
  )
}

export default function ProductGrid({ id, title, subtitle, products, viewAllHref }) {
  return (
    <section id={id} className="py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 border-b border-sage-100 pb-8 sm:flex-row sm:items-end">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-500">
              {subtitle}
            </p>
            <h2 className="mt-3 font-display text-4xl font-medium text-charcoal lg:text-5xl">
              {title}
            </h2>
          </div>
          {viewAllHref && (
            <a
              href={viewAllHref}
              className="inline-flex items-center gap-2 text-sm font-semibold text-sage-600 transition-colors hover:text-sage-700"
            >
              View All
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
              </svg>
            </a>
          )}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}
