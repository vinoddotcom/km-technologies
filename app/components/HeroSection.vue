<template>
  <div class="relative bg-base-100 min-h-screen overflow-hidden">
    <!-- Animated Background Gradients -->
    <div class="absolute inset-0 bg-gradient-to-br from-base-100 via-base-200 to-base-300"></div>
    <div class="absolute top-0 -right-40 w-[600px] h-[600px] bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
    <div class="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
    <div class="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 2s;"></div>
    
    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    
    <div class="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 min-h-screen flex items-center">
      <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        
        <!-- Content Section -->
        <div class="space-y-8 lg:pr-8">
          <!-- Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span class="text-xs font-bold tracking-wider uppercase text-primary">Engineering Excellence Since 2020</span>
          </div>
          
          <!-- Main Heading -->
          <div class="space-y-6">
            <h1 class="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black leading-[1.1] tracking-tight">
              <span class="block text-base-content">Build The Future</span>
              <span class="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent animate-gradient">
                With Confidence
              </span>
            </h1>
            <p class="text-lg sm:text-xl lg:text-2xl text-base-content/70 leading-relaxed max-w-2xl font-light">
              We architect <span class="font-semibold text-base-content">scalable software solutions</span> that transform businesses. From AI-powered systems to cloud-native applications.
            </p>
          </div>
          
          <!-- CTAs -->
          <div class="flex flex-col sm:flex-row gap-4 pt-4">
            <button class="btn btn-primary btn-lg group shadow-2xl shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 border-0 hover:-translate-y-1">
              <span>Start Your Project</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </button>
            <button class="btn btn-outline btn-lg group border-2 hover:border-primary hover:bg-primary/10">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"></path>
              </svg>
              <span>Watch Demo</span>
            </button>
          </div>
          
          <!-- Stats Row -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-base-content/10">
            <div class="space-y-1">
              <div class="text-3xl lg:text-4xl font-bold text-primary">200+</div>
              <div class="text-sm text-base-content/60">Projects Delivered</div>
            </div>
            <div class="space-y-1">
              <div class="text-3xl lg:text-4xl font-bold text-secondary">50+</div>
              <div class="text-sm text-base-content/60">Happy Clients</div>
            </div>
            <div class="space-y-1">
              <div class="text-3xl lg:text-4xl font-bold text-accent">99%</div>
              <div class="text-sm text-base-content/60">Satisfaction Rate</div>
            </div>
          </div>
        </div>
        
        <!-- Visual Section -->
        <div class="relative lg:h-[600px] flex items-center justify-center">
          <!-- Main Visual Card -->
          <div class="relative w-full max-w-lg">
            <!-- Floating Badge -->
            <div class="absolute -top-6 -left-6 z-20 card bg-base-100 shadow-2xl border border-base-content/10">
              <div class="card-body p-4 flex-row items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-success/20 flex items-center justify-center">
                  <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <div class="font-bold">Trusted Partner</div>
                  <div class="text-xs opacity-60">800+ Tech Companies</div>
                </div>
              </div>
            </div>
            
            <!-- Main Card -->
            <div class="card bg-gradient-to-br from-base-200 to-base-300 shadow-2xl border border-base-content/10 backdrop-blur-md">
              <div class="card-body p-8">
                <div class="grid grid-cols-3 gap-4">
                  <div v-for="(tech, index) in techStack" :key="index" 
                       class="aspect-square rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 hover:-rotate-3 flex items-center justify-center group cursor-pointer"
                       :style="{ animationDelay: `${index * 100}ms` }">
                    <div class="text-4xl group-hover:scale-125 transition-transform">{{ tech }}</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Floating Stats Card -->
            <div class="absolute -bottom-6 -right-6 z-20 card bg-base-100 shadow-2xl border border-base-content/10">
              <div class="card-body p-4">
                <div class="flex items-center gap-3">
                  <div class="radial-progress text-primary" style="--value:97; --size:3rem; --thickness: 4px;" role="progressbar">
                    <span class="text-xs font-bold">97%</span>
                  </div>
                  <div>
                    <div class="font-bold text-sm">On-Time Delivery</div>
                    <div class="text-xs opacity-60">Industry Leading</div>
                  </div>
                </div>
              </div>
            </div>
            
            <!-- Decorative Elements -->
            <div class="absolute -z-10 -top-10 -right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl"></div>
            <div class="absolute -z-10 -bottom-10 -left-10 w-72 h-72 bg-secondary/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
      </div>
    </div>
    
    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce hidden lg:block">
      <div class="flex flex-col items-center gap-2 opacity-40 hover:opacity-100 transition-opacity cursor-pointer">
        <span class="text-xs font-medium tracking-wider">SCROLL</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const techStack = ['☁️', '💻', '🔍', '🚀', '🤖', '⚡', '🎯', '💡', '🔒']
</script>

<style scoped>
@keyframes gradient {
  0%, 100% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
}

.animate-gradient {
  background-size: 200% 200%;
  animation: gradient 3s ease infinite;
}
</style>
