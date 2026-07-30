# Horizon Travels

A modern, full-featured travel agency website built for the Bangladeshi market. Designed to feel premium and editorial while remaining approachable for a wide audience of travelers aged 25–55.

---

## About the Project

Horizon Travels is a single-page marketing website for a travel agency that offers domestic tours, international packages, Umrah & Hajj, visa assistance, air tickets, and hotel bookings. The site is built to convert visitors into inquiries through a clean booking form, WhatsApp integration, and trust signals throughout.

---

## Features

- **Hero with search widget** — tabbed search bar covering Tour Packages, Air Tickets, Hotels, and Visa services
- **Featured packages** — filterable grid (Domestic / International / Umrah & Hajj) with pricing in BDT, discount badges, ratings, and highlights
- **Destinations bento grid** — asymmetric image grid showcasing Cox's Bazar, Maldives, Bali, Türkiye, Sundarbans, and Makkah
- **Services section** — six service cards covering the full agency offering
- **Stats bar** — 15,000+ travelers, 12 years of operation, 80+ destinations, 99% satisfaction
- **About section** — agency story with trust pillars and image collage
- **Testimonials carousel** — horizontally scrollable real customer reviews
- **FAQ accordion** — six commonly asked questions with full answers
- **Booking enquiry form** — multi-field contact form with success state
- **WhatsApp CTA** — floating and inline WhatsApp links for instant contact
- **Footer** — payment methods (bKash, Nagad, Rocket, Visa, Mastercard), social links, office details

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui (base-ui) |
| Icons | Lucide React |
| Carousel | Embla Carousel |
| Images | Next.js Image (AI-generated via v0) |
| Deployment | Vercel |

---

## Project Structure

```
/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata
│   ├── globals.css         # Design tokens, Tailwind theme
│   └── page.tsx            # Home page (composes all sections)
├── components/
│   ├── navbar.tsx          # Sticky navbar with mobile sheet menu
│   ├── hero.tsx            # Full-viewport hero with search tabs
│   ├── packages-section.tsx
│   ├── package-card.tsx
│   ├── destinations-section.tsx
│   ├── services-section.tsx
│   ├── stats-section.tsx
│   ├── about-section.tsx
│   ├── testimonials-section.tsx
│   ├── faq-section.tsx
│   ├── contact-section.tsx
│   └── footer.tsx
├── lib/
│   └── data.ts             # All static content (packages, destinations, FAQs, etc.)
└── public/
    └── images/             # AI-generated destination photography
```

---

## Getting Started

**Install dependencies:**

```bash
pnpm install
```

**Run the development server:**

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

**Build for production:**

```bash
pnpm build
pnpm start
```

---

## Customization

All site content — packages, destinations, testimonials, FAQs, services, and stats — is centralized in `lib/data.ts`. Update that file to reflect your agency's real offerings without touching any component files.

To change the brand name, colors, or typography, edit the design tokens in `app/globals.css` under the `@theme` block.

---

## Developer

This website was designed and developed by **Nazmul Hoque**.

- WhatsApp: [+880 1776-097768](https://wa.me/8801776097768)

For inquiries about web design, custom development, or modifications to this project, feel free to reach out directly via WhatsApp.

---

## License

This project is proprietary. All rights reserved by Horizon Travels. Unauthorized redistribution or resale of this codebase is not permitted.
