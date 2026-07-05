export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2 lg:gap-8">
        <div className="flex flex-col justify-center px-6 py-16 lg:px-8 lg:py-24 xl:py-32">
          <p className="animate-fade-up mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-sage-500">
            Inspired by Nature
          </p>
          <h1 className="animate-fade-up-delay-1 font-display text-5xl font-medium leading-[1.1] text-charcoal sm:text-6xl lg:text-7xl">
            Lifelike decor,
            <br />
            <span className="italic text-sage-600">effortlessly elegant</span>
          </h1>
          <p className="animate-fade-up-delay-2 mt-6 max-w-md text-base leading-relaxed text-stone lg:text-lg">
            Premium artificial plants, flowers & vases crafted to elevate your
            home, office, or workspace — fresh year-round, zero maintenance.
          </p>
          <div className="animate-fade-up-delay-2 mt-10 flex flex-wrap gap-4">
            <a
              href="#shop"
              className="inline-flex items-center justify-center rounded-full bg-sage-600 px-8 py-3.5 text-sm font-semibold text-white transition-all hover:bg-sage-700 hover:shadow-lg"
            >
              Shop Collection
            </a>
            <a
              href="#about"
              className="inline-flex items-center justify-center rounded-full border border-sage-300 px-8 py-3.5 text-sm font-semibold text-sage-700 transition-all hover:border-sage-500 hover:bg-sage-50"
            >
              Our Story
            </a>
          </div>
        </div>

        <div className="relative min-h-[400px] lg:min-h-full">
          <div className="absolute inset-0 lg:inset-4">
            <img
              src="https://images.unsplash.com/photo-1618221193310-864575be4032?w=1200&q=80"
              alt="Elegant living room with artificial plants and vases"
              className="h-full w-full object-cover lg:rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/20 to-transparent lg:rounded-2xl" />
          </div>

          <div className="absolute bottom-8 left-6 right-6 lg:bottom-12 lg:left-12 lg:right-auto">
            <div className="inline-flex items-center gap-4 rounded-2xl bg-warm-white/95 px-6 py-4 shadow-xl backdrop-blur-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sage-100">
                <svg className="h-6 w-6 text-sage-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>
              </div>
              <div>
                <p className="text-sm font-semibold text-charcoal">50% off + Free Shipping</p>
                <p className="text-xs text-stone">On every order, all India</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
