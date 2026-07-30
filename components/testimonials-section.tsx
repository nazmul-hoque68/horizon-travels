'use client'

import { useRef } from 'react'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'
import { testimonials } from '@/lib/data'

export function TestimonialsSection() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (!scrollRef.current) return
    const amount = scrollRef.current.offsetWidth * 0.75
    scrollRef.current.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  return (
    <section className="py-20 bg-secondary/40 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Traveler Stories</p>
            <h2 className="font-serif font-bold text-4xl text-foreground text-balance leading-tight">
              What Our Clients Say
            </h2>
            <p className="text-muted-foreground mt-3 max-w-md text-pretty leading-relaxed">
              Real stories from real travelers who trusted Horizon Travels with their journeys.
            </p>
          </div>
          <div className="flex items-center gap-3 flex-shrink-0">
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto scroll-smooth pb-3 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {testimonials.map((t) => (
            <article
              key={t.id}
              className="flex-shrink-0 w-[340px] md:w-[380px] bg-card border border-border rounded-2xl p-7 snap-start flex flex-col gap-4"
            >
              {/* Quote icon */}
              <Quote className="w-6 h-6 text-primary/30" />

              {/* Stars */}
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Text */}
              <p className="text-sm text-muted-foreground leading-relaxed text-pretty flex-1">&ldquo;{t.text}&rdquo;</p>

              {/* Package badge */}
              <div className="text-[11px] font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full self-start">
                {t.package}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-2 border-t border-border">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground font-serif font-bold text-sm flex items-center justify-center flex-shrink-0">
                  {t.avatar}
                </div>
                <div>
                  <div className="font-semibold text-sm text-foreground">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.location}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
