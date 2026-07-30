import { MapPin, Globe, Star, FileText, Plane, Building2 } from 'lucide-react'
import { services } from '@/lib/data'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  MapPin,
  Globe,
  Star,
  FileText,
  Plane,
  Building2,
}

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">What We Offer</p>
          <h2 className="font-serif font-bold text-4xl text-foreground text-balance leading-tight">
            Complete Travel Services
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed text-pretty">
            One agency, every travel need — we handle everything so you can focus on the joy of travel.
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? MapPin
            return (
              <div
                key={service.id}
                className="group p-7 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-serif font-bold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed text-pretty">{service.description}</p>
                <a
                  href="#contact"
                  className="inline-block mt-4 text-sm font-semibold text-primary hover:underline underline-offset-2"
                >
                  Learn more &rarr;
                </a>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
