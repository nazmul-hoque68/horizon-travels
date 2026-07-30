'use client'

import { useState } from 'react'
import { packages } from '@/lib/data'
import { PackageCard } from './package-card'

const categories = [
  { id: 'all', label: 'All Packages' },
  { id: 'domestic', label: 'Domestic' },
  { id: 'international', label: 'International' },
  { id: 'umrah', label: 'Umrah & Hajj' },
]

export function PackagesSection() {
  const [active, setActive] = useState('all')

  const filtered = active === 'all' ? packages : packages.filter((p) => p.category === active)

  return (
    <section id="packages" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Curated Tours</p>
            <h2 className="font-serif font-bold text-4xl text-foreground text-balance leading-tight">
              Explore Our Tour Packages
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md text-pretty leading-relaxed">
              From serene beaches to sacred pilgrimages — handcrafted packages for every kind of traveler.
            </p>
          </div>

          {/* Filter tabs */}
          <div className="flex items-center gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border ${
                  active === cat.id
                    ? 'bg-primary text-primary-foreground border-primary'
                    : 'bg-card text-foreground border-border hover:border-primary hover:text-primary'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>

        {/* View all CTA */}
        <div className="mt-12 text-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 border-2 border-primary text-primary rounded-xl font-semibold text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-200"
          >
            View All Packages &amp; Custom Itineraries
          </a>
        </div>
      </div>
    </section>
  )
}
