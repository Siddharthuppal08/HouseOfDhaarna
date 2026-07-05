import { footerShop, footerPolicy } from '../data/products'
import { WHATSAPP_URL, WHATSAPP_DISPLAY } from '../config/site'

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
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-[#25D366]/40 bg-[#25D366]/10 px-4 py-2.5 text-sm font-semibold text-[#25D366] transition-colors hover:bg-[#25D366]/20"
            >
              Order on WhatsApp
            </a>
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
                  Address
                </p>
                <p className="mt-1 leading-relaxed">
                  506, PC3, Sector 128, Jaypee Wishtown,
                  <br />
                  Noida, UP 201303
                </p>
              </li>
              <li>
                <p className="text-xs font-medium uppercase tracking-wider text-cream/40">
                  Email
                </p>
                <a
                  href="mailto:contact@houseofdhaarna.com"
                  className="mt-1 block transition-colors hover:text-white"
                >
                  contact@houseofdhaarna.com
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
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-cream/10 pt-8 sm:flex-row">
          <p className="text-xs text-cream/50">
            &copy; {new Date().getFullYear()} House of Dhaarna. All rights reserved.
          </p>
          <p className="text-xs text-cream/50">
            Designed with care in India
          </p>
        </div>
      </div>
    </footer>
  )
}
