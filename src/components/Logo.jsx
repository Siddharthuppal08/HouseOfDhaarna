import { LOGO_URL } from '../config/site'

export default function Logo({ className = '', variant = 'dark', compact = false }) {
  const textClass = variant === 'light' ? 'text-white' : 'text-sage-700'
  const subClass = variant === 'light' ? 'text-cream/70' : 'text-stone'

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 ${className}`}>
      <img
        src={LOGO_URL}
        alt="House of Dhaarna logo"
        className={`rounded-full object-cover ${
          compact ? 'h-9 w-9' : 'h-9 w-9 sm:h-11 sm:w-11'
        } ${variant === 'light' ? 'ring-1 ring-cream/30' : 'ring-1 ring-sage-200/80'}`}
      />
      <div className="flex min-w-0 flex-col">
        <span
          className={`truncate font-display font-semibold leading-tight tracking-wide ${
            compact ? 'text-base' : 'text-lg sm:text-xl lg:text-2xl'
          } ${textClass}`}
        >
          House of Dhaarna
        </span>
        {!compact && (
          <span className={`hidden text-[10px] font-medium uppercase tracking-[0.32em] sm:block ${subClass}`}>
            Premium Home Decor
          </span>
        )}
      </div>
    </div>
  )
}
