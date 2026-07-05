import { getProduct } from '../data/products'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, LOGO_URL } from '../config/site'

const highlights = [
  '50% off every order',
  'Premium lifelike decor',
  'Zero maintenance',
]

const hydrangea = getProduct('HOD-65')
const carnation = getProduct('HOD-96')
const heroCombo = getProduct('HOD-124')
const heroImage = heroCombo?.image || '/products/images/hod-124.jpg'

const featuredFlowers = [
  {
    product: hydrangea,
    label: 'Hydrangea',
    href: '#shop-flowers',
  },
  {
    product: carnation,
    label: 'Carnation',
    href: '#shop-flowers',
  },
].filter((item) => item.product)

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Combo of white vase with lavender stick and green leaf sticks"
          className="h-full w-full scale-105 object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/75 via-charcoal/45 to-charcoal/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/50 via-transparent to-charcoal/15" />
      </div>

      <div className="relative mx-auto grid min-h-[88vh] max-w-7xl items-center gap-12 px-6 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <div className="animate-fade-up mb-6 flex items-center gap-3">
            <img
              src={LOGO_URL}
              alt=""
              className="h-12 w-12 rounded-full object-cover ring-2 ring-cream/30"
            />
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-sage-200">
              Inspired by Nature
            </p>
          </div>
          <h1 className="animate-fade-up-delay-1 font-display text-5xl font-medium leading-[1.08] text-white sm:text-6xl lg:text-[3.5rem]">
            Lifelike decor,
            <br />
            <span className="italic text-sage-200">effortlessly elegant</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 text-base leading-relaxed text-cream/85 lg:text-lg">
            Premium artificial hydrangeas, carnations & vases crafted to elevate your
            home, office, or workspace — fresh year-round, zero maintenance.
          </p>

          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-sage-500 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sage-400 hover:shadow-lg"
            >
              Shop Collection
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-cream/30 bg-cream/10 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-cream/20"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              {INSTAGRAM_HANDLE}
            </a>
          </div>

          <div className="animate-fade-up-delay-2 mt-12 flex flex-wrap gap-x-8 gap-y-3">
            {highlights.map((item) => (
              <span
                key={item}
                className="inline-flex items-center gap-2 text-sm text-cream/80"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-sage-300" />
                {item}
              </span>
            ))}
          </div>
        </div>

        {featuredFlowers.length > 0 && (
          <div className="grid gap-5 sm:grid-cols-2 lg:gap-6">
            {featuredFlowers.map(({ product, label, href }) => (
              <a
                key={product.id}
                href={href}
                className="group overflow-hidden rounded-2xl border border-cream/25 bg-cream/10 shadow-xl backdrop-blur-md transition-all hover:-translate-y-1 hover:bg-cream/15"
              >
                <div className="aspect-[4/5] overflow-hidden bg-cream/5">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sage-200">
                    {label}
                  </p>
                  <p className="mt-2 line-clamp-2 font-display text-base font-medium leading-snug text-white">
                    {product.name}
                  </p>
                  <p className="mt-2 text-sm text-cream/75">
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
