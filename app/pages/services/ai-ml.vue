<template>
  <div class="min-h-screen bg-base-100 pt-20">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-base-100 via-base-200 to-base-100 pb-24 overflow-hidden">
      <!-- Sophisticated Background -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-8 opacity-70">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/#services">Services</NuxtLink></li>
            <li>AI/ML Solutions</li>
          </ul>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"/>
                </svg>
                <span class="text-sm font-semibold text-primary">AI/ML Solutions</span>
              </div>
              
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                Transform Data Into
                <span class="block bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent mt-2">
                  Intelligent Actions
                </span>
              </h1>
              
              <p class="text-xl text-base-content/70 leading-relaxed">
                Harness the power of artificial intelligence and machine learning to automate processes, predict outcomes, and unlock unprecedented business value.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                <span>Start Your AI Journey</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              
              <button class="btn btn-outline btn-lg px-8 group">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                <span>View Case Studies</span>
              </button>
            </div>
            
            <!-- Trust Indicators -->
            <div class="flex flex-wrap gap-8 pt-8 border-t border-base-content/10">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold">150+</div>
                  <div class="text-sm text-base-content/60">Projects Delivered</div>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-info/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-info" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold">95%</div>
                  <div class="text-sm text-base-content/60">Accuracy Rate</div>
                </div>
              </div>
              
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-warning/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-warning" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <div>
                  <div class="text-2xl font-bold">$5M+</div>
                  <div class="text-sm text-base-content/60">Client Savings</div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Right: Professional Visual -->
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20">
              <div class="absolute inset-0 flex items-center justify-center">
                <!-- Neural Network SVG Illustration -->
                <svg class="w-full h-full p-12 opacity-30" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <linearGradient id="aiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" class="text-primary" style="stop-color:currentColor;stop-opacity:1" />
                      <stop offset="100%" class="text-secondary" style="stop-color:currentColor;stop-opacity:1" />
                    </linearGradient>
                    <filter id="glow">
                      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
                      <feMerge>
                        <feMergeNode in="coloredBlur"/>
                        <feMergeNode in="SourceGraphic"/>
                      </feMerge>
                    </filter>
                  </defs>
                  
                  <!-- Nodes -->
                  <circle cx="100" cy="100" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  <circle cx="100" cy="200" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  <circle cx="100" cy="300" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  
                  <circle cx="200" cy="80" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  <circle cx="200" cy="160" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  <circle cx="200" cy="240" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  <circle cx="200" cy="320" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  
                  <circle cx="300" cy="150" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  <circle cx="300" cy="250" r="12" fill="url(#aiGrad)" filter="url(#glow)"/>
                  
                  <!-- Connections -->
                  <line x1="100" y1="100" x2="200" y2="80" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  <line x1="100" y1="100" x2="200" y2="160" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  <line x1="100" y1="200" x2="200" y2="160" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  <line x1="100" y1="200" x2="200" y2="240" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  <line x1="100" y1="300" x2="200" y2="240" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  <line x1="100" y1="300" x2="200" y2="320" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  
                  <line x1="200" y1="80" x2="300" y2="150" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  <line x1="200" y1="160" x2="300" y2="150" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  <line x1="200" y1="240" x2="300" y2="250" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                  <line x1="200" y1="320" x2="300" y2="250" stroke="url(#aiGrad)" stroke-width="2" opacity="0.4"/>
                </svg>
              </div>
            </div>
            
            <!-- Floating Cards -->
            <div class="absolute -bottom-8 -right-8 bg-base-100 rounded-2xl p-6 shadow-xl border border-base-content/10 max-w-xs hidden lg:block">
              <div class="flex items-center gap-4">
                <div class="radial-progress text-primary" style="--value:95; --size:3.5rem; --thickness:4px">95%</div>
                <div>
                  <div class="font-bold">Model Accuracy</div>
                  <div class="text-sm text-base-content/60">Production Ready</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Comprehensive AI/ML Services
          </h2>
          <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
            End-to-end artificial intelligence solutions tailored to your business needs
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div v-for="(service, index) in services" :key="index" 
            class="group relative bg-base-200 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20">
            <div class="absolute top-8 right-8 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg class="w-16 h-16" fill="currentColor" viewBox="0 0 20 20">
                <path v-html="service.iconPath"></path>
              </svg>
            </div>
            
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path v-html="service.iconPath"></path>
                </svg>
              </div>
              
              <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
              <p class="text-base-content/70 mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in service.technologies" :key="tech" 
                  class="badge badge-sm badge-outline">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Technology Stack -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Powered By Industry-Leading Technology
            </h2>
            <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
              We leverage cutting-edge frameworks and tools to deliver robust, scalable AI solutions
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <!-- AI/ML Frameworks Card -->
            <div class="bg-base-100 rounded-3xl p-10 border border-base-content/10 hover:border-primary/30 hover:shadow-2xl transition-all group">
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 12v3c0 1.657 3.134 3 7 3s7-1.343 7-3v-3c0 1.657-3.134 3-7 3s-7-1.343-7-3z"/>
                    <path d="M3 7v3c0 1.657 3.134 3 7 3s7-1.343 7-3V7c0 1.657-3.134 3-7 3S3 8.657 3 7z"/>
                    <path d="M17 5c0 1.657-3.134 3-7 3S3 6.657 3 5s3.134-3 7-3 7 1.343 7 3z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-black">AI/ML Frameworks</h3>
                  <p class="text-sm text-base-content/60">Core Technologies</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="tech in mlFrameworks" :key="tech.name" 
                  class="flex flex-col items-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors group/item">
                  <div class="text-3xl font-bold text-primary mb-2 group-hover/item:scale-110 transition-transform">
                    {{ tech.icon }}
                  </div>
                  <div class="text-xs font-semibold text-center">{{ tech.name }}</div>
                </div>
              </div>
            </div>

            <!-- Cloud Platforms Card -->
            <div class="bg-base-100 rounded-3xl p-10 border border-base-content/10 hover:border-secondary/30 hover:shadow-2xl transition-all group">
              <div class="flex items-center gap-4 mb-8">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center">
                  <svg class="w-8 h-8 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M5.5 16a3.5 3.5 0 01-.369-6.98 4 4 0 117.753-1.977A4.5 4.5 0 1113.5 16h-8z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-2xl font-black">Cloud AI Platforms</h3>
                  <p class="text-sm text-base-content/60">Enterprise Infrastructure</p>
                </div>
              </div>
              <div class="grid grid-cols-3 gap-4">
                <div v-for="cloud in cloudPlatforms" :key="cloud.name" 
                  class="flex flex-col items-center p-4 bg-base-200 rounded-xl hover:bg-base-300 transition-colors group/item">
                  <div class="text-3xl font-bold text-secondary mb-2 group-hover/item:scale-110 transition-transform">
                    {{ cloud.icon }}
                  </div>
                  <div class="text-xs font-semibold text-center">{{ cloud.name }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Process Timeline -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Our Proven Development Process
            </h2>
            <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
              From concept to deployment, we follow a structured approach to ensure project success
            </p>
          </div>

          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="(step, index) in processSteps" :key="index" 
              class="relative group">
              <div class="bg-base-200 rounded-2xl p-8 h-full hover:shadow-xl transition-all">
                <div class="flex items-center gap-4 mb-6">
                  <div class="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-xl">
                    {{ index + 1 }}
                  </div>
                  <div class="text-sm font-mono text-base-content/60">{{ step.timeline }}</div>
                </div>
                
                <h3 class="text-2xl font-bold mb-4">{{ step.title }}</h3>
                <p class="text-base-content/70">{{ step.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Use Cases -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Real-World Applications
            </h2>
            <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
              See how businesses across industries leverage our AI/ML solutions
            </p>
          </div>

          <div class="grid md:grid-cols-2 gap-8">
            <div v-for="useCase in useCases" :key="useCase.title" 
              class="bg-base-100 rounded-2xl p-8 hover:shadow-xl transition-all group">
              <div class="flex items-start gap-6">
                <div class="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="useCase.iconPath"></path>
                  </svg>
                </div>
                <div class="flex-1">
                  <h3 class="text-xl font-bold mb-3">{{ useCase.title }}</h3>
                  <p class="text-base-content/70 mb-4">{{ useCase.description }}</p>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tag in useCase.tags" :key="tag" 
                      class="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-semibold">
                      {{ tag }}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <!-- Dynamic Section Header -->
          <div class="text-center mb-16">
            <div v-if="faqSection.badge" 
              :class="faqSection.badge.className">
              <svg class="w-4 h-4" :class="faqSection.badge.iconColor" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" :d="faqSection.badge.iconPath" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-semibold" :class="faqSection.badge.textColor">
                {{ faqSection.badge.text }}
              </span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              {{ faqSection.title }}
            </h2>
            <p class="text-xl text-base-content/70">
              {{ faqSection.subtitle }}
            </p>
          </div>

          <!-- Dynamic FAQ Items -->
          <div class="space-y-4">
            <div v-for="(faq, index) in faqSection.items" :key="index"
              :class="faqSection.itemClassName">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold pr-12 flex items-center gap-3">
                <span v-if="faqSection.showNumbers" 
                  :class="faqSection.numberClassName">
                  {{ index + 1 }}
                </span>
                <svg v-else-if="faqSection.itemIcon" 
                  class="w-5 h-5 flex-shrink-0 text-primary" 
                  fill="currentColor" viewBox="0 0 20 20">
                  <path :d="faqSection.itemIcon"/>
                </svg>
                <span>{{ faq.question }}</span>
              </div>
              <div class="collapse-content">
                <div :class="faqSection.answerClassName">
                  <p class="text-base-content/70 leading-relaxed pt-2">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Dynamic Contact CTA -->
          <div v-if="faqSection.cta" 
            :class="faqSection.cta.containerClassName">
            <p class="text-lg font-semibold mb-4">{{ faqSection.cta.text }}</p>
            <NuxtLink :to="faqSection.cta.buttonLink" :class="faqSection.cta.buttonClassName">
              {{ faqSection.cta.buttonText }}
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-32 relative overflow-hidden">
      <!-- Animated Gradient Background -->
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-accent"></div>
      <div class="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%] animate-[gradient_15s_ease_infinite]"></div>
      
      <!-- Floating Elements -->
      <div class="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
      <div class="absolute bottom-20 right-10 w-40 h-40 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-delay: 1s;"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-5xl mx-auto">
          <!-- Premium Card -->
          <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-12 md:p-16 border border-white/20 shadow-2xl">
            <div class="text-center text-white">
              <!-- Badge -->
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6">
                <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span class="text-sm font-semibold">Let's Talk</span>
              </div>
              
              <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Ready to Build Something
                <span class="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mt-2">
                  Extraordinary?
                </span>
              </h2>
              
              <p class="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Transform your vision into reality with AI-powered solutions. Let's discuss how we can accelerate your digital transformation journey.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-white hover:scale-105 border-none shadow-2xl px-10 transition-all group min-w-[240px]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Schedule a Call</span>
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </NuxtLink>
                
                <button class="btn btn-lg btn-ghost border-2 border-white/50 text-white hover:bg-white/10 hover:border-white px-10 backdrop-blur-sm min-w-[240px]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10"></path>
                  </svg>
                  <span>Get Brochure</span>
                </button>
              </div>
              
              <!-- Trust Indicators -->
              <div class="mt-12 pt-8 border-t border-white/20">
                <div class="flex flex-wrap justify-center gap-8 text-sm">
                  <div class="flex items-center gap-2 opacity-90">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Free Consultation</span>
                  </div>
                  <div class="flex items-center gap-2 opacity-90">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>No Commitment Required</span>
                  </div>
                  <div class="flex items-center gap-2 opacity-90">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                    <span>Response in 24 Hours</span>
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
// SEO
useHead({
  title: 'AI & Machine Learning Solutions | KM Global Tech',
  meta: [
    { name: 'description', content: 'Transform your business with enterprise-grade AI and machine learning solutions. From predictive analytics to intelligent automation.' }
  ]
});

const services = ref([
  {
    title: 'Machine Learning Models',
    description: 'Custom ML models for classification, regression, clustering, and predictive analytics tailored to your specific business requirements.',
    technologies: ['TensorFlow', 'PyTorch', 'Scikit-learn'],
    iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    title: 'Natural Language Processing',
    description: 'Advanced NLP solutions including sentiment analysis, text classification, chatbots, and language understanding systems.',
    technologies: ['BERT', 'GPT', 'spaCy'],
    iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
  },
  {
    title: 'Computer Vision',
    description: 'Image recognition, object detection, facial recognition, and visual quality inspection powered by deep learning.',
    technologies: ['OpenCV', 'YOLO', 'CNN'],
    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  },
  {
    title: 'Predictive Analytics',
    description: 'Forecast trends, predict customer behavior, and make data-driven decisions with advanced statistical modeling.',
    technologies: ['Prophet', 'ARIMA', 'XGBoost'],
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    title: 'Intelligent Automation',
    description: 'Automate complex business processes with AI-powered systems that learn, adapt, and improve over time.',
    technologies: ['RPA', 'AutoML', 'Workflow'],
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Recommendation Systems',
    description: 'Personalized product and content recommendations to boost engagement, sales, and customer satisfaction.',
    technologies: ['Collaborative', 'Content-based', 'Hybrid'],
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  }
]);

const mlFrameworks = ref([
  { name: 'TensorFlow', icon: 'TF' },
  { name: 'PyTorch', icon: 'PT' },
  { name: 'Scikit-learn', icon: 'SK' },
  { name: 'Keras', icon: 'KR' },
  { name: 'Pandas', icon: 'PD' },
  { name: 'NumPy', icon: 'NP' }
]);

const cloudPlatforms = ref([
  { name: 'AWS ML', icon: 'AWS' },
  { name: 'Azure AI', icon: 'AZ' },
  { name: 'Google AI', icon: 'GCP' },
  { name: 'HuggingFace', icon: 'HF' },
  { name: 'OpenAI', icon: 'OAI' },
  { name: 'Databricks', icon: 'DB' }
]);

const processSteps = ref([
  { title: 'Discovery & Planning', timeline: 'Week 1-2', description: 'Understanding your business objectives, defining scope, and creating a comprehensive project roadmap.' },
  { title: 'Data Preparation', timeline: 'Week 3-4', description: 'Collecting, cleaning, and structuring data for optimal model training and validation.' },
  { title: 'Model Development', timeline: 'Week 5-8', description: 'Building and training AI/ML models using state-of-the-art algorithms and techniques.' },
  { title: 'Testing & Validation', timeline: 'Week 9-10', description: 'Rigorous testing to ensure accuracy, reliability, and production-readiness.' },
  { title: 'Deployment', timeline: 'Week 11-12', description: 'Seamless integration into your infrastructure with comprehensive documentation.' },
  { title: 'Ongoing Support', timeline: 'Continuous', description: 'Monitoring, maintenance, and optimization to ensure peak performance.' }
]);

const useCases = ref([
  {
    title: 'Healthcare Diagnostics',
    description: 'AI-powered medical image analysis for early disease detection, reducing diagnostic time by 60% and improving accuracy.',
    tags: ['Computer Vision', 'Deep Learning', 'Medical AI'],
    iconPath: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z'
  },
  {
    title: 'Financial Fraud Detection',
    description: 'Real-time anomaly detection preventing fraudulent transactions with 99% accuracy across millions of daily transactions.',
    tags: ['Anomaly Detection', 'Real-time ML', 'FinTech'],
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    title: 'E-commerce Personalization',
    description: 'Dynamic product recommendations increasing conversion rates by 35% through intelligent customer behavior analysis.',
    tags: ['Recommendation Systems', 'Personalization', 'Retail AI'],
    iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
  },
  {
    title: 'Manufacturing Quality Control',
    description: 'Automated visual inspection detecting defects with 98% accuracy, reducing waste and improving production efficiency.',
    tags: ['Computer Vision', 'Quality Assurance', 'Industrial AI'],
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4'
  }
]);

// FAQ Section Configuration - Fully Dynamic
const faqSection = ref({
  // Badge Configuration
  badge: {
    className: 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4',
    text: 'FAQ',
    textColor: 'text-accent',
    iconColor: 'text-accent',
    iconPath: 'M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z'
  },
  
  // Section Heading
  title: 'Your Questions, Answered',
  subtitle: 'Everything you need to know about our AI/ML services',
  
  // Item Styling
  itemClassName: 'collapse collapse-plus bg-gradient-to-br from-base-200 to-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all',
  
  // Number Badge Configuration
  showNumbers: true, // Set to false to hide numbers
  numberClassName: 'w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0',
  
  // Alternative: Use icon instead of numbers (when showNumbers is false)
  itemIcon: null, // Can be SVG path string
  
  // Answer Styling
  answerClassName: 'pl-11',
  
  // CTA Configuration
  cta: {
    containerClassName: 'mt-12 text-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10',
    text: 'Still have questions?',
    buttonText: 'Contact Our Team',
    buttonLink: '/contact',
    buttonClassName: 'btn btn-primary btn-lg'
  },
  
  // FAQ Items - Moved here for centralized config
  items: [
    {
      question: 'What is the typical timeline for an AI/ML project?',
      answer: 'Most AI/ML projects take 8-16 weeks from discovery to deployment, depending on complexity and data availability. Simple proof-of-concepts can be delivered in 4-6 weeks, while enterprise-scale solutions may require 4-6 months for full implementation.'
    },
    {
      question: 'Do I need a large dataset to start with AI/ML?',
      answer: 'Not necessarily. While more data generally improves model accuracy, we can work with smaller datasets using techniques like transfer learning, data augmentation, and synthetic data generation. We\'ll assess your specific requirements during the initial consultation.'
    },
    {
      question: 'How do you ensure data security and privacy?',
      answer: 'We implement industry-standard security practices including end-to-end encryption, secure data handling procedures, compliance with GDPR/HIPAA when required, and strict access controls. All client data is treated with the highest level of confidentiality, and we can sign NDAs.'
    },
    {
      question: 'Do you provide ongoing support after deployment?',
      answer: 'Yes! We offer comprehensive support packages including model monitoring, performance optimization, retraining with new data, bug fixes, and feature enhancements. Our team ensures your AI solution continues to deliver value long after initial deployment.'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve clients across healthcare, finance, e-commerce, manufacturing, logistics, real estate, and more. Our AI/ML solutions are industry-agnostic and can be customized to meet the unique needs of any sector.'
    }
  ]
});

const faqs = ref([
  {
    question: 'What is the typical timeline for an AI/ML project?',
    answer: 'Most AI/ML projects take 8-16 weeks from discovery to deployment, depending on complexity and data availability. Simple proof-of-concepts can be delivered in 4-6 weeks, while enterprise-scale solutions may require 4-6 months for full implementation.'
  },
  {
    question: 'Do I need a large dataset to start with AI/ML?',
    answer: 'Not necessarily. While more data generally improves model accuracy, we can work with smaller datasets using techniques like transfer learning, data augmentation, and synthetic data generation. We\'ll assess your specific requirements during the initial consultation.'
  },
  {
    question: 'How do you ensure data security and privacy?',
    answer: 'We implement industry-standard security practices including end-to-end encryption, secure data handling procedures, compliance with GDPR/HIPAA when required, and strict access controls. All client data is treated with the highest level of confidentiality, and we can sign NDAs.'
  },
  {
    question: 'Do you provide ongoing support after deployment?',
    answer: 'Yes! We offer comprehensive support packages including model monitoring, performance optimization, retraining with new data, bug fixes, and feature enhancements. Our team ensures your AI solution continues to deliver value long after initial deployment.'
  },
  {
    question: 'What industries do you serve?',
    answer: 'We serve clients across healthcare, finance, e-commerce, manufacturing, logistics, real estate, and more. Our AI/ML solutions are industry-agnostic and can be customized to meet the unique needs of any sector.'
  }
]);
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
}

.animate-fadeIn {
  animation: fadeIn 0.6s ease-out;
}
</style>
