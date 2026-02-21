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
            <li>Mobile App Development</li>
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
                <span class="text-sm font-bold text-secondary">iOS • Android • Cross-Platform</span>
              </div>
              
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                Build Mobile Apps
                <span class="block bg-gradient-to-r from-secondary via-accent to-primary bg-clip-text text-transparent mt-2">
                  That Users Love
                </span>
              </h1>
              
              <p class="text-xl sm:text-2xl text-base-content/70 leading-relaxed font-light">
                Transform your ideas into powerful mobile experiences. Native iOS, Android, or cross-platform apps built with cutting-edge technology.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-secondary btn-lg px-10 shadow-2xl hover:shadow-secondary/50 hover:scale-110 transition-all group">
                <span class="text-lg font-bold">Start Your Project</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              
              <button class="btn btn-outline btn-lg px-10 hover:scale-105 transition-all group">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                <span class="text-lg">View Portfolio</span>
              </button>
            </div>
            
            <!-- Trust Stats -->
            <div class="stats stats-vertical sm:stats-horizontal shadow-xl bg-gradient-to-br from-base-200/80 to-base-300/50 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div v-for="stat in trustStats" :key="stat.title" class="stat hover:bg-secondary/5 transition-colors">
                <div class="stat-figure text-secondary">
                  <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path v-html="stat.iconPath"></path>
                    </svg>
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
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-bold text-primary">Our Tech Stack</span>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Multi-Platform Expertise
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 font-light">
            Build once, deploy everywhere—or go fully native for maximum performance
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div v-for="(platform, index) in platforms" :key="platform.name"
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl border-2 border-base-content/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
            <div class="card-body">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="platform.iconPath"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-black group-hover:text-primary transition-colors">
                  {{ platform.name }}
                </h3>
              </div>
              
              <p class="text-base-content/70 mb-6">{{ platform.description }}</p>
              
              <div class="space-y-2">
                <div class="text-sm font-bold text-base-content/80 mb-3">Technologies:</div>
                <div class="grid grid-cols-2 gap-2">
                  <div v-for="tech in platform.technologies" :key="tech"
                    class="px-3 py-2 rounded-lg bg-gradient-to-br from-base-200/50 to-base-300/50 border border-base-content/10 hover:border-primary/40 hover:bg-primary/5 transition-all text-center font-semibold text-sm hover:scale-105 cursor-pointer">
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
            <div class="badge badge-accent badge-lg mb-4">What We Build</div>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Types of Apps We Develop
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
            From consumer apps to enterprise solutions, we build it all
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="(service, index) in appTypes" :key="index"
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-base-content/5 hover:border-accent/20">
            <div class="card-body">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg class="w-8 h-8 text-accent group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="service.iconPath"></path>
                </svg>
              </div>
              <h3 class="card-title text-2xl mb-3 group-hover:text-accent transition-colors">{{ service.title }}</h3>
              <p class="text-base-content/70 leading-relaxed mb-4">{{ service.description }}</p>
              <div class="mt-auto">
                <div class="text-xs font-bold text-base-content/50 mb-2">EXAMPLES:</div>
                <div class="flex flex-wrap gap-2">
                  <div v-for="example in service.examples" :key="example" class="badge badge-outline badge-sm">{{ example }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process -->
   <section class="py-24 bg-gradient-to-b from-base-100 to-base-200 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-20 space-y-4">
            <div class="inline-block">
              <div class="badge badge-info badge-lg mb-4">Our Process</div>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              From Idea to App Store
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light">
              A proven 6-step process to deliver your mobile app
            </p>
          </div>

          <ul class="timeline timeline-vertical timeline-compact">
            <li v-for="(step, index) in processSteps" :key="index" class="group">
              <div class="timeline-start font-mono text-xs sm:text-sm text-base-content/50 group-hover:text-secondary transition-colors pr-2 sm:pr-4">
                STEP {{ index + 1 }}
              </div>
              <div class="timeline-middle">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/10 flex items-center justify-center border-4 border-base-100 shadow-lg group-hover:scale-110 transition-all duration-500">
                  <span class="text-lg sm:text-xl font-black text-secondary">{{ index + 1 }}</span>
                </div>
              </div>
              <div class="timeline-end timeline-box bg-gradient-to-br from-base-100 to-base-200 border-2 border-base-content/10 group-hover:border-secondary/30 shadow-lg group-hover:shadow-xl transition-all duration-300 ml-2 sm:ml-4 max-w-md">
                <h3 class="text-lg sm:text-xl font-black mb-2 group-hover:text-secondary transition-colors">{{ step.title }}</h3>
                <p class="text-sm text-base-content/70 leading-relaxed mb-3">{{ step.description }}</p>
                <div class="text-xs text-base-content/50">
                  <span class="font-semibold">Duration:</span> {{ step.duration }}
                </div>
              </div>
              <hr v-if="index < processSteps.length - 1" class="bg-gradient-to-b from-secondary/30 to-secondary/10"/>
            </li>
          </ul>
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
        <div class="max-w-5xl mx-auto">
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

    <!-- CTA Section -->
    <section class="py-24 sm:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-primary"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div class="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s;"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-white/20 shadow-2xl">
            <div class="text-center text-white">
              <div class="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 sm:mb-8">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                </svg>
                <span class="text-sm sm:text-base font-bold">Ready to Build?</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                Let's Build Your Mobile App Together
              </h2>
              
              <p class="text-base sm:text-lg md:text-xl opacity-95 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                From concept to launch, we'll be with you every step of the way. Start your project today.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <NuxtLink to="/contact" class="btn btn-lg bg-white text-secondary hover:bg-base-200 hover:scale-110 border-none shadow-2xl px-10 transition-all min-w-[240px] group">
                  <span class="text-lg font-bold">Start Your Project</span>
                  <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </NuxtLink>
              </div>
              
              <div class="pt-8 border-t-2 border-white/20">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">150+</div>
                    <div class="text-sm opacity-90">Apps Launched</div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">5M+</div>
                    <div class="text-sm opacity-90">Downloads</div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">4.9/5</div>
                    <div class="text-sm opacity-90">Client Rating</div>
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
  title: "Mobile App Development Services | iOS & Android Apps - KM Software's",
  meta: [
    {
      name: 'description',
      content: 'Expert mobile app development for iOS, Android, and cross-platform. Native or hybrid apps built with cutting-edge technology. Transform your ideas into powerful mobile experiences.'
    },
    {
      property: 'og:title',
      content: "Mobile App Development Services | iOS & Android Apps - KM Software's"
    },
    {
      property: 'og:description',
      content: 'Expert mobile app development for iOS, Android, and cross-platform. Native or hybrid apps built with cutting-edge technology.'
    }
  ]
})

