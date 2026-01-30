<template>
  <section class="pt-10 pb-20 sm:py-14 sm:pb-24 bg-gradient-to-b from-base-100 to-base-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-secondary/10 border border-secondary/20">
          <span class="text-sm font-semibold text-secondary">Industries</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black">
          Industries We <span class="text-primary">Serve</span>
        </h2>
        <p class="text-lg text-base-content/60 font-light">
          Delivering specialized solutions across diverse business sectors
        </p>
      </div>

      <!-- Industries Grid -->
      <div class="max-w-5xl mx-auto">
        <div class="flex flex-wrap justify-center gap-3">
          <div 
            v-for="industry in industries" 
            :key="industry.name"
            class="group px-4 py-3 rounded-xl bg-base-100 border border-base-content/10 hover:border-primary/30 hover:bg-primary/5 transition-all duration-300 cursor-default"
          >
            <div class="flex items-center gap-2">
              <span class="text-xl group-hover:scale-110 transition-transform">{{ industry.icon }}</span>
              <span class="text-sm font-medium text-base-content/80 group-hover:text-primary transition-colors">
                {{ industry.name }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- Featured Industries -->
      <div class="mt-16 max-w-6xl mx-auto">
        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div 
            v-for="featured in featuredIndustries" 
            :key="featured.name"
            class="group card bg-base-100 border border-base-content/5 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div class="card-body p-5 items-center text-center">
              <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-2 group-hover:scale-110 transition-transform">
                <span class="text-3xl">{{ featured.icon }}</span>
              </div>
              <h3 class="font-bold text-base-content group-hover:text-primary transition-colors">
                {{ featured.name }}
              </h3>
              <p class="text-xs text-base-content/60">{{ featured.projects }}+ Projects</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Industry {
  name: string;
  icon: string;
}

interface FeaturedIndustry extends Industry {
  projects: number;
}

const industries = ref<Industry[]>([
  { name: "Healthcare", icon: "🏥" },
  { name: "FinTech", icon: "💰" },
  { name: "E-Commerce", icon: "🛒" },
  { name: "EdTech", icon: "📚" },
  { name: "Real Estate", icon: "🏢" },
  { name: "Logistics", icon: "🚚" },
  { name: "Banking", icon: "🏦" },
  { name: "Insurance", icon: "🛡️" },
  { name: "Travel", icon: "✈️" },
  { name: "Media", icon: "🎬" },
  { name: "Retail", icon: "🏪" },
  { name: "Manufacturing", icon: "🏭" },
  { name: "Automotive", icon: "🚗" },
  { name: "Telecom", icon: "📡" },
  { name: "Energy", icon: "⚡" },
  { name: "Agriculture", icon: "🌾" },
  { name: "Government", icon: "🏛️" },
  { name: "Sports", icon: "⚽" },
  { name: "Food Tech", icon: "🍔" },
  { name: "HR Tech", icon: "👥" },
  { name: "Marketing", icon: "📢" },
  { name: "Gaming", icon: "🎮" },
  { name: "Blockchain", icon: "🔗" },
  { name: "IoT", icon: "📱" },
  { name: "SaaS", icon: "☁️" },
])

const featuredIndustries = ref<FeaturedIndustry[]>([
  { name: "Healthcare", icon: "🏥", projects: 25 },
  { name: "FinTech", icon: "💰", projects: 30 },
  { name: "E-Commerce", icon: "🛒", projects: 35 },
  { name: "EdTech", icon: "📚", projects: 20 },
])
</script>
