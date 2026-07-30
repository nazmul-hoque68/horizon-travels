'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Search, MapPin, Calendar, Users, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const searchTabs = ['Tour Packages', 'Air Tickets', 'Hotels', 'Visa']

export function Hero() {
  const [activeTab, setActiveTab] = useState('Tour Packages')

  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Beautiful travel destination"
          fill
          className="object-cover"
          priority
        />
        {/* Gradient overlay — dark at bottom for text readability */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/40 via-transparent to-transparent" />
      </div>

      {/* Floating stats — top right */}
      <div className="absolute top-8 right-6 md:right-10 z-10 hidden md:flex flex-col gap-2">
        {[
          { value: '15,000+', label: 'Happy Travelers' },
          { value: '99%', label: 'Satisfaction' },
        ].map((stat) => (
          <div key={stat.label} className="bg-white/15 backdrop-blur-md border border-white/20 rounded-xl px-4 py-3 text-white text-right">
            <div className="text-xl font-bold font-serif">{stat.value}</div>
            <div className="text-xs opacity-80">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-0">
        {/* Tagline */}
        <div className="mb-6">
          <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm border border-accent/30 rounded-full px-4 py-1.5 mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-accent" />
            <span className="text-xs font-semibold tracking-wider text-white uppercase">Bangladesh&apos;s Premier Travel Experience</span>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-white leading-tight text-balance mb-4">
            Your Journey,<br />
            <span className="text-accent italic">Perfectly</span> Crafted
          </h1>
          <p className="text-lg text-white/80 max-w-xl leading-relaxed text-pretty">
            From Cox&apos;s Bazar beaches to the Maldives lagoons — we design journeys that stay with you forever.
          </p>
        </div>

        {/* Search Widget */}
        <div className="bg-white rounded-t-2xl shadow-2xl overflow-hidden max-w-4xl">
          {/* Tabs */}
          <div className="flex border-b border-border">
            {searchTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-3.5 text-sm font-medium transition-colors ${
                  activeTab === tab
                    ? 'text-primary border-b-2 border-primary bg-secondary/50'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Search Form */}
          <div className="p-5">
            {activeTab === 'Tour Packages' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors bg-background">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Destination</div>
                    <input
                      type="text"
                      placeholder="Where to?"
                      className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors bg-background">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Travel Date</div>
                    <input
                      type="text"
                      placeholder="Select date"
                      className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors bg-background">
                  <Users className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Travelers</div>
                    <select className="w-full text-sm font-medium text-foreground bg-transparent outline-none appearance-none">
                      <option>1 Person</option>
                      <option>2 Persons</option>
                      <option>3–5 Persons</option>
                      <option>6–10 Persons</option>
                      <option>Group (10+)</option>
                    </select>
                  </div>
                </div>

                <Button className="h-full min-h-[62px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 text-sm">
                  <Search className="w-4 h-4" />
                  Search Packages
                </Button>
              </div>
            )}

            {activeTab === 'Air Tickets' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors bg-background">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">From</div>
                    <input type="text" placeholder="Dhaka (DAC)" className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors bg-background">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">To</div>
                    <input type="text" placeholder="Dubai (DXB)" className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors bg-background">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">Date</div>
                    <input type="text" placeholder="Departure date" className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground" />
                  </div>
                </div>
                <Button className="h-full min-h-[62px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 text-sm">
                  <Search className="w-4 h-4" />
                  Search Flights
                </Button>
              </div>
            )}

            {(activeTab === 'Hotels' || activeTab === 'Visa') && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors bg-background">
                  <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">{activeTab === 'Hotels' ? 'City / Destination' : 'Destination Country'}</div>
                    <input type="text" placeholder={activeTab === 'Hotels' ? 'e.g. Dubai, Maldives' : 'e.g. Malaysia, UK'} className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground" />
                  </div>
                </div>
                <div className="flex items-center gap-3 border border-border rounded-xl px-4 py-3 hover:border-primary transition-colors bg-background">
                  <Calendar className="w-4 h-4 text-primary flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wide">{activeTab === 'Hotels' ? 'Check-in Date' : 'Travel Date'}</div>
                    <input type="text" placeholder="Select date" className="w-full text-sm font-medium text-foreground bg-transparent outline-none placeholder:text-muted-foreground" />
                  </div>
                </div>
                <Button className="h-full min-h-[62px] bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl flex items-center justify-center gap-2 text-sm">
                  <Search className="w-4 h-4" />
                  {activeTab === 'Hotels' ? 'Search Hotels' : 'Check Visa'}
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 pb-8 flex justify-end mt-6">
        <a
          href="#packages"
          className="flex items-center gap-2 text-white/70 text-sm hover:text-white transition-colors"
        >
          Explore Packages
          <ArrowRight className="w-4 h-4" />
        </a>
      </div>
    </section>
  )
}
