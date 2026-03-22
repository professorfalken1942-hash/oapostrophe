# Requirements — oapostrophe.com

## Functional Requirements

### Core Pages
- [ ] **Home** — Hero + Services + Pricing + CTA
- [ ] **Services** — Detailed breakdown of offerings
- [ ] **Pricing** — Clear tier structure
- [ ] **Contact** — Lead capture or email form
- [ ] **About** — Studio mission & approach

### Navigation
- [ ] Responsive navigation (desktop + mobile)
- [ ] Smooth scrolling between sections
- [ ] Mobile hamburger menu with smooth animation

### Services Section
- [ ] Display services as feature cards (number, title, description, tags)
- [ ] Scannable, editorial layout
- [ ] Responsive grid (3 columns desktop, 1 column mobile)

### Pricing Section
- [ ] Display pricing tiers ($5k, $10k, custom)
- [ ] Editorial row layout
- [ ] Clear differentiation between tiers
- [ ] CTA buttons for each tier

### Contact/Lead Capture
- [ ] Email capture form (or contact form)
- [ ] Form validation
- [ ] Success confirmation
- [ ] Integration with email service (Mailchimp, SendGrid, etc.)

### Performance
- [ ] Page load time < 3 seconds
- [ ] Lighthouse score > 90 (Performance, Accessibility, Best Practices)
- [ ] Mobile responsiveness (viewport testing)
- [ ] SEO optimized (meta tags, OG images)

---

## Non-Functional Requirements

### Design System
- [ ] 8pt grid spacing system (all spacing in 8px multiples)
- [ ] 4pt baseline grid for typography
- [ ] 48px minimum touch targets (buttons, inputs, interactive elements)
- [ ] Sharp corners (0px border-radius)
- [ ] Consistent color palette (CSS variables in `globals.css`)
- [ ] Proper typography scale (4px line-height multiples)

### Laws of UX & Gestalt Principles
**Heuristics:**
- [ ] **Visibility of System Status** — Real-time feedback on user actions (hover states, loading states, form validation)
- [ ] **Match Between System & Real World** — Use language & concepts users understand; avoid jargon
- [ ] **User Control & Freedom** — Clear navigation, undo/back options, obvious exit points
- [ ] **Error Prevention & Recovery** — Prevent problems before they occur; clear error messages with solutions
- [ ] **Recognition vs Recall** — Visible options > requiring user memory; clear CTAs & labels
- [ ] **Flexibility & Efficiency** — Keyboard shortcuts, quick actions for power users, clear workflows
- [ ] **Aesthetic & Minimalist Design** — Remove unnecessary elements; focus attention on core actions
- [ ] **Help & Documentation** — Helpful docs easily searchable; task-focused (how-to, not just features)

**Gestalt Principles:**
- [ ] **Proximity** — Group related elements close together (services in cards, pricing in rows)
- [ ] **Similarity** — Use consistent styling for similar elements (all buttons look alike, all headings consistent)
- [ ] **Continuation** — Visual elements lead the eye along a path (grid flow, natural reading order)
- [ ] **Closure** — Complete shapes mentally (use whitespace, implied lines, structured layouts)
- [ ] **Figure-Ground** — Clear distinction between content & background; hierarchy is obvious
- [ ] **Symmetry** — Balanced layouts feel stable & intentional (center alignment, paired columns)
- [ ] **Common Fate** — Elements moving/changing together feel grouped (animations, transitions together)

### Technology Stack
- [ ] Next.js 16 with App Router
- [ ] React 19
- [ ] Tailwind CSS v4
- [ ] TypeScript for type safety
- [ ] Sanity v5 (optional, for dynamic content)
- [ ] Vercel deployment

### Code Quality
- [ ] ESLint configuration enforced
- [ ] TypeScript strict mode
- [ ] No console errors or warnings
- [ ] Semantic HTML
- [ ] Accessible color contrast (WCAG AA minimum)
- [ ] `'use client'` directives where needed

### Deployment
- [ ] Vercel connected to GitHub
- [ ] Auto-deploy on main branch push
- [ ] Environment variables configured (`.env.local`)
- [ ] Production build tested locally before deploy
- [ ] No breaking changes on deploy

### SEO & Analytics
- [ ] Meta title & description on all pages
- [ ] OG images for social sharing
- [ ] Robots.txt & sitemap.xml
- [ ] Google Analytics or similar tracking
- [ ] Canonical URLs

---

## Content Requirements

### Copy
- [ ] Clear value proposition on homepage
- [ ] Service descriptions (brief + detailed)
- [ ] Pricing tier copy (features, benefits)
- [ ] About section (studio story, philosophy)
- [ ] Footer links (privacy, terms, contact)

### Imagery
- [ ] Hero image/video
- [ ] Service visual assets
- [ ] Testimonial photos (if applicable)
- [ ] Logo in multiple formats
- [ ] Favicon

---

## Future Enhancements

### Phase 2
- [ ] Case studies / portfolio section
- [ ] Client testimonials
- [ ] Blog / journal (Sanity integration)
- [ ] Team member bios
- [ ] Video content

### Phase 3
- [ ] Live chat / support widget
- [ ] Project booking form
- [ ] Client dashboard
- [ ] Email newsletter signup
- [ ] Social media feeds integration

---

## Testing Checklist

- [ ] Desktop browser testing (Chrome, Firefox, Safari)
- [ ] Mobile testing (iOS Safari, Chrome Mobile)
- [ ] Tablet responsiveness
- [ ] Form submission workflows
- [ ] Link validation (internal + external)
- [ ] Image load times
- [ ] Accessibility testing (screen readers, keyboard nav)
- [ ] SEO audit (Google Search Console)
- [ ] Performance audit (Lighthouse)

---

## Deployment Checklist

Before going live:
- [ ] All tests passing
- [ ] Lighthouse score > 90
- [ ] Environment variables configured
- [ ] SSL certificate valid
- [ ] Analytics tracking verified
- [ ] Form submissions tested
- [ ] Mobile viewport tested
- [ ] Broken link check complete
- [ ] SEO meta tags verified
- [ ] Social sharing previews checked

---

**Last updated:** March 21, 2026
**Status:** Active Development
