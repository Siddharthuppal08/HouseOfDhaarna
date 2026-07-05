export default function BrandStory() {
  return (
    <section id="about" className="overflow-hidden bg-sage-700 text-cream">
      <div className="mx-auto grid max-w-7xl lg:grid-cols-2">
        <div className="relative min-h-[360px] lg:min-h-[560px]">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=1000&q=80"
            alt="Styled interior with artificial plants"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-sage-800/30" />
        </div>

        <div className="flex flex-col justify-center px-4 py-16 sm:px-6 lg:px-16 lg:py-24">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-200">
            About Us
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight lg:text-5xl">
            Crafted with care,
            <br />
            <span className="italic text-sage-100">inspired by nature</span>
          </h2>
          <p className="mt-6 text-base leading-relaxed text-sage-100/90 lg:text-lg">
            At House of Dhaarna, we believe beautiful spaces shouldn&apos;t demand
            constant upkeep. Our lifelike artificial plants, flowers, and vases are
            designed to look fresh year-round — perfect for homes, offices, and
            thoughtful gifting.
          </p>
          <p className="mt-4 text-base leading-relaxed text-sage-100/80">
            Every piece is made in India using high-quality materials, combining
            realistic textures with timeless design. No watering, no sunlight — just
            effortless elegance that lasts.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-4 border-t border-sage-500/30 pt-10 sm:gap-6">
            {[
              { value: '50%', label: 'Off Every Order' },
              { value: '100+', label: 'Products' },
              { value: '24/7', label: 'Support' },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-2xl font-semibold text-white sm:text-3xl lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-[10px] text-sage-200 sm:text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
