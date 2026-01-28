<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 pt-24 pb-24 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(99,102,241,0.3),transparent_50%),radial-gradient(circle_at_80%_70%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-8 opacity-70 hover:opacity-100 transition-opacity">
          <ul>
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-primary transition-colors">Services</NuxtLink></li>
            <li>Dedicated Developers</li>
          </ul>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 mb-6 hover:scale-105 transition-transform">
                <svg class="w-5 h-5 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <span class="text-sm font-bold text-primary">Staff Augmentation</span>
              </div>
              
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                Scale Your Team with
                <span class="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
                  Expert Developers
                </span>
              </h1>
              
              <p class="text-xl sm:text-2xl text-base-content/70 leading-relaxed font-light">
                Access pre-vetted, senior developers who integrate seamlessly with your team. Scale up or down on-demand without the overhead.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg px-10 shadow-2xl hover:shadow-primary/50 hover:scale-110 transition-all group">
                <span class="text-lg font-bold">Hire Developers</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              
              <button class="btn btn-outline btn-lg px-10 hover:scale-105 transition-all group">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
                <span class="text-lg">View Pricing</span>
              </button>
            </div>
            
            <!-- Trust Stats -->
            <div class="stats stats-vertical sm:stats-horizontal shadow-xl bg-gradient-to-br from-base-200/80 to-base-300/50 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div v-for="stat in trustStats" :key="stat.title" class="stat hover:bg-primary/5 transition-colors">
                <div class="stat-figure text-primary">
                  <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path v-html="stat.iconPath"></path>
                    </svg>
                  </div>
                </div>
                <div class="stat-title text-xs font-semibold opacity-70">{{ stat.title }}</div>
                <div class="stat-value text-4xl text-primary">{{ stat.value }}</div>
                <div class="stat-desc text-xs opacity-60">{{ stat.desc }}</div>
              </div>
            </div>
          </div>
          
          <!-- Right: Developer Avatars Showcase -->
          <div class="relative hidden lg:block">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-3xl"></div>
            <div class="relative grid grid-cols-3 gap-4 p-8">
              <div v-for="(dev, index) in sampleDevelopers" :key="index"
                class="avatar-group -space-x-6 hover:scale-110 transition-transform"
                :class="index % 2 === 0 ? 'mt-8' : ''">
                <div class="avatar">
                  <div class="w-24 h-24 rounded-2xl ring ring-primary ring-offset-base-100 ring-offset-2 bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                    <span class="text-3xl font-black text-white">{{ dev.initial }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Dedicated Developers -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-primary badge-lg mb-4">Why Choose Us</div>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            The Advantages of Dedicated Developers
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
            Get the flexibility of remote talent with the commitment of an in-house team
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="(benefit, index) in benefits" :key="index"
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-base-content/5 hover:border-primary/20">
            <div class="card-body">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg class="w-8 h-8 text-primary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="benefit.iconPath"></path>
                </svg>
              </div>
              <h3 class="card-title text-2xl mb-3 group-hover:text-primary transition-colors">{{ benefit.title }}</h3>
              <p class="text-base-content/70 leading-relaxed">{{ benefit.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden">
      <!-- Decorative background -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 backdrop-blur-sm mb-4 hover:scale-105 transition-transform">
            <svg class="w-5 h-5 text-secondary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-bold text-secondary">Technology Expertise</span>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Our Developer Expertise
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 font-light">
            Access expert developers across all major technology stacks
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div v-for="(category, index) in techStack" :key="category.name" 
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl border-2 border-base-content/10 hover:border-secondary/30 transition-all duration-500 hover:-translate-y-2">
            <div class="card-body">
              <!-- Icon and Title -->
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg class="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="category.iconPath"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-black group-hover:text-secondary transition-colors">
                  {{ category.name }}
                </h3>
              </div>
              
              <!-- Technologies Grid -->
              <div class="grid grid-cols-2 gap-3">
                <div v-for="tech in category.technologies" :key="tech"
                  class="px-4 py-2.5 rounded-xl bg-gradient-to-br from-base-200/50 to-base-300/50 border border-base-content/10 hover:border-secondary/40 hover:bg-secondary/5 transition-all duration-300 text-center font-semibold text-sm hover:scale-105 cursor-pointer group/tech">
                  <span class="group-hover/tech:text-secondary transition-colors">{{ tech }}</span>
                </div>
              </div>
              
              <!-- Decorative corner element -->
              <div class="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div class="w-8 h-8 rounded-lg bg-gradient-to-br from-secondary/20 to-accent/20 backdrop-blur-sm"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hiring Models / Pricing -->
    <section class="py-24 sm:py-32 bg-base-100 relative overflow-hidden">
      <!-- Subtle decorative elements -->
      <div class="absolute inset-0 opacity-[0.02]">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Header -->
        <div class="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Simple pricing based on
            <span class="block mt-2">your needs</span>
          </h2>
          <p class="text-lg sm:text-xl text-base-content/60 font-light">
            Choose the perfect plan for your project. All plans include access to our talent pool,
            <br class="hidden sm:block"/>dedicated support, and flexible terms.
          </p>
        </div>

        <!-- Pricing Cards -->
        <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          <!-- Card 1: Hourly -->
          <div class="card bg-gradient-to-br from-orange-50/80 to-orange-100/40 dark:from-orange-950/20 dark:to-orange-900/10 backdrop-blur-sm border border-orange-200/50 dark:border-orange-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div class="card-body p-8">
              <!-- Plan Name -->
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Hourly</h3>
                <p class="text-sm text-base-content/60">Pay only for the hours worked</p>
              </div>
              
              <!-- Price -->
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black text-base-content">$25-50</span>
                  <span class="text-xl text-base-content/50">/hour</span>
                </div>
                <p class="text-sm text-base-content/60">Perfect for short-term projects</p>
              </div>
              
              <!-- Features -->
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Flexible hours</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">No minimum commitment</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Weekly invoicing</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Easy scaling</span>
                </div>
              </div>
              
              <!-- CTA -->
              <NuxtLink to="/contact" class="btn btn-outline border-2 hover:btn-primary w-full group-hover:scale-105 transition-all">
                Get started
              </NuxtLink>
            </div>
          </div>

          <!-- Card 2: Part-Time (Popular) -->
          <div class="relative card bg-gradient-to-br from-blue-50 to-blue-100/60 dark:from-blue-950/30 dark:to-blue-900/20 backdrop-blur-sm border-2 border-primary shadow-2xl hover:shadow-[0_25px_80px_rgba(59,130,246,0.3)] transition-all duration-500 hover:-translate-y-3 lg:scale-105 group">
            <!-- Popular Badge -->
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <div class="badge badge-primary badge-lg px-6 py-3 shadow-xl font-bold border-2 border-primary-content/20">
                MOST POPULAR
              </div>
            </div>
            
            <div class="card-body p-8 pt-10">
              <!-- Plan Name -->
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Part-Time</h3>
                <p class="text-sm text-base-content/60">4 hours per day, 5 days a week</p>
              </div>
              
              <!-- Price -->
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$3,200</span>
                  <span class="text-xl text-base-content/50">/month</span>
                </div>
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
                  <svg class="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-xs font-semibold text-success">Save 30% vs hourly</span>
                </div>
              </div>
              
              <!-- Features -->
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">80 hours per month</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Dedicated developer</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Fixed monthly billing</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Direct communication</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Priority support</span>
                </div>
              </div>
              
              <!-- CTA -->
              <NuxtLink to="/contact" class="btn btn-primary btn-lg w-full shadow-xl hover:shadow-2xl group-hover:scale-105 transition-all">
                <span class="font-bold">Get started</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Card 3: Full-Time -->
          <div class="card bg-gradient-to-br from-emerald-50/80 to-emerald-100/40 dark:from-emerald-950/20 dark:to-emerald-900/10 backdrop-blur-sm border border-emerald-200/50 dark:border-emerald-800/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div class="card-body p-8">
              <!-- Plan Name -->
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Full-Time</h3>
                <p class="text-sm text-base-content/60">8 hours per day, 5 days a week</p>
              </div>
              
              <!-- Price -->
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black text-base-content">$5,600</span>
                  <span class="text-xl text-base-content/50">/month</span>
                </div>
                <p class="text-sm text-base-content/60">Maximum productivity & value</p>
              </div>
              
              <!-- Features -->
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">160+ hours per month</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Fully dedicated resource</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Long-term engagement</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Best value for money</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">VIP support</span>
                </div>
              </div>
              
              <!-- CTA -->
              <NuxtLink to="/contact" class="btn btn-outline border-2 hover:btn-success w-full group-hover:scale-105 transition-all">
                Contact us
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="max-w-5xl mx-auto">
          <div class="divider text-base-content/40 text-sm">TRUSTED BY 200+ COMPANIES</div>
          
          <!-- Benefits Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-primary/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">48 hours</div>
              <div class="text-sm text-base-content/60">to start</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-success/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">No setup fees</div>
              <div class="text-sm text-base-content/60">get started free</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-accent/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">500+</div>
              <div class="text-sm text-base-content/60">vetted developers</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-warning/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-warning/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">98%</div>
              <div class="text-sm text-base-content/60">satisfaction rate</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-20 space-y-4">
            <div class="inline-block">
              <div class="badge badge-info badge-lg mb-4">Simple Process</div>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              How It Works
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light">
              Get started with dedicated developers in just 4 simple steps
            </p>
          </div>

          <ul class="timeline timeline-vertical timeline-compact">
            <li v-for="(step, index) in processSteps" :key="index" class="group">
              <div class="timeline-start font-mono text-xs sm:text-sm text-base-content/50 group-hover:text-primary transition-colors pr-2 sm:pr-4">
                STEP {{ index + 1 }}
              </div>
              <div class="timeline-middle">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center border-4 border-base-100 shadow-lg group-hover:scale-110 transition-all duration-500">
                  <span class="text-lg sm:text-xl font-black text-primary">{{ index + 1 }}</span>
                </div>
              </div>
              <div class="timeline-end timeline-box bg-gradient-to-br from-base-100 to-base-200 border-2 border-base-content/10 group-hover:border-primary/30 shadow-lg group-hover:shadow-xl transition-all duration-300 ml-2 sm:ml-4 max-w-md">
                <h3 class="text-lg sm:text-xl font-black mb-2 group-hover:text-primary transition-colors">{{ step.title }}</h3>
                <p class="text-sm text-base-content/70 leading-relaxed">{{ step.description }}</p>
              </div>
              <hr v-if="index < processSteps.length - 1" class="bg-gradient-to-b from-primary/30 to-primary/10"/>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gradient-to-b from-base-200 via-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warning/10 border border-warning/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-bold text-warning">FAQ</span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Frequently Asked Questions
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light">
              Everything you need to know about hiring dedicated developers
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border-2 border-base-content/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold group-hover:text-primary transition-colors pr-12">
                {{ faq.question }}
              </div>
              <div class="collapse-content">
                <p class="text-base-content/70 leading-relaxed pt-2 text-base">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 sm:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div class="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s;"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-white/20 shadow-2xl">
            <div class="text-center text-white">
              <div class="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 sm:mb-8">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <span class="text-sm sm:text-base font-bold">Ready to Scale?</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                Hire Your Dedicated Team Today
              </h2>
              
              <p class="text-base sm:text-lg md:text-xl opacity-95 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Get access to pre-vetted developers who can start working on your project within days.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-gray-100 hover:scale-110 border-none shadow-2xl px-10 transition-all min-w-[240px] group">
                  <span class="text-lg font-bold">Start Hiring Now</span>
                  <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </NuxtLink>
              </div>
              
              <div class="pt-8 border-t-2 border-white/20">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">500+</div>
                    <div class="text-sm opacity-90">Developers Available</div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">48h</div>
                    <div class="text-sm opacity-90">Average Onboarding Time</div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">95%</div>
                    <div class="text-sm opacity-90">Client Retention Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Dedicated Developers | Staff Augmentation Services - KM Global Tech',
  meta: [
    {
      name: 'description',
      content: 'Hire pre-vetted dedicated developers to scale your team. Flexible engagement models, expert developers skilled in modern technologies. Quick onboarding in 48 hours.'
    },
    {
      property: 'og:title',
      content: 'Dedicated Developers | Staff Augmentation Services - KM Global Tech'
    },
    {
      property: 'og:description',
      content: 'Hire pre-vetted dedicated developers to scale your team. Flexible engagement models, expert developers skilled in modern technologies.'
    }
  ]
})

const trustStats = ref([
  {
    title: 'Developers',
    value: '500+',
    desc: 'Pre-vetted experts',
    iconPath: 'd="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"'
  },
  {
    title: 'Time to Start',
    value: '48h',
    desc: 'Quick onboarding',
    iconPath: 'd="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"'
  },
  {
    title: 'Client Satisfaction',
    value: '98%',
    desc: 'Happy clients',
    iconPath: 'd="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"'
  }
])

const sampleDevelopers = ref([
  { initial: 'JS' },
  { initial: 'PY' },
  { initial: 'GO' },
  { initial: 'TS' },
  { initial: 'RB' },
  { initial: 'PH' }
])

const benefits = ref([
  {
    title: 'Rapid Scaling',
    description: 'Quickly scale your team up or down based on project demands without long-term commitments or hiring overhead.',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6'
  },
  {
    title: 'Cost Effective',
    description: 'Save up to 60% on development costs compared to traditional hiring, with no recruitment fees or benefits overhead.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Pre-Vetted Talent',
    description: 'Access rigorously screened developers with proven expertise, verified portfolios, and excellent communication skills.',
    iconPath: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'Quick Onboarding',
    description: 'Developers can start contributing to your project within 48 hours, integrating seamlessly with your existing team.',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Dedicated Resources',
    description: 'Get full-time commitment from developers who work exclusively on your project during engagement hours.',
    iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Flexible Engagement',
    description: 'Choose from hourly, part-time, or full-time models with the flexibility to adjust as your needs evolve.',
    iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
  }
])

const techStack = ref([
  {
    name: 'Frontend Development',
    iconPath: 'd="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"',
    technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Redux']
  },
  {
    name: 'Backend Development',
    iconPath: 'd="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"',
    technologies: ['Node.js', 'Python', 'Java', 'PHP', 'Go', 'Ruby on Rails', '.NET', 'Django']
  },
  {
    name: 'Mobile Development',
    iconPath: 'd="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"',
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin']
  },
  {
    name: 'Database & DevOps',
    iconPath: 'd="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"',
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure']
  }
])

const hiringModels = ref([
  {
    name: 'Hourly',
    price: '$25-50',
    period: '/hour',
    description: 'Pay only for the hours worked',
    popular: false,
    features: [
      'Flexible hours',
      'No minimum commitment',
      'Perfect for short-term projects',
      'Weekly invoicing',
      'Easy scaling'
    ]
  },
  {
    name: 'Part-Time',
    price: '$3,200',
    period: '/month',
    description: '4 hours per day, 5 days a week',
    popular: true,
    features: [
      '80 hours per month',
      'Dedicated developer',
      'Fixed monthly billing',
      'Direct communication',
      'Perfect work-life balance',
      'Cost-effective solution'
    ]
  },
  {
    name: 'Full-Time',
    price: '$5,600',
    period: '/month',
    description: '8 hours per day, 5 days a week',
    popular: false,
    features: [
      '160+ hours per month',
      'Fully dedicated resource',
      'Maximum productivity',
      'Long-term engagement',
      'Best value for money',
      'Priority support'
    ]
  }
])

const processSteps = ref([
  {
    title: 'Share Requirements',
    description: 'Tell us about your project needs, tech stack, and timeline through our simple consultation form.'
  },
  {
    title: 'Review Profiles',
    description: 'We match you with 3-5 pre-vetted developers from our talent pool based on your specific requirements.'
  },
  {
    title: 'Interview & Select',
    description: 'Conduct technical interviews with shortlisted candidates and choose the best fit for your team.'
  },
  {
    title: 'Onboard & Start',
    description: 'Your selected developer(s) join your team, get access to tools, and start contributing within 48 hours.'
  }
])

const faqs = ref([
  {
    question: 'How quickly can a developer start working on my project?',
    answer: 'Once you select a developer after interviews, they can typically start within 48 hours. The entire process from requirement sharing to project kickoff usually takes 3-5 business days.'
  },
  {
    question: 'What if I\'m not satisfied with a developer?',
    answer: 'We offer a risk-free trial period. If you\'re not satisfied within the first two weeks, we\'ll replace the developer at no additional cost or provide a full refund.'
  },
  {
    question: 'Can I hire multiple developers for my project?',
    answer: 'Absolutely! You can hire as many developers as your project requires. We can provide entire development teams including frontend, backend, mobile developers, QA engineers, and more.'
  },
  {
    question: 'What is the contract duration?',
    answer: 'We offer flexible contracts ranging from 1 month to 12+ months. You can start with a shorter commitment and extend as needed. There are no long-term lock-ins.'
  },
  {
    question: 'How do you ensure code quality?',
    answer: 'All our developers follow industry best practices, use version control, write clean documented code, and participate in code reviews. We also provide regular progress updates and quality checks.'
  },
  {
    question: 'What time zones do your developers work in?',
    answer: 'We have developers across multiple time zones who can work according to your schedule. We ensure at least 4-5 hours of overlap with your team\'s working hours for effective collaboration.'
  }
])
</script>
