import { useEffect } from 'react'

export default function ImageLightbox({ image, alt, onClose }) {
  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  if (!image) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-charcoal/85 p-4 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt || 'Product image preview'}
    >
      <button
        type="button"
        onClick={onClose}
        className="absolute right-4 top-4 rounded-full bg-warm-white/10 p-2 text-white transition-colors hover:bg-warm-white/20"
        aria-label="Close image preview"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
        </svg>
      </button>

      <img
        src={image}
        alt={alt}
        className="max-h-[90vh] max-w-[min(92vw,56rem)] rounded-2xl object-contain shadow-2xl animate-fade-up"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  )
}
