# AUREN — Landing Page Specification

> **Project:** AUREN — Personal Growth & Lifestyle Companion  
> **Purpose:** Build a polished, responsive landing page inspired by the supplied dark-purple reference.  
> **Reference use:** Adapt its layout, glow, contrast, cards, and visual rhythm. Do not copy its fintech/software-agency identity or wording.

## 1. Product Overview

AUREN helps people build a more intentional lifestyle through small, consistent daily actions.

Four lifestyle pillars:
- **Fitness & Wellness** — movement, exercise, and healthy routines
- **Productivity** — daily tasks, planning, and activity history
- **Learning & Growth** — learning goals and personal development
- **Spirituality** — ibadah, religious learning, reading, and reflection

**Tagline:** Build a life you love.

**Landing page goal:** Introduce AUREN, explain its four pillars, communicate its vision, and invite visitors to start their journey.

This is a landing-page/visual MVP. Do not imply that authentication, tracking, AI recommendations, or database functionality is implemented unless it exists.

---

## 2. Visual Direction Based on the Reference

The reference has:
- Near-black background
- Bright purple radial glow behind the hero
- Large centered headline and compact supporting copy
- Small navigation bar with CTA buttons
- Bordered value/trust strip below the hero
- Dark cards with thin borders and purple icons
- Full-width purple gradient band
- Product/project preview cards
- Horizontal card section near the bottom
- Premium typography, restrained glow, and rounded corners

### Adapt this to AUREN

Use a **premium, cinematic, futuristic lifestyle-product aesthetic**:
- Primary accent: vivid violet/purple
- Secondary accent: soft lavender
- Base: near-black / deep charcoal
- Text: white and muted gray
- Mood: premium, optimistic, calm, focused, modern

Avoid excessive neon, visual clutter, and too many competing gradients. Purple should guide attention rather than overwhelm the entire page.

---

## 3. Brand and Design Tokens

Use **AUREN** as the working brand name (changeable later).

### Colors

```css
:root {
  --color-background: #08070D;
  --color-background-elevated: #111018;
  --color-surface: #15131D;
  --color-surface-hover: #1B1728;
  --color-border: rgba(255, 255, 255, 0.14);

  --color-primary: #762BFF;
  --color-primary-bright: #8D45FF;
  --color-primary-deep: #3B087F;
  --color-lavender: #C8A8FF;

  --color-text: #F8F7FC;
  --color-text-muted: #A6A1B2;
  --color-text-subtle: #777181;
}
```

### Typography
- Preferred: Geist, Inter, or Manrope
- Headlines: bold, modern, slightly tight letter spacing
- Body: readable, neutral, restrained
- Avoid decorative fonts

### UI style
- Card radius: 12–18px
- Button radius: 8–12px
- Thin translucent borders
- Subtle hover states
- Strong text contrast
- Consistent spacing
- Restrained glow around key elements

---

## 4. Landing Page Sections

### Section 1 — Navigation

**Left:** AUREN wordmark and optional small purple abstract mark.

**Links:** Home, Features, How It Works, About.

**Right:**
- Secondary button: `Explore Features`
- Primary button: `Get Started`

Navigation should be compact and premium. On mobile, collapse links into a menu. Buttons should scroll to sections or use safe placeholders; avoid broken routes.

### Section 2 — Hero

The hero is the most visually prominent section.

**Background:**
- Near-black
- Large, soft purple radial glow or luminous arc behind the headline
- Build glow with CSS radial gradients and blurred pseudo-elements
- Optional floating abstract orb or organic shape
- Ensure headline remains readable

**Copy:**

Eyebrow:
`YOUR PERSONAL GROWTH COMPANION`

Headline:
**Build a life you love.**  
**Become, one day at a time.**

Supporting text:
`AUREN brings your habits, wellness, productivity, learning, and personal growth into one intentional space.`

Primary CTA: `Start Your Journey`  
Secondary CTA: `Explore AUREN`

Hero visual options (choose one primary direction):
1. Glowing purple horizon / arc rising from the bottom
2. Floating abstract orb with purple light
3. Minimal 3D portal or soft geometric sculpture

Do not use generic stock photos. The hero should feel digital, atmospheric, and premium.

### Section 3 — Value Strip

Create a slim bordered panel below the hero, inspired by the reference’s trust strip.

Because AUREN is a new product, **do not fabricate user counts, ratings, testimonials, or partner logos**.

Use four product-value statements instead:
- `One space` — for your daily life
- `4 pillars` — for balanced growth
- `Small steps` — that build consistency
- `Your pace` — progress without pressure

Desktop: horizontal. Mobile: wrap or stack. Add subtle separators or small icons.

### Section 4 — Philosophy

Heading:
**A little better, every day.**

Supporting text:
`Growth isn’t about changing everything overnight. It’s about creating small routines that help you move toward the life you want.`

