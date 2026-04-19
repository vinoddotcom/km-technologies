<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-secondary/5 via-base-100 to-accent/5 pt-24 pb-24 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-8 opacity-70 hover:opacity-100 transition-opacity">
          <ul>
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-primary transition-colors">Services</NuxtLink></li>
            <li>App Development</li>
          </ul>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6 hover:scale-105 transition-transform">
                <svg class="w-5 h-5 text-secondary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                </svg>
                <span class="text-sm font-bold text-secondary">Mobile App Development Services</span>
              </div>
              
              <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-black mb-5 leading-tight tracking-tight text-base-content">
                Build High-Performance
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-1">
                  Mobile Apps That Users Love
                </span>
              </h1>
              
              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-lg mb-6">
                At KM Software's, we design and develop scalable, secure, and feature-rich mobile applications tailored for startups, growing businesses, and enterprises worldwide.
              </p>
              <ul class="space-y-2 mb-2">
                <li v-for="point in heroPoints" :key="point" class="flex items-center gap-2 text-sm font-semibold text-base-content/80">
                  <svg class="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ point }}
                </li>
              </ul>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-secondary btn-lg px-10 shadow-2xl hover:shadow-secondary/50 hover:scale-110 transition-all group">
                <span class="text-lg font-bold">Get a Free Consultation</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              
              <NuxtLink to="/portfolio" class="btn btn-outline btn-lg px-10 hover:scale-105 transition-all group">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                <span class="text-lg">View Portfolio</span>
              </NuxtLink>
            </div>
            
            <!-- Trust Stats -->
            <div class="stats stats-vertical sm:stats-horizontal shadow-xl bg-gradient-to-br from-base-200/80 to-base-300/50 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div v-for="stat in trustStats" :key="stat.title" class="stat hover:bg-secondary/5 transition-colors">
                <div class="stat-figure text-secondary">
                  <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                      <component :is="stat.icon" class="w-10 h-10 text-primary"/>
                  </div>
                </div>
                <div class="stat-title text-xs font-semibold opacity-70">{{ stat.title }}</div>
                <div class="stat-value text-4xl text-secondary">{{ stat.value }}</div>
                <div class="stat-desc text-xs opacity-60">{{ stat.desc }}</div>
              </div>
            </div>
          </div>
          
          <!-- Right: App Mockup Showcase -->
          <div class="relative hidden lg:block">
            <div class="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div class="relative flex justify-center items-center gap-6">
              <!-- Phone Mockup -->
              <div class="relative">
                <div class="w-72 h-[600px] rounded-[3rem] bg-gradient-to-br from-base-300 to-base-100 p-3 shadow-2xl border-8 border-base-content/10 hover:scale-105 transition-transform duration-500">
                  <div class="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-secondary/20 to-accent/20 overflow-hidden">
                    <!-- Screen Content Placeholder -->
                    <div class="p-6 space-y-4">
                      <div class="h-8 bg-white/20 rounded-lg animate-pulse"></div>
                      <div class="h-32 bg-white/30 rounded-2xl animate-pulse" style="animation-delay: 0.1s;"></div>
                      <div class="grid grid-cols-2 gap-3">
                        <div class="h-24 bg-white/20 rounded-xl animate-pulse" style="animation-delay: 0.2s;"></div>
                        <div class="h-24 bg-white/20 rounded-xl animate-pulse" style="animation-delay: 0.3s;"></div>
                      </div>
                      <div class="h-48 bg-white/25 rounded-2xl animate-pulse" style="animation-delay: 0.4s;"></div>
                    </div>
                  </div>
                </div>
                <!-- Platform Badges -->
                <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  <div class="badge badge-primary badge-lg shadow-xl font-bold">iOS</div>
                  <div class="badge badge-accent badge-lg shadow-xl font-bold">Android</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platforms & Technologies -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-4 hover:scale-105 transition-transform">
            <svg class="w-5 h-5 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
            </svg>
            <span class="text-sm font-bold text-primary">📱 Platforms We Build For</span>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Multi-Platform Expertise
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 font-light">
            We create mobile experiences across all major platforms using modern technologies.
          </p>
        </div>

        <div class="flex flex-col gap-6 max-w-5xl mx-auto">
          <div v-for="(platform, index) in platforms" :key="platform.name"
            class="group card md:card-side bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl border-2 border-base-content/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            <div class="md:w-1/3 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 border-b md:border-b-0 md:border-r border-base-content/10 relative">
              <div class="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-lg mb-4 text-primary">
                <component :is="platform.icon" class="w-10 h-10 text-primary"/>
              </div>
              <h3 class="relative z-10 text-3xl font-black text-center group-hover:text-primary transition-colors">
                {{ platform.name }}
              </h3>
            </div>
            
            <div class="card-body md:w-2/3 justify-center p-8">
              <p class="text-lg text-base-content/70 mb-6 leading-relaxed">{{ platform.description }}</p>
              
              <div class="space-y-3 mt-auto">
                <div class="text-sm font-bold text-base-content/50 uppercase tracking-widest flex items-center gap-2">
                  <span class="w-8 h-[1px] bg-base-content/20"></span> Technologies
                </div>
                <div class="flex flex-wrap gap-2">
                  <div v-for="tech in platform.technologies" :key="tech"
                    class="px-4 py-2 rounded-lg bg-base-100 border border-base-content/10 hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-semibold hover:-translate-y-0.5 shadow-sm text-base-content/80">
                    {{ tech }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- App Development Services -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-accent badge-lg mb-4">🚀 Our Mobile App Expertise</div>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Apps We Build Across Industries
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
            We build powerful mobile applications across multiple industries and use cases.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="(service, index) in appTypes" :key="index"
            class="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-base-content/5 hover:border-accent/20 text-center relative overflow-hidden">
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="card-body items-center p-8">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-accent/5 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500 border border-accent/10">
                 <component :is="service.icon" class="w-10 h-10 text-primary"/>
              </div>
              <h3 class="card-title text-2xl font-black mb-4 group-hover:text-accent transition-colors">{{ service.title }}</h3>
              <p class="text-base-content/70 leading-relaxed mb-6">{{ service.description }}</p>
              <div class="mt-auto w-full pt-6 border-t border-base-content/5">
                <div class="text-xs font-bold text-base-content/40 mb-3 uppercase tracking-widest">Examples</div>
                <div class="flex flex-wrap justify-center gap-2">
                  <div v-for="example in service.examples" :key="example" class="badge badge-accent badge-outline px-3 py-2 uppercase text-[10px] tracking-wider">{{ example }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

  <!-- Development Process -->
<section class="py-24 bg-base-100">
  <div class="container mx-auto px-6">

    <!-- Heading -->
    <div class="text-center mb-20">
      <div class="badge badge-info badge-lg mb-4">Our Process</div>

      <h2 class="text-4xl lg:text-5xl font-black mb-6">
        From Idea to App Store
      </h2>

      <p class="text-xl text-base-content/60 max-w-3xl mx-auto">
        A simple and proven process we follow to design, build and launch
        high-quality mobile applications.
      </p>
    </div>


    <!-- Process Steps -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 relative">

      <!-- Step 1 -->
      <div class="process-card">
        <div class="process-number">01</div>
        <h3 class="process-title">{{ processSteps[0]?.title }}</h3>
        <p class="process-desc">
          {{ processSteps[0]?.description }}
        </p>
      </div>

      <!-- Step 2 -->
      <div class="process-card">
        <div class="process-number">02</div>
        <h3 class="process-title">{{ processSteps[1]?.title }}</h3>
        <p class="process-desc">
          {{ processSteps[1]?.description }}
        </p>
      </div>

      <!-- Step 3 -->
      <div class="process-card">
        <div class="process-number">03</div>
        <h3 class="process-title">{{ processSteps[2]?.title }}</h3>
        <p class="process-desc">
          {{ processSteps[2]?.description }}
        </p>
      </div>

      <!-- Step 4 -->
      <div class="process-card">
        <div class="process-number">04</div>
        <h3 class="process-title">{{ processSteps[3]?.title }}</h3>
        <p class="process-desc">
          {{ processSteps[3]?.description }}
        </p>
      </div>

      <!-- Step 5 -->
      <div class="process-card">
        <div class="process-number">05</div>
        <h3 class="process-title">{{ processSteps[4]?.title }}</h3>
        <p class="process-desc">
          {{ processSteps[4]?.description }}
        </p>
      </div>

      <!-- Step 6 -->
      <div class="process-card">
        <div class="process-number">06</div>
        <h3 class="process-title">{{ processSteps[5]?.title }}</h3>
        <p class="process-desc">
          {{ processSteps[5]?.description }}
        </p>
      </div>

    </div>

  </div>
</section>

    <!-- Tech Stack Section -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-primary badge-lg mb-4">⚙️ Technology Stack</div>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black mb-4">Modern Tools. Proven Performance.</h2>
          <p class="text-xl text-base-content/60 font-light max-w-2xl mx-auto">
            We leverage modern tools and frameworks to ensure performance, scalability, and security.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="stack in techStacks" :key="stack.category"
            class="card bg-base-100 border border-base-content/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="card-body p-8">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl" :class="stack.bg">{{ stack.icon }}</div>
              <h3 class="text-lg font-black mb-4 text-base-content">{{ stack.category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in stack.items" :key="tech"
                  class="px-3 py-1.5 rounded-lg bg-base-200 border border-base-content/10 text-sm font-semibold text-base-content/80 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-24 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03]">
        <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-6xl mx-auto">
          <!-- Full-width Heading Section -->
          <div class="mb-12 text-center">
            <div class="inline-block">
              <div class="badge badge-secondary badge-lg mb-4">🎯 Why Choose KM Software's?</div>
            </div>
            <h2 class="text-4xl sm:text-5xl font-black leading-tight mb-4">
              We Don't Just Build Apps.
              <span class="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">We Build Experiences.</span>
            </h2>
            <p class="text-lg text-base-content/65 leading-relaxed max-w-3xl mx-auto">
              We focus on building mobile apps that are not just visually appealing but also reliable, scalable, and performance-driven.
            </p>
          </div>

          <!-- 2-Column Layout for Features and Image -->
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Left: Features -->
            <div class="space-y-4">
              <div v-for="reason in whyChooseUs" :key="reason.title"
                class="flex items-start gap-4 p-4 rounded-2xl bg-base-200/60 border border-base-content/5 hover:border-secondary/20 hover:bg-secondary/5 transition-all group">
                <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-lg">{{ reason.icon }}</div>
                <div>
                  <div class="font-bold text-base-content text-sm mb-0.5">{{ reason.title }}</div>
                  <div class="text-sm text-base-content/60">{{ reason.desc }}</div>
                </div>
              </div>
            </div>
            
            <!-- Right: Image -->
            <div class="flex justify-center lg:justify-end">
              <img src="/images/mobile-phone.png" alt="Mobile App Experience" class="rounded-2xl shadow-xl w-full object-cover transform hover:scale-105 transition-transform duration-500">
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-24 sm:py-32 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.02]">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Flexible pricing for
            <span class="block mt-2">every project</span>
          </h2>
          <p class="text-lg sm:text-xl text-base-content/60 font-light">
            Choose the engagement model that fits your budget and timeline.
            <br class="hidden sm:block"/>All plans include quality assurance and post-launch support.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          <!-- Fixed Price -->
          <div class="card bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm border border-secondary/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div class="card-body p-8">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Fixed Price</h3>
                <p class="text-sm text-base-content/60">Complete project delivery</p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black text-base-content">$15k+</span>
                </div>
                <p class="text-sm text-base-content/60">Based on project scope</p>
              </div>
              
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Detailed project scope</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Fixed timeline</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">UI/UX design included</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">App store deployment</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn btn-outline border-2 hover:btn-primary w-full group-hover:scale-105 transition-all">
                Get a quote
              </NuxtLink>
            </div>
          </div>

          <!-- Time & Materials (Popular) -->
          <div class="relative card bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-3 lg:scale-105 group">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <div class="badge badge-primary badge-lg px-6 py-3 shadow-xl font-bold border-2 border-primary-content/20">
                MOST POPULAR
              </div>
            </div>
            
            <div class="card-body p-8 pt-10">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Time & Materials</h3>
                <p class="text-sm text-base-content/60">Flexible hourly engagement</p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$50-80</span>
                  <span class="text-xl text-base-content/50">/hour</span>
                </div>
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
                  <svg class="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-xs font-semibold text-success">Pay as you go</span>
                </div>
              </div>
              
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Flexible scope changes</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Agile development</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Weekly billing</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Transparent tracking</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Priority support</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn btn-primary btn-lg w-full shadow-xl hover:shadow-2xl group-hover:scale-105 transition-all">
                <span class="font-bold">Get started</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Dedicated Team -->
          <div class="card bg-gradient-to-br from-success/10 to-success/5 backdrop-blur-sm border border-success/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div class="card-body p-8">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Dedicated Team</h3>
                <p class="text-sm text-base-content/60">Full development team</p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black text-base-content">$25k+</span>
                  <span class="text-xl text-base-content/50">/month</span>
                </div>
                <p class="text-sm text-base-content/60">Minimum 3 months</p>
              </div>
              
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">2-4 developers</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">UI/UX designer</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Project manager</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">QA specialist</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">DevOps support</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn btn-outline border-2 hover:btn-success w-full group-hover:scale-105 transition-all">
                Contact us
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <!-- <div class="max-w-5xl mx-auto">
          <div class="divider text-base-content/40 text-sm">DELIVERED 150+ MOBILE APPS</div>
          
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-secondary/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">4.9/5</div>
              <div class="text-sm text-base-content/60">avg rating</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-primary/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">12-16 weeks</div>
              <div class="text-sm text-base-content/60">avg delivery</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-accent/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">100%</div>
              <div class="text-sm text-base-content/60">on-time delivery</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-success/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">95%</div>
              <div class="text-sm text-base-content/60">client retention</div>
            </div>
          </div>
        </div> -->
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
              Everything you need to know about mobile app development
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border-2 border-base-content/10 hover:border-secondary/30 hover:shadow-2xl transition-all duration-300 group">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold group-hover:text-secondary transition-colors pr-12">
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
            Build Software That
            <span class="block mt-2">Works for You</span>
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
ShoppingCartIcon,
CalendarDaysIcon,
ChatBubbleLeftRightIcon,
HeartIcon,
CurrencyDollarIcon,
AcademicCapIcon,
DevicePhoneMobileIcon,
CpuChipIcon,
Squares2X2Icon,
RocketLaunchIcon,
ArrowDownTrayIcon,
StarIcon
} from '@heroicons/vue/24/outline'
useHead({
  title: "Mobile App Development Services | iOS & Android - KM Software's",
  meta: [
    {
      name: 'description',
      content: "KM Software's designs and develops scalable, secure, and feature-rich mobile applications for iOS, Android & Cross-Platform tailored for startups, growing businesses, and enterprises worldwide."
    },
    {
      property: 'og:title',
      content: "Mobile App Development Services | iOS & Android - KM Software's"
    },
    {
      property: 'og:description',
      content: 'Build high-performance mobile apps that users love. Native iOS, Android & Cross-Platform development with modern UI/UX design and scalable architecture.'
    }
  ]
})
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

const heroPoints = ref([
  'iOS, Android & Cross-Platform Apps',
  'Modern UI/UX Design',
  'Scalable Architecture',
  'End-to-End Development'
])
const trustStats = ref([
{
title: 'Apps Deployed',
value: '100+',
desc: 'On App/Play Store',
icon: RocketLaunchIcon
},

{
title: 'Total Downloads',
value: '5M+',
desc: 'Combined installs',
icon: ArrowDownTrayIcon
},

{
title: 'Average Rating',
value: '4.9',
desc: 'App Store rating',
icon: StarIcon
}
])

const platforms = ref([
{
name: 'iOS Development',
description: 'Native iPhone and iPad apps built using Swift and the latest Apple frameworks for unmatched performance and seamless integration with the Apple ecosystem.',
icon: DevicePhoneMobileIcon,
technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'ARKit', 'CoreML']
},

{
name: 'Android Development',
description: 'High-performance Android apps using Kotlin and modern Android SDKs, delivering smooth experiences across the full Android device ecosystem.',
icon: CpuChipIcon,
technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'ML Kit', 'Firebase', 'WorkManager']
},

{
name: 'Cross-Platform',
description: 'Build once, deploy everywhere using Flutter and React Native for faster time-to-market without compromising on quality or user experience.',
icon: Squares2X2Icon,
technologies: ['Flutter', 'React Native', 'Expo', 'Dart', 'TypeScript', 'Redux']
}
])
const appTypes = ref([
{
title: 'E-Commerce Apps',
description: 'Mobile shopping apps with secure payments, real-time order tracking, and seamless product catalog experiences.',
icon: ShoppingCartIcon,
examples: ['Retail', 'Marketplace', 'Fashion']
},

{
title: 'On-Demand Apps',
description: 'Food delivery, ride-sharing, and service booking platforms with real-time tracking and smart dispatch.',
icon: CalendarDaysIcon,
examples: ['Delivery', 'Rides', 'Booking']
},

{
title: 'Social Networking Apps',
description: 'Community platforms with chat, feeds, and real-time engagement features for meaningful connections.',
icon: ChatBubbleLeftRightIcon,
examples: ['Networks', 'Dating', 'Forums']
},

{
title: 'Healthcare Apps',
description: 'Telemedicine, health tracking, and medical appointment apps built to HIPAA-compliant standards.',
icon: HeartIcon,
examples: ['Telemedicine', 'Fitness', 'Wellness']
},

{
title: 'FinTech Apps',
description: 'Secure banking, digital wallet, and financial management apps with biometric auth and encryption.',
icon: CurrencyDollarIcon,
examples: ['Banking', 'Wallets', 'Trading']
},

{
title: 'Education Apps',
description: 'E-learning platforms with courses, quizzes, and live sessions for engaging educational experiences.',
icon: AcademicCapIcon,
examples: ['LMS', 'Courses', 'Live Sessions']
}
])