const trustStats = ref([
  {
    title: 'Apps Deployed',
    value: '150+',
    desc: 'On App/Play Store',
    iconPath: 'd="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"'
  },
  {
    title: 'Total Downloads',
    value: '5M+',
    desc: 'Combined installs',
    iconPath: 'd="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"'
  },
  {
    title: 'Average Rating',
    value: '4.9',
    desc: 'App Store rating',
    iconPath: 'd="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"'
  }
])

const platforms = ref([
  {
    name: 'iOS Development',
    description: 'Native iOS apps for iPhone and iPad using Swift and SwiftUI.',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'ARKit', 'CoreML']
  },
  {
    name: 'Android Development',
    description: 'Native Android apps using Kotlin and Jetpack Compose.',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    technologies: ['Kotlin', 'Jetpack', 'Compose', 'Room', 'ML Kit', 'Firebase']
  },
  {
    name: 'Cross-Platform',
    description: 'Write once, deploy everywhere with React Native and Flutter.',
    iconPath: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z',
    technologies: ['React Native', 'Flutter', 'Expo', 'Dart', 'TypeScript', 'Redux']
  }
])

const appTypes = ref([
  {
    title: 'E-Commerce Apps',
    description: 'Mobile shopping experiences with payment integration, product catalogs, and order tracking.',
    iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    examples: ['Retail', 'Marketplace', 'Fashion']
  },
  {
    title: 'Social Media Apps',
    description: 'Community platforms with real-time messaging, feeds, and social interactions.',
    iconPath: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    examples: ['Networks', 'Dating', 'Forums']
  },
  {
    title: 'On-Demand Services',
    description: 'Service booking platforms with real-time tracking, payments, and ratings.',
    iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    examples: ['Delivery', 'Rides', 'Services']
  },
  {
    title: 'Healthcare Apps',
    description: 'HIPAA-compliant medical apps for telemedicine, appointments, and health tracking.',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    examples: ['Telemedicine', 'Fitness', 'Wellness']
  },
  {
    title: 'Finance & Banking',
    description: 'Secure fintech apps with encryption, biometric auth, and transaction management.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    examples: ['Banking', 'Wallets', 'Trading']
  },
  {
    title: 'Education & E-Learning',
    description: 'Interactive learning platforms with video courses, quizzes, and progress tracking.',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    examples: ['LMS', 'Courses', 'Tutoring']
  }
])

const processSteps = ref([
  {
    title: 'Discovery & Planning',
    description: 'We analyze your requirements, define features, create wireframes, and plan the technical architecture.',
    duration: '1-2 weeks'
  },
  {
    title: 'UI/UX Design',
    description: 'Our designers create beautiful, intuitive interfaces that align with your brand and provide excellent user experience.',
    duration: '2-3 weeks'
  },
  {
    title: 'Development',
    description: 'Agile development sprints where we build features iteratively, with regular demos and feedback loops.',
    duration: '8-12 weeks'
  },
  {
    title: 'Quality Assurance',
    description: 'Comprehensive testing including functional, performance, security, and device compatibility testing.',
    duration: '2-3 weeks'
  },
  {
    title: 'App Store Deployment',
    description: 'We handle the entire submission process for both Apple App Store and Google Play Store.',
    duration: '1-2 weeks'
  },
  {
    title: 'Support & Maintenance',
    description: 'Post-launch monitoring, bug fixes, updates, and feature enhancements to keep your app running smoothly.',
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
  },
  {
    question: 'How much does mobile app development cost?',
    answer: 'Costs vary based on complexity. Simple apps start at $15k, medium complexity apps range from $30-50k, and complex enterprise apps can be $75k+. We offer fixed-price projects, hourly rates ($50-80/hour), and dedicated team models. Contact us for a detailed quote based on your requirements.'
  }
])
</script>
