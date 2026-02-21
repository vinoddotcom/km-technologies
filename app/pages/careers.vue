<template>
  <div class="min-h-screen bg-base-100 pt-32 pb-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      
      <!-- Header -->
      <div class="max-w-3xl mx-auto text-center mb-16 space-y-6">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-base-content">
          Join Our <span class="text-primary">Mission</span>
        </h1>
        <p class="text-lg text-base-content/70 leading-relaxed">
          At KM Software's, we're building the future of digital solutions. We are always looking for passionate, driven, and creative individuals to join our team. Explore our open roles and be part of something extraordinary.
        </p>
      </div>

      <!-- Culture / Why Join Us -->
      <div class="grid md:grid-cols-3 gap-8 mb-20">
        <div class="bg-base-200/50 p-8 rounded-3xl border border-base-content/5 hover:border-primary/20 transition-all">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Innovation First</h3>
          <p class="text-base-content/70">Work with the latest technologies like AI, modern frameworks, and cloud architectures on impactful projects.</p>
        </div>
        <div class="bg-base-200/50 p-8 rounded-3xl border border-base-content/5 hover:border-primary/20 transition-all">
          <div class="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Remote & Flexible</h3>
          <p class="text-base-content/70">A healthy work-life balance with remote work opportunities and flexible hours designed for your lifestyle.</p>
        </div>
        <div class="bg-base-200/50 p-8 rounded-3xl border border-base-content/5 hover:border-primary/20 transition-all">
          <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
            <svg class="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h3 class="text-xl font-bold mb-3">Continuous Growth</h3>
          <p class="text-base-content/70">We invest heavily in your professional growth with dedicated learning budgets and mentorship programs.</p>
        </div>
      </div>

      <!-- Open Positions -->
      <div class="max-w-4xl mx-auto space-y-6">
        <h2 class="text-3xl font-bold mb-8">Open Positions</h2>

        <!-- Job Card -->
        <div class="bg-base-100 border border-base-content/10 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-xl hover:border-primary/30 transition-all group">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors">Senior Frontend Engineer</h3>
              <span class="badge badge-primary badge-sm">Remote</span>
            </div>
            <p class="text-base-content/60 text-sm mb-4">You will be responsible for building high-performance Vue/Nuxt applications with sophisticated interfaces.</p>
            <div class="flex items-center gap-4 text-sm font-medium text-base-content/70">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Anywhere
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Full-time
              </span>
            </div>
          </div>
          <NuxtLink to="/contact" class="btn btn-primary sm:w-auto w-full group-hover:scale-105 transition-transform">
            Apply Now
          </NuxtLink>
        </div>

        <!-- Job Card -->
        <div class="bg-base-100 border border-base-content/10 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-xl hover:border-primary/30 transition-all group">
          <div>
            <div class="flex items-center gap-3 mb-2">
              <h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors">AI & Machine Learning Lead</h3>
              <span class="badge badge-primary badge-sm">Remote</span>
            </div>
            <p class="text-base-content/60 text-sm mb-4">Lead our AI initiatives and engineer solutions that implement LLMs and generative models for our clients.</p>
            <div class="flex items-center gap-4 text-sm font-medium text-base-content/70">
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                North America / EU
              </span>
              <span class="flex items-center gap-1">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                Full-time
              </span>
            </div>
          </div>
          <NuxtLink to="/contact" class="btn btn-primary sm:w-auto w-full group-hover:scale-105 transition-transform">
            Apply Now
          </NuxtLink>
        </div>

      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Careers | KM Software\'s',
  description: 'Join our team to build scalable, cutting-edge software solutions.',
})
</script>
