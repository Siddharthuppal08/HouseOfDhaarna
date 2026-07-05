import { footerShop, footerPolicy } from '../data/products'
import { WHATSAPP_URL, INSTAGRAM_URL, INSTAGRAM_HANDLE, EMAIL } from '../config/site'

function InstagramIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  )
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-charcoal text-cream">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <span className="font-display text-2xl font-semibold text-white">
              House of Dhaarna
            </span>
            <p className="mt-4 text-sm leading-relaxed text-cream/70">
              Premium artificial plants, flowers & vases for homes, offices, and gifting.
              Made in India with care.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
              >
                WhatsApp
              </a>
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-cream/20 bg-cream/5 px-4 py-2.5 text-sm font-semibold text-cream transition-colors hover:border-cream/40 hover:bg-cream/10"
              >
                <InstagramIcon className="h-4 w-4" />
                Instagram
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Shop
            </h3>
            <ul className="mt-4 space-y-3">
              {footerShop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Policy
            </h3>
            <ul className="mt-4 space-y-3">
              {footerPolicy.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-cream/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cream/50">
              Contact
            </h3>
            <ul className="mt-4 space-y-4 text-sm text-cream/70">
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-cream/40">
                  Instagram
                </p>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <InstagramIcon className="h-4 w-4" />
                  {INSTAGRAM_HANDLE}
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-cream/40">
                  Email
                </p>
                <a
                  href={`mailto:${EMAIL}`}
                  className="mt-1 block transition-colors hover:text-white"
                >
                  {EMAIL}
                </a>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-cream/40">
                  WhatsApp
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 block transition-colors hover:text-white"
                >
                  Order on WhatsApp
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} House of Dhaarna. All rights reserved.
          </p>
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs text-cream/50 transition-colors hover:text-white"
          >
            <InstagramIcon className="h-3.5 w-3.5" />
            Follow {INSTAGRAM_HANDLE}
          </a>
        </div>
      </div>
    </footer>
  )
}
