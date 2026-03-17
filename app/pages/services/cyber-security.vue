<template>
  <div class="min-h-screen bg-base-100 pt-20">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-base-100 via-base-200 to-base-100 pb-24 overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-8 opacity-70">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/#services">Services</NuxtLink></li>
            <li>Cyber Security</li>
          </ul>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-semibold text-primary">Cyber Security Solutions</span>
              </div>
              <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-black mb-5 leading-tight tracking-tight text-base-content">
                Protect Your Business from
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-1">
                  Modern Digital Threats
                </span>
              </h1>
              
              <p class="text-base sm:text-lg text-base-content/80 leading-relaxed max-w-lg mb-4">
                In today's digital world, security is not optional — it's essential. At KM Software's, we provide advanced cyber security solutions that protect your data, systems, and users from evolving cyber threats.
              </p>
              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-lg">
                From vulnerability testing to enterprise-grade security architecture, we help businesses stay secure, compliant, and resilient.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                <span>Book a Security Consultation</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </NuxtLink>
              
              <button class="btn btn-outline btn-lg px-8 group">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span>Download Guide</span>
              </button>
            </div>
          </div>
          
          <!-- Right: Shield Visual -->
          <div class="relative">
            <div class="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 p-12">
              <svg class="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="shieldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
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
                <path d="M100 20C60 20 40 30 40 30V90C40 130 60 160 100 180C140 160 160 130 160 90V30C160 30 140 20 100 20Z" 
                      fill="url(#shieldGrad)" opacity="0.3" filter="url(#glow)"/>
                <path d="M100 40C70 40 55 47 55 47V90C55 120 70 142 100 157C130 142 145 120 145 90V47C145 47 130 40 100 40Z" 
                      fill="url(#shieldGrad)" opacity="0.5"/>
                <path d="M85 100L95 110L115 85" stroke="url(#shieldGrad)" stroke-width="8" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#glow)"/>
              </svg>
            </div>
            
            <!-- Floating Badge -->
            <div class="absolute -bottom-6 -right-6 bg-base-100 rounded-2xl p-5 shadow-xl border border-base-content/10 max-w-xs hidden lg:block">
              <div class="flex items-center gap-3">
                <div class="w-12 h-12 rounded-full bg-success/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <div class="font-bold">99.9% Protected</div>
                  <div class="text-sm text-base-content/60">Threats Blocked</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Cyber Security Services -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
            Our Cyber Security Services
          </h2>
          <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
            Comprehensive security solutions to protect every layer of your digital infrastructure
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          <div v-for="(service, index) in services" :key="index" 
            class="group relative bg-base-100 rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-primary/20">
           
            
            <div class="relative z-10">
              <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <component :is="service.icon" class="w-7 h-7 text-primary" />
              </div>
              
              <h3 class="text-2xl font-bold mb-4">{{ service.title }}</h3>
              <p class="text-base-content/70 mb-6 leading-relaxed">
                {{ service.description }}
              </p>
              
              <ul class="space-y-3 pt-5 border-t border-base-content/10">
                <li v-for="feat in service.features" :key="feat" class="flex items-start gap-3 text-sm text-base-content/80 font-medium">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
                  <span>{{ feat }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Compliance & Certifications -->
    <section class="py-24 bg-gradient-to-b from-base-200 via-base-100 to-base-200 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-1/4 right-0 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-0 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-bold text-primary">Compliance & Standards</span>
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
              class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-base-content/5 hover:border-primary/30 hover:-translate-y-2">
              <div class="card-body items-center text-center p-6">
                <div class="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 relative overflow-hidden">
                  <div class="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div class="text-4xl font-black relative z-10" :class="cert.color">{{ cert.icon }}</div>
                </div>
                <h3 class="card-title text-base md:text-lg mb-2 group-hover:text-primary transition-colors">{{ cert.name }}</h3>
                <p class="text-xs md:text-sm text-base-content/60 text-center leading-snug">{{ cert.description }}</p>
              </div>
            </div>
          </div>

          <!-- Regulatory Compliance Support -->
          <div class="bg-gradient-to-br from-base-100 to-base-200 rounded-3xl p-8 md:p-12 border-2 border-base-content/5 shadow-xl hover:shadow-2xl transition-all">
            <div class="text-center mb-12">
              <div class="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"/>
                </svg>
                <span class="text-lg font-bold text-primary">Regulatory Frameworks</span>
              </div>
              <h3 class="text-3xl md:text-4xl font-black mb-4">Complete Compliance Coverage</h3>
              <p class="text-base-content/60 max-w-2xl mx-auto">We help you navigate complex regulatory requirements across multiple frameworks</p>
            </div>
            
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div v-for="framework in complianceFrameworks" :key="framework.name" 
                class="group p-6 rounded-2xl bg-gradient-to-br from-base-100 to-base-200 border-2 border-base-content/10 hover:border-primary/30 hover:shadow-lg transition-all duration-300">
                <div class="flex items-start gap-4 mb-4">
                  <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-black text-xl mb-2 group-hover:text-primary transition-colors">{{ framework.name }}</h4>
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
  <section class="py-24 bg-base-100">
  <div class="container mx-auto px-6">

    <!-- Heading -->
    <div class="text-center mb-16">
      <div class="badge badge-outline mb-4">Our Process</div>
      <h2 class="text-4xl font-black mb-4">
        Our Security Methodology
      </h2>
      <p class="text-base-content/60 max-w-2xl mx-auto">
        A simple, structured approach to securing your business from modern threats.
      </p>
    </div>

    <!-- Steps -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

      <div v-for="(step, index) in securityProcess" :key="index"
        class="p-6 bg-base-200 rounded-2xl border border-base-content/10 hover:border-primary/20 transition">

        <!-- Step Number -->
        <div class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
          {{ index + 1 }}
        </div>

        <!-- Content -->
        <h3 class="font-bold mb-2">{{ step.title }}</h3>
        <p class="text-sm text-base-content/60 leading-relaxed">
          {{ step.description }}
        </p>

      </div>

    </div>

  </div>
</section>
    <!-- Why KM Software's -->
  <section class="py-24 bg-base-200">
  <div class="container mx-auto px-6">

    <!-- Heading -->
    <div class="text-center mb-16">
      <div class="badge badge-outline mb-4">Why KM Software's</div>
      <h2 class="text-4xl font-black mb-4">
        Why Choose KM Software's?
      </h2>
      <p class="text-base-content/60 max-w-2xl mx-auto">
        A trusted partner for enterprise-grade cybersecurity solutions.
      </p>
    </div>

    <!-- Grid -->
    <div class="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">

      <div v-for="reason in whyChooseUs" :key="reason"
        class="flex items-start gap-4 p-6 bg-base-100 rounded-2xl border border-base-content/10 hover:border-primary/20 transition">

        <!-- Icon -->
        <div class="w-10 h-10 rounded-full bg-success/10 flex items-center justify-center flex-shrink-0">
          <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/>
          </svg>
        </div>

        <!-- Text -->
        <div>
          <p class="font-semibold">{{ reason }}</p>
        </div>

      </div>

    </div>

  </div>
</section>

    <!-- FAQ Section -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-4">
              <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-semibold text-accent">FAQ</span>
            </div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6">
              Security Questions Answered
            </h2>
            <p class="text-xl text-base-content/70">
              Everything you need to know about our cybersecurity services
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-gradient-to-br from-base-100 to-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold pr-12 flex items-center gap-3">
                <span class="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm flex-shrink-0">
                  {{ index + 1 }}
                </span>
                <span>{{ faq.question }}</span>
              </div>
              <div class="collapse-content">
                <div class="pl-11">
                  <p class="text-base-content/70 leading-relaxed pt-2">{{ faq.answer }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="mt-12 text-center p-8 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-2xl border border-primary/10">
            <p class="text-lg font-semibold mb-4">Still have questions?</p>
            <NuxtLink to="/contact" class="btn btn-primary btn-lg">
              Contact Our Team
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
              </svg>
            </NuxtLink>
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
        Ready to protect your
            <span class="block mt-2">business?</span>
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
  LockClosedIcon,
  ShieldCheckIcon,
  CloudIcon,
  CodeBracketIcon,
  EyeIcon
} from '@heroicons/vue/24/outline'
useHead({
  title: "Cyber Security Services | KM Software's",
  meta: [
    { name: 'description', content: 'Protect your business from modern digital threats. KM Software\'s provides advanced cyber security solutions — from vulnerability testing to enterprise-grade security architecture.' }
  ]
});

const services = ref([
  {
    title: 'Vulnerability Assessment & Penetration Testing',
    description: 'Identify and fix security gaps before attackers do.',
    icon: LockClosedIcon,
    features: [
      'Web & mobile app testing',
      'Network penetration testing',
      'API security audits',
      'Security reports with fixes'
    ]
  },
  {
    title: 'Security Audits & Risk Assessment',
    description: 'Comprehensive evaluation of your digital infrastructure.',
    icon: ShieldCheckIcon,
    features: [
      'Infrastructure security audits',
      'Compliance readiness',
      'Risk analysis & mitigation plans'
    ]
  },
  {
    title: 'Cloud Security',
    description: 'Secure your cloud environments end-to-end.',
    icon: CloudIcon,
    features: [
      'AWS / Azure / GCP security',
      'Identity & access management',
      'Data encryption & monitoring'
    ]
  },
  {
    title: 'Application Security',
    description: 'Build secure software from the ground up.',
    icon: CodeBracketIcon,
    features: [
      'Secure coding practices',
      'Code audits',
      'DevSecOps implementation'
    ]
  },
  {
    title: 'Threat Monitoring & Response',
    description: 'Real-time monitoring and incident response.',
    icon: EyeIcon,
    features: [
      '24/7 threat detection',
      'Security alerts',
      'Rapid breach response'
    ]
  }
])

const certifications = ref([
  { name: 'ISO 27001', icon: 'ISO', color: 'text-primary', description: 'Information Security Management' },
  { name: 'SOC 2 Type II', icon: 'SOC', color: 'text-secondary', description: 'Service Organization Control' },
  { name: 'GDPR', icon: 'GDPR', color: 'text-accent', description: 'Data Protection Compliance' },
  { name: 'PCI DSS', icon: 'PCI', color: 'text-primary', description: 'Payment Card Security' },
  { name: 'HIPAA', icon: 'HIPAA', color: 'text-secondary', description: 'Healthcare Data Protection' },
  { name: 'CISSP', icon: 'CISSP', color: 'text-accent', description: 'Certified Information Systems Security Professional' },
  { name: 'CEH', icon: 'CEH', color: 'text-primary', description: 'Certified Ethical Hacker' },
  { name: 'CISM', icon: 'CISM', color: 'text-secondary', description: 'Certified Information Security Manager' }
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

const whyChooseUs = ref([
  'Ethical security experts',
  'Enterprise-grade protection',
  'Compliance-focused approach',
  'Proactive threat prevention'
]);

const faqs = ref([
  {
    question: 'How quickly can you respond to a security incident?',
    answer: 'Our team provides 24/7 monitoring with incident response times of under 15 minutes for critical threats. We maintain on-call teams to ensure rapid response regardless of time zone.'
  },
  {
    question: 'What industries do you specialize in?',
    answer: 'We serve healthcare, financial services, e-commerce, technology, and manufacturing. Our team has deep expertise in industry-specific regulations like HIPAA, PCI DSS, and GDPR.'
  },
  {
    question: 'What is included in a penetration test?',
    answer: 'Our penetration tests include network scanning, web application testing, API security assessment, and social engineering evaluation. You receive a detailed report with findings and remediation steps.'
  },
  {
    question: 'Do you help with regulatory compliance?',
    answer: 'Yes! We help businesses achieve compliance with GDPR, HIPAA, PCI DSS, SOC 2, ISO 27001, and other frameworks through gap assessments, policy development, and audit preparation.'
  },
  {
    question: 'Do you provide ongoing security training?',
    answer: 'Yes, we offer security awareness programs including phishing simulations, interactive training modules, and quarterly updates on emerging threats for your entire team.'
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
