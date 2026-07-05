export default function AnnouncementBar() {
  const message = 'Save min. 50% on all orders · Premium artificial decor'

  return (
    <div className="bg-sage-700 text-cream overflow-hidden">
      <div className="flex animate-marquee whitespace-nowrap py-2">
        {[...Array(4)].map((_, i) => (
          <span
            key={i}
            className="mx-4 text-[10px] font-medium tracking-[0.16em] uppercase sm:mx-8 sm:text-xs sm:tracking-[0.2em]"
          >
            {message}
          </span>
        ))}
      </div>
    </div>
  )
}
