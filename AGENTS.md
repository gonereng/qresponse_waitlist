# QResponse Waitlist

Landing page / waitlist for QResponse (dynamic QR codes, one-time fee model).

## Key Files

- `template.html` — Reference UI template for the app. Uses Tailwind CDN, Manrope font, Material Symbols. Inline `tailwind.config` defines the full M3 color/design token system.
- `Structure.txt` — Authoritative copy, page structure, and section ordering. Reconcile any conflicts with `template.html` in favor of `Structure.txt`.

## Brand

Product name is **QResponse** (not "qrty" from the directory name).

## Architecture

- **Framework**: Next.js App Router (`app/` directory, not pages/)
- **Language**: TypeScript
- **Styling**: shadcn/ui (base-nova) + Tailwind CSS v4. All M3 design tokens from `template.html` are mapped into `app/globals.css` as CSS custom properties (`:root` / `.dark`) and exposed via `@theme inline` for Tailwind classes. Custom M3 classes like `bg-surface-container`, `text-on-primary`, etc. work alongside shadcn classes like `bg-primary`, `text-foreground`. No separate `tailwind.config.ts` — Tailwind v4 uses CSS-first config.
- **Font**: Manrope via `next/font/google`; Material Symbols Outlined via Google Fonts `<link>` in layout
- **Dark mode**: `next-themes` with class-based toggle. Custom `<html class="dark">` strategy. Theme toggle in navbar.
- **Form handling**: Next.js Server Actions (email capture only, no auth/user accounts)
- **Database**: Prisma ORM v7 + PostgreSQL (using `@prisma/adapter-pg` driver adapter)
- **Email**: Nodemailer for confirmation/welcome emails post-signup
- **Deployment**: Self-hosted via Docker
- **Testing**: Not set up yet

## Component Structure

- `components/navbar.tsx` — Fixed top nav with logo, theme toggle, CTA button
- `components/hero-section.tsx` — Badge + headline + subheadline + form
- `components/waitlist-form.tsx` — Reusable email form (hero + CTA variants). Client component calling server action with loading/success/error states
- `components/urgency-trigger.tsx` — "Limited to first 500" amber alert
- `components/feature-card.tsx` — Single zig-zag feature (illustration + text)
- `components/feature-section.tsx` — All 3 features, includes inline SVG illustrations
- `components/pricing-card.tsx` — Single pricing tier (supports highlighted state)
- `components/pricing-section.tsx` — 3-column pricing grid
- `components/cta-section.tsx` — Final CTA with blue background + repeated form
- `components/footer.tsx` — Footer with logo and links (Privacy Policy, Legal Notice)
- `components/theme-toggle.tsx` — Dark/light mode toggle (client component)

## Waitlist Signup Flow

1. User fills email + checks consent checkbox → `WaitlistForm` calls `signup()` server action (`app/actions/waitlist.ts`)
2. Server action validates email, stores `WaitlistEntry` with `confirmed: false` + random `confirmToken`, sends confirmation email via Nodemailer (`lib/email.ts`)
3. User clicks confirmation link (`/api/confirm?token=...`) → API route looks up token, sets `confirmed: true` + `confirmedAt`, redirects to `/confirmed`
4. If email already exists but unconfirmed → resend confirmation email; if confirmed → return error

## Environment Variables

See `.env.example` for all required vars. Key ones:
- `DATABASE_URL` — PostgreSQL connection string
- `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASS` — Nodemailer SMTP config
- `SMTP_FROM`, `SMTP_FROM_NAME` — Email sender identity
- `NEXT_PUBLIC_APP_URL` — Base URL for confirmation links (e.g. `http://localhost:3000` locally, `https://qresponse.codes` in production)

## Database

Prisma schema: `prisma/schema.prisma`. Uses the `prisma-client` generator (v7) with `@prisma/adapter-pg` driver adapter. After schema changes, run `npx prisma db push`. Shadow database is not available, so `prisma migrate dev` won't work — use `prisma db push` instead. After pushing, run `npx prisma generate` to regenerate the client.

Generated client output: `lib/generated/prisma/`. Connection uses `pg.Pool` via `@prisma/adapter-pg` — see `lib/prisma.ts`.