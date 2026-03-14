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
              
              <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-black mb-5 leading-tight tracking-tight text-base-content">
                Dedicated Developers
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-1">
                  For Your Business Needs
                </span>
              </h1>
              
              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-lg">
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
                  <component :is="stat.icon" class="w-10 h-10 text-primary"/>
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
                <component :is="benefit.icon" class="w-10 h-10 text-primary"/>
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
                   <component :is="category.icon" class="w-10 h-10 text-primary"/>
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
          <div class="card bg-gradient-to-br from-warning/10 to-warning/5 backdrop-blur-sm border border-warning/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
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
          <div class="relative card bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-3 lg:scale-105 group">
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
          <div class="card bg-gradient-to-br from-success/10 to-success/5 backdrop-blur-sm border border-success/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
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
      
      </div>
    </section>

    <!-- How It Works -->
  <section class="py-20 bg-base-100">
  <div class="container mx-auto px-6">

    <!-- Heading -->
    <div class="text-center mb-16">
      <div class="badge badge-info mb-4">Simple Process</div>

      <h2 class="text-4xl font-bold mb-4">
        How It Works
      </h2>

      <p class="text-lg text-base-content/60 max-w-2xl mx-auto">
        Get started with dedicated developers in just four simple steps.
      </p>
    </div>


    <!-- Steps -->
    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-10 text-center">

      <div v-for="(step, index) in processSteps" :key="index" class="process-step">

        <!-- Number -->
        <div class="step-number">
          {{ index + 1 }}
        </div>

        <!-- Title -->
        <h3 class="text-xl font-semibold mb-2">
          {{ step.title }}
        </h3>

        <!-- Description -->
        <p class="text-sm text-base-content/60 leading-relaxed">
          {{ step.description }}
        </p>

      </div>

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


     <!-- ═══════════════════════════════════
         10. FINAL CTA
    ════════════════════════════════════ -->
    <section id="contact" class="py-24 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_60%)]"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="max-w-3xl mx-auto text-primary-content">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Hire Your Dedicated Team 
            <span class="block mt-2">Today Works for You</span>
          </h2>
          <p class="text-xl opacity-90 mb-4">
            Transform your ideas into powerful digital solutions with KM Software's.
          </p>
          <p class="text-lg opacity-80 mb-10">
            Let's create custom software that simplifies operations, boosts productivity, and scales with your business.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="showModal = true"
              class="btn btn-lg bg-base-100 text-primary hover:bg-base-200 border-none shadow-2xl px-10 group"
            >
              <span class="font-bold">Start Your Custom Project Today</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
            <NuxtLink to="/contact" class="btn btn-lg btn-ghost border-2 border-base-100/40 text-primary-content hover:bg-base-100/10 px-10">
              Or Contact Us
            </NuxtLink>
          </div>
          <div class="mt-10 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <span>✓ Free consultation</span>
            <span>✓ Scalable architecture</span>
            <span>✓ Response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         INTAKE MODAL
    ════════════════════════════════════ -->
    <div v-if="showModal" class="modal modal-open z-[200]">
      <div class="modal-box max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <button @click="showModal = false" class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</button>
        <h3 class="font-black text-2xl mb-2">Request a Proposal</h3>
        <p class="text-sm text-base-content/60 mb-6">We'll respond within 24 hours with next steps and a calendar link.</p>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Company Name *</span></label>
              <input v-model="form.company" type="text" required class="input input-bordered input-sm" placeholder="Acme Corp"/>
            </div>
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Your Name *</span></label>
              <input v-model="form.name" type="text" required class="input input-bordered input-sm" placeholder="Ravi Kumar"/>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Work Email *</span></label>
              <input v-model="form.email" type="email" required class="input input-bordered input-sm" placeholder="ravi@acme.com"/>
            </div>
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Phone</span></label>
              <input v-model="form.phone" type="tel" class="input input-bordered input-sm" placeholder="+91 98765 43210"/>
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Industry *</span></label>
              <select v-model="form.industry" required class="select select-bordered select-sm">
                <option value="">Select industry</option>
                <option v-for="ind in industryOptions" :key="ind" :value="ind">{{ ind }}</option>
              </select>
            </div>
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Budget Range *</span></label>
              <select v-model="form.budget" required class="select select-bordered select-sm">
                <option value="">Select range</option>
                <option v-for="b in budgetOptions" :key="b" :value="b">{{ b }}</option>
              </select>
            </div>
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text text-xs font-semibold">Desired Start Date</span></label>
            <input v-model="form.startDate" type="month" class="input input-bordered input-sm"/>
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text text-xs font-semibold">Brief Description (200 chars) *</span></label>
            <textarea v-model="form.description" required maxlength="200" rows="3" class="textarea textarea-bordered text-sm" placeholder="What are you building? What problem does it solve?"></textarea>
            <label class="label"><span class="label-alt text-xs text-base-content/40">{{ form.description.length }}/200</span></label>
          </div>

          <div class="form-control">
            <label class="label cursor-pointer justify-start gap-3">
              <input v-model="form.wantsEstimate" type="checkbox" class="checkbox checkbox-sm checkbox-primary"/>
              <span class="label-text text-sm">I want a non-binding cost estimate</span>
            </label>
          </div>

          <div class="form-control">
            <label class="label cursor-pointer justify-start gap-3">
              <input v-model="form.wantsNDA" type="checkbox" class="checkbox checkbox-sm checkbox-primary"/>
              <span class="label-text text-sm">Please send an NDA before our first call</span>
            </label>
          </div>

          <div class="modal-action mt-6">
            <button type="submit" class="btn btn-primary w-full">
              Submit Request
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
          </div>
        </form>

        <div v-if="formSucceeded" class="absolute inset-0 bg-base-100 rounded-2xl flex flex-col items-center justify-center text-center p-12">
          <div class="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
            </svg>
          </div>
          <h3 class="text-2xl font-black mb-2">Proposal Submitted!</h3>
          <p class="text-base-content/60 text-sm mb-6">We'll review and respond within 24 hours with next steps and a calendar invite.</p>
          <button @click="showModal = false; formSucceeded = false" class="btn btn-primary">Close</button>
        </div>
      </div>
      <div class="modal-backdrop bg-base-content/40 backdrop-blur-sm" @click="showModal = false"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
