export default function Newsletter() {
  return (
    <section className="bg-cream py-20 lg:py-24">
      <div className="mx-auto max-w-2xl px-6 text-center lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sage-500">
          Stay Connected
        </p>
        <h2 className="mt-3 font-display text-4xl font-medium text-charcoal">
          Join the Dhaarna Circle
        </h2>
        <p className="mt-4 text-stone">
          Be the first to know about new arrivals, exclusive offers, and decor inspiration.
        </p>

        <form
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-0"
          onSubmit={(e) => e.preventDefault()}
        >
          <label htmlFor="email" className="sr-only">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="Enter your email"
            className="flex-1 rounded-full border border-sage-200 bg-warm-white px-6 py-3.5 text-sm text-charcoal placeholder:text-stone/60 focus:border-sage-400 focus:outline-none focus:ring-2 focus:ring-sage-200 sm:rounded-r-none"
          />
          <button
            type="submit"
            className="rounded-full bg-sage-600 px-8 py-3.5 text-sm font-semibold text-white transition-colors hover:bg-sage-700 sm:rounded-l-none"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-xs text-stone/70">
          We respect your privacy. Unsubscribe anytime.
        </p>
      </div>
    </section>
  )
}
