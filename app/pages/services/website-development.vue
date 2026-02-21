<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-accent/5 via-base-100 to-primary/5 pt-24 pb-24 overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_40%_30%,rgba(59,130,246,0.3),transparent_50%),radial-gradient(circle_at_60%_70%,rgba(236,72,153,0.3),transparent_50%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="breadcrumbs text-sm mb-8 opacity-70 hover:opacity-100 transition-opacity">
          <ul>
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-primary transition-colors">Services</NuxtLink></li>
            <li>Website Development</li>
          </ul>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-accent/10 to-primary/10 border border-accent/20 mb-6 hover:scale-105 transition-transform">
                <svg class="w-5 h-5 text-accent animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm font-bold text-accent">Full-Stack Web Solutions</span>
              </div>
              
              <h1 class="text-5xl sm:text-6xl lg:text-7xl font-black mb-6 leading-[1.1] tracking-tight">
                Build Websites
                <span class="block bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent mt-2">
                  That Drive Results
                </span>
              </h1>
              
              <p class="text-xl sm:text-2xl text-base-content/70 leading-relaxed font-light">
                Custom web applications, e-commerce stores, and enterprise platforms built with modern technology and best practices.
              </p>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-accent btn-lg px-10 shadow-2xl hover:shadow-accent/50 hover:scale-110 transition-all group">
                <span class="text-lg font-bold">Start Your Project</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              
              <button class="btn btn-outline btn-lg px-10 hover:scale-105 transition-all">
                <span class="text-lg">View Portfolio</span>
              </button>
            </div>
            
            <div class="stats stats-vertical sm:stats-horizontal shadow-xl bg-gradient-to-br from-base-200/80 to-base-300/50 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div v-for="stat in trustStats" :key="stat.title" class="stat hover:bg-accent/5 transition-colors">
                <div class="stat-figure text-accent">
                  <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path v-html="stat.iconPath"></path>
                    </svg>
                  </div>
                </div>
                <div class="stat-title text-xs font-semibold opacity-70">{{ stat.title }}</div>
                <div class="stat-value text-4xl text-accent">{{ stat.value }}</div>
                <div class="stat-desc text-xs opacity-60">{{ stat.desc }}</div>
              </div>
            </div>
          </div>
          
          <div class="relative hidden lg:block">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
            <div class="relative">
              <div class="mockup-browser border-2 border-accent/30 bg-gradient-to-br from-base-200 to-base-300 shadow-2xl hover:scale-105 transition-transform duration-500">
                <div class="mockup-browser-toolbar">
                  <div class="input border-2 border-accent/20">https://yourwebsite.com</div>
                </div>
                <div class="flex flex-col px-8 py-16 bg-gradient-to-br from-accent/10 to-primary/10">
                  <div class="h-6 bg-white/30 rounded mb-4 animate-pulse"></div>
                  <div class="h-32 bg-white/40 rounded mb-4 animate-pulse" style="animation-delay: 0.1s"></div>
                  <div class="grid grid-cols-3 gap-3">
                    <div class="h-20 bg-white/30 rounded animate-pulse" style="animation-delay: 0.2s"></div>
                    <div class="h-20 bg-white/30 rounded animate-pulse" style="animation-delay: 0.3s"></div>
                    <div class="h-20 bg-white/30 rounded animate-pulse" style="animation-delay: 0.4s"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-4 hover:scale-105 transition-transform">
            <svg class="w-5 h-5 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-bold text-primary">Modern Technology Stack</span>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Powerful Web Technologies
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 font-light">
            We build with the latest frameworks and tools for maximum performance
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div v-for="category in techStack" :key="category.name"
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl border-2 border-base-content/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2">
            <div class="card-body">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                  <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="category.iconPath"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-black group-hover:text-primary transition-colors">
                  {{ category.name }}
                </h3>
              </div>
              
              <div class="grid grid-cols-2 gap-3">
                <div v-for="tech in category.technologies" :key="tech"
                  class="px-4 py-2.5 rounded-xl bg-gradient-to-br from-base-200/50 to-base-300/50 border border-base-content/10 hover:border-primary/40 hover:bg-primary/5 transition-all duration-300 text-center font-semibold text-sm hover:scale-105 cursor-pointer group/tech">
                  <span class="group-hover/tech:text-primary transition-colors">{{ tech }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="badge badge-secondary badge-lg mb-4">What We Do</div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Our Web Development Services
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
            From simple landing pages to complex enterprise applications
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="service in services" :key="service.title"
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-base-content/5 hover:border-secondary/20">
            <div class="card-body">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-secondary/10 to-accent/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                <svg class="w-8 h-8 text-secondary group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="service.iconPath"></path>
                </svg>
              </div>
              <h3 class="card-title text-2xl mb-3 group-hover:text-secondary transition-colors">{{ service.title }}</h3>
              <p class="text-base-content/70 leading-relaxed">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing -->
    <section class="py-24 sm:py-32 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.02]">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Simple pricing for
            <span class="block mt-2">web projects</span>
          </h2>
          <p class="text-lg sm:text-xl text-base-content/60 font-light">
            Choose the best model for your project timeline and budget
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          <div v-for="(model, index) in pricingModels" :key="index"
            :class="['card backdrop-blur-sm border shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group',
              model.popular ? 'bg-gradient-to-br from-primary/10 to-primary/5 border-2 border-primary lg:scale-105' : 
              index === 0 ? 'bg-gradient-to-br from-warning/10 to-warning/5 border-warning/30' :
              'bg-gradient-to-br from-success/10 to-success/5 border-success/30']">
            <div v-if="model.popular" class="absolute -top-4 left-1/2 -translate-x-1/2">
              <div class="badge badge-primary badge-lg px-6 py-3 shadow-xl font-bold border-2 border-primary-content/20">
                MOST POPULAR
              </div>
            </div>
            
            <div class="card-body p-8" :class="model.popular ? 'pt-10' : ''">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">{{ model.name }}</h3>
                <p class="text-sm text-base-content/60">{{ model.subtitle }}</p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span :class="['text-5xl font-black', model.popular ? 'bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent' : 'text-base-content']">
                    {{ model.price }}
                  </span>
                  <span class="text-xl text-base-content/50">{{ model.period }}</span>
                </div>
                <p class="text-sm text-base-content/60">{{ model.description }}</p>
              </div>
              
              <div class="space-y-3 mb-8 flex-grow">
                <div v-for="feature in model.features" :key="feature" class="flex items-start gap-3">
                  <svg :class="['w-5 h-5 mt-0.5 flex-shrink-0', model.popular ? 'text-primary' : 'text-success']" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span :class="['text-sm', model.popular ? 'text-base-content/90 font-medium' : 'text-base-content/80']">{{ feature }}</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" 
                :class="['btn w-full group-hover:scale-105 transition-all', 
                  model.popular ? 'btn-primary btn-lg shadow-xl hover:shadow-2xl' : 'btn-outline border-2']">
                <span class="font-bold">{{ model.cta }}</span>
                <svg v-if="model.popular" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>

        <div class="max-w-5xl mx-auto">
          <div class="divider text-base-content/40 text-sm">TRUSTED BY 300+ BUSINESSES</div>
          
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div v-for="metric in metrics" :key="metric.label"
              class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-accent/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="metric.iconPath"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">{{ metric.value }}</div>
              <div class="text-sm text-base-content/60">{{ metric.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
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
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border-2 border-base-content/10 hover:border-accent/30 hover:shadow-2xl transition-all duration-300 group">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold group-hover:text-accent transition-colors pr-12">
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

    <!-- CTA -->
    <section class="py-24 sm:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-white/20 shadow-2xl">
            <div class="text-center text-white">
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                Ready to Build Your Website?
              </h2>
              
              <p class="text-base sm:text-lg md:text-xl opacity-95 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                Let's create a powerful web presence that drives your business forward
              </p>
              
              <NuxtLink to="/contact" class="btn btn-lg bg-white text-accent hover:bg-base-200 hover:scale-110 border-none shadow-2xl px-10 transition-all min-w-[240px] group">
                <span class="text-lg font-bold">Start Your Project</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              
              <div class="pt-8 mt-8 border-t-2 border-white/20">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">300+</div>
                    <div class="text-sm opacity-90">Websites Launched</div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">99.9%</div>
                    <div class="text-sm opacity-90">Uptime Guarantee</div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">4.8/5</div>
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
  title: "Website Development Services | Custom Web Applications - KM Software's",
  meta: [
    {
      name: 'description',
      content: 'Professional website development services. Custom web applications, e-commerce stores, and enterprise platforms built with modern technology.'
    }
  ]
})

