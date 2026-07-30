'use client'

import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const footerLinks = {
  Packages: [
    { label: 'Domestic Tours', href: '#packages' },
    { label: 'International Tours', href: '#packages' },
    { label: 'Umrah & Hajj', href: '#packages' },
    { label: 'Honeymoon Packages', href: '#packages' },
    { label: 'Group Tours', href: '#packages' },
  ],
  Services: [
    { label: 'Air Tickets', href: '#services' },
    { label: 'Hotel Booking', href: '#services' },
    { label: 'Visa Assistance', href: '#services' },
    { label: 'Travel Insurance', href: '#services' },
    { label: 'Airport Transfers', href: '#services' },
  ],
  Company: [
    { label: 'About Us', href: '#about' },
    { label: 'Why Choose Us', href: '#about' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact Us', href: '#contact' },
  ],
}

const paymentMethods = ['bKash', 'Nagad', 'Rocket', 'Visa', 'Mastercard', 'Bank Transfer']

export function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2.5 mb-5">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-primary-foreground font-serif font-bold text-xl leading-none">H</span>
              </div>
              <div className="flex flex-col leading-none">
                <span className="font-serif font-bold text-xl text-white tracking-tight">Horizon Travels</span>
                <span className="text-[10px] font-medium tracking-widest text-white/50 uppercase">Premium Travel Agency</span>
              </div>
            </div>

            <p className="text-sm text-white/60 leading-relaxed max-w-xs text-pretty mb-6">
              Bangladesh&apos;s most trusted travel agency. Creating unforgettable journeys since 2012 — domestic, international, Umrah &amp; Hajj.
            </p>

            {/* Contact */}
            <div className="space-y-3">
              <a href="https://wa.me/8801700000000" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-accent flex-shrink-0" />
                +880 1700-000000
              </a>
              <a href="mailto:hello@horizontravels.com.bd" className="flex items-center gap-2.5 text-sm text-white/70 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-accent flex-shrink-0" />
                hello@horizontravels.com.bd
              </a>
              <div className="flex items-start gap-2.5 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                45 Gulshan Avenue, Dhaka 1212
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:text-accent-foreground transition-colors text-sm font-bold"
              >
                f
              </a>
              <a
                href="https://wa.me/8801700000000"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-9 h-9 rounded-lg bg-white/10 flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{title}</h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/40 text-center md:text-left">
            &copy; 2025 Horizon Travels. All rights reserved. ATAB Reg. No. 12345 &middot; TOAB Member
          </p>
          <div className="flex items-center gap-2 flex-wrap justify-center">
            <span className="text-xs text-white/40 mr-1">We accept:</span>
            {paymentMethods.map((method) => (
              <span key={method} className="text-[10px] font-semibold text-white/50 bg-white/10 px-2.5 py-1 rounded">
                {method}
              </span>
            ))}
          </div>
        </div>

        {/* Developer credit */}
        <div className="border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-center gap-1.5">
            <span className="text-[11px] text-white/25">Designed &amp; developed by</span>
            <a
              href={`https://wa.me/8801776097768`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] font-semibold text-white/40 hover:text-accent transition-colors duration-200"
            >
              Nazmul Hoque
            </a>
            <span className="text-white/15 text-[10px]">&middot;</span>
            <a
              href={`https://wa.me/8801776097768`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-white/25 hover:text-white/50 transition-colors duration-200 flex items-center gap-1"
            >
              <MessageCircle className="w-3 h-3" />
              +880 1776-097768
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
