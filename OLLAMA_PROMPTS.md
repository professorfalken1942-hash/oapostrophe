# Oapostrophe Code Review & Design Audit Prompts

## Overview

Local code review tool for oapostrophe.com using Ollama. Audits:
- **Design System Compliance** — 8pt grid, spacing, colors, border-radius
- **Tailwind Usage** — Proper utility application, responsive design
- **Accessibility** — WCAG contrast, focus states, semantic HTML
- **Component Patterns** — BEM naming, reusability, prop consistency
- **Performance** — Unnecessary renders, bundle size, CSS efficiency

---

## Design System Reference

### Spacing Grid (8pt Base)
```
space-1 = 4px (fine adjustment)
space-2 = 8px  ← Base unit
space-3 = 12px
space-4 = 16px
space-5 = 20px
space-6 = 24px
space-8 = 32px
space-10 = 40px
space-12 = 48px
space-16 = 64px
space-20 = 80px
```

All spacing **must** be multiples of 8px (except 4px baseline adjustments for typography).

### Touch Targets
- Minimum: **48px** (48 × 48 pixels)
- Apply to: buttons, inputs, links, interactive elements
- Padding rule: `px-4 py-3` = 16px + 12px = 28px (needs more!)
- Better: `px-6 py-4` = 24px + 16px = 40px (closer to 48px)

### Colors (CSS Variables)
```css
--primary: var specific color
--accent: secondary highlight
--bg: background
--text: text color
--border: divider/border color
```

**No hard-coded colors** — always use CSS variables via Tailwind theme.

### Border Radius
**Only value allowed: `0px` (sharp corners everywhere)**

No rounding. Ever. This is intentional design.

### Typography Baseline Grid
- Line-height: multiples of 4px
- Use Playfair Display (serif) + custom sans
- All text sizes align to 4px baseline grid
- Example: `text-base leading-7` (line-height: 1.75rem = 28px = 7×4px ✓)

---

## Using the Tool

### Basic Usage
```bash
oapostrophe-review components/Hero.tsx
```

### Review Specific Files
```bash
# React component
oapostrophe-review components/Services.tsx

# CSS/styling
oapostrophe-review globals.css

# Use faster model
oapostrophe-review components/Nav.tsx neural-chat
```

### Output
- Saves detailed report to `/tmp/oapostrophe_review_<timestamp>.md`
- Displays on console
- Lists issues + recommendations
- Ready to copy-paste fixes

---

## What Gets Checked

### ✅ Spacing Compliance
```tsx
// ❌ WRONG - Not 8pt multiple
<div className="p-5 mb-3">

// ✅ CORRECT - 8pt multiples
<div className="p-6 mb-4">
```

### ✅ Touch Targets
```tsx
// ❌ WRONG - Too small
<button className="px-2 py-1 text-sm">Small</button>

// ✅ CORRECT - 48px minimum
<button className="px-6 py-4 text-base">Good</button>
```

### ✅ Border Radius
```tsx
// ❌ WRONG
<div className="rounded-lg">

// ✅ CORRECT
<div className="rounded-none"> or <div> (no rounding class)
```

### ✅ Hard-Coded Values
```tsx
// ❌ WRONG
<div style={{ width: '234px', color: '#3d2b1f' }}>

// ✅ CORRECT
<div className="w-full text-accent">
```

### ✅ Accessibility
```tsx
// ❌ WRONG - No semantic HTML
<div onClick={handleClick} className="cursor-pointer">Click me</div>

// ✅ CORRECT - Proper semantics
<button onClick={handleClick} className="cursor-pointer">Click me</button>
```

### ✅ BEM Naming
```tsx
// ❌ WRONG
className="hero-content-text-title"

// ✅ CORRECT
className="hero__content hero__title"
```

---

## Integration with Workflow

### Phase 1: Local Development
```bash
# Write component
vim components/NewFeature.tsx

# Review before commit
oapostrophe-review components/NewFeature.tsx

# Fix issues
vim components/NewFeature.tsx

# Review again
oapostrophe-review components/NewFeature.tsx
```

