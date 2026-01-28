<template>
  <div class="bg-base-100 py-16 border-y border-base-content/5 overflow-hidden relative">
    <!-- Background -->
    <div class="absolute inset-0 bg-gradient-to-r from-transparent via-base-200/30 to-transparent"></div>
    
    <div class="container mx-auto px-4 mb-10 text-center relative z-10">
      <p class="text-xs font-bold text-base-content/40 tracking-[0.3em] uppercase mb-2">Trusted By Industry Leaders</p>
      <div class="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto"></div>
    </div>
    
    <!-- Marquee Effect -->
    <div class="relative flex overflow-x-hidden">
      <div class="animate-marquee whitespace-nowrap flex gap-12 items-center px-4">
        <span v-for="i in 8" :key="i" class="flex gap-12 items-center">
          <div v-for="(company, idx) in companies" :key="`${i}-${idx}`" 
               class="flex-shrink-0 px-8 py-4 rounded-xl bg-base-200/50 backdrop-blur-sm hover:bg-base-200 transition-all duration-300 cursor-pointer group border border-base-content/5 hover:border-primary/20 hover:shadow-lg">
            <div class="flex items-center gap-3 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all">
              <span class="text-3xl">{{ company.icon }}</span>
              <span class="text-base font-bold">{{ company.name }}</span>
            </div>
          </div>
        </span>
      </div>
      
      <!-- Gradient Overlays -->
      <div class="absolute top-0 right-0 w-40 h-full bg-gradient-to-l from-base-100 via-base-100/80 to-transparent z-10 pointer-events-none"></div>
      <div class="absolute top-0 left-0 w-40 h-full bg-gradient-to-r from-base-100 via-base-100/80 to-transparent z-10 pointer-events-none"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
const companies = [
  { name: "ISO Certified", icon: "🏆" },
  { name: "SOC 2", icon: "🔒" },
  { name: "AWS Partner", icon: "☁️" },
  { name: "Google Cloud", icon: "🌐" },
  { name: "Microsoft", icon: "💼" },
  { name: "Top Rated", icon: "⭐" },
];
</script>

<style scoped>
.animate-marquee {
  animation: marquee 60s linear infinite;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

@keyframes marquee {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
</style>
