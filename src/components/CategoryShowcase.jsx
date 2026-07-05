import { categories } from '../data/products'

export default function CategoryShowcase() {
  return (
    <section id="collections" className="bg-cream py-12 sm:py-16 lg:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sage-500 sm:text-xs sm:tracking-[0.3em]">
            Shop by Category
          </p>
          <h2 className="mt-2 font-display text-3xl font-medium text-charcoal sm:mt-3 sm:text-4xl lg:text-5xl">
            Curated Collections
          </h2>
          <p className="mt-3 text-sm text-stone sm:mt-4">
            Explore our full range of plants, flowers, vases, and combos
          </p>
        </div>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:mt-14 sm:gap-6 lg:grid-cols-4">
          {categories.map((category) => (
            <a
              key={category.id}
              href={category.href}
              className="group relative overflow-hidden rounded-2xl"
            >
              <div className="aspect-[3/4] overflow-hidden bg-sage-100">
                <img
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 lg:p-8">
                <h3 className="font-display text-base font-medium text-white sm:text-xl lg:text-2xl">
                  {category.name}
                </h3>
                <p className="mt-1 text-xs text-white/80 sm:mt-2 sm:text-sm">{category.description}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white opacity-0 transition-all group-hover:opacity-100">
                  Explore
                  <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
