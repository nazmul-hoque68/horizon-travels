import Image from 'next/image'
import { ShieldCheck, Award, Clock, HeartHandshake } from 'lucide-react'

const pillars = [
  { icon: ShieldCheck, title: 'Licensed & Certified', desc: 'ATAB, TOAB & Ministry of Religious Affairs registered agency.' },
  { icon: Award, title: '12+ Years of Trust', desc: 'Over a decade of crafting exceptional travel experiences.' },
  { icon: Clock, title: '24/7 Support', desc: 'Our team is always available on WhatsApp, phone, and in person.' },
  { icon: HeartHandshake, title: 'Personalized Care', desc: 'Every itinerary is tailored to your preferences and budget.' },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image collage */}
          <div className="relative hidden lg:block">
            <div className="relative h-[480px]">
              <div className="absolute top-0 left-0 w-[58%] h-[68%] rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/maldives.png"
                  alt="Luxury travel experience"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute bottom-0 right-0 w-[55%] h-[60%] rounded-2xl overflow-hidden shadow-xl border-4 border-background">
                <Image
                  src="/images/turkey.png"
                  alt="Cultural travel experience"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Trust badge */}
              <div className="absolute top-1/2 right-2 -translate-y-1/2 bg-white rounded-2xl shadow-xl p-5 border border-border z-10">
                <div className="text-center">
                  <div className="font-serif font-bold text-3xl text-primary">15K+</div>
                  <div className="text-xs text-muted-foreground font-medium mt-1">Happy Travelers</div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-3">About Horizon Travels</p>
            <h2 className="font-serif font-bold text-4xl text-foreground text-balance leading-tight mb-5">
              Bangladesh&apos;s Most Trusted Travel Partner
            </h2>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-5">
              Founded in 2012, Horizon Travels has grown from a small Dhaka-based agency into one of Bangladesh&apos;s
              most recognized travel brands. We believe every journey is a story waiting to be told — and we are
              here to make sure yours is extraordinary.
            </p>
            <p className="text-muted-foreground leading-relaxed text-pretty mb-8">
              From domestic adventures in Cox&apos;s Bazar and the Sundarbans, to international escapes in the Maldives
              and Türkiye, and sacred pilgrimages to Makkah and Madinah — we cover every kind of travel with the
              same dedication to quality, safety, and value.
            </p>

            {/* Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {pillars.map(({ icon: Icon, title, desc }) => (
                <div key={title} className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-4.5 h-4.5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm text-foreground">{title}</div>
                    <div className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</div>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl px-8 py-2.5 text-sm transition-colors"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
