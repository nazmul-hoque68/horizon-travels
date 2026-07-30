import Image from 'next/image'
import { destinations } from '@/lib/data'

export function DestinationsSection() {
  return (
    <section id="destinations" className="py-20 bg-secondary/40">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Popular Destinations</p>
          <h2 className="font-serif font-bold text-4xl text-foreground text-balance leading-tight">
            Where Do You Want to Go?
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed text-pretty">
            Discover our most-loved destinations — from Bangladesh&apos;s natural wonders to the world&apos;s iconic getaways.
          </p>
        </div>

        {/*
          Bento grid layout (desktop, 3-col):
          Row 1: [0 tall] [1 short] [2 short]
          Row 2: [0 tall] [3 short] [4 short]  — item 0 spans rows 1–2
          Row 3: [5 wide ————————————————————]  — item 5 spans all 3 cols
        */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {destinations.map((dest, i) => {
            const colClass =
              i === 0
                ? 'lg:row-span-2 h-[460px] lg:h-auto'
                : i === 5
                ? 'col-span-2 lg:col-span-3 h-[220px]'
                : 'h-[220px]'

            return (
              <article
                key={dest.id}
                className={`group relative overflow-hidden rounded-2xl cursor-pointer ${colClass}`}
              >
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/10 to-transparent group-hover:from-foreground/80 transition-all duration-300" />

                {/* Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[10px] font-bold tracking-wider bg-white/20 backdrop-blur-sm border border-white/20 text-white px-2.5 py-1 rounded-full uppercase">
                    {dest.tag}
                  </span>
                </div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <div className="flex items-end justify-between">
                    <div>
                      <h3 className="font-serif font-bold text-white text-xl leading-tight">{dest.name}</h3>
                      <p className="text-white/70 text-xs mt-0.5">{dest.country}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-white/80 text-xs">{dest.packages} packages</div>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
