<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 pt-32 pb-24 overflow-hidden">
      <div class="absolute inset-0">
        <div
          class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--p),0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(var(--s),0.08),transparent_50%)] animate-pulse"
          style="animation-duration: 8s;"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-8 opacity-60 hover:opacity-100 transition-opacity">
          <ul>
            <li>
              <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
            </li>
            <li>
              <NuxtLink to="/#services" class="hover:text-primary transition-colors">Services</NuxtLink>
            </li>
            <li class="text-primary">IT Consulting</li>
          </ul>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div class="space-y-6">
              <div
                class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm mb-6">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path
                    d="M11 3a1 1 0 10-2 0v1a1 1 0 102 0V3zM15.657 5.757a1 1 0 00-1.414-1.414l-.707.707a1 1 0 001.414 1.414l.707-.707zM18 10a1 1 0 01-1 1h-1a1 1 0 110-2h1a1 1 0 011 1zM5.05 6.464A1 1 0 106.464 5.05l-.707-.707a1 1 0 00-1.414 1.414l.707.707zM5 10a1 1 0 01-1 1H3a1 1 0 110-2h1a1 1 0 011 1zM8 16v-1h4v1a2 2 0 11-4 0zM12 14c.015-.34.208-.646.477-.859a4 4 0 10-4.954 0c.27.213.462.519.476.859h4.002z" />
                </svg>
                <span class="text-sm font-bold text-primary">IT Services & Consulting</span>
              </div>

              <h1
                class="text-3xl sm:text-4xl lg:text-[44px] font-black mb-5 leading-tight tracking-tight text-base-content">
                Strategic Technology
                <span
                  class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-1">
                  Guidance for Smarter Growth
                </span>
              </h1>

              <p class="text-base sm:text-lg text-base-content/80 leading-relaxed max-w-lg mb-4">
                Technology decisions can define the future of your business. At KM Software's, we provide expert IT
                consulting and managed services that help organizations plan, build, and scale with confidence.
              </p>
              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-lg">
                From digital transformation to system optimization, we align technology with your business goals to
                drive efficiency, innovation, and long-term success.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact"
                class="btn btn-primary btn-lg px-10 shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all group relative overflow-hidden">
                <span class="relative z-10 flex items-center gap-2">
                  Book a Free Consultation
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                    </path>
                  </svg>
                </span>
              </NuxtLink>

              <button class="btn btn-outline btn-primary btn-lg px-8 group hover:scale-105 transition-all">
                <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor"
                  viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z">
                  </path>
                </svg>
                <span>Download Guide</span>
              </button>
            </div>

            <!-- Trust Stats -->
            <div
              class="stats stats-vertical sm:stats-horizontal shadow-2xl bg-gradient-to-br from-base-200/80 to-base-300/50 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden">
              <div class="stat hover:bg-primary/5 transition-all">
                <div class="stat-title text-xs font-semibold opacity-70">Clients Served</div>
                <div class="stat-value text-primary text-4xl">200+</div>
                <div class="stat-desc text-xs">Across 15+ industries</div>
              </div>

              <div class="stat hover:bg-secondary/5 transition-all">
                <div class="stat-title text-xs font-semibold opacity-70">Cost Reduction</div>
                <div class="stat-value text-secondary text-4xl">35%</div>
                <div class="stat-desc text-xs">Average IT savings</div>
              </div>

              <div class="stat hover:bg-accent/5 transition-all">
                <div class="stat-title text-xs font-semibold opacity-70">Support</div>
                <div class="stat-value text-accent text-4xl">24/7</div>
                <div class="stat-desc text-xs">Always available</div>
              </div>
            </div>
          </div>

          <!-- Right: Visual -->
          <div class="relative hidden lg:block">
            <div
              class="relative rounded-3xl overflow-hidden shadow-2xl aspect-square bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 p-12">
              <svg class="w-full h-full" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="consultGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" class="text-primary" style="stop-color:currentColor" />
                    <stop offset="100%" class="text-secondary" style="stop-color:currentColor" />
                  </linearGradient>
                  <filter id="glow">
                    <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                    <feMerge>
                      <feMergeNode in="coloredBlur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>
                <!-- Lightbulb / brain shape -->
                <circle cx="100" cy="80" r="45" fill="url(#consultGrad)" opacity="0.2" filter="url(#glow)" />
                <circle cx="100" cy="80" r="35" fill="url(#consultGrad)" opacity="0.35" />
                <!-- Rays -->
                <line x1="100" y1="25" x2="100" y2="15" stroke="url(#consultGrad)" stroke-width="3" opacity="0.5"
                  stroke-linecap="round" />
                <line x1="135" y1="45" x2="142" y2="38" stroke="url(#consultGrad)" stroke-width="3" opacity="0.5"
                  stroke-linecap="round" />
                <line x1="145" y1="80" x2="155" y2="80" stroke="url(#consultGrad)" stroke-width="3" opacity="0.5"
                  stroke-linecap="round" />
                <line x1="65" y1="45" x2="58" y2="38" stroke="url(#consultGrad)" stroke-width="3" opacity="0.5"
                  stroke-linecap="round" />
                <line x1="55" y1="80" x2="45" y2="80" stroke="url(#consultGrad)" stroke-width="3" opacity="0.5"
                  stroke-linecap="round" />
                <!-- Gear inside -->
                <circle cx="100" cy="80" r="15" fill="none" stroke="url(#consultGrad)" stroke-width="4" opacity="0.7" />
                <circle cx="100" cy="80" r="6" fill="url(#consultGrad)" opacity="0.6" />
                <!-- Base / stand -->
                <rect x="88" y="120" width="24" height="8" rx="4" fill="url(#consultGrad)" opacity="0.4" />
                <rect x="92" y="126" width="16" height="8" rx="4" fill="url(#consultGrad)" opacity="0.3" />
                <!-- Connecting nodes -->
                <circle cx="60" cy="150" r="8" fill="url(#consultGrad)" opacity="0.3" />
                <circle cx="100" cy="160" r="8" fill="url(#consultGrad)" opacity="0.4" />
                <circle cx="140" cy="150" r="8" fill="url(#consultGrad)" opacity="0.3" />
                <line x1="68" y1="150" x2="92" y2="160" stroke="url(#consultGrad)" stroke-width="2" opacity="0.25" />
                <line x1="108" y1="160" x2="132" y2="150" stroke="url(#consultGrad)" stroke-width="2" opacity="0.25" />
                <line x1="92" y1="128" x2="64" y2="144" stroke="url(#consultGrad)" stroke-width="2" opacity="0.2" />
                <line x1="108" y1="128" x2="136" y2="144" stroke="url(#consultGrad)" stroke-width="2" opacity="0.2" />
                <line x1="100" y1="134" x2="100" y2="152" stroke="url(#consultGrad)" stroke-width="2" opacity="0.2" />
              </svg>
            </div>

            <!-- Floating Badges -->
            <div class="absolute -top-4 -right-4 bg-base-100 rounded-2xl p-4 shadow-xl border border-base-content/10">
              <div class="flex flex-col gap-2">
                <div class="badge badge-primary badge-lg">Strategy</div>
                <div class="badge badge-secondary badge-lg">Consulting</div>
                <div class="badge badge-accent badge-lg">Support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Our IT Services -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-primary badge-lg mb-4">Our Services</div>
          </div>
          <h2
            class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 bg-gradient-to-r from-base-content to-base-content/70 bg-clip-text text-transparent">
            Our IT Services
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
            Comprehensive consulting and IT support tailored to modern businesses
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="(service, index) in itServices" :key="index"
            class="group card bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-base-content/5 hover:border-primary/20 overflow-hidden relative">
            <div
              class="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            </div>

            <div class="card-body relative z-10">
              <div class="relative mb-4">
                <div
                  class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <svg class="w-8 h-8 text-primary group-hover:scale-110 transition-transform" fill="none"
                    stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="service.iconPath"></path>
                  </svg>
                </div>
              </div>

              <h3 class="card-title text-xl mb-3 group-hover:text-primary transition-colors">{{ service.title }}</h3>
              <p class="text-base-content/70 leading-relaxed mb-5 text-sm">{{ service.description }}</p>

              <div class="space-y-2.5">
                <div v-for="feature in service.features" :key="feature" class="flex items-start gap-3 group/item">
                  <div
                    class="w-4 h-4 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover/item:bg-primary/20 transition-colors">
                    <svg class="w-2.5 h-2.5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd" />
                    </svg>
                  </div>
                  <span class="text-sm text-base-content/80 group-hover/item:text-base-content transition-colors">{{
                    feature }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-6">

        <!-- Heading -->
        <div class="text-center mb-16">
          <div class="badge badge-outline mb-4">Our Approach</div>
          <h2 class="text-4xl font-black mb-4">
            Our Consulting Approach
          </h2>
          <p class="text-base-content/60 max-w-2xl mx-auto">
            We combine business understanding with technical expertise
          </p>
        </div>

        <!-- Steps -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <div v-for="(step, index) in consultingProcess" :key="index"
            class="p-6 bg-base-200 rounded-2xl border border-base-content/10 transition hover:border-primary/20">

            <!-- Step Number -->
            <div
              class="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold mb-4">
              {{ index + 1 }}
            </div>

            <!-- Content -->
            <h3 class="font-semibold mb-2">
              {{ step.title }}
            </h3>

            <p class="text-sm text-base-content/60 leading-relaxed">
              {{ step.description }}
            </p>

          </div>

        </div>

      </div>
    </section>

    <!-- Why Choose IT Consulting -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">Competitive Edge</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Why Choose IT Consulting?</h2>
          <p class="text-base-content/60 text-lg">The right strategy today prevents costly mistakes tomorrow</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <div v-for="benefit in consultingBenefits" :key="benefit.title"
            class="flex items-start gap-4 p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all group">
            <div
              class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="benefit.icon" />
              </svg>
            </div>
            <div>
              <h3 class="font-bold mb-1">{{ benefit.title }}</h3>
              <p class="text-sm text-base-content/60 leading-relaxed">{{ benefit.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why KM Software's -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <div
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-sm font-bold text-primary">Why KM Software's</span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Why Choose KM Software's?
            </h2>
            <p class="text-xl text-base-content/60 max-w-3xl mx-auto font-light">
              We don't just advise — we help you execute and grow
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <div v-for="reason in whyKm" :key="reason.title"
              class="flex items-start gap-4 p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all group">
              <div
                class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
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

    <!-- Build a Smarter Tech Future -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center">
          <div
            class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm mb-6">
            <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.98 5.98 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z"
                clip-rule="evenodd" />
            </svg>
            <span class="text-sm font-bold text-secondary">Future-Ready</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black mb-6">Build a Smarter Tech Future</h2>
          <p class="text-xl text-base-content/60 leading-relaxed mb-8">
            Whether you're a startup planning your tech stack or an enterprise optimizing complex systems, our IT
            consulting services are designed to bring clarity, efficiency, and innovation to your organization.
          </p>
          <div class="grid sm:grid-cols-3 gap-6">
            <div
              class="p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all">
              <div class="text-3xl mb-3">🚀</div>
              <h3 class="font-bold mb-2">Startups</h3>
              <p class="text-sm text-base-content/60">Plan your tech stack and build a solid foundation from day one</p>
            </div>
            <div
              class="p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-secondary/20 hover:shadow-lg transition-all">
              <div class="text-3xl mb-3">📈</div>
              <h3 class="font-bold mb-2">Growing Businesses</h3>
              <p class="text-sm text-base-content/60">Scale operations with smarter systems and optimized processes</p>
            </div>
            <div
              class="p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-accent/20 hover:shadow-lg transition-all">
              <div class="text-3xl mb-3">🏢</div>
              <h3 class="font-bold mb-2">Enterprises</h3>
              <p class="text-sm text-base-content/60">Transform legacy systems and drive digital innovation at scale</p>
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
            <div
              class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-accent" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd"
                  d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                  clip-rule="evenodd" />
              </svg>
              <span class="text-sm font-bold text-accent">FAQ</span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              IT Consulting Questions
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light">
              Everything you need to know about our consulting services
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border-2 border-base-content/10 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 group overflow-hidden">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold group-hover:text-primary transition-colors pr-12">
                <div class="flex items-center gap-3">
                  <span
                    class="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">{{
                    index + 1 }}</span>
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
      <div
        class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_60%)]">
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="max-w-3xl mx-auto text-primary-content">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Let's Plan Your Next
            <span class="block mt-2">Move</span>
          </h2>
          <p class="text-xl opacity-90 mb-4">
            Transform your ideas into powerful digital solutions with KM Software's.
          </p>
          <p class="text-lg opacity-80 mb-10">
            Let's create custom software that simplifies operations, boosts productivity, and scales with your business.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button @click="showModal = true"
              class="btn btn-lg bg-base-100 text-primary hover:bg-base-200 border-none shadow-2xl px-10 group">
              <span class="font-bold">Start Your Custom Project Today</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
            <NuxtLink to="/contact"
              class="btn btn-lg btn-ghost border-2 border-base-100/40 text-primary-content hover:bg-base-100/10 px-10">
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
        <p class="text-sm text-base-content/60 mb-6">We'll respond within 24 hours with next steps and a calendar link.
        </p>

        <form @submit.prevent="submitForm" class="space-y-4">
          <div class="grid sm:grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Company Name *</span></label>
              <input v-model="form.company" type="text" required class="input input-bordered input-sm"
                placeholder="Acme Corp" />
            </div>
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Your Name *</span></label>
              <input v-model="form.name" type="text" required class="input input-bordered input-sm"
                placeholder="Ravi Kumar" />
            </div>
          </div>

          <div class="grid sm:grid-cols-2 gap-4">
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Work Email *</span></label>
              <input v-model="form.email" type="email" required class="input input-bordered input-sm"
                placeholder="ravi@acme.com" />
            </div>
            <div class="form-control">
              <label class="label"><span class="label-text text-xs font-semibold">Phone</span></label>
              <input v-model="form.phone" type="tel" class="input input-bordered input-sm"
                placeholder="+91 98765 43210" />
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
            <input v-model="form.startDate" type="month" class="input input-bordered input-sm" />
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text text-xs font-semibold">Brief Description (200 chars)
                *</span></label>
            <textarea v-model="form.description" required maxlength="200" rows="3"
              class="textarea textarea-bordered text-sm"
              placeholder="What are you building? What problem does it solve?"></textarea>
            <label class="label"><span class="label-alt text-xs text-base-content/40">{{ form.description.length
                }}/200</span></label>
          </div>

          <div class="form-control">
            <label class="label cursor-pointer justify-start gap-3">
              <input v-model="form.wantsEstimate" type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
              <span class="label-text text-sm">I want a non-binding cost estimate</span>
            </label>
          </div>

          <div class="form-control">
            <label class="label cursor-pointer justify-start gap-3">
              <input v-model="form.wantsNDA" type="checkbox" class="checkbox checkbox-sm checkbox-primary" />
              <span class="label-text text-sm">Please send an NDA before our first call</span>
            </label>
          </div>

          <div class="modal-action mt-6">
            <button type="submit" class="btn btn-primary w-full">
              Submit Request
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </form>

        <div v-if="formSucceeded"
          class="absolute inset-0 bg-base-100 rounded-2xl flex flex-col items-center justify-center text-center p-12">
          <div class="w-16 h-16 rounded-full bg-success/10 flex items-center justify-center mb-6">
            <svg class="w-8 h-8 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 class="text-2xl font-black mb-2">Proposal Submitted!</h3>
          <p class="text-base-content/60 text-sm mb-6">We'll review and respond within 24 hours with next steps and a
            calendar invite.</p>
          <button @click="showModal = false; formSucceeded = false" class="btn btn-primary">Close</button>
        </div>
      </div>
      <div class="modal-backdrop bg-base-content/40 backdrop-blur-sm" @click="showModal = false"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: "IT Services & Consulting | KM Software's",
  meta: [
    { name: 'description', content: 'Strategic IT consulting and managed services. Technology roadmap planning, system architecture, digital transformation, and 24/7 IT support by KM Software\'s.' },
    { property: 'og:title', content: "IT Services & Consulting | KM Software's" },
    { property: 'og:description', content: 'Strategic technology guidance for smarter growth.' }
  ]
});

