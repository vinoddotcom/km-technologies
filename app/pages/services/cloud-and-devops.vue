<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 pt-32 pb-24 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--p),0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(var(--s),0.08),transparent_50%)] animate-pulse" style="animation-duration: 8s;"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-8 opacity-60 hover:opacity-100 transition-opacity">
          <ul>
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-primary transition-colors">Services</NuxtLink></li>
            <li class="text-primary">Cloud & DevOps</li>
          </ul>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm mb-6">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2 5a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2V5zm14 1a1 1 0 11-2 0 1 1 0 012 0zM2 13a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H4a2 2 0 01-2-2v-2zm14 1a1 1 0 11-2 0 1 1 0 012 0z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-bold text-primary">Cloud & DevOps Solutions</span>
              </div>
              
              <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-black mb-5 leading-tight tracking-tight text-base-content">
                Scalable Infrastructure.
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-1">
                  Faster Deployments.
                </span>
              </h1>
              
              <p class="text-base sm:text-lg text-base-content/80 leading-relaxed max-w-lg mb-4">
                Modern businesses need flexible, secure, and high-performing infrastructure to stay competitive. At KM Software's, we help organizations adopt cloud and DevOps practices that improve scalability, accelerate releases, and optimize performance.
              </p>
              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-lg">
                From cloud migration to automated CI/CD pipelines, we build infrastructure that supports long-term growth.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg px-10 shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all group relative overflow-hidden">
                <span class="relative z-10 flex items-center gap-2">
                  Move to the Cloud
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </span>
              </NuxtLink>
              
              <button class="btn btn-outline btn-primary btn-lg px-8 group hover:scale-105 transition-all">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download Guide</span>
              </button>
            </div>
            
            <!-- Trust Stats -->
            <div class="stats stats-vertical sm:stats-horizontal shadow-2xl bg-gradient-to-br from-base-200/80 to-base-300/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              <div class="stat hover:bg-primary/5 transition-all group">
                <div class="stat-title text-xs font-semibold opacity-70">Uptime SLA</div>
                <div class="stat-value text-primary text-4xl">99.9%</div>
                <div class="stat-desc text-xs">Industry-leading reliability</div>
              </div>
              
              <div class="stat hover:bg-secondary/5 transition-all group">
                <div class="stat-title text-xs font-semibold opacity-70">Deployments</div>
                <div class="stat-value text-secondary text-4xl">500+</div>
                <div class="stat-desc text-xs">Successful cloud migrations</div>
              </div>
              
              <div class="stat hover:bg-accent/5 transition-all group">
                <div class="stat-title text-xs font-semibold opacity-70">Cost Savings</div>
                <div class="stat-value text-accent text-4xl">40%</div>
                <div class="stat-desc text-xs">Average infrastructure savings</div>
              </div>
            </div>
          </div>
          
          <!-- Right: Cloud Visual -->
          <div class="relative hidden lg:block">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-12">
              <svg class="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="cloudGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" class="text-primary" style="stop-color:currentColor"/>
                    <stop offset="100%" class="text-secondary" style="stop-color:currentColor"/>
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                    <feMerge>
                      <feMergeNode in="coloredBlur"/>
                      <feMergeNode in="SourceGraphic"/>
                    </feMerge>
                  </filter>
                </defs>
                <!-- Cloud shape -->
                <path d="M160 120c0 11-9 20-20 20H60c-16.5 0-30-13.5-30-30s13.5-30 30-30c1 0 2 0 3 0.1C68 65 80 55 95 55c18 0 33 13 36 30 1.5-0.5 3-0.5 4.5-0.5 13.5 0 24.5 11 24.5 24.5z" 
                      fill="url(#cloudGrad)" opacity="0.3" filter="url(#glow)"/>
                <path d="M150 115c0 8-7 15-15 15H65c-12.5 0-22.5-10-22.5-22.5s10-22.5 22.5-22.5c1 0 2 0 2.5 0.1C72 72 82 65 95 65c14 0 25 10 28 23 1-0.3 2-0.3 3-0.3 10.5 0 19 8.5 19 19z" 
                      fill="url(#cloudGrad)" opacity="0.5"/>
                <!-- Upload arrow -->
                <path d="M100 130V90" stroke="url(#cloudGrad)" stroke-width="6" fill="none" stroke-linecap="round" filter="url(#glow)"/>
                <path d="M85 105L100 90L115 105" stroke="url(#cloudGrad)" stroke-width="6" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
                <!-- Server dots -->
                <circle cx="75" cy="155" r="6" fill="url(#cloudGrad)" opacity="0.4"/>
                <circle cx="100" cy="155" r="6" fill="url(#cloudGrad)" opacity="0.6"/>
                <circle cx="125" cy="155" r="6" fill="url(#cloudGrad)" opacity="0.4"/>
                <!-- Connection lines -->
                <line x1="75" y1="155" x2="85" y2="130" stroke="url(#cloudGrad)" stroke-width="2" opacity="0.3"/>
                <line x1="100" y1="155" x2="100" y2="130" stroke="url(#cloudGrad)" stroke-width="2" opacity="0.3"/>
                <line x1="125" y1="155" x2="115" y2="130" stroke="url(#cloudGrad)" stroke-width="2" opacity="0.3"/>
              </svg>
            </div>
            
            <!-- Floating Badges -->
            <div class="absolute -top-4 -right-4 bg-base-100 rounded-2xl p-4 shadow-xl border border-base-content/10 hidden lg:block">
              <div class="flex flex-col gap-2">
                <div class="badge badge-primary badge-lg">AWS</div>
                <div class="badge badge-secondary badge-lg">Azure</div>
                <div class="badge badge-accent badge-lg">GCP</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cloud & DevOps Services -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-primary badge-lg mb-4">Our Services</div>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text text-transparent">
            Our Cloud & DevOps Services
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
            We provide end-to-end cloud and DevOps solutions tailored to your business needs
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          <div v-for="(service, index) in coreServices" :key="index" 
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-base-content/5 hover:border-primary/20 overflow-hidden relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="card-body relative z-10">
              <div class="relative mb-6">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <svg class="w-10 h-10 text-primary relative z-10 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
                  </svg>
                </div>
              </div>
              
              <h3 class="card-title text-2xl mb-4 group-hover:text-primary transition-colors">{{ service.title }}</h3>
              <p class="text-base-content/70 leading-relaxed mb-6">{{ service.description }}</p>
              
              <div class="space-y-3">
                <div v-for="feature in service.features" :key="feature" class="flex items-start gap-3 group/item">
                  <div class="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                    <svg class="w-3 h-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
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

    <!-- Our Approach / Methodology -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-20 space-y-4">
            <div class="inline-block">
              <div class="badge badge-primary badge-lg mb-4">Our Approach</div>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Our Approach
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light max-w-2xl mx-auto">
              We focus on building infrastructure that is secure, scalable, and efficient
            </p>
          </div>

          <ul class="timeline timeline-vertical timeline-compact">
            <li v-for="(step, index) in devopsProcess" :key="index" class="group">
              <div class="timeline-start font-mono text-xs sm:text-sm text-base-content/50 group-hover:text-primary transition-colors pr-2 sm:pr-4">{{ step.phase }}</div>
              <div class="timeline-middle">
                <div class="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center border-4 border-base-100 shadow-lg group-hover:scale-110 transition-all duration-500">
                  <span class="text-lg sm:text-xl font-black text-primary">{{ index + 1 }}</span>
                </div>
              </div>
              <div class="timeline-end timeline-box bg-gradient-to-br from-base-100 to-base-200 border-2 border-base-content/10 group-hover:border-primary/30 shadow-lg group-hover:shadow-xl transition-all duration-300 ml-2 sm:ml-4 max-w-md">
                <h3 class="text-lg sm:text-xl font-black mb-2 group-hover:text-primary transition-colors">{{ step.title }}</h3>
                <p class="text-sm text-base-content/70 leading-relaxed">{{ step.description }}</p>
              </div>
              <hr v-if="index < devopsProcess.length - 1" class="bg-gradient-to-b from-primary/30 to-primary/10"/>
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Why Choose KM Software's -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-bold text-primary">Why KM Software's</span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Why Choose KM Software's?
            </h2>
            <p class="text-xl text-base-content/60 max-w-3xl mx-auto font-light">
              We don't just move you to the cloud — we help you optimize and scale it effectively
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div v-for="reason in whyChooseUs" :key="reason.title"
              class="flex items-start gap-4 p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all group">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
                </svg>
              </div>
              <div>
                <h3 class="font-bold mb-1">{{ reason.title }}</h3>
                <p class="text-sm text-base-content/60 leading-relaxed">{{ reason.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Future-Ready Infrastructure -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm mb-6">
            <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.98 5.98 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-bold text-secondary">Future-Ready</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black mb-6">Future-Ready Infrastructure</h2>
          <p class="text-xl text-base-content/60 leading-relaxed mb-8">
            Whether you're a startup launching your first product or an enterprise modernizing legacy systems, our cloud and DevOps solutions are built to support your growth journey.
          </p>
          <div class="grid sm:grid-cols-3 gap-6">
            <div class="p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all">
              <div class="text-3xl mb-3">🚀</div>
              <h3 class="font-bold mb-2">Startups</h3>
              <p class="text-sm text-base-content/60">Launch fast with scalable, cost-efficient cloud infrastructure</p>
            </div>
            <div class="p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-secondary/20 hover:shadow-lg transition-all">
              <div class="text-3xl mb-3">📈</div>
              <h3 class="font-bold mb-2">Growing Businesses</h3>
              <p class="text-sm text-base-content/60">Scale operations with automated pipelines and monitoring</p>
            </div>
            <div class="p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-accent/20 hover:shadow-lg transition-all">
              <div class="text-3xl mb-3">🏢</div>
              <h3 class="font-bold mb-2">Enterprises</h3>
              <p class="text-sm text-base-content/60">Modernize legacy systems with enterprise-grade cloud solutions</p>
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
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-bold text-accent">FAQ</span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Cloud & DevOps Questions
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light">
              Everything you need to know about our cloud and DevOps services
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border-2 border-base-content/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold group-hover:text-primary transition-colors pr-12">
                <div class="flex items-center gap-3">
                  <span class="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">{{ index + 1 }}</span>
                  {{ faq.question }}
                </div>
              </div>
              <div class="collapse-content">
                <p class="text-base-content/70 leading-relaxed pt-2 text-base pl-10">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
   
    <section id="contact" class="py-24 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_60%)]"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="max-w-3xl mx-auto text-primary-content">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
          Let's Modernize Your
            <span class="block mt-2">Infrastructure</span>
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
useHead({
  title: "Cloud & DevOps Solutions | KM Software's",
  meta: [
    { name: 'description', content: 'Scalable cloud infrastructure and DevOps solutions. AWS, Azure, GCP migration, CI/CD pipelines, and 24/7 monitoring by KM Software\'s.' },
    { property: 'og:title', content: "Cloud & DevOps Solutions | KM Software's" },
    { property: 'og:description', content: 'Scalable infrastructure. Faster deployments. Smarter operations.' }
  ]
});

const coreServices = ref([
  {
    title: 'Cloud Migration & Modernization',
    description: 'Seamlessly move your applications and infrastructure to the cloud with zero-downtime transitions and cloud-native architecture.',
    iconPath: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12',
    features: [
      'AWS, Azure & GCP migration',
      'Legacy system modernization',
      'Zero-downtime transition',
      'Cloud-native architecture'
    ]
  },
  {
    title: 'DevOps Implementation',
    description: 'Accelerate development and deployment cycles with automated pipelines, infrastructure as code, and release management.',
    iconPath: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15',
    features: [
      'CI/CD pipeline setup',
      'Infrastructure as Code (IaC)',
      'Automated testing & deployment',
      'Release management automation'
    ]
  },
  {
    title: 'Cloud Optimization & Performance',
    description: 'Improve reliability while reducing operational costs through resource optimization, performance tuning, and auto-scaling.',
    iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6',
    features: [
      'Resource optimization',
      'Cost monitoring & control',
      'Performance tuning',
      'Auto-scaling configurations'
    ]
  },
  {
    title: 'Cloud Security & Monitoring',
    description: 'Ensure your cloud environment remains secure and compliant with identity management, monitoring, and disaster recovery.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: [
      'Identity & access management',
      'Backup & disaster recovery',
      'Real-time monitoring & alerts',
      'Compliance & risk management'
    ]
  }
]);

const devopsProcess = ref([
  { phase: 'Phase 1', title: 'Infrastructure Assessment', description: 'Analyze your current systems and identify improvement areas for cloud readiness and DevOps maturity.' },
  { phase: 'Phase 2', title: 'Architecture Design', description: 'Design cloud-native, scalable infrastructure tailored to your performance and cost requirements.' },
  { phase: 'Phase 3', title: 'Automation Setup', description: 'Implement CI/CD pipelines, infrastructure as code, and deployment automation for faster releases.' },
  { phase: 'Phase 4', title: 'Deployment & Migration', description: 'Execute secure and seamless transitions to cloud environments with minimal downtime.' },
  { phase: 'Ongoing', title: 'Continuous Monitoring & Support', description: 'Ensure performance, security, and reliability over time with 24/7 monitoring and proactive optimization.' }
]);

const whyChooseUs = ref([
  { title: 'Certified cloud & DevOps experts', desc: 'AWS, Azure, and GCP certified professionals with years of hands-on experience.' },
  { title: 'Scalable and cost-efficient solutions', desc: 'Optimize your cloud spend while maximizing performance and reliability.' },
  { title: 'Faster release cycles', desc: 'Automated CI/CD pipelines that accelerate your development workflow.' },
  { title: 'Improved system reliability', desc: 'High-availability architectures with 99.9%+ uptime guarantees.' },
  { title: 'Enterprise-grade security', desc: 'Security-first approach with compliance across major frameworks.' },
  { title: 'Long-term infrastructure support', desc: 'Ongoing monitoring, maintenance, and optimization for sustained growth.' }
]);

const faqs = ref([
  {
    question: 'Which cloud platforms do you support?',
    answer: 'We work with all major cloud providers including AWS, Microsoft Azure, and Google Cloud Platform (GCP). We help you choose the best platform based on your specific needs, budget, and existing infrastructure.'
  },
  {
    question: 'How long does a cloud migration typically take?',
    answer: 'Timeline varies based on complexity. Simple migrations can be completed in 2-4 weeks, while enterprise-scale migrations with legacy modernization may take 3-6 months. We provide detailed timelines during the assessment phase.'
  },
  {
    question: 'Will there be downtime during migration?',
    answer: 'We follow zero-downtime migration strategies using blue-green deployments, rolling updates, and careful orchestration. Your users will experience no disruption during the transition.'
  },
  {
    question: 'How do you handle cloud cost optimization?',
    answer: 'We implement cost monitoring tools, right-sizing recommendations, reserved instance planning, and auto-scaling policies. Most clients see 30-50% reduction in cloud costs after optimization.'
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer: 'Yes! We offer 24/7 monitoring, incident response, and continuous optimization as part of our managed services. We ensure your infrastructure remains secure, performant, and cost-efficient.'
  }
]);

const industryOptions = ['Fintech / Finance', 'Healthcare / HealthTech', 'SaaS / Marketplace', 'Enterprise IT', 'Manufacturing & IoT', 'E-commerce / Retail', 'Other']
const budgetOptions = ['₹8L – ₹25L ($10k–$30k)', '₹25L – ₹60L ($30k–$75k)', '₹60L – ₹1.2Cr ($75k–$150k)', '₹1.2Cr+ ($150k+)', 'Not sure yet']

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
const submitForm = () => {
  // In production: call your API endpoint
  formSucceeded.value = true
}
</script>