Keep the section centered, spacious, and minimal. Highlight one phrase in purple.

### Section 5 — Four Lifestyle Pillars

Create a responsive grid of four dark cards.

**Card 1 — Fitness & Wellness**  
`Move your body, build healthier routines, and make wellness part of your everyday life.`  
Icon idea: activity, heart-pulse, or dumbbell.

**Card 2 — Productivity**  
`Organize your day, focus on what matters, and turn intentions into meaningful action.`  
Icon idea: check-square, calendar-check, or target.

**Card 3 — Learning & Growth**  
`Keep learning, explore new interests, and track the progress of your personal goals.`  
Icon idea: book-open, brain, or graduation-cap.

**Card 4 — Spirituality**  
`Make room for ibadah, reflection, reading, and spiritual practices that matter to you.`  
Icon idea: sparkles, book, or moon-star.

**Card design:**
- Dark surface and thin border
- Purple icon in upper-left
- Small circular decorative arrow in upper-right
- Title and short description
- Hover: slight lift, border glow, and icon color shift
- One card may have a purple gradient accent; do not make every card bright purple

Do not rely on color alone to convey meaning.

### Section 6 — Full-Width Purple Feature Band

Create a wide purple-gradient section inspired by the reference’s bold feature band.

Heading:
**Designed for progress. Built around you.**

Supporting text:
`AUREN brings your daily routines together—so your progress feels clear, personal, and sustainable.`

Four feature blocks:

**01 — Your Daily Rhythm**  
Build a routine that fits your life.

**02 — Progress You Can See**  
Reflect on consistency and growth over time.

**03 — One Balanced Lifestyle**  
Bring wellness, focus, learning, and spirituality together.

**04 — Growth at Your Pace**  
Stay motivated without pressure or perfection.

Use a deep-purple gradient, subtle glow, and bordered blocks. Desktop: four columns. Tablet/mobile: responsive grid. Use large numerals.

Avoid guaranteed-result claims.

### Section 7 — Product Preview / Dashboard Showcase

Heading:
**Your life, in one clear view.**

Supporting text:
`A simple overview of the habits, activities, and goals you’re working toward.`

Show a polished dashboard mockup inside a large dark card.

Suggested mockup elements:
- Greeting: `Good morning`
- Date label
- Daily progress ring or bar
- Today’s tasks / habits
- Streak indicator
- Weekly activity chart
- Category chips: Wellness, Focus, Learning, Spirituality

**Important:**
- This is a visual preview only at this stage
- Sample values must be illustrative mock data
- Do not present mock values as real user data
- Do not build a dashboard backend during the landing-page milestone

Visual treatment: thin border, subtle shadow, purple chart/progress accent. Optional floating UI cards should be restrained.

### Section 8 — How It Works

Heading:
**Start small. Keep growing.**

Three steps:

**01 — Choose what matters**  
Set your focus across the areas of life you want to grow.

**02 — Take small daily actions**  
Build habits and routines one step at a time.

**03 — Reflect on your progress**  
See your consistency and make adjustments along the way.

Use three cards or a horizontal timeline. Stack vertically on mobile.

### Section 9 — Growth Cards / Community-Style Section

Heading:
**Your journey. Your kind of progress.**

Supporting text:
`There’s no single path to becoming your best self. Start with what matters to you.`

Card themes:
- A calmer morning
- A more consistent routine
- Making time to learn
- Finding space to reflect

The reference includes testimonial-style cards. For AUREN:
- Use aspirational prompts, not fake customer testimonials
- Do not invent customer names, profile photos, quotes, ratings, or reviews
- Use abstract circles or icons instead of fake avatars
- Optional horizontal carousel: 3–4 cards on desktop, swipeable on mobile
- Avoid forced auto-scroll; respect reduced-motion settings

### Section 10 — Final CTA

Use a strong purple glow with simple, clear content.

Heading:
**Your next chapter starts with one small step.**

Supporting text:
`Make space for the life you want to build.`

Primary CTA: `Start Your Journey`  
Secondary link: `Explore the Features`

Buttons should scroll to a signup/product area or use safe placeholders until a real route exists.

### Section 11 — Footer

Include:
- AUREN wordmark
- Tagline: `Build a life you love.`
- Links: Features, About, Privacy, Terms
- Copyright: `© [current year] AUREN`

Do not create Privacy or Terms pages unless requested. Avoid broken links.

---

## 5. Motion and Interaction

Motion should feel premium and intentional, not distracting.

Recommended:
- Hero glow: slow, subtle pulse
- Hero orb: slight floating motion
- Headline: fade/slide-in on load
- Cards: gentle 2–4px hover lift
- Buttons: subtle glow/color transition
- Sections: restrained scroll reveal
- Dashboard preview: optional light parallax

