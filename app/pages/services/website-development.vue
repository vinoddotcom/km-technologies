<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-accent/5 via-base-100 to-primary/5 pt-32 pb-20 overflow-hidden">
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
                <span class="text-sm font-bold text-accent">Website Development Services</span>
              </div>
              
              <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-black mb-5 leading-tight tracking-tight text-base-content">
                Build High-Performance Websites
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-1">
                  That Drive Real Business Growth
                </span>
              </h1>
              
              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-lg">
                At KM Software's, we design and develop scalable, secure, and conversion-focused websites tailored to startups, growing businesses, and enterprises worldwide.
              </p>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-base-content/80 font-medium">Custom-Built Solutions</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-base-content/80 font-medium">Modern Technology Stack</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-base-content/80 font-medium">SEO-Optimized Architecture</span>
              </div>
              <div class="flex items-center gap-2">
                <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>
                <span class="text-base-content/80 font-medium">24/7 Technical Support</span>
              </div>
            </div>
            
            <div class="pt-4">
              <NuxtLink to="/contact" class="btn btn-accent btn-lg px-10 shadow-lg hover:shadow-accent/50 hover:scale-105 transition-all group w-full sm:w-auto">
                <span class="text-lg font-bold">Get a Free Consultation</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path></svg>
              </NuxtLink>
            </div>
          </div>
          
          <!-- Mockup Visual -->
          <div class="relative hidden lg:block">
            <div class="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-3xl blur-3xl"></div>
            <div class="relative">
              <div class="mockup-browser border border-base-content/10 bg-base-100 shadow-2xl hover:scale-[1.02] transition-transform duration-500">
                <div class="mockup-browser-toolbar">
                  <div class="input border border-base-content/10">kmsoftware.com</div>
                </div>
                <div class="flex flex-col px-8 py-12 bg-base-200/50">
                  <div class="h-6 w-1/3 bg-base-300 rounded mb-6 animate-pulse"></div>
                  <div class="h-32 bg-base-300 rounded mb-6 animate-pulse" style="animation-delay: 0.1s"></div>
                  <div class="grid grid-cols-3 gap-4">
                    <div class="h-24 bg-base-300 rounded animate-pulse" style="animation-delay: 0.2s"></div>
                    <div class="h-24 bg-base-300 rounded animate-pulse" style="animation-delay: 0.3s"></div>
                    <div class="h-24 bg-base-300 rounded animate-pulse" style="animation-delay: 0.4s"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our Web Development Expertise Section -->
    <section class="py-24 bg-base-200 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <h2 class="text-4xl sm:text-5xl font-black text-base-content">
            Our Web Development Expertise
          </h2>
          <p class="text-xl text-base-content/70 max-w-3xl mx-auto font-light leading-relaxed">
            We provide end-to-end website development solutions designed for performance, scalability, and long-term growth.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="service in servicesList" :key="service.title"
            class="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-content/5 hover:border-accent/30 hover:-translate-y-2">
            <div class="card-body p-8">
              <div class="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-300">
                <svg class="w-7 h-7 text-accent group-hover:text-accent-content transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-3 group-hover:text-accent transition-colors">{{ service.title }}</h3>
              <p class="text-base-content/70 leading-relaxed font-medium text-sm">{{ service.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-24 bg-base-100 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <h2 class="text-4xl sm:text-5xl font-black mb-6">Modern Technology Stack</h2>
          <p class="text-xl text-base-content/70 font-light">
            We build with the latest frameworks and tools to ensure maximum performance and reliability.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="category in techStack" :key="category.name"
            class="card bg-base-200 shadow-sm border border-base-content/5 hover:border-primary/20 transition-all duration-300">
            <div class="card-body p-8">
              <div class="flex items-center gap-4 mb-6">
                <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="category.iconPath"></path>
                  </svg>
                </div>
                <h3 class="text-2xl font-bold">{{ category.name }}</h3>
              </div>
              <div class="flex flex-wrap gap-2">
                <div v-for="tech in category.technologies" :key="tech" class="badge badge-outline badge-lg font-medium border-base-content/20 text-base-content/80">
                  {{ tech }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process & Why Choose Us -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
          <!-- Process -->
          <div>
            <h2 class="text-3xl sm:text-4xl font-black mb-10 text-base-content">
              Our Development Process
            </h2>
            <div class="space-y-4">
              <div v-for="(step, index) in processSteps" :key="index" class="flex items-center gap-4 group">
                <div class="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold shadow-sm group-hover:bg-primary group-hover:text-primary-content transition-all shrink-0 text-sm">
                  {{ index + 1 }}
                </div>
                <h3 class="text-lg font-bold text-base-content group-hover:text-primary transition-colors">{{ step }}</h3>
              </div>
            </div>
          </div>
          
          <!-- Why Choose Us -->
          <div class="bg-base-100 rounded-3xl p-8 sm:p-10 shadow-xl border border-base-content/10 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none"></div>
            
            <h2 class="text-2xl sm:text-3xl font-black mb-6 text-base-content relative z-10">
              Why Choose KM Software's?
            </h2>
            <ul class="space-y-3 relative z-10">
              <li v-for="reason in whyChooseUs" :key="reason" class="flex items-center gap-4 p-4 rounded-xl hover:bg-base-200/70 border border-transparent hover:border-primary/10 transition-all group">
                <div class="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary group-hover:shadow-md transition-all">
                  <svg class="w-4 h-4 text-primary group-hover:text-primary-content transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span class="text-base font-semibold text-base-content/85">{{ reason }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ -->
    <section class="py-24 bg-base-100 relative">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <h2 class="text-4xl sm:text-5xl font-black mb-6 border-b border-base-content/10 inline-block pb-4">
              Frequently Asked Questions
            </h2>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-base-200 rounded-2xl border border-base-content/5 hover:border-accent/30 transition-all duration-300 group">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg font-bold group-hover:text-accent transition-colors pr-12">
                {{ faq.question }}
              </div>
              <div class="collapse-content">
                <p class="text-base-content/70 leading-relaxed pt-2">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section class="py-24 sm:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-accent via-primary to-secondary"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center text-primary-content">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 leading-tight">
            Ready to Build a Powerful Website for Your Business?
          </h2>
          
          <p class="text-xl sm:text-2xl mb-10 max-w-2xl mx-auto font-light leading-relaxed">
            Partner with KM Software's and transform your ideas into high-performing digital solutions.
          </p>
          
          <NuxtLink to="/contact" class="btn btn-lg bg-base-100 text-primary hover:bg-base-200 hover:scale-105 border-none shadow-xl px-12 transition-all">
            <span class="text-lg font-bold">Get a Free Consultation Today</span>
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "Website Development Services | KM Software's",
  meta: [
    {
      name: 'description',
      content: 'Professional website development services. Custom corporate sites, e-commerce stores, and enterprise platforms built with modern technology.'
    }
  ]
})

const servicesList = ref([
  { title: 'Corporate Website Development', description: 'Professional websites that establish credibility and strengthen brand authority.', iconPath: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Custom Website Development', description: 'Fully tailored web solutions built around your unique business workflows.', iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { title: 'E-Commerce Development', description: 'Secure and scalable online stores with seamless payment integration.', iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z' },
  { title: 'Web Application Development', description: 'Dynamic and feature-rich web applications with dashboards and user systems.', iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'CMS & WordPress Development', description: 'Easy-to-manage websites powered by flexible content management systems.', iconPath: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z' },
  { title: 'SaaS & Portal Development', description: 'Subscription-based SaaS platforms and secure web portals.', iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' },
  { title: 'Website Redesign & Optimization', description: 'Modern UI/UX upgrades with improved speed and performance.', iconPath: 'M13 10V3L4 14h7v7l9-11h-7z' }
])

const techStack = ref([
  { name: 'Frontend', iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4', technologies: ['React', 'Next.js', 'Vue', 'TypeScript', 'Tailwind CSS'] },
  { name: 'Backend', iconPath: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01', technologies: ['Node.js', 'Python', 'Laravel', '.NET', 'Django'] },
  { name: 'Database', iconPath: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4', technologies: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis'] }
])

const processSteps = ref([
  'Requirement Analysis',
  'UI/UX Design',
  'Agile Development',
  'Testing & Quality Assurance',
  'Deployment',
  'Ongoing Support & Maintenance'
])

const whyChooseUs = ref([
  'Experienced Full-Stack Developers',
  'Scalable & Secure Architecture',
  'Mobile-First & SEO-Optimized',
  'Transparent Communication',
  'On-Time Delivery',
  'Dedicated Support Team'
])

const faqs = ref([
  { question: 'How long does it take to build a website?', answer: 'Simple websites take 2-4 weeks, custom web applications typically require 8-12 weeks. Timeline depends on complexity, features, and number of pages. We provide detailed timelines during our discovery phase.' },
  { question: 'Do you provide hosting and maintenance?', answer: 'Yes! We offer managed hosting with 99.9% uptime guarantee, SSL certificates, daily backups, and security monitoring. Our maintenance plans include updates, bug fixes, and feature enhancements.' },
  { question: 'Will my website be mobile-friendly?', answer: 'Absolutely. All our websites are fully responsive and optimized for mobile, tablet, and desktop. We follow mobile-first design principles and test on real devices to ensure perfect functionality.' },
  { question: 'Can you help with SEO and content?', answer: 'Yes! We implement technical SEO best practices from day one, including fast loading times, clean code, proper meta tags, and structured data. We also offer content writing and ongoing SEO services.' },
  { question: 'What happens after website launch?', answer: 'We provide 30 days of free support post-launch for bug fixes. After that, we offer flexible maintenance plans that include updates, security patches, backups, and ongoing improvements based on your needs.' }
])
</script>
