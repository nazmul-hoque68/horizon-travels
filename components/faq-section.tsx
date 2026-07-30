import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { faqs } from '@/lib/data'

export function FAQSection() {
  return (
    <section className="py-20 bg-secondary/40">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-xs font-semibold tracking-widest text-primary uppercase mb-2">Common Questions</p>
          <h2 className="font-serif font-bold text-4xl text-foreground text-balance leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground mt-3 leading-relaxed text-pretty">
            Everything you need to know before booking with Horizon Travels.
          </p>
        </div>

        <Accordion className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-card border border-border rounded-xl px-6 data-[state=open]:border-primary/40 transition-all"
            >
              <AccordionTrigger className="text-sm font-semibold text-foreground hover:no-underline py-5 text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <p className="text-center text-sm text-muted-foreground mt-10">
          Still have questions?{' '}
          <a href="#contact" className="text-primary font-semibold hover:underline underline-offset-2">
            Contact our team &rarr;
          </a>
        </p>
      </div>
    </section>
  )
}
