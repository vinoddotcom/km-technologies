<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative pt-28 pb-24 bg-base-100 overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04]">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.45),transparent_35%),radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.3),transparent_35%)]"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="breadcrumbs text-sm mb-8 opacity-60">
          <ul>
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-primary transition-colors">Services</NuxtLink></li>
            <li>Dedicated Developers</li>
          </ul>
        </div>

        <div class="grid lg:grid-cols-2 gap-14 items-center max-w-7xl mx-auto">
          <!-- Left -->
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
                </svg>
                <span class="text-sm font-semibold text-primary">Staff Augmentation</span>
              </div>

              <h1 class="text-3xl sm:text-4xl lg:text-[46px] font-black leading-tight tracking-tight text-base-content mb-5">
                Dedicated Developers
                <span class="block text-primary mt-2">
                  For Your Business Needs
                </span>
              </h1>

              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-xl">
                Access pre-vetted, senior developers who integrate seamlessly with your team. Scale up or down on-demand without the overhead of traditional hiring.
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink
                to="/contact"
                class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl transition-all group"
              >
                <span>Hire Developers</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>

              <button
                @click="scrollToSection('#pricing')"
                class="btn btn-outline btn-lg px-8"
              >
                View Pricing
              </button>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6">
              <div
                v-for="stat in trustStats"
                :key="stat.title"
                class="rounded-2xl bg-base-200 border border-base-content/10 p-5"
              >
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <component :is="stat.icon" class="w-5 h-5 text-primary" />
                </div>
                <p class="text-2xl font-black text-base-content">{{ stat.value }}</p>
                <p class="text-sm font-semibold mt-1">{{ stat.title }}</p>
                <p class="text-xs text-base-content/50 mt-1">{{ stat.desc }}</p>
              </div>
            </div>
          </div>

          <!-- Right -->
          <div class="hidden lg:block">
            <div class="relative rounded-3xl bg-base-200 border border-base-content/10 p-8 shadow-xl">
              <div class="flex items-center justify-between pb-5 border-b border-base-content/10 mb-6">
                <div>
                  <p class="text-sm font-bold">Available Developer Pool</p>
                  <p class="text-xs text-base-content/50">Senior engineers across top stacks</p>
                </div>
                <div class="badge badge-success badge-sm">Ready to onboard</div>
              </div>

              <div class="grid grid-cols-2 gap-4">
                <div
                  v-for="(dev, index) in sampleDevelopers"
                  :key="index"
                  class="rounded-2xl bg-base-100 border border-base-content/10 p-5 text-center hover:border-primary/20 transition-all"
                >
                  <div class="w-16 h-16 mx-auto rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-black text-xl mb-3">
                    {{ dev.initial }}
                  </div>
                  <p class="text-sm font-bold">{{ dev.role }}</p>
                  <p class="text-xs text-base-content/50 mt-1">{{ dev.stack }}</p>
                </div>
              </div>

              <div class="mt-6 rounded-2xl bg-primary/5 border border-primary/10 p-4">
                <p class="text-sm font-semibold text-base-content">
                  Need a custom team mix?
                </p>
                <p class="text-xs text-base-content/60 mt-1">
                  We can assemble frontend, backend, mobile, DevOps, and QA resources based on your exact requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Dedicated Developers -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">Why Choose Us</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            The Advantages of Dedicated Developers
          </h2>
          <p class="text-base-content/60 text-lg">
            Get the flexibility of remote talent with the commitment of an in-house team.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div
            v-for="(benefit, index) in benefits"
            :key="index"
            class="group bg-base-100 rounded-2xl border border-base-content/10 p-7 hover:border-primary/20 hover:shadow-lg transition-all"
          >
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
              <component :is="benefit.icon" class="w-6 h-6 text-primary" />
            </div>
            <h3 class="text-lg font-bold mb-2">{{ benefit.title }}</h3>
            <p class="text-sm text-base-content/60 leading-relaxed">
              {{ benefit.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">Technology Expertise</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Our Developer Expertise
          </h2>
          <p class="text-base-content/60 text-lg">
            Access expert developers across all major technologies and product stacks.
          </p>
        </div>

        <div class="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          <div
            v-for="(category, index) in techStack"
            :key="category.name"
            class="bg-base-200 rounded-2xl border border-base-content/10 p-7"
          >
            <div class="flex items-center gap-4 mb-6">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                <component :is="category.icon" class="w-6 h-6 text-primary" />
              </div>
              <h3 class="text-xl font-black">{{ category.name }}</h3>
            </div>

            <div class="flex flex-wrap gap-2">
              <span
                v-for="tech in category.technologies"
                :key="tech"
                class="px-3 py-2 rounded-lg bg-base-100 border border-base-content/10 text-sm font-medium text-base-content/70"
              >
                {{ tech }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Hiring Models / Pricing -->
    <section id="pricing" class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">Pricing</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Simple Pricing Based on Your Needs
          </h2>
          <p class="text-base-content/60 text-lg">
            Choose the engagement model that fits your project, timeline, and budget.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <!-- Hourly -->
          <div class="bg-base-100 rounded-2xl border border-base-content/10 p-8 shadow-sm hover:shadow-lg transition-all">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-base-content mb-1">Hourly</h3>
              <p class="text-sm text-base-content/60">Pay only for the hours worked</p>
            </div>

            <div class="mb-6">
              <div class="flex items-end gap-2">
                <span class="text-4xl font-black text-base-content">$25-50</span>
                <span class="text-base text-base-content/50 mb-1">/hour</span>
              </div>
            </div>

            <div class="space-y-3 mb-8">
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">Flexible hours</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">No minimum commitment</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">Weekly invoicing</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">Easy scaling</span>
              </div>
            </div>

            <NuxtLink to="/contact" class="btn btn-outline w-full">
              Get Started
            </NuxtLink>
          </div>

          <!-- Part-Time -->
          <div class="relative bg-base-100 rounded-2xl border-2 border-primary p-8 shadow-xl">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2">
              <div class="badge badge-primary px-4 py-3 font-bold">Most Popular</div>
            </div>

            <div class="pt-4 mb-6">
              <h3 class="text-2xl font-bold text-base-content mb-1">Part-Time</h3>
              <p class="text-sm text-base-content/60">4 hours per day, 5 days a week</p>
            </div>

            <div class="mb-6">
              <div class="flex items-end gap-2">
                <span class="text-4xl font-black text-primary">$3,200</span>
                <span class="text-base text-base-content/50 mb-1">/month</span>
              </div>
              <p class="text-xs text-success font-semibold mt-2">Save 30% vs hourly</p>
            </div>

            <div class="space-y-3 mb-8">
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/80">80 hours per month</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/80">Dedicated developer</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/80">Fixed monthly billing</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/80">Direct communication</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-primary shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/80">Priority support</span>
              </div>
            </div>

            <NuxtLink to="/contact" class="btn btn-primary w-full">
              Get Started
            </NuxtLink>
          </div>

          <!-- Full-Time -->
          <div class="bg-base-100 rounded-2xl border border-base-content/10 p-8 shadow-sm hover:shadow-lg transition-all">
            <div class="mb-6">
              <h3 class="text-2xl font-bold text-base-content mb-1">Full-Time</h3>
              <p class="text-sm text-base-content/60">8 hours per day, 5 days a week</p>
            </div>

            <div class="mb-6">
              <div class="flex items-end gap-2">
                <span class="text-4xl font-black text-base-content">$5,600</span>
                <span class="text-base text-base-content/50 mb-1">/month</span>
              </div>
            </div>

            <div class="space-y-3 mb-8">
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">160+ hours per month</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">Fully dedicated resource</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">Long-term engagement</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">Best value for money</span>
              </div>
              <div class="flex items-start gap-3">
                <svg class="w-4 h-4 text-success shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                </svg>
                <span class="text-sm text-base-content/70">VIP support</span>
              </div>
            </div>

            <NuxtLink to="/contact" class="btn btn-outline w-full">
              Contact Us
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">Simple Process</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            How It Works
          </h2>
          <p class="text-base-content/60 text-lg">
            Get started with dedicated developers in just four simple steps.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          <div
            v-for="(step, index) in processSteps"
            :key="index"
            class="text-center bg-base-200 rounded-2xl border border-base-content/10 p-8"
          >
            <div class="w-12 h-12 mx-auto mb-5 rounded-full bg-primary text-primary-content flex items-center justify-center font-black">
              {{ index + 1 }}
            </div>

            <h3 class="text-lg font-bold mb-3">{{ step.title }}</h3>
            <p class="text-sm text-base-content/60 leading-relaxed">
              {{ step.description }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <div class="badge badge-outline badge-lg mb-4">FAQ</div>
            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
              Frequently Asked Questions
            </h2>
            <p class="text-base-content/60 text-lg">
              Everything you need to know about hiring dedicated developers.
            </p>
          </div>

          <div class="space-y-4">
            <div
              v-for="(faq, index) in faqs"
              :key="index"
              class="collapse collapse-plus bg-base-100 rounded-2xl border border-base-content/10 hover:border-primary/20 transition-all"
            >
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg font-bold pr-12">
                {{ faq.question }}
              </div>
              <div class="collapse-content">
                <p class="text-base-content/70 leading-relaxed pt-2 text-sm sm:text-base">
                  {{ faq.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Final CTA -->
    <section id="contact" class="py-24 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_60%)]"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="max-w-3xl mx-auto text-primary-content">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
            Hire Your Dedicated Team
            <span class="block mt-2">Today</span>
          </h2>
          <p class="text-xl opacity-90 mb-4">
            Transform your ideas into powerful digital solutions with KM Software's.
          </p>
          <p class="text-lg opacity-80 mb-10">
            Let's create software that boosts productivity, simplifies operations, and scales with your business.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="showModal = true"
              class="btn btn-lg bg-base-100 text-primary hover:bg-base-200 border-none shadow-2xl px-10 group"
            >
              <span class="font-bold">Start Your Project Today</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
            <NuxtLink
              to="/contact"
              class="btn btn-lg btn-ghost border-2 border-base-100/40 text-primary-content hover:bg-base-100/10 px-10"
            >
              Or Contact Us
            </NuxtLink>
          </div>
          <div class="mt-10 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <span>✓ Free consultation</span>
            <span>✓ Flexible hiring</span>
            <span>✓ Response within 24 hours</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Intake Modal -->
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
            <textarea
              v-model="form.description"
              required
              maxlength="200"
              rows="3"
              class="textarea textarea-bordered text-sm"
              placeholder="What are you building? What problem does it solve?"
            ></textarea>
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
  CodeBracketIcon,
  ServerStackIcon,
  DevicePhoneMobileIcon,
  CircleStackIcon,
  ArrowTrendingUpIcon,
  CurrencyDollarIcon,
  CheckBadgeIcon,
  ClockIcon,
  UserGroupIcon,
  BoltIcon,
  StarIcon
} from '@heroicons/vue/24/outline'

useHead({
  title: "Dedicated Developers | Staff Augmentation Services - KM Software's",
  meta: [
    {
      name: 'description',
      content: 'Hire pre-vetted dedicated developers to scale your team. Flexible engagement models, expert developers skilled in modern technologies. Quick onboarding in 48 hours.'
    },
    {
      property: 'og:title',
      content: "Dedicated Developers | Staff Augmentation Services - KM Software's"
    },
    {
      property: 'og:description',
      content: 'Hire pre-vetted dedicated developers to scale your team. Flexible engagement models, expert developers skilled in modern technologies.'
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

const industryOptions = [
  'Fintech / Finance',
  'Healthcare / HealthTech',
  'SaaS / Marketplace',
  'Enterprise IT',
  'Manufacturing & IoT',
  'E-commerce / Retail',
  'Other'
]

const budgetOptions = [
  '₹8L – ₹25L ($10k–$30k)',
  '₹25L – ₹60L ($30k–$75k)',
  '₹60L – ₹1.2Cr ($75k–$150k)',
  '₹1.2Cr+ ($150k+)',
  'Not sure yet'
]

const submitForm = () => {
  formSucceeded.value = true
}

const scrollToSection = (selector: string) => {
  if (import.meta.client) {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }
}

const trustStats = ref([
  {
    title: 'Developers',
    value: '500+',
    desc: 'Pre-vetted experts',
    icon: UserGroupIcon
  },
  {
    title: 'Time to Start',
    value: '48h',
    desc: 'Quick onboarding',
    icon: BoltIcon
  },
  {
    title: 'Client Satisfaction',
    value: '98%',
    desc: 'Happy clients',
    icon: StarIcon
  }
])

const sampleDevelopers = ref([
  { initial: 'JS', role: 'Frontend Developer', stack: 'React / Vue / TypeScript' },
  { initial: 'PY', role: 'Backend Developer', stack: 'Python / Django / FastAPI' },
  { initial: 'GO', role: 'Backend Engineer', stack: 'Go / APIs / Microservices' },
  { initial: 'TS', role: 'Full-Stack Developer', stack: 'Node / React / PostgreSQL' },
  { initial: 'RB', role: 'RoR Developer', stack: 'Ruby on Rails / APIs' },
  { initial: 'PH', role: 'PHP Developer', stack: 'Laravel / MySQL / REST' }
])

const benefits = ref([
  {
    title: 'Rapid Scaling',
    description: 'Quickly scale your team up or down based on project demands without long-term commitments or hiring overhead.',
    icon: ArrowTrendingUpIcon
  },
  {
    title: 'Cost Effective',
    description: 'Save up to 60% on development costs compared to traditional hiring, with no recruitment fees or benefits overhead.',
    icon: CurrencyDollarIcon
  },
  {
    title: 'Pre-Vetted Talent',
    description: 'Access rigorously screened developers with proven expertise, verified portfolios, and excellent communication skills.',
    icon: CheckBadgeIcon
  },
  {
    title: 'Quick Onboarding',
    description: 'Developers can start contributing to your project within 48 hours, integrating seamlessly with your existing team.',
    icon: BoltIcon
  },
  {
    title: 'Dedicated Resources',
    description: 'Get full-time commitment from developers who work exclusively on your project during engagement hours.',
    icon: UserGroupIcon
  },
  {
    title: 'Flexible Engagement',
    description: 'Choose from hourly, part-time, or full-time models with the flexibility to adjust as your needs evolve.',
    icon: ClockIcon
  }
])

const techStack = ref([
  {
    name: 'Frontend Development',
    icon: CodeBracketIcon,
    technologies: ['React', 'Vue.js', 'Angular', 'Next.js', 'Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Redux']
  },
  {
    name: 'Backend Development',
    icon: ServerStackIcon,
    technologies: ['Node.js', 'Python', 'Java', 'PHP', 'Go', 'Ruby on Rails', '.NET', 'Django']
  },
  {
    name: 'Mobile Development',
    icon: DevicePhoneMobileIcon,
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Ionic', 'Xamarin']
  },
  {
    name: 'Database & DevOps',
    icon: CircleStackIcon,
    technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Docker', 'Kubernetes', 'AWS', 'Azure']
  }
])

const hiringModels = ref([
  {
    name: 'Hourly',
    price: '$25-50',
    period: '/hour',
    description: 'Pay only for the hours worked',
    popular: false,
    features: [
      'Flexible hours',
      'No minimum commitment',
      'Perfect for short-term projects',
      'Weekly invoicing',
      'Easy scaling'
    ]
  },
  {
    name: 'Part-Time',
    price: '$3,200',
    period: '/month',
    description: '4 hours per day, 5 days a week',
    popular: true,
    features: [
      '80 hours per month',
      'Dedicated developer',
      'Fixed monthly billing',
      'Direct communication',
      'Perfect work-life balance',
      'Cost-effective solution'
    ]
  },
  {
    name: 'Full-Time',
    price: '$5,600',
    period: '/month',
    description: '8 hours per day, 5 days a week',
    popular: false,
    features: [
      '160+ hours per month',
      'Fully dedicated resource',
      'Maximum productivity',
      'Long-term engagement',
      'Best value for money',
      'Priority support'
    ]
  }
])

const processSteps = ref([
  {
    title: 'Share Requirements',
    description: 'Tell us about your project needs, tech stack, and timeline through our simple consultation form.'
  },
  {
    title: 'Review Profiles',
    description: 'We match you with 3-5 pre-vetted developers from our talent pool based on your specific requirements.'
  },
  {
    title: 'Interview & Select',
    description: 'Conduct technical interviews with shortlisted candidates and choose the best fit for your team.'
  },
  {
    title: 'Onboard & Start',
    description: 'Your selected developer(s) join your team, get access to tools, and start contributing within 48 hours.'
  }
])

const faqs = ref([
  {
    question: 'How quickly can a developer start working on my project?',
    answer: 'Once you select a developer after interviews, they can typically start within 48 hours. The entire process from requirement sharing to project kickoff usually takes 3-5 business days.'
  },
  {
    question: 'What if I\'m not satisfied with a developer?',
    answer: 'We offer a risk-free trial period. If you\'re not satisfied within the first two weeks, we\'ll replace the developer at no additional cost or provide a full refund.'
  },
  {
    question: 'Can I hire multiple developers for my project?',
    answer: 'Absolutely! You can hire as many developers as your project requires. We can provide entire development teams including frontend, backend, mobile developers, QA engineers, and more.'
  },
  {
    question: 'What is the contract duration?',
    answer: 'We offer flexible contracts ranging from 1 month to 12+ months. You can start with a shorter commitment and extend as needed. There are no long-term lock-ins.'
  },
  {
    question: 'How do you ensure code quality?',
    answer: 'All our developers follow industry best practices, use version control, write clean documented code, and participate in code reviews. We also provide regular progress updates and quality checks.'
  }
])
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: -1;
}
</style>