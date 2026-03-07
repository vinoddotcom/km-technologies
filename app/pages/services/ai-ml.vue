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
            <li>AI & ML</li>
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
                <span class="text-sm font-semibold text-primary">AI & Machine Learning Solutions</span>
              </div>
              <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-black mb-5 leading-tight tracking-tight text-base-content">
                Transform Your Business with
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-1">
                  Intelligent Automation
                </span>
              </h1>
              
              <p class="text-base sm:text-lg text-base-content/80 leading-relaxed max-w-lg mb-4">
                Artificial Intelligence is no longer the future — it's the present. Businesses using AI today are gaining a competitive edge through automation, smarter insights, and faster decision-making.
              </p>
              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-lg">
                At KM Software's, we build practical AI and Machine Learning solutions that help you automate processes, uncover insights, and create intelligent digital experiences. From chatbots to predictive analytics, we turn data into real business value.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                <span>Book a Free AI Consultation</span>
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

    <!-- Why AI Matters -->
    <section class="py-20 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <!-- Section Header -->
          <div class="text-center mb-12">
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Why AI Matters
            </h2>
            <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
              AI helps businesses stay ahead by transforming operations, improving customer experiences, and unlocking growth opportunities.
            </p>
          </div>
          
          <!-- Benefits Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            <div v-for="(matter, index) in whyAiMatters" :key="matter" class="flex items-start gap-4 p-5 rounded-2xl bg-base-100 border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
              </div>
              <span class="font-semibold text-base-content/85 pt-2">{{ matter }}</span>
            </div>
          </div>
          
          <!-- Tagline -->
          <div class="text-center">
            <p class="inline-block text-base text-primary font-bold italic px-6 py-3 rounded-full bg-primary/5 border border-primary/10">
              We help you adopt AI strategically — not just technically.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Overview -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Our AI & ML Services
          </h2>
          <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
            We deliver intelligent solutions tailored to your business needs
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

    <!-- Industries We Serve -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto text-center">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Industries We Serve
          </h2>
          <p class="text-xl text-base-content/70 max-w-3xl mx-auto mb-12">
            We deliver AI solutions for businesses across all major sectors
          </p>
          
          <div class="flex flex-wrap justify-center gap-4">
            <div v-for="industry in industries" :key="industry"
              class="px-8 py-5 rounded-2xl bg-base-100 border border-base-content/10 shadow-sm hover:shadow-lg hover:border-primary/30 hover:-translate-y-1 transition-all font-bold text-lg text-base-content/80 group cursor-default">
              <span class="group-hover:text-primary transition-colors">{{ industry }}</span>
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
              Our AI Development Process
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

    <!-- Why Choose KM Software's -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 rounded-3xl p-10 md:p-16 border border-base-content/10 shadow-xl">
            <div class="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 class="text-3xl sm:text-4xl font-black mb-6 leading-tight">
                  Why Choose
                  <span class="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mt-2">KM Software's?</span>
                </h2>
                <p class="text-lg text-base-content/70 italic font-semibold">
                  We don't just build AI — we make it work for your business.
                </p>
              </div>
              
              <div class="space-y-4">
                <div v-for="reason in whyChooseUs" :key="reason" class="flex items-center gap-4 p-4 rounded-xl bg-base-100 shadow-sm border border-base-content/5 hover:border-primary/20 transition-all">
                  <div class="w-8 h-8 rounded-full bg-success/20 text-success flex items-center justify-center flex-shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span class="font-bold text-lg text-base-content/90">{{ reason }}</span>
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
                <span class="text-sm font-semibold">Let's Build Intelligent Solutions</span>
              </div>
              
              <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
                Ready to unlock the
                <span class="block bg-gradient-to-r from-white to-white/70 bg-clip-text text-transparent mt-2">
                  power of AI?
                </span>
              </h2>
              
              <p class="text-xl opacity-90 mb-12 max-w-2xl mx-auto leading-relaxed">
                Partner with KM Software's to automate workflows, gain smarter insights, and build future-ready digital experiences.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-white hover:scale-105 border-none shadow-2xl px-10 transition-all group min-w-[240px]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <span>Book a Free AI Consultation Today</span>
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
  title: "AI & Machine Learning Solutions | KM Software's",
  meta: [
    { name: 'description', content: 'Transform your business with intelligent automation. KM Software\'s builds practical AI and Machine Learning solutions — from chatbots to predictive analytics.' }
  ]
});

const whyAiMatters = ref([
  'Automate repetitive tasks',
  'Reduce operational costs',
  'Predict customer behavior',
  'Improve decision-making',
  'Personalize user experiences',
  'Detect risks and anomalies'
]);

const services = ref([
  {
    title: 'Custom AI Solutions',
    description: 'Tailor-made AI systems designed for your business workflows.',
    technologies: ['AI automation', 'Recommendation engines', 'Decision dashboards', 'Intelligent workflows'],
    iconPath: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z'
  },
  {
    title: 'AI Chatbots & Assistants',
    description: 'Automate conversations with smart, human-like AI.',
    technologies: ['WhatsApp bots', '24/7 support', 'Lead qualification', 'Multilingual'],
    iconPath: 'M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z'
  },
  {
    title: 'Predictive Analytics',
    description: 'Turn your data into actionable insights. Make proactive, data-driven decisions.',
    technologies: ['Sales forecasting', 'Churn prediction', 'Demand forecasting', 'Behavioral analytics'],
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z'
  },
  {
    title: 'Natural Language Processing (NLP)',
    description: 'Understand and process text or voice using AI.',
    technologies: ['Sentiment analysis', 'Resume screening', 'Voice assistants', 'Document automation'],
    iconPath: 'M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129'
  },
  {
    title: 'Computer Vision',
    description: 'AI that understands images and video.',
    technologies: ['Face recognition', 'Object detection', 'CCTV analytics', 'Image classification'],
    iconPath: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  }
]);

const industries = ref([
  'Healthcare', 'FinTech', 'E-commerce', 'HR Tech',
  'Manufacturing', 'Logistics', 'Education', 'Retail'
]);

const processSteps = ref([
  { title: 'Discovery & Problem Definition', timeline: 'Step 1', description: 'We understand your business challenges and identify high-impact AI opportunities.' },
  { title: 'Data Analysis', timeline: 'Step 2', description: 'Data collection, cleaning, and feasibility assessment.' },
  { title: 'Model Design', timeline: 'Step 3', description: 'Choosing the right algorithms and AI architecture.' },
  { title: 'Development & Training', timeline: 'Step 4', description: 'Building and training AI models using real-world datasets.' },
  { title: 'Deployment & Integration', timeline: 'Step 5', description: 'Seamless integration into your apps, CRM, or workflows.' },
  { title: 'Monitoring & Optimization', timeline: 'Step 6', description: 'Continuous performance monitoring and improvements.' }
]);

const whyChooseUs = ref([
  'Business-focused AI approach',
  'Custom-built solutions',
  'Scalable & secure systems',
  'End-to-end development',
  'Long-term support'
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
