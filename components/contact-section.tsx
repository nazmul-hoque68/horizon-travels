'use client'

import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react'
import { Button } from '@/components/ui/button'

const contactInfo = [
  {
    icon: Phone,
    label: 'Phone & WhatsApp',
    value: '+880 1700-000000',
    href: 'https://wa.me/8801700000000',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hello@horizontravels.com.bd',
    href: 'mailto:hello@horizontravels.com.bd',
  },
  {
    icon: MapPin,
    label: 'Office',
    value: '45 Gulshan Avenue, Dhaka 1212, Bangladesh',
    href: 'https://maps.google.com',
  },
]

const tourTypes = ['Domestic Tour', 'International Tour', 'Umrah & Hajj', 'Air Ticket', 'Hotel Booking', 'Visa Assistance']

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    tourType: '',
    message: '',
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Get In Touch</p>
          <h2 className="font-serif font-bold text-4xl text-foreground text-balance leading-tight">
            Plan Your Dream Journey
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed text-pretty">
            Tell us about your travel plans and our experts will craft a personalized itinerary just for you — free of charge.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Contact Info */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {contactInfo.map(({ icon: Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-start gap-4 p-5 bg-card border border-border rounded-2xl hover:border-primary/40 hover:shadow-md transition-all group"
              >
                <div className="w-11 h-11 bg-primary/10 group-hover:bg-primary rounded-xl flex items-center justify-center flex-shrink-0 transition-colors">
                  <Icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-1">{label}</div>
                  <div className="text-sm font-medium text-foreground leading-relaxed">{value}</div>
                </div>
              </a>
            ))}

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/8801700000000?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20tour%20package."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 p-5 bg-[#25D366] text-white rounded-2xl font-semibold text-sm hover:bg-[#20bd5a] transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Chat on WhatsApp Now
            </a>

            {/* Office hours */}
            <div className="p-5 bg-card border border-border rounded-2xl">
              <h3 className="font-semibold text-sm text-foreground mb-3">Office Hours</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <div className="flex justify-between">
                  <span>Saturday – Thursday</span>
                  <span className="font-medium text-foreground">9:00 AM – 8:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Friday</span>
                  <span className="font-medium text-foreground">2:00 PM – 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-2xl p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center text-center py-12 gap-4">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-serif font-bold text-2xl text-foreground">Message Received!</h3>
                  <p className="text-muted-foreground max-w-sm text-pretty leading-relaxed">
                    Thank you for reaching out. Our travel expert will contact you within 2 hours during business hours.
                  </p>
                  <Button
                    onClick={() => setSubmitted(false)}
                    variant="outline"
                    className="mt-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                  >
                    Send Another Enquiry
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-serif font-bold text-xl text-foreground mb-1">Get a Free Quote</h3>
                    <p className="text-sm text-muted-foreground">Fill in your details and we&apos;ll get back to you shortly.</p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-semibold text-foreground uppercase tracking-wide">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="px-4 py-3 border border-border rounded-xl text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-semibold text-foreground uppercase tracking-wide">Phone / WhatsApp *</label>
                      <input
                        id="phone"
                        type="tel"
                        required
                        placeholder="+880 1700-000000"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        className="px-4 py-3 border border-border rounded-xl text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="email" className="text-xs font-semibold text-foreground uppercase tracking-wide">Email Address</label>
                    <input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="px-4 py-3 border border-border rounded-xl text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
                    />
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="tourType" className="text-xs font-semibold text-foreground uppercase tracking-wide">Service Required *</label>
                    <select
                      id="tourType"
                      required
                      value={form.tourType}
                      onChange={(e) => setForm({ ...form, tourType: e.target.value })}
                      className="px-4 py-3 border border-border rounded-xl text-sm text-foreground bg-background focus:outline-none focus:border-primary transition-colors appearance-none"
                    >
                      <option value="">Select a service...</option>
                      {tourTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-xs font-semibold text-foreground uppercase tracking-wide">Tell Us More</label>
                    <textarea
                      id="message"
                      rows={4}
                      placeholder="Destination, travel dates, group size, budget, special requirements..."
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="px-4 py-3 border border-border rounded-xl text-sm text-foreground bg-background placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-xl py-3 flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4" />
                    Send My Enquiry
                  </Button>

                  <p className="text-center text-xs text-muted-foreground">
                    We typically respond within 2 hours during business hours. No spam, ever.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
