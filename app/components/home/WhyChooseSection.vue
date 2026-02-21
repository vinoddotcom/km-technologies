<template>
  <section class="pt-10 pb-20 sm:pt-14 sm:pb-24 bg-base-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span class="text-sm font-semibold text-primary">Why Us</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black">
          Why Choose <span class="text-primary">KM Software's</span>?
        </h2>
        <p class="text-lg text-base-content/60 font-light">
          We deliver excellence through experience, innovation, and dedication
        </p>
      </div>

      <!-- Features Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        <div 
          v-for="(feature, index) in features" 
          :key="feature.title"
          class="group card bg-base-200/50 hover:bg-base-200 border border-base-content/5 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-md"
        >
          <div class="card-body items-center text-center p-8">
            <!-- Icon -->
            <div 
              class="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500"
              :class="iconBgColors[index % iconBgColors.length]"
            >
              <div v-html="feature.icon" class="w-8 h-8" :class="iconColors[index % iconColors.length]"></div>
            </div>
            
            <!-- Title -->
            <h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors">
              {{ feature.title }}
            </h3>
            
            <!-- Description -->
            <p class="text-base-content/60 text-sm leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const iconBgColors = [
  'bg-primary/10',
  'bg-secondary/10',
  'bg-accent/10',
  'bg-primary/10',
]

const iconColors = [
  'text-primary',
  'text-secondary',
  'text-accent',
  'text-primary',
]

const features = ref([
  {
    title: "10+ Years Experience",
    description: "A decade of delivering cutting-edge technology solutions across diverse industries",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>`
  },
  {
    title: "100+ Projects Delivered",
    description: "Successfully completed projects ranging from startups to enterprise-level applications",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"></path></svg>`
  },
  {
    title: "Agile & Secure",
    description: "Modern development practices with security-first approach and continuous delivery",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>`
  },
  {
    title: "Dedicated Support",
    description: "24/7 technical support team ensuring your systems run smoothly at all times",
    icon: `<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z"></path></svg>`
  },
])
</script>