const techStacks = ref([
  {
    category: 'Languages & Frameworks',
    icon: '💻',
    bg: 'bg-blue-50',
    items: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Dart', 'TypeScript']
  },
  {
    category: 'Backend',
    icon: '⚡',
    bg: 'bg-purple-50',
    items: ['Node.js', 'Python', 'Firebase', 'Laravel', 'GraphQL', 'REST APIs']
  },
  {
    category: 'Database',
    icon: '🗄️',
    bg: 'bg-green-50',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'SQLite']
  }
])

const whyChooseUs = ref([
  { icon: '👨‍💻', title: 'Experienced Mobile App Developers', desc: 'Senior engineers with 5+ years in iOS, Android & cross-platform development.' },
  // { icon: '🏗️', title: 'Scalable & Secure App Architecture', desc: 'Built to grow with your user base from day one, with security at every layer.' },
  // { icon: '🎨', title: 'User-Centric Design Approach', desc: 'Beautiful, intuitive interfaces that delight users and drive retention.' },
  { icon: '⚡', title: 'Agile Development Process', desc: 'Iterative sprints with regular demos so you always know exactly where things stand.' },
  { icon: '🚀', title: 'On-Time Delivery', desc: 'We commit to timelines and deliver — 98% on-time delivery rate across all projects.' },
  { icon: '🛡️', title: 'Dedicated Support Team', desc: 'Post-launch monitoring, bug fixes, and ongoing maintenance to keep your app performing.' }
])