const itServices = ref([
  {
    title: 'IT Strategy & Digital Transformation',
    description: 'Build a strong technology foundation for future growth with comprehensive roadmaps and digital-first strategies.',
    iconPath: 'M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z',
    features: [
      'Technology roadmap planning',
      'Digital transformation consulting',
      'Legacy system modernization',
      'IT infrastructure planning'
    ]
  },
  {
    title: 'System Architecture Consulting',
    description: 'Design scalable, high-performance systems from the ground up with modern architecture patterns.',
    iconPath: 'M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10',
    features: [
      'Solution architecture design',
      'Scalable platform planning',
      'Microservices architecture',
      'Cloud-native system design'
    ]
  },
  {
    title: 'IT Infrastructure Services',
    description: 'Reliable infrastructure that supports your operations 24/7 with optimized performance.',
    iconPath: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01',
    features: [
      'Network architecture',
      'Server setup & management',
      'Cloud infrastructure consulting',
      'Performance optimization'
    ]
  },
  {
    title: 'IT Security Consulting',
    description: 'Protect your systems and data with proactive security strategies and compliance planning.',
    iconPath: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z',
    features: [
      'Security audits',
      'Risk assessment',
      'Compliance consulting',
      'Secure architecture planning'
    ]
  },
  {
    title: 'Managed IT Services',
    description: 'Ongoing support so you can focus on your core business while we handle the technology.',
    iconPath: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z',
    features: [
      '24/7 monitoring',
      'Proactive maintenance',
      'System upgrades',
      'Technical support'
    ]
  }
]);

