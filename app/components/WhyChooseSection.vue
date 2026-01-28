<template>
  <div class="bg-base-100 py-24 lg:py-32 relative overflow-hidden">
    <!-- Background Elements -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div class="absolute bottom-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div class="text-center mb-16 lg:mb-20">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
          <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
          </svg>
          <span class="text-xs font-bold tracking-wider uppercase text-primary">Why Choose Us</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
          <span class="bg-gradient-to-r from-base-content via-primary to-base-content bg-clip-text text-transparent">
            Built on Excellence
          </span>
        </h2>
        <p class="text-lg sm:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
          We don't just write code — we build <span class="font-semibold text-base-content">lasting partnerships</span> with companies that value quality.
        </p>
      </div>
      
      <!-- Reasons Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <div 
          v-for="(reason, index) in whyChooseUs" 
          :key="index"
          :ref="el => { if (el) cardRefs[index] = el as unknown as HTMLElement }"
          :class="[
            'group relative transition-all duration-500',
            isVisible[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          ]"
          :style="{ transitionDelay: `${index * 100}ms` }"
        >
          <!-- Card with Gradient Border -->
          <div class="relative h-full">
            <!-- Gradient Border Effect -->
            <div :class="['absolute inset-0 rounded-2xl blur-sm transition-opacity duration-300', reason.gradientBg, 'opacity-0 group-hover:opacity-100']"></div>
            
            <!-- Main Card -->
            <div class="relative card bg-base-100 shadow-xl hover:shadow-2xl border border-base-content/10 hover:border-primary/20 h-full transition-all duration-300 hover:-translate-y-2">
              <div class="card-body p-6 sm:p-8">
                <!-- Icon -->
                <div :class="['w-16 h-16 rounded-2xl flex items-center justify-center text-4xl mb-4 shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6', reason.iconBg]">
                  {{ reason.icon }}
                </div>
                
                <!-- Animated Stat -->
                <div class="mb-3">
                  <div :class="['text-4xl sm:text-5xl font-black mb-1 transition-all duration-500', reason.statColor]">
                    <span v-if="isVisible[index]" :class="{ 'animate-count': isVisible[index] }">
                      {{ reason.stat }}
                    </span>
                    <span v-else>—</span>
                  </div>
                  <div class="h-1 w-12 rounded-full bg-gradient-to-r from-primary to-transparent"></div>
                </div>
                
                <!-- Title -->
                <h3 class="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {{ reason.title }}
                </h3>
                
                <!-- Description -->
                <p class="text-sm text-base-content/70 leading-relaxed">
                  {{ reason.description }}
                </p>
                
                <!-- Hover Indicator -->
                <div class="mt-4 pt-4 border-t border-base-content/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div class="flex items-center gap-2 text-xs font-semibold text-primary">
                    <span>Learn more</span>
                    <svg class="w-3 h-3 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Additional Trust Signals -->
      <div class="mt-16 text-center">
        <div class="inline-flex flex-wrap items-center justify-center gap-8 text-sm text-base-content/60">
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>ISO Certified</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>SOC 2 Compliant</span>
          </div>
          <div class="flex items-center gap-2">
            <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
            <span>GDPR Ready</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const cardRefs = ref<(HTMLElement | null)[]>([]);
const isVisible = ref<boolean[]>([false, false, false, false]);

const whyChooseUs = [
  {
    icon: "👨‍💻",
    title: "Engineering-First Culture",
    description: "Every team member is a senior engineer with 5+ years of proven experience delivering production systems.",
    stat: "8+ Yrs",
    statColor: "text-primary",
    iconBg: "bg-primary/10",
    gradientBg: "bg-gradient-to-r from-primary to-primary/50"
  },
  {
    icon: "🔒",
    title: "Security & Compliance",
    description: "ISO-certified processes, SOC 2 compliance, and security-first architecture in everything we build.",
    stat: "100%",
    statColor: "text-secondary",
    iconBg: "bg-secondary/10",
    gradientBg: "bg-gradient-to-r from-secondary to-secondary/50"
  },
  {
    icon: "📊",
    title: "Transparent Delivery",
    description: "Real-time dashboards, daily standups, and complete project visibility from day one to deployment.",
    stat: "99%",
    statColor: "text-accent",
    iconBg: "bg-accent/10",
    gradientBg: "bg-gradient-to-r from-accent to-accent/50"
  },
  {
    icon: "🤝",
    title: "Long-Term Partnership",
    description: "We're not just vendors — we become your dedicated technology partners invested in your success.",
    stat: "3+ Yrs",
    statColor: "text-info",
    iconBg: "bg-info/10",
    gradientBg: "bg-gradient-to-r from-info to-info/50"
  },
];

const checkVisibility = () => {
  cardRefs.value.forEach((el, index) => {
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    if (rect.top < windowHeight * 0.8 && rect.bottom > 0) {
      isVisible.value[index] = true;
    }
  });
};

onMounted(() => {
  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
});

onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility);
  window.removeEventListener('resize', checkVisibility);
});
</script>

<style scoped>
@keyframes count {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

.animate-count {
  animation: count 0.5s ease-out;
}
</style>
