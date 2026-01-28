# KM Global Tech - IT Services Website

A modern, responsive website built with **Nuxt 4** and **DaisyUI**, following best practices for software engineering and component architecture.

## 🏗️ Project Structure (Nuxt 4)

```
km-it-services/
├── app/
│   ├── app.vue              # Main app entry (router outlet)
│   ├── pages/               # ✅ Nuxt 4: Pages inside app/
│   │   └── index.vue        # Homepage route
│   └── tailwind.css         # Tailwind + DaisyUI configuration
├── components/
│   ├── AppHeader.vue        # Responsive navbar with dropdown
│   ├── HeroSection.vue      # Hero with CTAs
│   ├── TrustStrip.vue       # Trust badges and testimonial
│   ├── ServicesSection.vue  # Services cards grid
│   ├── ProcessSection.vue   # Process timeline/steps
│   ├── CaseStudiesSection.vue # Case studies grid
│   ├── WhyChooseSection.vue   # Stats/reasons to choose
│   ├── CTASection.vue       # Final call-to-action
│   └── AppFooter.vue        # Footer with links
└── public/                  # Static assets
```

**📖 Nuxt 4 Note**: Pages must be in `app/pages/` directory (not root `pages/`).

## 🎨 Design System

### DaisyUI Components Used
- ✅ **navbar** - Responsive header with dropdown
- ✅ **hero** - Hero section layout
- ✅ **card** - Service and case study cards
- ✅ **badge** - Trust indicators and tags
- ✅ **btn** - All buttons (primary, outline, ghost)
- ✅ **collapse** - Expandable service details
- ✅ **steps** - Process timeline
- ✅ **stats** - Why choose us metrics
- ✅ **footer** - Multi-column footer
- ✅ **alert** - Trust info banner
- ✅ **divider** - Section separators
- ✅ **avatar** - Icon placeholders
- ✅ **dropdown** - Theme selector & mobile menu

### Responsive Breakpoints
- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (sm-lg)
- **Desktop**: > 1024px (lg+)

All components are **fully responsive** with:
- Mobile-first design
- Proper grid layouts (1 col → 2 col → 4 col)
- Responsive typography (`text-sm sm:text-base lg:text-xl`)
- Responsive spacing (`py-4 sm:py-8 lg:py-12`)
- Conditional visibility (`hidden sm:block`)

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
npm install
```

### Development
```bash
npm run dev
```
Visit `http://localhost:3000`

### Build
```bash
npm run build
```

### Preview Production
```bash
npm run preview
```

## 📱 Features

- ✅ **Fully Responsive** - Works on all devices
- ✅ **DaisyUI Components** - Strictly using DaisyUI classes
- ✅ **Component Architecture** - Clean, reusable components
- ✅ **Nuxt 4** - Latest Nuxt with pages directory
- ✅ **Theme Switcher** - 34 DaisyUI themes
- ✅ **Accessibility** - ARIA labels, keyboard navigation
- ✅ **Modern Design** - Clean, professional look
- ✅ **Performance** - Optimized loading

## 🎯 Sections

1. **Header** - Sticky navbar with dropdown menus
2. **Hero** - Main value proposition with CTAs
3. **Trust Strip** - Certifications and testimonials
4. **Services** - 4 core service offerings
5. **Process** - 5-step development process
6. **Case Studies** - 3 success stories
7. **Why Choose** - 4 key differentiators
8. **CTA** - Final conversion section
9. **Footer** - Links and company info

## 🛠️ Technologies

- **Nuxt 4** - Full-stack Vue framework
- **Vue 3** - Progressive JavaScript framework
- **DaisyUI** - UI component library
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety

## 📝 License

Proprietary - KM Global Tech © 2026
