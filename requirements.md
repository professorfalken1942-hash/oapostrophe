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
- [x] Semantic BEM classes and IDs on all elements (see reference below)
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

## Semantic Class & ID Reference

All elements use BEM naming: `.block__element--modifier`

### Landmarks (IDs)

| ID | Element | Component |
|----|---------|-----------|
| `#site-nav` | `<nav>` | Nav |
| `#hero` | `<section>` | Hero |
| `#services` | `<section>` | Services |
| `#process` | `<section>` | Process |
| `#pricing` | `<section>` | Pricing |
| `#about` | `<section>` | About |
| `#case-studies` | `<section>` | CaseStudies |
| `#contact` | `<section>` | Contact |
| `#site-footer` | `<footer>` | Footer |
| `#contact-form` | `<form>` | Contact |
| `#contact-name` | `<input>` | Contact |
| `#contact-email` | `<input>` | Contact |
| `#contact-project-type` | `<select>` | Contact |
| `#contact-budget` | `<select>` | Contact |
| `#contact-message` | `<textarea>` | Contact |
| `#case-study-{slug}` | `<article>` | CaseStudies |

### Navigation

| Class | Description |
|-------|-------------|
| `.site-nav` | Top-level nav container |
| `.site-nav__bar` | Inner bar (logo + links) |
| `.site-nav__logo` | Logo link |
| `.site-nav__links` | Desktop link group |
| `.site-nav__link` | Individual nav link |
| `.site-nav__cta` | Desktop CTA button |
| `.site-nav__mobile-controls` | Mobile hamburger + theme toggle wrapper |
| `.site-nav__hamburger` | Hamburger button |
| `.site-nav__hamburger-icon` | Hamburger icon wrapper |
| `.site-nav__hamburger-line` | Individual hamburger bar |
| `.site-nav__mobile-menu` | Mobile dropdown menu |
| `.site-nav__mobile-links` | Mobile link list |
| `.site-nav__mobile-link` | Individual mobile link |
| `.site-nav__mobile-cta` | Mobile CTA button |

### Hero

| Class | Description |
|-------|-------------|
| `.hero` | Section container |
| `.hero__content` | Content wrapper |
| `.hero__label` | Studio label text |
| `.hero__heading` | Main heading |
| `.hero__heading-accent` | Accent-colored heading text |
| `.hero__footer` | Bottom area (description + actions) |
| `.hero__description` | Body copy |
| `.hero__actions` | CTA button group |

### Services

| Class | Description |
|-------|-------------|
| `.services` | Section container |
| `.services__header` | Header grid (heading + intro) |
| `.services__heading` | Section heading |
| `.services__intro` | Intro text wrapper |
| `.services__intro-copy` | Intro body copy |
| `.services__grid` | Service cards grid |
| `.service-card` | Individual service card |
| `.service-card__number` | Card number (01, 02, 03) |
| `.service-card__title` | Card title |
| `.service-card__description` | Card description |
| `.service-card__tags` | Tags wrapper |
| `.tag` | Individual tag |

### Process

| Class | Description |
|-------|-------------|
| `.process` | Section container |
| `.process__header` | Header wrapper |
| `.process__heading` | Section heading |
| `.process__steps` | Steps list |
| `.process-step` | Individual step row |
| `.process-step__number` | Step number |
| `.process-step__title` | Step title |
| `.process-step__description` | Step description |

### About

| Class | Description |
|-------|-------------|
| `.about` | Section container |
| `.about__layout` | Grid layout |
| `.about__header` | Header wrapper |
| `.about__heading` | Section heading |
| `.about__body` | Body copy wrapper |

### Pricing

| Class | Description |
|-------|-------------|
| `.pricing` | Section container |
| `.pricing__header` | Header wrapper |
| `.pricing__heading` | Section heading |
| `.pricing__plans` | Plans list |
| `.pricing__note` | Footer note |
| `.pricing-plan` | Individual plan row |
| `.pricing-plan--featured` | Highlighted/featured plan |
| `.pricing-plan__number` | Plan number |
| `.pricing-plan__info` | Plan name + description |
| `.pricing-plan__name` | Plan name |
| `.pricing-plan__description` | Plan description |
| `.pricing-plan__features` | Features list |
| `.pricing-plan__feature` | Individual feature |
| `.pricing-plan__action` | Price + CTA wrapper |
| `.pricing-plan__price` | Price display |

### Case Studies

| Class | Description |
|-------|-------------|
| `.case-studies` | Section container |
| `.case-studies__header` | Header wrapper |
| `.case-studies__heading` | Section heading |
| `.case-studies__list` | List of case studies |
| `.case-studies__cta` | Bottom CTA area |
| `.case-study` | Individual case study article |
| `.case-study__content` | Text content column |
| `.case-study__meta` | Industry + title + client |
| `.case-study__industry` | Industry label |
| `.case-study__title` | Case study title |
| `.case-study__client` | Client name |
| `.case-study__details` | Challenge + solution + results |
| `.case-study__challenge` | Challenge section |
| `.case-study__solution` | Solution section |
| `.case-study__results` | Results section |
| `.case-study__results-list` | Results list |
| `.case-study__result` | Individual result item |
| `.case-study__gallery` | Gallery column |
| `.case-study__gallery-featured` | Featured image |
| `.case-study__gallery-grid` | Thumbnail grid |
| `.case-study__gallery-thumb` | Individual thumbnail |
| `.case-study__gallery-overlay` | Caption overlay |
| `.case-study__placeholder` | Placeholder (no images) |

### Contact

| Class | Description |
|-------|-------------|
| `.contact` | Section container |
| `.contact__layout` | Grid layout |
| `.contact__header` | Header wrapper |
| `.contact__heading` | Section heading |
| `.contact__description` | Body copy |
| `.contact-form` | Form element |
| `.contact-form__row` | Input row (name + email) |
| `.contact-form__input` | Text/email input |
| `.contact-form__select` | Select dropdown |
| `.contact-form__textarea` | Message textarea |
| `.contact-form__submit` | Submit button |
| `.contact-form__success` | Success message |
| `.contact-form__error` | Error message |

### Footer

| Class | Description |
|-------|-------------|
| `.site-footer` | Footer container |
| `.site-footer__bar` | Inner bar |
| `.site-footer__logo` | Logo |
| `.site-footer__copyright` | Copyright text |
| `.site-footer__email` | Email link |

### Shared / Reusable

| Class | Description |
|-------|-------------|
| `.cta-button` | Any call-to-action button |
| `.cta-button--primary` | Filled accent button |
| `.cta-button--outline` | Bordered outline button |
| `.cta-link` | Inline text CTA with arrow |
| `.tag` | Technology/category tag |
| `.label-text` | Uppercase label typography |
| `.body-copy` | Body paragraph typography |
| `.serif` | Serif font family |

---

**Last updated:** March 22, 2026
**Status:** Active Development
