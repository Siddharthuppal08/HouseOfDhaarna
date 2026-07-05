import { newArrivals } from '../data/products'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '../config/site'

const highlights = [
  '50% off every order',
  'Free shipping across India',
  'Zero maintenance decor',
]

export default function Hero() {
  const featured = newArrivals.slice(0, 3)

  return (
    <section className="relative overflow-hidden bg-warm-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-96 w-96 rounded-full bg-sage-100/60 blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-cream blur-3xl" />
        <div className="absolute left-1/2 top-12 h-px w-[min(90%,48rem)] -translate-x-1/2 bg-gradient-to-r from-transparent via-sage-200 to-transparent" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-sage-500">
            Inspired by Nature
          </p>
          <h1 className="animate-fade-up-delay-1 font-display text-5xl font-medium leading-[1.08] text-charcoal sm:text-6xl lg:text-7xl">
            Lifelike decor,
            <br />
            <span className="italic text-sage-600">effortlessly elegant</span>
          </h1>
          <p className="animate-fade-up-delay-2 mx-auto mt-6 max-w-2xl text-base leading-relaxed text-stone lg:text-lg">
            Premium artificial plants, flowers & vases crafted to elevate your
            home, office, or workspace — fresh year-round, zero maintenance.
          </p>

          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-sage-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sage-700 hover:shadow-lg"
            >
              Shop Collection
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-sage-200 bg-warm-white px-8 py-3.5 text-sm font-semibold text-sage-700 transition-all hover:border-sage-400 hover:bg-sage-50"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div className="animate-fade-up-delay-2 mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm text-stone"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sage-400" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {featured.length > 0 && (
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-3 gap-4 sm:gap-6">
            {featured.map((product, index) => (
              <a
                key={product.id}
                href="#shop"
                className={`group overflow-hidden rounded-2xl border border-sage-100 bg-cream shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${
                  index === 1 ? 'sm:-mt-4' : ''
                }`}
              >
                <div className="aspect-[4/5] overflow-hidden bg-sage-50">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-4 py-3 text-left">
                  <p className="line-clamp-1 font-display text-sm font-medium text-charcoal">
                    {product.name}
                  </p>
                  <p className="mt-1 text-xs text-stone">
                    From ₹{product.price.toLocaleString('en-IN')}
                  </p>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
