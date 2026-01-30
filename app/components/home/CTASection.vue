<template>
  <section class="py-20 sm:py-24 relative overflow-hidden">
    <!-- Gradient Background -->
    <div class="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
    <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <div class="max-w-4xl mx-auto">
        <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border border-white/20 shadow-2xl">
          <div class="text-center text-white">
            <!-- Heading -->
            <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 leading-tight">
              {{ heading }}
            </h2>
            
            <!-- Subtext -->
            <p class="text-lg sm:text-xl opacity-90 mb-10 max-w-2xl mx-auto leading-relaxed">
              {{ subtext }}
            </p>
            
            <!-- CTA Buttons -->
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <NuxtLink 
                to="/contact" 
                class="btn btn-lg bg-white text-primary hover:bg-white/90 border-none shadow-xl hover:shadow-2xl hover:scale-105 transition-all px-8 group"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span class="font-bold">Contact Us Today</span>
              </NuxtLink>
              
              <NuxtLink 
                to="/contact?type=quote" 
                class="btn btn-lg btn-outline border-2 border-white text-white hover:bg-white hover:text-primary transition-all px-8 group"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span class="font-bold">Request a Quote</span>
              </NuxtLink>
            </div>
            
            <!-- Trust Metrics -->
            <div class="pt-8 border-t border-white/20">
              <div class="grid grid-cols-2 sm:grid-cols-4 gap-6">
                <div 
                  v-for="metric in metrics" 
                  :key="metric.label"
                  class="text-center"
                >
                  <div class="text-2xl sm:text-3xl font-black">{{ metric.value }}</div>
                  <div class="text-xs sm:text-sm opacity-80">{{ metric.label }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Metric {
  value: string;
  label: string;
}

const heading = "Let's Build Something Great Together"
const subtext = "Ready to transform your business with cutting-edge technology? Our team is here to help you achieve your goals."

const metrics = ref<Metric[]>([
  { value: "100+", label: "Projects Delivered" },
  { value: "50+", label: "Happy Clients" },
  { value: "99.9%", label: "Uptime Guarantee" },
  { value: "24/7", label: "Support Available" },
])
</script>
