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

        <!-- Subheading -->
        <p class="text-lg sm:text-xl md:text-2xl text-base-content/70 max-w-3xl mx-auto leading-relaxed font-light">
          {{ subheading }}
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

        <!-- Stats -->
        <div class="pt-12">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div 
              v-for="stat in stats" 
              :key="stat.label"
              class="text-center p-4 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-primary/20 hover:bg-base-200/80 transition-all duration-300"
            >
              <div class="text-3xl sm:text-4xl font-black text-primary">{{ stat.value }}</div>
              <div class="text-sm text-base-content/60 mt-1">{{ stat.label }}</div>
            </div>
          </div>
        </div>

        <!-- Trust Text -->
        <p class="text-sm text-base-content/50 pt-4">
          {{ trustText }}
        </p>
      </div>
    </div>

    <!-- Bottom Gradient -->
    <div class="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-base-100 to-transparent"></div>
  </section>
</template>

<script setup lang="ts">
const badge = "Trusted by 50+ Businesses Worldwide"
const headingLine1 = "We Build Scalable Digital"
const headingLine2 = "Solutions for Your Business"
const subheading = "Web, Mobile & Software Development Services Tailored for Growth. Transform your ideas into powerful digital products with our expert team."
const ctaPrimary = "Get Free Consultation"
const ctaSecondary = "View Our Work"
const trustText = "✓ No upfront costs  ✓ Free project consultation  ✓ 24/7 dedicated support"

const stats = ref([
  { value: "10+", label: "Years Experience" },
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99%", label: "Client Satisfaction" },
])
</script>
