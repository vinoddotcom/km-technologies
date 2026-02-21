<template>
  <div class="min-h-screen bg-base-100 pt-32 pb-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-16 space-y-6">
         <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
          <span class="text-xs font-bold tracking-wider uppercase text-primary">Our Perspectives</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-base-content">
          Insights from the <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Edge of Tech</span>
        </h1>
        <p class="text-lg text-base-content/70 leading-relaxed max-w-2xl mx-auto">
          Read the latest articles, engineering principles, design patterns, and industry trends directly from the experts pushing boundaries at KM Software's.
        </p>
      </div>

      <!-- Feature Article -->
      <div class="mb-16">
        <div class="bg-base-100 rounded-3xl border border-base-content/10 overflow-hidden lg:flex flex-row hover:shadow-2xl hover:border-primary/30 transition-all group">
           <div class="lg:w-1/2 bg-base-200 min-h-[300px] lg:min-h-full flex justify-center items-center font-bold text-base-content/20 text-2xl tracking-widest relative overflow-hidden">
             <div class="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors"></div>
             ARCHITECT
           </div>
           <div class="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
             <div class="flex items-center gap-2 mb-4">
               <span class="badge badge-primary">Engineering</span>
               <span class="text-xs font-semibold text-base-content/40 uppercase tracking-widest">Just Now</span>
             </div>
             <NuxtLink to="/#">
               <h2 class="text-3xl font-bold mb-4 group-hover:text-primary transition-colors">The Transition from Monolithic to Composable AI Architectures</h2>
             </NuxtLink>
             <p class="text-base-content/70 mb-8 leading-relaxed">
               As scaling demands soar, building static monolithic machine learning pipelines has quickly become an anti-pattern. Discover how modern teams deploy composable architecture effectively.
             </p>
             <NuxtLink to="/#" class="font-bold text-primary flex items-center gap-2 max-w-max hover:opacity-75 transition-opacity">
               Read Article 
               <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
             </NuxtLink>
           </div>
        </div>
      </div>

      <!-- Recent Articles Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Post 1 -->
        <div class="card bg-base-100 border border-base-content/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
           <div class="h-48 bg-base-200 flex justify-center items-center text-base-content/20 tracking-widest font-bold">CYBERSECURITY</div>
           <div class="card-body p-6">
              <span class="text-xs font-bold text-secondary uppercase tracking-widest mb-2 block">Security Updates</span>
              <h3 class="card-title text-xl font-bold leading-tight group-hover:text-primary transition-colors">Zero Trust Networking in the Era of Remote Developers</h3>
              <p class="text-sm text-base-content/70 mt-2 mb-4 line-clamp-3">A detailed exploration of Zero Trust principles, securing endpoints, and protecting corporate assets without locking down developer productivity.</p>
              <div class="mt-auto">
                 <NuxtLink to="/#" class="text-sm font-semibold text-base-content/50 hover:text-primary transition-colors">Read More →</NuxtLink>
              </div>
           </div>
        </div>

        <!-- Post 2 -->
        <div class="card bg-base-100 border border-base-content/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
           <div class="h-48 bg-base-200 flex justify-center items-center text-base-content/20 tracking-widest font-bold">FRONTEND</div>
           <div class="card-body p-6">
              <span class="text-xs font-bold text-accent uppercase tracking-widest mb-2 block">Web Development</span>
              <h3 class="card-title text-xl font-bold leading-tight group-hover:text-primary transition-colors">Why Vue and Nuxt are Winning the Enterprise Market</h3>
              <p class="text-sm text-base-content/70 mt-2 mb-4 line-clamp-3">We analyze the performance, developer experience, and scalability factors that elevate Nuxt 4 as the premier choice over its React-based competitors.</p>
              <div class="mt-auto">
                 <NuxtLink to="/#" class="text-sm font-semibold text-base-content/50 hover:text-primary transition-colors">Read More →</NuxtLink>
              </div>
           </div>
        </div>

        <!-- Post 3 -->
        <div class="card bg-base-100 border border-base-content/10 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all group">
           <div class="h-48 bg-base-200 flex justify-center items-center text-base-content/20 tracking-widest font-bold">UX DESIGN</div>
           <div class="card-body p-6">
              <span class="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">Culture & Design</span>
              <h3 class="card-title text-xl font-bold leading-tight group-hover:text-primary transition-colors">WCAG 2.2 Compliant Color Spaces for Maximum Conversion</h3>
              <p class="text-sm text-base-content/70 mt-2 mb-4 line-clamp-3">Exploring the exact methodology we use to map contrast ratios in SaaS dashboard design to guarantee flawless accessibility metrics.</p>
              <div class="mt-auto">
                 <NuxtLink to="/#" class="text-sm font-semibold text-base-content/50 hover:text-primary transition-colors">Read More →</NuxtLink>
              </div>
           </div>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Blog & Engineering Insights | KM Software\'s',
  description: 'Read the latest deep-dives into software architecture, Nuxt 4 development, machine learning, and cybersecurity.',
})
</script>