const whyMetrics = ref([
  { value: '150+', label: 'Apps Delivered', color: 'text-secondary' },
  { value: '98%', label: 'On-Time Delivery', color: 'text-primary' },
  { value: '5M+', label: 'App Downloads', color: 'text-accent' },
  { value: '4.9/5', label: 'Client Rating', color: 'text-success' }
])

const processSteps = ref([
  {
    title: 'Discovery & Strategy',
    description: 'We sign an NDA, refine your app idea, outline features, and plan delivery from prototype to MVP to full product.',
    duration: '1-2 weeks'
  },
  {
    title: 'Analysis & Planning',
    description: 'We select technologies, plan architecture, estimate costs, and organize the project into milestones or Agile sprints.',
    duration: '1-2 weeks'
  },
  {
    title: 'UI/UX Design',
    description: "We create wireframes and high-fidelity UI/UX designs to simulate the app's real user experience.",
    duration: '2-3 weeks'
  },
  {
    title: 'Full App Development',
    description: 'We design the product architecture, assign tasks, integrate third-party tools, and develop according to the release schedule.',
    duration: '8-12 weeks'
  },
  {
    title: 'App Testing & QA',
    description: 'Testing runs alongside development, with weekly releases sent for your approval before moving to the next sprint.',
    duration: '2-3 weeks'
  },
  {
    title: 'Deployment → Support → Scaling',
    description: 'We launch your app, handle backend deployment, and provide support. As traction grows, we scale it on the right cloud platforms to handle millions of users.',
    duration: 'Ongoing'
  }
])

