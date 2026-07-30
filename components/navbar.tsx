'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X, Phone, ChevronDown } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  {
    label: 'Packages',
    href: '#packages',
    children: [
      { label: 'Domestic Tours', href: '#packages' },
      { label: 'International Tours', href: '#packages' },
      { label: 'Umrah & Hajj', href: '#packages' },
    ],
  },
  { label: 'Destinations', href: '#destinations' },
  { label: 'Services', href: '#services' },
  { label: 'About Us', href: '#about' },
  { label: 'Contact', href: '#contact' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {/* Top Bar */}
      <div className="hidden md:block bg-primary text-primary-foreground text-sm py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 opacity-90">
              <Phone className="w-3.5 h-3.5" />
              +880 1700-000000
            </span>
            <span className="opacity-60">|</span>
            <span className="opacity-90">Dhaka, Bangladesh &nbsp;&middot;&nbsp; Sat&ndash;Thu 9am&ndash;8pm</span>
          </div>
          <div className="flex items-center gap-4 opacity-90">
            <a href="https://wa.me/8801700000000" target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
              WhatsApp
            </a>
            <span className="opacity-40">|</span>
            <a href="#" className="hover:text-accent transition-colors">Messenger</a>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <header
        className={cn(
          'sticky top-0 z-50 w-full transition-all duration-300',
          scrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-border'
            : 'bg-white border-b border-border'
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-serif font-bold text-lg leading-none">H</span>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-serif font-bold text-lg text-foreground tracking-tight">Horizon</span>
              <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">Travels</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.label} className="relative group">
                <a
                  href={link.href}
                  className="flex items-center gap-1 px-3.5 py-2 text-sm font-medium text-foreground hover:text-primary transition-colors rounded-md hover:bg-secondary"
                  onMouseEnter={() => link.children && setActiveDropdown(link.label)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {link.label}
                  {link.children && <ChevronDown className="w-3.5 h-3.5 opacity-50" />}
                </a>
                {link.children && (
                  <div
                    className={cn(
                      'absolute top-full left-0 mt-1 w-48 bg-white rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200',
                      activeDropdown === link.label ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-1 pointer-events-none'
                    )}
                    onMouseEnter={() => setActiveDropdown(link.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {link.children.map((child) => (
                      <a
                        key={child.label}
                        href={child.href}
                        className="block px-4 py-2.5 text-sm text-foreground hover:bg-secondary hover:text-primary transition-colors"
                      >
                        {child.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://wa.me/8801700000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-secondary transition-colors"
            >
              <Phone className="w-4 h-4" />
              Book via WhatsApp
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Mobile Menu Trigger — plain button to avoid button-in-button nesting */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger className="lg:hidden p-2 rounded-md hover:bg-secondary transition-colors" aria-label="Open menu">
              <Menu className="w-5 h-5" />
            </SheetTrigger>
            <SheetContent side="right" className="w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 bg-primary rounded-lg flex items-center justify-center">
                      <span className="text-primary-foreground font-serif font-bold text-lg">H</span>
                    </div>
                    <div className="flex flex-col leading-none">
                      <span className="font-serif font-bold text-lg text-foreground">Horizon</span>
                      <span className="text-[10px] font-medium tracking-widest text-muted-foreground uppercase">Travels</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setMobileOpen(false)}
                    className="p-2 rounded-md hover:bg-secondary transition-colors"
                    aria-label="Close menu"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <nav className="flex-1 p-4 space-y-1">
                  {navLinks.map((link) => (
                    <div key={link.label}>
                      <a
                        href={link.href}
                        className="block px-4 py-3 text-sm font-medium text-foreground hover:bg-secondary hover:text-primary rounded-lg transition-colors"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </a>
                      {link.children && (
                        <div className="ml-4 space-y-1 mt-1">
                          {link.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2 text-sm text-muted-foreground hover:text-primary rounded-lg transition-colors"
                              onClick={() => setMobileOpen(false)}
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </nav>

                <div className="p-4 border-t border-border space-y-3">
                  <a
                    href="https://wa.me/8801700000000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 text-sm font-medium text-primary border border-primary rounded-lg hover:bg-secondary transition-colors"
                  >
                    <Phone className="w-4 h-4" />
                    Book via WhatsApp
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center w-full px-4 py-3 text-sm font-semibold bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors"
                  >
                    Get a Free Quote
                  </a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>
    </>
  )
}
