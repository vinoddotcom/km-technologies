<template>
  <div class="min-h-screen bg-base-100 pt-32 pb-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="max-w-4xl mx-auto text-center mb-16 space-y-6">
         <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">
          <span class="text-xs font-bold tracking-wider uppercase text-primary">Case Studies</span>
        </div>
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-base-content">
          Proven <span class="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Results</span> for Real Businesses
        </h1>
        <p class="text-lg text-base-content/70 leading-relaxed max-w-2xl mx-auto">
          Explore how our strategic software engineering and digital transformation solutions have optimized operations and scaled revenues for our clients worldwide.
        </p>
      </div>

      <!-- Case Studies Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Study 1 -->
        <div class="card bg-base-100 border border-base-content/10 overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all group">
          <figure class="h-60 bg-base-200 overflow-hidden relative">
            <div class="absolute inset-0 bg-base-300 flex items-center justify-center font-bold text-base-content/20 text-xl tracking-widest group-hover:scale-110 transition-transform duration-700">FINTECH</div>
            <div class="absolute bottom-4 left-4">
              <span class="badge badge-primary border-none shadow-lg">Finance</span>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-2xl font-black group-hover:text-primary transition-colors">Digital Banking App Modernization</h2>
            <p class="text-base-content/70 text-sm mt-2">How we helped an enterprise bank transition their legacy monolithic infrastructure into a resilient, scalable microservices architecture using Nuxt and Node.js.</p>
            
            <div class="flex gap-4 my-6">
              <div>
                <p class="text-xl font-black text-secondary">300%</p>
                <p class="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Performance</p>
              </div>
              <div>
                <p class="text-xl font-black text-secondary">1.2M+</p>
                <p class="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Active Users</p>
              </div>
            </div>

            <div class="card-actions justify-end mt-auto pt-4 border-t border-base-content/10">
              <NuxtLink to="/contact" class="btn btn-ghost hover:bg-primary/10 text-primary group/btn">
                Discuss Your Project
                <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Study 2 -->
        <div class="card bg-base-100 border border-base-content/10 overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all group">
          <figure class="h-60 bg-base-200 overflow-hidden relative">
            <div class="absolute inset-0 bg-base-300 flex items-center justify-center font-bold text-base-content/20 text-xl tracking-widest group-hover:scale-110 transition-transform duration-700">HEALTH TECH</div>
            <div class="absolute bottom-4 left-4">
              <span class="badge badge-primary border-none shadow-lg">Healthcare</span>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-2xl font-black group-hover:text-primary transition-colors">AI-Powered Diagnostic Tool</h2>
            <p class="text-base-content/70 text-sm mt-2">Integrating HIPAA-compliant Machine Learning models into a user-friendly dashboard for medical professionals to drastically reduce preliminary analysis time.</p>
            
            <div class="flex gap-4 my-6">
              <div>
                <p class="text-xl font-black text-secondary">85%</p>
                <p class="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Faster Diag</p>
              </div>
              <div>
                <p class="text-xl font-black text-secondary">100%</p>
                <p class="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Compliance</p>
              </div>
            </div>

            <div class="card-actions justify-end mt-auto pt-4 border-t border-base-content/10">
              <NuxtLink to="/contact" class="btn btn-ghost hover:bg-primary/10 text-primary group/btn">
                Discuss Your Project
                <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Study 3 -->
        <div class="card bg-base-100 border border-base-content/10 overflow-hidden hover:shadow-2xl hover:border-primary/30 transition-all group">
          <figure class="h-60 bg-base-200 overflow-hidden relative">
            <div class="absolute inset-0 bg-base-300 flex items-center justify-center font-bold text-base-content/20 text-xl tracking-widest group-hover:scale-110 transition-transform duration-700">E-COMMERCE</div>
            <div class="absolute bottom-4 left-4">
              <span class="badge badge-primary border-none shadow-lg">Retail</span>
            </div>
          </figure>
          <div class="card-body">
            <h2 class="card-title text-2xl font-black group-hover:text-primary transition-colors">Global Scalable Fulfillment Platform</h2>
            <p class="text-base-content/70 text-sm mt-2">Developing a bespoke custom ERP and warehouse management system to bridge real-time inventory tracking for a fast-scaling global brand.</p>
            
            <div class="flex gap-4 my-6">
              <div>
                <p class="text-xl font-black text-secondary">2.5x</p>
                <p class="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Revenue Cap</p>
              </div>
              <div>
                <p class="text-xl font-black text-secondary">Zero</p>
                <p class="text-xs text-base-content/60 font-semibold uppercase tracking-wider">Downtime</p>
              </div>
            </div>

            <div class="card-actions justify-end mt-auto pt-4 border-t border-base-content/10">
              <NuxtLink to="/contact" class="btn btn-ghost hover:bg-primary/10 text-primary group/btn">
                Discuss Your Project
                <svg class="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>

      <!-- Call to Action -->
      <div class="mt-20 bg-gradient-to-br from-primary/10 to-transparent p-12 rounded-3xl text-center border border-primary/20">
        <h2 class="text-3xl font-bold mb-4">Ready to be our next success story?</h2>
        <p class="text-base-content/70 mb-8 max-w-2xl mx-auto">Contact us today to schedule a strategic consultation. We'll analyze your current architecture and map out a bulletproof scaling plan.</p>
        <NuxtLink to="/contact" class="btn btn-primary btn-lg px-10 shadow-xl hover:shadow-2xl hover:scale-105 transition-all">Get Free Consultation</NuxtLink>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Case Studies | KM Software\'s',
  description: 'Read our success stories and discover how our solutions have reshaped modern businesses.',
})
</script>