const faqs = ref([
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'A typical mobile app takes 12-16 weeks from concept to launch, though simple apps may take 8 weeks and complex apps can take 20+ weeks. The timeline depends on features, platform (native vs cross-platform), design complexity, and third-party integrations.'
  },
  {
    question: 'Should I build a native app or use cross-platform?',
    answer: 'Native apps (separate iOS and Android) offer the best performance and access to all platform features, ideal for complex apps. Cross-platform (React Native/Flutter) is cost-effective and faster to market, perfect for MVPs and apps with standard features. We\'ll recommend based on your specific needs.'
  },
  {
    question: 'What happens after the app is launched?',
    answer: 'We provide 30-90 days of free bug fixes post-launch. After that, we offer maintenance plans that include monitoring, updates for new OS versions, performance optimization, security patches, and feature enhancements. We also help with app marketing and ASO (App Store Optimization).'
  },
  {
    question: 'Can you help me get my app approved on app stores?',
    answer: 'Yes! We handle the entire submission process for both App Store and Play Store. We ensure your app meets all guidelines, prepare required assets, write descriptions, and manage the review process. We have a 98% first-time approval rate.'
  },
  {
    question: 'Do you sign NDAs and ensure IP protection?',
    answer: 'Absolutely. We sign NDAs before any project discussion. All code and intellectual property belong to you from day one. We use secure development practices, code repositories with access controls, and can work within your own infrastructure if needed.'
  }
])
const submitForm = () => {
  // In production: call your API endpoint
  formSucceeded.value = true
}
</script>