CodeBracketIcon,
ServerStackIcon,
DevicePhoneMobileIcon,
CircleStackIcon,
ArrowTrendingUpIcon,
CurrencyDollarIcon,
CheckBadgeIcon,
ClockIcon,
UserGroupIcon,
BoltIcon,
StarIcon
} from '@heroicons/vue/24/outline'
useHead({
  title: "Dedicated Developers | Staff Augmentation Services - KM Software's",
  meta: [
    {
      name: 'description',
      content: 'Hire pre-vetted dedicated developers to scale your team. Flexible engagement models, expert developers skilled in modern technologies. Quick onboarding in 48 hours.'
    },
    {
      property: 'og:title',
      content: "Dedicated Developers | Staff Augmentation Services - KM Software's"
    },
    {
      property: 'og:description',
      content: 'Hire pre-vetted dedicated developers to scale your team. Flexible engagement models, expert developers skilled in modern technologies.'
    }
  ]
})
// ─── Modal ──────────────────────────────
const showModal = ref(false)
const formSucceeded = ref(false)

const form = reactive({
  company: '',
  name: '',
  email: '',
  phone: '',
  industry: '',
  budget: '',
  startDate: '',
  description: '',
  wantsEstimate: false,
  wantsNDA: false,
})

const industryOptions = ['Fintech / Finance', 'Healthcare / HealthTech', 'SaaS / Marketplace', 'Enterprise IT', 'Manufacturing & IoT', 'E-commerce / Retail', 'Other']
const budgetOptions = ['₹8L – ₹25L ($10k–$30k)', '₹25L – ₹60L ($30k–$75k)', '₹60L – ₹1.2Cr ($75k–$150k)', '₹1.2Cr+ ($150k+)', 'Not sure yet']

const submitForm = () => {
  // In production: call your API endpoint
  formSucceeded.value = true
}
const trustStats = ref([
{
title: 'Developers',
value: '500+',
desc: 'Pre-vetted experts',
icon: UserGroupIcon
},

{
title: 'Time to Start',
value: '48h',
desc: 'Quick onboarding',
icon: BoltIcon
},

{
title: 'Client Satisfaction',
value: '98%',
desc: 'Happy clients',
icon: StarIcon
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
icon: ArrowTrendingUpIcon
},

{
title: 'Cost Effective',
description: 'Save up to 60% on development costs compared to traditional hiring, with no recruitment fees or benefits overhead.',
icon: CurrencyDollarIcon
},

{
title: 'Pre-Vetted Talent',
description: 'Access rigorously screened developers with proven expertise, verified portfolios, and excellent communication skills.',
icon: CheckBadgeIcon
},

{
title: 'Quick Onboarding',
description: 'Developers can start contributing to your project within 48 hours, integrating seamlessly with your existing team.',
icon: BoltIcon
},

{
title: 'Dedicated Resources',
description: 'Get full-time commitment from developers who work exclusively on your project during engagement hours.',
icon: UserGroupIcon
},

{
title: 'Flexible Engagement',
description: 'Choose from hourly, part-time, or full-time models with the flexibility to adjust as your needs evolve.',
icon: ClockIcon
}
])

const techStack = ref([
{
name: 'Frontend Development',
icon: CodeBracketIcon,
technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Redux']
},

{
name: 'Backend Development',
icon: ServerStackIcon,
technologies: ['Node.js', 'Python', 'Java', 'PHP', 'Go', 'Ruby on Rails', '.NET', 'Django']
},

{
name: 'Mobile Development',
icon: DevicePhoneMobileIcon,
technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin']
},

{
name: 'Database & DevOps',
icon: CircleStackIcon,
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
  }
])
</script>
<style>
.process-step{
padding:20px;
}

.step-number{
width:50px;
height:50px;
margin:0 auto 16px;
border-radius:50%;
background:#2563eb;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
font-weight:700;
font-size:18px;
}
</style>
