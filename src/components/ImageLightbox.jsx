import { useEffect, useState } from 'react'

export default function ImageLightbox({ images, alt, startIndex = 0, onClose }) {
  const gallery = images?.length ? images : []
  const [activeIndex, setActiveIndex] = useState(startIndex)

  useEffect(() => {
    setActiveIndex(startIndex)
  }, [startIndex, images])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowRight' && gallery.length > 1) {
        setActiveIndex((current) => (current + 1) % gallery.length)
      }
      if (event.key === 'ArrowLeft' && gallery.length > 1) {
        setActiveIndex((current) => (current - 1 + gallery.length) % gallery.length)
      }
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [gallery.length, onClose])

  if (!gallery.length) return null

  const image = gallery[activeIndex]

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/90 p-4 backdrop-blur-md"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Product image preview'}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 z-10 rounded-full bg-warm-white/10 p-2.5 text-white transition-colors hover:bg-warm-white/20"
        aria-label="Close image preview"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      {gallery.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveIndex((current) => (current - 1 + gallery.length) % gallery.length)
            }}
            className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-warm-white/10 p-3 text-white transition-colors hover:bg-warm-white/20"
            aria-label="Previous image"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
            </svg>
          </button>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              setActiveIndex((current) => (current + 1) % gallery.length)
            }}
            className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-warm-white/10 p-3 text-white transition-colors hover:bg-warm-white/20 sm:right-16"
            aria-label="Next image"
          >
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </>
      )}

      <div className="flex max-h-[92vh] w-full max-w-5xl flex-col items-center" onClick={(event) => event.stopPropagation()}>
        <img
          src={image}
          alt={alt}
          className="max-h-[78vh] w-auto max-w-full rounded-2xl object-contain shadow-2xl"
        />

        {gallery.length > 1 && (
          <div className="mt-4 flex max-w-full gap-2 overflow-x-auto px-2 pb-1">
            {gallery.map((thumb, index) => (
              <button
                key={`${thumb}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`h-14 w-14 shrink-0 overflow-hidden rounded-lg ring-2 transition-all ${
                  index === activeIndex ? 'ring-white' : 'ring-transparent opacity-70 hover:opacity-100'
                }`}
                aria-label={`View image ${index + 1}`}
              >
                <img src={thumb} alt="" className="h-full w-full object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