<style scoped>
/* ============================================================
   SNAKE / ZIGZAG PROCESS SECTION
   ============================================================ */
.process-card{
background:#fff;
border:1px solid #eee;
border-radius:16px;
padding:30px;
position:relative;
transition:.3s;
box-shadow:0 10px 25px rgba(0,0,0,0.05);
}

.process-card:hover{
transform:translateY(-8px);
box-shadow:0 20px 40px rgba(0,0,0,0.1);
}

.process-number{
width:60px;
height:60px;
background:#0C59AF;
color:#fff;
display:flex;
align-items:center;
justify-content:center;
font-weight:700;
font-size:20px;
border-radius:50%;
margin-bottom:20px;
}

.process-title{
font-size:20px;
font-weight:700;
margin-bottom:10px;
}

.process-desc{
font-size:15px;
color:#666;
line-height:1.6;
}
/* Outer wrapper — provides relative context for edge labels */
.process-snake-outer {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 0 2rem;
}

/* The SVG fills the container responsively */
.process-snake-svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

/* ── PATH ── */
.process-snake-path {
  opacity: 0.85;
  transition: opacity 0.3s;
}
.process-snake-outer:hover .process-snake-path {
  opacity: 1;
}

/* ── DOTS ── */
.process-dot-outer {
  fill: oklch(var(--s) / 0.18);
}
.process-dot-inner {
  fill: oklch(var(--s));
  stroke: oklch(var(--b1));
  stroke-width: 3;
  transition: transform 0.3s ease, fill 0.3s ease;
  transform-origin: center;
  transform-box: fill-box;
}
.process-snake-outer:hover .process-dot-inner {
  fill: oklch(var(--p));
}

