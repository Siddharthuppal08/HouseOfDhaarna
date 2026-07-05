import { LOGO_URL } from '../config/site'

export default function Logo({ className = '', variant = 'dark' }) {
  const textClass = variant === 'light' ? 'text-white' : 'text-sage-700'
  const subClass = variant === 'light' ? 'text-cream/70' : 'text-stone'

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <img
        src={LOGO_URL}
        alt="House of Dhaarna logo"
        className={`h-11 w-11 rounded-full object-cover ${
          variant === 'light' ? 'ring-1 ring-cream/30' : 'ring-1 ring-sage-200/80'
        }`}
      />
      <div className="flex flex-col">
        <span className={`font-display text-xl font-semibold leading-tight tracking-wide lg:text-2xl ${textClass}`}>
          House of Dhaarna
        </span>
        <span className={`text-[10px] font-medium uppercase tracking-[0.32em] ${subClass}`}>
          Premium Home Decor
        </span>
      </div>
    </div>
  )
}
