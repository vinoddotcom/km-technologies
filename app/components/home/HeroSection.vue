<template>
  <section class="relative min-h-[90vh] flex items-center bg-gradient-to-br from-base-100 via-base-100 to-primary/5 overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-30">
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(var(--p)/0.15),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(var(--s)/0.1),transparent_40%)]"></div>
      <div class="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl"></div>
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24 pb-16">
      <div class="max-w-5xl mx-auto text-center space-y-8">
        <!-- Badge -->
        <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span class="text-sm font-semibold text-primary">{{ badge }}</span>
        </div>

        <!-- Main Heading -->
        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight">
          <span class="text-base-content">{{ headingLine1 }}</span>
          <span class="block mt-2 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
            {{ headingLine2 }}
          </span>
        </h1>

        <!-- Subheading — Issue 1: Increased opacity and font size for better visibility -->
        <p class="text-xl sm:text-2xl md:text-2xl text-base-content/90 max-w-3xl mx-auto leading-relaxed font-medium">
          {{ subheading }}
        </p>
        <p class="text-base sm:text-lg text-base-content/80 max-w-2xl mx-auto leading-relaxed">
          {{ subheadingLine2 }}
        </p>

        <!-- CTA Buttons -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <NuxtLink 
            to="/contact" 
            class="btn btn-primary btn-lg px-8 shadow-xl shadow-primary/25 hover:shadow-2xl hover:shadow-primary/40 hover:scale-105 transition-all duration-300 group"
          >
            <span class="font-bold">{{ ctaPrimary }}</span>
            <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </NuxtLink>
          
          <NuxtLink 
            to="/#portfolio" 
            class="btn btn-outline btn-lg px-8 hover:scale-105 transition-all duration-300"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
            <span class="font-bold">{{ ctaSecondary }}</span>
          </NuxtLink>
        </div>

        <!-- Stats — Issue 2: Count-up animation on scroll -->
        <div class="pt-12" ref="statsSection">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div 
              v-for="(stat, index) in stats" 
              :key="stat.label"
              class="text-center p-5 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-primary/20 hover:bg-base-200/80 transition-all duration-300"
            >
              <!-- Animated counter value -->
              <div class="text-3xl sm:text-4xl font-black text-primary">
                {{ displayValues[index] }}{{ stat.suffix }}
              </div>
              <!-- Issue 2: Bigger subtext label size -->
              <div class="text-base font-medium text-base-content/75 mt-1.5">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Trust Strip — Issue 2: Highlighted with bold checkmarks and primary color -->
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 pt-2">
          <span 
            v-for="trust in trustItems" 
            :key="trust"
            class="inline-flex items-center gap-2 text-base font-semibold text-base-content/85"
          >
            <span class="text-success font-black text-lg">✓</span>
            {{ trust }}
          </span>
        </div>
      </div>
    </div>

    <!-- Bottom Gradient -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100 to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
// Issue 1: Updated subheading content with better text for improved visibility
const badge = "Trusted by 50+ Businesses Worldwide"
const headingLine1 = "We Build Scalable Digital"
const headingLine2 = "Solutions for Your Business"
// Issue 1: Two-line subheading — first line is the key proposition, second is the supporting line
const subheading = "Web, Mobile & Software Development Services Tailored for Scalable Growth."
const subheadingLine2 = "Transform your ideas into powerful digital products with our expert engineering team."
const ctaPrimary = "Get Free Consultation"
const ctaSecondary = "View Our Work"

// Issue 2: Trust items as array for v-for rendering with highlight
const trustItems = ["Free Consultation", "Flexible Pricing", "24/7 Dedicated Support"]

interface Stat {
  target: number
  suffix: string
  label: string
}

const stats: Stat[] = [
  { target: 10, suffix: "+", label: "Years Experience" },
  { target: 100, suffix: "+", label: "Projects Delivered" },
  { target: 50, suffix: "+", label: "Happy Clients" },
  { target: 99, suffix: "%", label: "Client Satisfaction" },
]

// Issue 2: Count-up animation — starts at 0, counts up to target value when section enters viewport
const displayValues = ref<number[]>(stats.map(() => 0))
const statsSection = ref<HTMLElement | null>(null)
const hasAnimated = ref(false)

function animateCountUp() {
  if (hasAnimated.value) return
  hasAnimated.value = true

  stats.forEach((stat, index) => {
    const duration = 1800 // ms
    const steps = 60
    const increment = stat.target / steps
    let current = 0
    let step = 0

    const interval = setInterval(() => {
      step++
      // Ease-out: slower at the end
      current = Math.round(stat.target * (1 - Math.pow(1 - step / steps, 3)))
      displayValues.value[index] = current

      if (step >= steps) {
        displayValues.value[index] = stat.target
        clearInterval(interval)
      }
    }, duration / steps)
  })
}

onMounted(() => {
  // Use IntersectionObserver so animation fires when stat section scrolls into view
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCountUp()
          observer.disconnect()
        }
      })
    },
    { threshold: 0.3 }
  )

  if (statsSection.value) {
    observer.observe(statsSection.value)
  }
})
</script>