/* ── DOT NUMBERS ── */
.process-dot-label {
  font-size: 20px;
  font-weight: 900;
  fill: oklch(var(--sc));
  font-family: inherit;
  user-select: none;
  pointer-events: none;
}

/* ── STEP TITLE (SVG text) ── */
.process-step-title {
  font-size: 14px;
  font-weight: 800;
  fill: oklch(var(--s));
  font-family: inherit;
  letter-spacing: 0.01em;
}

/* ── STEP DESCRIPTION inside foreignObject ── */
.process-step-desc {
  font-size: 11px;
  line-height: 1.45;
  color: oklch(var(--bc) / 0.65);
  font-family: inherit;
  margin: 0;
  padding: 0;
  text-align: left;
}
.process-step-desc--right {
  text-align: right;
}

/* ── READY APP SVG label ── */
.process-ready-label {
  font-size: 16px;
  font-weight: 800;
  fill: oklch(var(--bc) / 0.5);
  font-family: inherit;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ── EDGE LABELS (Start / Ready App) ── */
.process-edge-label {
  position: absolute;
  font-size: 0.85rem;
  font-weight: 700;
  color: oklch(var(--bc) / 0.45);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}
.process-edge-label--start {
  /* Position near dot 1 — top-left of SVG */
  top: 9%;
  left: 0;
}
.process-edge-label--end {
  /* Hidden — label is inside SVG */
  display: none;
}

/* ── Responsive: hide edge label on small screens ── */
@media (max-width: 640px) {
  .process-edge-label {
    display: none;
  }
  .process-step-title {
    font-size: 11px;
  }
  .process-step-desc {
    font-size: 9px;
  }
  .process-dot-label {
    font-size: 16px;
  }
}
</style>