### Phase 2: Pre-Deployment
```bash
# Audit all components before build
for file in components/*.tsx; do
  oapostrophe-review "$file"
done
```

### Phase 3: Automated (Cron)
```bash
# Daily design system audit
0 6 * * * oapostrophe-review components/*.tsx > /tmp/daily-audit.md
```

---

## Model Selection

### Mistral 7B (Default)
- **Speed:** ~3-5 min for component + CSS
- **Quality:** ⭐⭐⭐⭐ (detailed, specific)
- **Best for:** Thorough audits, complex components
- **Use case:** Before deployment, refactoring

### Neural Chat
- **Speed:** ~1-2 min (faster)
- **Quality:** ⭐⭐⭐ (good, less verbose)
- **Best for:** Quick checks, small files
- **Use case:** During development, rapid iterations

---

## Common Issues & Fixes

### Spacing Not 8pt Multiple
```
🔴 ISSUE: padding: 15px (not multiple of 8)
🟢 FIX: px-4 (16px) or px-6 (24px)
```

### Touch Target Too Small
```
🔴 ISSUE: button with px-2 py-1 (8×4px)
🟢 FIX: Use px-6 py-4 minimum (24×16px = 40px)
```

### Hard-Coded Colors
```
🔴 ISSUE: color: '#8b3a2a'
🟢 FIX: Use --rust or Tailwind color class
```

### Rounded Corners
```
🔴 ISSUE: rounded-lg, rounded-md, border-radius: 8px
🟢 FIX: Remove rounding entirely (0px only)
```

---

## Cost Comparison

| Task | Tool | Time | Cost |
|------|------|------|------|
| Component review (Mistral) | Ollama | 3-5 min | $0 |
| Component review (Sonnet) | OpenRouter | ~30 sec | $0.08 |
| 10 components before deploy | Ollama | 30-50 min | $0 |
| 10 components before deploy | Sonnet | 5 min | $0.80 |

**Verdict:** Use Ollama for thorough local reviews. Save OpenRouter for critical architectural decisions.

---

## Files Updated in This Project

- `globals.css` — Design tokens, 8pt spacing scale
- `components/*.tsx` — All reviewed against these rules
- `next.config.ts` — Tailwind configuration reference

---

## Quick Reference: Design System Checklist

Before committing, run:
```bash
oapostrophe-review <your-file>
```

Then verify:
- [ ] Spacing: All multiples of 8px (except 4px baseline)
- [ ] Touch targets: 48px minimum
- [ ] Border radius: 0px only (none)
- [ ] Colors: CSS variables, no hard-coded hex
- [ ] Typography: Line-heights = 4px multiples
- [ ] Accessibility: Semantic HTML, focus states, contrast
- [ ] BEM naming: Consistent `.component__element` pattern

---

## Examples: Running Tool

### Example 1: Review Hero Component
```bash
$ oapostrophe-review components/Hero.tsx

🔍 Reviewing: Hero.tsx
Model: mistral
Output: /tmp/oapostrophe_review_1774964651.md

(... Mistral reviews component ...)

✅ Review complete!
---
✅ What's Good
- Proper use of Tailwind for responsive spacing
- Good semantic HTML (nav, section, h1)

⚠️ Issues Found
- Line 12: padding-left: 15px (not 8pt multiple)
- Line 24: border-radius: 4px (should be 0px)
- Line 45: Hard-coded color #3d2b1f (use CSS variable)

🔧 Recommendations
- Change px-3.75 to px-4 (16px)
- Remove rounded class
- Use className="text-primary" instead
---
```

### Example 2: Rapid Check with Neural Chat
```bash
$ oapostrophe-review components/Button.tsx neural-chat

🔍 Reviewing: Button.tsx
Model: neural-chat
(... Fast review, ~1-2 min ...)

✅ Review complete!
```

