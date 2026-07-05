export default function AnnouncementBar() {
  const message = 'Save min. 50% on all orders · Premium artificial decor'

  return (
    <div className="bg-sage-700 text-cream overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-2.5">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-8 text-xs font-medium tracking-[0.2em] uppercase"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
