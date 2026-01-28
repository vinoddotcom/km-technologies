<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-red-950/30 via-base-100 to-blue-950/30 pt-32 pb-24 overflow-hidden">
      <!-- Animated Background -->
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(239,68,68,0.15),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(59,130,246,0.15),transparent_50%)] animate-pulse" style="animation-duration: 8s;"></div>
        <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:64px_64px]"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-8 opacity-60 hover:opacity-100 transition-opacity">
          <ul>
            <li><NuxtLink to="/" class="hover:text-error transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-error transition-colors">Services</NuxtLink></li>
            <li class="text-error">Cyber Security</li>
          </ul>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Left: Content -->
          <div class="space-y-8 animate-[fadeIn_0.6s_ease-out]">
            <div class="space-y-6">
              <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-error/20 to-error/10 border border-error/30 backdrop-blur-sm mb-6 hover:scale-105 transition-transform">
                <svg class="w-4 h-4 text-error animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-bold text-error">Enterprise Cyber Security</span>
              </div>
              
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.05] tracking-tight">
                <span class="block mb-2">Protect Your Assets</span>
                <span class="block bg-gradient-to-r from-error via-orange-500 to-warning bg-clip-text text-transparent bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]">
                  From Digital Threats
                </span>
              </h1>
              
              <p class="text-xl sm:text-2xl text-base-content/80 leading-relaxed font-light">
                Comprehensive cybersecurity solutions to safeguard your business from evolving threats, ensure compliance, and maintain customer trust in the digital age.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-error btn-lg px-10 shadow-2xl hover:shadow-error/50 hover:scale-105 transition-all group relative overflow-hidden">
                <span class="relative z-10 flex items-center gap-2">
                  Free Security Assessment
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </span>
                <div class="absolute inset-0 bg-gradient-to-r from-error to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </NuxtLink>
              
              <button class="btn btn-outline btn-error btn-lg px-8 group hover:scale-105 transition-all">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download Guide</span>
              </button>
            </div>
            
            <!-- Enhanced Trust Stats -->
            <div class="stats stats-vertical sm:stats-horizontal shadow-2xl bg-gradient-to-br from-base-200/80 to-base-300/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              <div class="stat hover:bg-error/5 transition-all group">
                <div class="stat-figure text-error">
                  <div class="w-12 h-12 rounded-full bg-error/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="stat-title text-xs font-semibold opacity-70">Threats Blocked</div>
                <div class="stat-value text-error text-4xl">99.9%</div>
                <div class="stat-desc text-xs">Industry-leading protection</div>
              </div>
              
              <div class="stat hover:bg-success/5 transition-all group">
                <div class="stat-figure text-success">
                  <div class="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="stat-title text-xs font-semibold opacity-70">Certified Experts</div>
                <div class="stat-value text-success text-4xl">50+</div>
                <div class="stat-desc text-xs">Security professionals</div>
              </div>
              
              <div class="stat hover:bg-info/5 transition-all group">
                <div class="stat-figure text-info">
                  <div class="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                      <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                </div>
                <div class="stat-title text-xs font-semibold opacity-70">Monitoring</div>
                <div class="stat-value text-info text-4xl">24/7</div>
                <div class="stat-desc text-xs">Around the clock</div>
              </div>
            </div>
          </div>
          
          <!-- Right: Security Shield Visual -->
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-error/20 via-warning/20 to-info/20 p-12">
              <svg class="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" class="text-error" style="stop-color:currentColor"/>
                    <stop offset="100%" class="text-info" style="stop-color:currentColor"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <path d="M100 20C60 20 40 30 40 30V90C40 130 60 160 100 180C140 160 160 130 160 90V30C160 30 140 20 100 20Z" 
                      fill="url(#shieldGrad)" opacity="0.3" filter="url(#glow)"/>
                <path d="M100 40C70 40 55 47 55 47V90C55 120 70 142 100 157C130 142 145 120 145 90V47C145 47 130 40 100 40Z" 
                      fill="url(#shieldGrad)" opacity="0.5"/>
                <path d="M85 100L95 110L115 85" stroke="url(#shieldGrad)" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
              </svg>
            </div>
            
            <!-- Floating Certification Badges -->
            <div class="absolute -top-4 -right-4 bg-base-100 rounded-2xl p-4 shadow-xl border border-base-content/10 hidden lg:block">
              <div class="flex flex-col gap-2">
                <div class="badge badge-error badge-lg">ISO 27001</div>
                <div class="badge badge-warning badge-lg">SOC 2</div>
                <div class="badge badge-success badge-lg">GDPR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Security Services -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-error badge-lg mb-4">Our Services</div>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text text-transparent">
            Comprehensive Security Services
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
            Multi-layered defense strategies to protect your digital infrastructure
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="(service, index) in coreServices" :key="index" 
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-base-content/5 hover:border-error/20 overflow-hidden relative">
            <!-- Hover gradient overlay -->
            <div class="absolute inset-0 bg-gradient-to-br from-error/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="card-body relative z-10">
              <!-- Icon -->
              <div class="relative mb-6">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-error/10 to-warning/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-error/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg class="w-10 h-10 text-error relative z-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="service.iconPath"></path>
                  </svg>
                </div>
                <!-- Decorative corner -->
                <div class="absolute -top-1 -right-1 w-8 h-8 bg-gradient-to-br from-error/20 to-transparent rounded-full blur-xl group-hover:w-12 group-hover:h-12 transition-all"></div>
              </div>
              
              <h3 class="card-title text-2xl sm:text-3xl mb-4 group-hover:text-error transition-colors">{{ service.title }}</h3>
              <p class="text-base-content/70 leading-relaxed mb-6 min-h-[4rem]">{{ service.description }}</p>
              
              <div class="space-y-3">
                <div v-for="feature in service.features" :key="feature" class="flex items-start gap-3 group/item">
                  <div class="w-5 h-5 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-success/20 transition-colors">
                    <svg class="w-3 h-3 text-success" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <span class="text-sm text-base-content/80 group-hover/item:text-base-content transition-colors">{{ feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance & Certifications -->
    <section class="py-24 bg-gradient-to-b from-base-200 via-base-100 to-base-200 relative overflow-hidden">
      <!-- Background decoration -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 right-0 w-96 h-96 bg-error rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-success rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-error/10 to-success/10 border border-error/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-error" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-bold text-error">Compliance & Standards</span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Certified Security Excellence
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
              We maintain the highest industry certifications and help you achieve regulatory compliance
            </p>
          </div>

          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
            <div v-for="cert in certifications" :key="cert.name" 
              class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-base-content/5 hover:border-error/30 hover:-translate-y-2">
              <div class="card-body items-center text-center p-6">
                <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-error/10 via-warning/10 to-success/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-error/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="text-4xl font-black relative z-10" :class="cert.color">{{ cert.icon }}</div>
                </div>
                <h3 class="card-title text-base md:text-lg mb-2 group-hover:text-error transition-colors">{{ cert.name }}</h3>
                <p class="text-xs md:text-sm text-base-content/60 text-center leading-snug">{{ cert.description }}</p>
              </div>
            </div>
          </div>

          <!-- Regulatory Compliance Support -->
          <div class="bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 md:p-12 border-2 border-base-content/5 shadow-xl hover:shadow-2xl transition-all">
            <div class="text-center mb-12">
              <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-error/10 border border-error/20 mb-6">
                <svg class="w-6 h-6 text-error" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
                <span class="text-lg font-bold text-error">Regulatory Frameworks</span>
              </div>
              <h3 class="text-3xl md:text-4xl font-black mb-4">Complete Compliance Coverage</h3>
              <p class="text-base-content/60 max-w-2xl mx-auto">We help you navigate complex regulatory requirements across multiple frameworks</p>
            </div>
            
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="framework in complianceFrameworks" :key="framework.name" 
                class="group p-6 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 border-2 border-base-content/10 hover:border-error/30 hover:shadow-lg transition-all duration-300">
                <div class="flex items-start gap-4 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-error/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-error" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-black text-xl mb-2 group-hover:text-error transition-colors">{{ framework.name }}</h4>
                  </div>
                </div>
                <p class="text-sm text-base-content/70 leading-relaxed">{{ framework.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Security Methodology Timeline -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-20 space-y-4">
            <div class="inline-block">
              <div class="badge badge-error badge-lg mb-4">Our Process</div>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Our Security Methodology
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light max-w-2xl mx-auto">
              A proven, systematic approach to protecting your digital assets
            </p>
          </div>

          <ul class="timeline timeline-vertical timeline-compact">
            <li v-for="(step, index) in securityProcess" :key="index" class="group">
              <div class="timeline-start font-mono text-xs sm:text-sm text-base-content/50 group-hover:text-error transition-colors pr-2 sm:pr-4">{{ step.phase }}</div>
              <div class="timeline-middle">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-error/20 to-warning/10 flex items-center justify-center border-4 border-base-100 shadow-lg group-hover:scale-110 transition-all duration-500">
                  <span class="text-lg sm:text-xl font-black text-error">{{ index + 1 }}</span>
                </div>
              </div>
              <div class="timeline-end timeline-box bg-gradient-to-br from-base-100 to-base-200 border-2 border-base-content/10 group-hover:border-error/30 shadow-lg group-hover:shadow-xl transition-all duration-300 ml-2 sm:ml-4 max-w-md">
                <h3 class="text-lg sm:text-xl font-black mb-2 group-hover:text-error transition-colors">{{ step.title }}</h3>
                <p class="text-sm text-base-content/70 leading-relaxed">{{ step.description }}</p>
              </div>
              <hr v-if="index < securityProcess.length - 1" class="bg-gradient-to-b from-error/30 to-error/10"/>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gradient-to-b from-base-100 via-base-200 to-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-bold text-accent">FAQ</span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Security Questions Answered
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light">
              Everything you need to know about our cybersecurity services
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border-2 border-base-content/10 hover:border-error/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold group-hover:text-error transition-colors pr-12">
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
      <div class="absolute inset-0 bg-gradient-to-br from-error via-orange-600 to-warning"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <!-- Floating shapes -->
      <div class="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s;"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-white/20 shadow-2xl">
            <div class="text-center text-white">
              <div class="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 sm:mb-8">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm sm:text-base font-bold">Free Security Assessment</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                Secure Your Business Today
              </h2>
              
              <p class="text-base sm:text-lg md:text-xl opacity-95 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Get a comprehensive security assessment and personalized protection plan from our certified experts.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <NuxtLink to="/contact" class="btn btn-lg bg-white text-error hover:bg-gray-100 hover:scale-110 border-none shadow-2xl hover:shadow-[0_20px_60px_rgba(255,255,255,0.4)] px-12 py-4 transition-all min-w-[260px] group/btn">
                  <span class="text-lg font-bold">Get Free Assessment</span>
                  <svg class="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </NuxtLink>
              </div>
              
              <div class="pt-10 border-t-2 border-white/20">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all group/feature">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover/feature:scale-110 transition-transform">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="font-semibold">No Obligation</span>
                  </div>
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all group/feature">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover/feature:scale-110 transition-transform">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="font-semibold">24-Hour Response</span>
                  </div>
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all group/feature">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover/feature:scale-110 transition-transform">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="font-semibold">Certified Experts</span>
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
  title: 'Cyber Security Services | KM Global Tech',
  meta: [
    { name: 'description', content: 'Enterprise-grade cybersecurity solutions. Protect your business with penetration testing, compliance, 24/7 monitoring, and threat intelligence.' }
  ]
});

const coreServices = ref([
  {
    title: 'Penetration Testing',
    description: 'Simulate real-world attacks to identify vulnerabilities before hackers do. Comprehensive testing of networks, applications, and systems.',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    features: [
      'Network penetration testing',
      'Web application security',
      'Social engineering tests',
      'Detailed remediation reports'
    ]
  },
  {
    title: 'Security Monitoring (SOC)',
    description: '24/7 Security Operations Center monitoring your infrastructure, detecting and responding to threats in real-time.',
    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z',
    features: [
      'Real-time threat detection',
      'Incident response team',
      'SIEM integration',
      'Threat intelligence feeds'
    ]
  },
  {
    title: 'Compliance Management',
    description: 'Achieve and maintain compliance with GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001 and other regulatory frameworks.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: [
      'Gap assessment',
      'Policy development',
      'Audit preparation',
      'Ongoing compliance monitoring'
    ]
  },
  {
    title: 'Incident Response',
    description: 'Rapid response to security incidents with forensic analysis, containment, and recovery procedures.',
    iconPath: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z',
    features: [
      'Emergency response team',
      'Forensic investigation',
      'Breach containment',
      'Recovery planning'
    ]
  },
  {
    title: 'Vulnerability Management',
    description: 'Continuous scanning and assessment of your infrastructure to identify and remediate security weaknesses.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    features: [
      'Automated scanning',
      'Vulnerability prioritization',
      'Patch management',
      'Risk scoring'
    ]
  },
  {
    title: 'Security Awareness Training',
    description: 'Educate your team to recognize and prevent social engineering, phishing, and other human-targeted attacks.',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    features: [
      'Phishing simulation campaigns',
      'Security best practices training',
      'Compliance training',
      'Progress tracking'
    ]
  }
]);