const trustStats = ref([
  { title: 'Projects', value: '300+', desc: 'Completed', iconPath: 'd="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"' },
  { title: 'Uptime', value: '99.9%', desc: 'Guaranteed', iconPath: 'd="M13 10V3L4 14h7v7l9-11h-7z"' },
  { title: 'Rating', value: '4.8', desc: 'Client satisfaction', iconPath: 'd="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"' }
])

const techStack = ref([
  { name: 'Frontend', iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', technologies: ['React', 'Vue.js', 'Next.js', 'Nuxt', 'TypeScript', 'Tailwind'] },
  { name: 'Backend', iconPath: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', technologies: ['Node.js', 'Python', 'PHP', 'Laravel', '.NET', 'Django'] },
  { name: 'Database', iconPath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Firebase', 'Supabase'] }
])

const services = ref([
  { title: 'Custom Web Apps', description: 'Tailored web applications built to match your unique business requirements and workflows.', iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { title: 'E-Commerce', description: 'Online stores with payment integration, inventory management, and seamless checkout experiences.', iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
  { title: 'CMS Solutions', description: 'Content management systems that empower your team to update website content easily.', iconPath: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  { title: 'SaaS Platforms', description: 'Software-as-a-Service platforms with subscriptions, user management, and analytics.', iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { title: 'API Development', description: 'RESTful and GraphQL APIs with comprehensive documentation and security best practices.', iconPath: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { title: 'Web Portals', description: 'Customer portals, employee intranets, and partner dashboards with role-based access.', iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' }
])

const pricingModels = ref([
  { name: 'Fixed Project', subtitle: 'Best for defined scope', price: '$5k+', period: '', description: 'Perfect for well-defined projects', popular: false, cta: 'Get quote', features: ['Project scope defined', 'Fixed timeline', 'Milestone payments', 'Full documentation'] },
  { name: 'Monthly Retainer', subtitle: 'Ongoing development', price: '$3k-8k', period: '/month', description: 'Continuous development & support', popular: true, cta: 'Get started', features: ['Dedicated team hours', 'Priority support', 'Regular updates', 'Flexible scope', 'Cancel anytime'] },
  { name: 'Hourly', subtitle: 'Pay as you go', price: '$50-100', period: '/hour', description: 'Flexible hourly engagement', popular: false, cta: 'Contact us', features: ['No commitment', 'Pay for time used', 'Weekly invoicing', 'Transparent tracking'] }
])

const metrics = ref([
  { value: '2-4 weeks', label: 'avg launch time', iconPath: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z' },
  { value: '100%', label: 'on-time delivery', iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
  { value: '24/7', label: 'support', iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
  { value: '95%', label: 'client retention', iconPath: 'M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5' }
])

const faqs = ref([
  { question: 'How long does it take to build a website?', answer: 'Simple websites take 2-4 weeks, custom web applications typically require 8-12 weeks. Timeline depends on complexity, features, and number of pages. We provide detailed timelines during our discovery phase.' },
  { question: 'Do you provide hosting and maintenance?', answer: 'Yes! We offer managed hosting with 99.9% uptime guarantee, SSL certificates, daily backups, and security monitoring. Our maintenance plans include updates, bug fixes, and feature enhancements.' },
  { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop. We follow mobile-first design principles and test on real devices to ensure perfect functionality.' },
  { question: 'Can you help with SEO and content?', answer: 'Yes! We implement technical SEO best practices from day one, including fast loading times, clean code, proper meta tags, and structured data. We also offer content writing and ongoing SEO services.' },
  { question: 'What happens after website launch?', answer: 'We provide 30 days of free support post-launch for bug fixes. After that, we offer flexible maintenance plans that include updates, security patches, backups, and ongoing improvements based on your needs.' }
])
</script>
