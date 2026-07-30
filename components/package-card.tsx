import Image from 'next/image'
import { Star, Clock, Users, CheckCircle2 } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { cn } from '@/lib/utils'

interface Package {
  id: string
  title: string
  subtitle: string
  destination: string
  price: number
  originalPrice: number
  currency: string
  image: string
  rating: number
  reviews: number
  duration: string
  groupSize: string
  highlights: string[]
  badge: string
  badgeColor: string
}

interface PackageCardProps {
  pkg: Package
}

const badgeStyles: Record<string, string> = {
  gold: 'bg-accent text-accent-foreground',
  brand: 'bg-primary text-primary-foreground',
  green: 'bg-emerald-600 text-white',
  red: 'bg-rose-600 text-white',
}

export function PackageCard({ pkg }: PackageCardProps) {
  const discount = Math.round(((pkg.originalPrice - pkg.price) / pkg.originalPrice) * 100)

  return (
    <article className="group bg-card rounded-2xl overflow-hidden border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative h-52 overflow-hidden flex-shrink-0">
        <Image
          src={pkg.image}
          alt={pkg.destination}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {/* Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent" />

        {/* Badge */}
        <div className="absolute top-3 left-3">
          <span className={cn('text-[11px] font-bold px-2.5 py-1 rounded-full', badgeStyles[pkg.badgeColor] ?? badgeStyles.brand)}>
            {pkg.badge}
          </span>
        </div>

        {/* Discount */}
        {discount > 0 && (
          <div className="absolute top-3 right-3 bg-rose-600 text-white text-[11px] font-bold px-2.5 py-1 rounded-full">
            -{discount}%
          </div>
        )}

        {/* Duration / group bottom-left of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-3">
          <span className="flex items-center gap-1 text-white text-xs font-medium bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
            <Clock className="w-3 h-3" />
            {pkg.duration}
          </span>
          <span className="flex items-center gap-1 text-white text-xs font-medium bg-black/30 backdrop-blur-sm rounded-full px-2.5 py-1">
            <Users className="w-3 h-3" />
            {pkg.groupSize}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-3">
        {/* Destination label */}
        <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{pkg.destination}</p>

        {/* Title */}
        <div>
          <h3 className="font-serif font-bold text-lg text-foreground leading-tight">{pkg.title}</h3>
          <p className="text-sm text-muted-foreground mt-0.5">{pkg.subtitle}</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn('w-3.5 h-3.5', i < Math.floor(pkg.rating) ? 'fill-accent text-accent' : 'fill-muted text-muted')}
              />
            ))}
          </div>
          <span className="text-sm font-semibold text-foreground">{pkg.rating}</span>
          <span className="text-xs text-muted-foreground">({pkg.reviews} reviews)</span>
        </div>

        {/* Highlights — show top 3 */}
        <ul className="space-y-1 flex-1">
          {pkg.highlights.slice(0, 3).map((h) => (
            <li key={h} className="flex items-center gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0" />
              {h}
            </li>
          ))}
        </ul>

        {/* Price & CTA */}
        <div className="flex items-end justify-between pt-3 border-t border-border mt-auto">
          <div>
            <div className="text-xs text-muted-foreground line-through">
              {pkg.currency} {pkg.originalPrice.toLocaleString('en-BD')}
            </div>
            <div className="text-xl font-bold text-primary font-serif leading-tight">
              {pkg.currency} {pkg.price.toLocaleString('en-BD')}
            </div>
            <div className="text-[10px] text-muted-foreground">per person</div>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-semibold rounded-xl px-5 py-2 transition-colors"
          >
            Book Now
          </a>
        </div>
      </div>
    </article>
  )
}