Accessibility:
- Respect `prefers-reduced-motion`
- Reduce/disable parallax and floating effects when requested
- Maintain readable contrast and keyboard navigation
- Provide visible focus states
- Avoid flashing and rapid animation

---

## 6. Responsive Requirements

**Desktop**
- Centered max-width container
- Large hero typography and purple glow
- Four lifestyle cards in a grid
- Four feature blocks in the purple band
- Large dashboard mockup

**Tablet**
- Reduce typography and spacing
- Use 2-column grids
- Collapse navigation if necessary

**Mobile**
- Single-column layout
- Smaller hero headline
- Collapsible navigation
- CTAs may stack or become full-width
- Cards stack vertically
- Dashboard preview remains legible
- Prevent horizontal overflow from glow or floating elements

---

## 7. Technical Stack

Use the current repository stack if it is already initialized. Otherwise, prefer:
- Next.js
- React
- TypeScript
- Tailwind CSS
- Lucide icons
- Framer Motion for restrained animation
- CSS gradients for the hero glow

### 3D

Do **not** add Three.js / React Three Fiber by default.

Start with CSS radial gradients, blur, pseudo-elements, and lightweight shapes. Only add React Three Fiber / Three.js if an interactive 3D hero is genuinely necessary and performance remains acceptable. Provide a non-3D fallback.

### Performance
- Avoid heavy video backgrounds
- Avoid large unoptimized images
- Lazy-load below-the-fold assets
- Prefer GPU-friendly animation
- Avoid excessive blur layers
- Test on mobile and CPU-limited devices

---

## 8. Suggested Component Structure

Adapt this to the existing repository. Do not duplicate components or restructure unnecessarily.

```text
src/
  app/
    page.tsx
    layout.tsx
    globals.css
  components/
    landing/
      Navbar.tsx
      HeroSection.tsx
      ValueStrip.tsx
      PhilosophySection.tsx
      PillarCards.tsx
      FeatureBand.tsx
      DashboardPreview.tsx
      HowItWorks.tsx
      GrowthCards.tsx
      FinalCTA.tsx
      Footer.tsx
```

---

## 9. Antigravity Implementation Prompt

Copy and paste the following prompt into Antigravity:

> Read `docs/landingpage.md` completely before making changes.
>
> Build the AUREN landing page based on this specification and the supplied visual reference. The reference is a premium dark landing page with a large purple radial hero glow, centered headline, compact navbar, value strip, card grids, full-width purple feature band, dashboard showcase, and final CTA.
>
> Adapt the design to AUREN, a personal growth and lifestyle companion. Do not use fintech or software-agency copy from the reference. Use AUREN’s four pillars: Fitness & Wellness, Productivity, Learning & Growth, and Spirituality.
>
> First inspect the existing repository, package manager, routes, styles, and installed dependencies. Preserve the existing project structure and avoid unnecessary changes. Do not create duplicate project folders.
>
> Implement the landing page using reusable components. Use a near-black background, purple glow, white typography, subtle borders, dark cards, and one full-width purple gradient band. The page should feel premium, modern, cinematic, and responsive—not like a generic template.
>
> Use CSS gradients for the hero glow. Do not add heavy 3D dependencies unless truly necessary. Keep animation restrained and respect `prefers-reduced-motion`.
>
> Do not fabricate testimonials, user counts, ratings, partner logos, or product capabilities. Dashboard values must be clearly illustrative mock data. CTA buttons should work by scrolling to sections or use safe placeholders; do not create broken routes.
>
> After implementation, run available lint/build checks, fix errors, and report the files changed, how to run the page, and any remaining issues.
>
> Implement the landing page first. Do not begin authentication, database, or backend work yet.

---

## 10. Milestones

### Milestone 1 — Layout
- [ ] Navbar
- [ ] Hero with purple glow
- [ ] Value strip
- [ ] Philosophy section
- [ ] Four lifestyle pillar cards

### Milestone 2 — Showcase
- [ ] Purple feature band
- [ ] Dashboard preview
- [ ] How it works
- [ ] Growth cards

### Milestone 3 — Finish
- [ ] Final CTA and footer
- [ ] Responsive design
- [ ] Hover and scroll motion
- [ ] Reduced-motion support
- [ ] Accessibility review
- [ ] Run build/lint checks
- [ ] Review in Antigravity browser preview

---

## 11. Definition of Done

The landing page is ready for review when:
- It follows the supplied reference’s structure and dark-purple premium aesthetic
- It clearly communicates AUREN’s purpose
- All four lifestyle pillars are represented
- It is responsive on desktop, tablet, and mobile
- CTA buttons work or have safe placeholder behavior
- No fake social proof or unsupported product claims are present
- Motion is restrained and accessible
- No major layout overflow or build/console errors remain
- It is ready for visual review before backend development
