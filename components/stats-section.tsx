import { stats } from '@/lib/data'

export function StatsSection() {
  return (
    <section className="bg-primary py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <div className="font-serif font-bold text-4xl lg:text-5xl text-accent mb-2">{stat.value}</div>
              <div className="text-primary-foreground/80 text-sm font-medium tracking-wide">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
