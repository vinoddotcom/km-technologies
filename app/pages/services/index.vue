<template>
  <div class="min-h-screen bg-base-100 pt-32 pb-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-16 space-y-6">
         <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
          <span class="text-xs font-bold tracking-wider uppercase text-primary">Capabilities & Solutions</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-base-content">
          Empowering Your Digital <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Transformation</span>
        </h1>
        <p class="text-lg text-base-content/70 leading-relaxed max-w-2xl mx-auto">
          From cutting-edge AI integrations to bespoke enterprise software, our elite teams engineer digital products that scale, protect, and drive revenue.
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
        
        <!-- Service 1 -->
        <div class="card bg-base-100 border border-base-content/10 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="card-body relative z-10 p-8">
            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              <svg class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h2 class="card-title text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Custom Software</h2>
            <p class="text-base-content/70 text-sm leading-relaxed mb-6">
              Tailored enterprise software designed for scale, performance, and specific business bottlenecks using modern stack mechanics.
            </p>
            <div class="mt-auto">
              <NuxtLink to="/services/custom-software" class="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Explore Solution 
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service 2 -->
        <div class="card bg-base-100 border border-base-content/10 shadow-sm hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="card-body relative z-10 p-8">
            <div class="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
              <svg class="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h2 class="card-title text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">Website Development</h2>
            <p class="text-base-content/70 text-sm leading-relaxed mb-6">
              High-converting, responsive websites and intricate web apps built on Nuxt, Vue, and optimized React frameworks.
            </p>
            <div class="mt-auto">
              <NuxtLink to="/services/website-development" class="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                Explore Solution 
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service 3 -->
        <div class="card bg-base-100 border border-base-content/10 shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all duration-300 group overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="card-body relative z-10 p-8">
            <div class="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
              <svg class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 class="card-title text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Mobile Apps</h2>
            <p class="text-base-content/70 text-sm leading-relaxed mb-6">
              Cross-platform architectures for iOS and Android utilizing Flutter and React Native for flawless mobile experiences.
            </p>
            <div class="mt-auto">
              <NuxtLink to="/services/mobile-apps" class="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Explore Solution 
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service 4 -->
        <div class="card bg-base-100 border border-base-content/10 shadow-sm hover:shadow-2xl hover:border-primary/30 transition-all duration-300 group overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="card-body relative z-10 p-8">
            <div class="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
              <svg class="w-7 h-7 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 class="card-title text-2xl font-bold mb-3 group-hover:text-primary transition-colors">AI & Machine Learning</h2>
            <p class="text-base-content/70 text-sm leading-relaxed mb-6">
              Empower pipelines with generative models, predictive analytics, and automated decision-making engines.
            </p>
            <div class="mt-auto">
              <NuxtLink to="/services/ai-ml" class="flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                Explore Solution 
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service 5 -->
        <div class="card bg-base-100 border border-base-content/10 shadow-sm hover:shadow-2xl hover:border-secondary/30 transition-all duration-300 group overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-b from-secondary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="card-body relative z-10 p-8">
            <div class="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-secondary/20 transition-all duration-300">
              <svg class="w-7 h-7 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h2 class="card-title text-2xl font-bold mb-3 group-hover:text-secondary transition-colors">Cyber Security</h2>
            <p class="text-base-content/70 text-sm leading-relaxed mb-6">
              Implement zero-trust setups, endpoint protections, penetration audits, and rigid compliance methodologies.
            </p>
            <div class="mt-auto">
              <NuxtLink to="/services/cyber-security" class="flex items-center gap-2 text-secondary font-semibold group-hover:gap-3 transition-all">
                Explore Solution 
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Service 6 -->
        <div class="card bg-base-100 border border-base-content/10 shadow-sm hover:shadow-2xl hover:border-accent/30 transition-all duration-300 group overflow-hidden relative">
          <div class="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
          <div class="card-body relative z-10 p-8">
            <div class="w-14 h-14 bg-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/20 transition-all duration-300">
              <svg class="w-7 h-7 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h2 class="card-title text-2xl font-bold mb-3 group-hover:text-accent transition-colors">Dedicated Developers</h2>
            <p class="text-base-content/70 text-sm leading-relaxed mb-6">
              Staff augmentation solutions empowering you to scale engineering teams instantly with our trained professionals.
            </p>
            <div class="mt-auto">
              <NuxtLink to="/services/dedicated-developers" class="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all">
                Explore Solution 
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Our Services & Capabilities | KM Software\'s',
  description: 'Explore our full spectrum of IT solutions, covering web, mobile, custom software, cybersecurity, and artificial intelligence.',
})
</script>