const certifications = ref([
  { name: 'ISO 27001', icon: 'ISO', color: 'text-error', description: 'Information Security Management' },
  { name: 'SOC 2 Type II', icon: 'SOC', color: 'text-warning', description: 'Service Organization Control' },
  { name: 'GDPR', icon: 'GDPR', color: 'text-success', description: 'Data Protection Compliance' },
  { name: 'PCI DSS', icon: 'PCI', color: 'text-info', description: 'Payment Card Security' },
  { name: 'HIPAA', icon: 'HIPAA', color: 'text-primary', description: 'Healthcare Data Protection' },
  { name: 'CISSP', icon: 'CISSP', color: 'text-secondary', description: 'Certified Information Systems Security Professional' },
  { name: 'CEH', icon: 'CEH', color: 'text-accent', description: 'Certified Ethical Hacker' },
  { name: 'CISM', icon: 'CISM', color: 'text-error', description: 'Certified Information Security Manager' }
]);

const complianceFrameworks = ref([
  { name: 'GDPR', description: 'EU General Data Protection Regulation compliance for handling customer data' },
  { name: 'HIPAA', description: 'Healthcare Insurance Portability and Accountability Act for medical data' },
  { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard for payment processing' },
  { name: 'SOC 2', description: 'Service Organization Control for SaaS security controls' },
  { name: 'ISO 27001', description: 'International standard for information security management systems' },
  { name: 'NIST', description: 'National Institute of Standards and Technology cybersecurity framework' }
]);

const securityProcess = ref([
  { phase: 'Phase 1', title: 'Risk Assessment', description: 'Comprehensive analysis of your current security posture, identifying vulnerabilities and potential threats across all systems.' },
  { phase: 'Phase 2', title: 'Strategy Development', description: 'Custom security roadmap aligned with your business objectives, compliance requirements, and risk tolerance.' },
  { phase: 'Phase 3', title: 'Implementation', description: 'Deploy security controls, monitoring systems, and protection measures with minimal disruption to operations.' },
  { phase: 'Phase 4', title: 'Testing & Validation', description: 'Rigorous penetration testing and security audits to ensure all controls are functioning effectively.' },
  { phase: 'Phase 5', title: 'Monitoring & Response', description: '24/7 security operations center monitoring with rapid incident response capabilities.' },
  { phase: 'Ongoing', title: 'Continuous Improvement', description: 'Regular reviews, updates, and enhancements to adapt to evolving threats and business needs.' }
]);

const faqs = ref([
  {
    question: 'How quickly can you respond to a security incident?',
    answer: 'Our Security Operations Center provides 24/7 monitoring with incident response times of under 15 minutes for critical threats. We maintain on-call teams globally to ensure rapid response regardless of time zone.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We serve healthcare, financial services, e-commerce, technology, manufacturing, and government sectors. Our team has deep expertise in industry-specific regulations like HIPAA, PCI DSS, and GDPR.'
  },
  {
    question: 'How do you ensure compliance with multiple regulations?',
    answer: 'We maintain a compliance matrix that maps your requirements across all applicable frameworks (GDPR, HIPAA, SOC 2, etc.), implement controls that satisfy multiple standards, and provide comprehensive documentation for audits.'
  },
  {
    question: 'What is included in a penetration test?',
    answer: 'Our penetration tests include network scanning, web application testing, social engineering attempts, wireless security assessment, and physical security evaluation. You receive a detailed report with findings prioritized by severity and actionable remediation steps.'
  },
  {
    question: 'Do you provide ongoing security training for employees?',
    answer: 'Yes! We offer comprehensive security awareness programs including phishing simulations, interactive training modules, quarterly updates on emerging threats, and specialized training for developers and IT staff.'
  },
  {
    question: 'What is your average incident resolution time?',
    answer: 'For most security incidents, containment occurs within 1-4 hours, with full resolution typically within 24-48 hours depending on severity. Critical incidents receive immediate escalation to our senior response team.'
  }
]);
</script>
