# Claude Context for oapostrophe.com

## Project Overview

**oapostrophe.com** is a boutique web development & consulting studio portfolio site built with modern web standards.

- **URL:** https://oapostrophe.com
- **Stack:** Next.js 16, React 19, Sanity v5, Tailwind v4, Vercel
- **Deployment:** Vercel (automatic from main branch)
- **Model:** One senior engineer — full ownership, no handoffs

## Design System

### Spacing & Grid
- **Base unit:** 8pt grid system (multiples of 8px)
- **Fine adjustments:** 4pt baseline grid for typography
- **Touch targets:** 48px minimum (inputs, buttons, interactive elements)
- **Content max-width:** 1280px with side padding (64px desktop, 24px mobile)

### Styling
- **Border-radius:** 0px everywhere (sharp corners only)
- **Framework:** Tailwind v4 + custom CSS variables in `globals.css`
- **Typography:** Baseline grid alignment (all line-heights multiples of 4px)

### Color Palette
Colors defined in `globals.css` as CSS variables.

## Architecture

```
oapostrophe/
├── app/              # Next.js app router (pages)
├── components/       # Reusable React components
├── globals.css       # Design tokens, spacing scale, colors
├── package.json      # Dependencies
├── next.config.ts    # Next.js configuration
├── tsconfig.json     # TypeScript config
└── sanity/           # (Optional) Sanity CMS integration
```

## Key Components

- **Nav.tsx** — Navigation header
- **Hero.tsx** — Homepage hero section
- **Services.tsx** — Services showcase (feature-style cards)
- **Pricing.tsx** — Pricing tiers (editorial row layout)
- **Footer.tsx** — Site footer

## Recent Changes (March 2026)

- Redesigned Services section with numbered feature cards
- Redesigned Pricing section with editorial row layout ($5k, $10k, custom tiers)
- Applied consistent 8pt grid spacing throughout
- Enforced 48px minimum input/button heights
- Fixed global CSS override issues with Tailwind

## Development Workflow

1. **Local development:** `npm run dev` (runs on `localhost:3000`)
2. **Build locally:** `npm run build` (catches errors before deploy)
3. **Deploy:** `vercel --prod --yes` (after git commit)
4. **CI/CD:** Vercel auto-deploys main branch

## Common Tasks

### Running Locally
```bash
cd /Users/professorfalken/studio/projects/oapostrophe
npm run dev
```

### Building & Testing
```bash
npm run build
npm run lint
```

### Deploying to Production
```bash
git add .
git commit -m "Your message"
vercel --prod --yes
```

## Known Issues & Solutions

- **Subagent deployment bugs:** Always run `npm run build` locally first to catch missing `'use client'` directives or duplicate styles
- **CSS conflicts:** Check `globals.css` for overrides that break Tailwind utilities
- **Vercel caching:** Use `vercel --prod --yes` to ensure fresh deploy (not cached)

## Next Steps

- Add more case studies to portfolio
- Integrate Sanity for dynamic blog/journal
- Expand Services with deeper descriptions
- Testimonials section for credibility

## Contact & Access

- **Repository:** Local at `/Users/professorfalken/studio/projects/oapostrophe`
- **Deployment:** Vercel (connected to GitHub)
- **CMS:** Sanity (optional, not yet fully integrated)

---

**Last updated:** March 21, 2026