const consultingProcess = ref([
  { phase: 'Step 1', title: 'Business Discovery', description: 'Understanding your goals, challenges, and current technology landscape to identify opportunities.' },
  { phase: 'Step 2', title: 'Gap Analysis', description: 'Identifying inefficiencies, bottlenecks, and improvement opportunities across your existing systems.' },
  { phase: 'Step 3', title: 'Strategy Planning', description: 'Creating a tailored technology roadmap aligned with your business objectives and growth trajectory.' },
  { phase: 'Step 4', title: 'Implementation Support', description: 'Helping execute solutions smoothly with minimal disruption to your ongoing operations.' },
  { phase: 'Step 4', title: 'Implementation Support', description: 'Helping execute solutions smoothly with minimal disruption to your ongoing operations.' },
  { phase: 'Ongoing', title: 'Continuous Optimization', description: 'Adapting strategies as your business evolves, ensuring technology stays aligned with your goals.' }
]);

const consultingBenefits = ref([
  { title: 'Make informed technology decisions', desc: 'Expert guidance helps you choose the right tech stack, tools, and platforms for your needs.', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4' },
  { title: 'Reduce operational risks', desc: 'Proactive assessment and planning minimizes technology failures and security vulnerabilities.', icon: 'M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z' },
  { title: 'Improve scalability & performance', desc: 'Architecture designed to grow with your business without costly rewrites or migrations.', icon: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { title: 'Optimize IT investments', desc: 'Maximize ROI on technology spending with strategic vendor selection and resource planning.', icon: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z' },
  { title: 'Accelerate innovation', desc: 'Adopt emerging technologies faster with expert guidance and proven implementation patterns.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
  { title: 'Long-term cost efficiency', desc: 'Strategic planning reduces wasted resources and prevents costly technology mistakes.', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' }
]);

const whyKm = ref([
  { title: 'Business-first consulting approach', desc: 'We start with your business goals, not technology — ensuring every decision drives real value.' },
  { title: 'Experienced IT strategists', desc: 'Senior consultants with deep industry expertise across multiple domains and technologies.' },
  { title: 'Vendor-neutral recommendations', desc: 'Unbiased advice focused on what\'s best for your business, not vendor partnerships.' },
  { title: 'Scalable, future-ready solutions', desc: 'Architecture and strategies designed for long-term growth and adaptability.' },
  { title: 'Long-term technology partner', desc: 'Ongoing support and guidance as your technology needs evolve over time.' },
  { title: 'End-to-end execution support', desc: 'From strategy to implementation, we stay with you through the entire journey.' }
]);

const faqs = ref([
  {
    question: 'What types of businesses benefit from IT consulting?',
    answer: 'Businesses of all sizes benefit from IT consulting — from startups defining their tech stack to enterprises modernizing legacy systems. If technology is critical to your operations, expert guidance helps you make smarter decisions and avoid costly mistakes.'
  },
  {
    question: 'How is IT consulting different from managed IT services?',
    answer: 'IT consulting focuses on strategy, planning, and architecture — helping you make the right technology decisions. Managed IT services provide ongoing operational support like monitoring, maintenance, and troubleshooting. We offer both as part of our comprehensive approach.'
  },
  {
    question: 'How long does a typical consulting engagement last?',
    answer: 'Initial assessments and strategy planning typically take 2-4 weeks. Implementation support can range from a few months to ongoing engagement depending on the scope. We tailor our approach to your timeline and specific needs.'
  },
  {
    question: 'Do you work with specific industries?',
    answer: 'We serve clients across healthcare, finance, e-commerce, manufacturing, education, and more. Our consultants have deep domain expertise and understand industry-specific regulations and requirements.'
  },
  {
    question: 'Can you help with digital transformation?',
    answer: 'Absolutely! Digital transformation is one of our core specialties. We help organizations modernize their technology stack, automate processes, adopt cloud-first strategies, and build data-driven operations.'
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
