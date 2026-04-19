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
         <div>
          <img src="/images/ai-illustration.png" alt="">
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
            class="group relative bg-base-100 rounded-3xl p-8 flex flex-col h-full shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-base-content/10 hover:border-primary/40 overflow-hidden">
           
            <!-- Sophisticated Background Glow on Hover -->
            <div class="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-base-100 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div class="relative z-10 flex flex-col flex-grow">
              <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <component :is="service.icon" class="w-8 h-8 text-primary" />
              </div>
              
              <h3 class="text-2xl font-bold mb-4 text-base-content group-hover:text-primary transition-colors duration-300">{{ service.title }}</h3>
              
              <p class="text-base-content/70 mb-8 leading-relaxed flex-grow">
                {{ service.description }}
              </p>
              
              <div class="flex flex-wrap gap-2 mb-8 mt-auto">
                <span v-for="tech in service.technologies" :key="tech" 
                  class="px-3 py-1 text-xs font-semibold rounded-lg bg-base-200 border border-base-content/5 text-base-content/80 group-hover:bg-primary/5 group-hover:border-primary/20 transition-colors">
                  {{ tech }}
                </span>
              </div>
              
               <!-- Subtle Call To Action Link -->
              <div class="pt-4 border-t border-base-content/10 flex items-center text-sm font-bold text-base-content/60 group-hover:text-primary transition-colors w-full cursor-pointer">
                Explore Solution
                <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
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
  <div class="container mx-auto px-6">

    <div class="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">

      <!-- Left Content -->
      <div>

        <h2 class="text-4xl lg:text-5xl font-black leading-tight mb-6">
          Why Choose
          <span class="block text-primary">
            KM Software's
          </span>
        </h2>

        <p class="text-lg text-base-content/70 leading-relaxed max-w-lg">
          We build practical AI solutions that solve real business problems.
          Our team focuses on delivering scalable, reliable, and production-ready
          AI systems that create measurable business impact.
        </p>

      </div>


      <!-- Right Features -->
      <div class="grid sm:grid-cols-2 gap-6">

        <div
          v-for="reason in whyChooseUs"
          :key="reason"
          class="flex items-start gap-4 p-6 rounded-xl bg-base-100 border border-base-content/10 hover:shadow-lg transition"
        >

          <div class="w-10 h-10 rounded-lg bg-success/20 text-success flex items-center justify-center flex-shrink-0">
            ✓
          </div>

          <div class="font-semibold text-base-content">
            {{ reason }}
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

 
       <!-- ═══════════════════════════════════
         10. FINAL CTA
    ════════════════════════════════════ -->
    <section id="contact" class="py-24 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-primary/90 to-primary/80"></div>
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.3),transparent_60%)]"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div class="max-w-3xl mx-auto text-primary-content">
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-6 leading-tight">
           Ready to unlock the
            <span class="block mt-2">power of AI?</span>
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
  CpuChipIcon,
  ChatBubbleBottomCenterTextIcon,
  ChartBarIcon,
  LanguageIcon,
  EyeIcon,
  SparklesIcon
} from '@heroicons/vue/24/outline'
// SEO
useHead({
  title: "AI & Machine Learning Solutions | KM Software's",
  meta: [
    { name: 'description', content: 'Transform your business with intelligent automation. KM Software\'s builds practical AI and Machine Learning solutions — from chatbots to predictive analytics.' }
  ]
});
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

const industryOptions = ['Fintech / Finance', 'Healthcare / HealthTech', 'SaaS / Marketplace', 'Enterprise IT', 'Manufacturing & IoT', 'E-commerce / Retail', 'Other']
const budgetOptions = ['₹8L – ₹25L ($10k–$30k)', '₹25L – ₹60L ($30k–$75k)', '₹60L – ₹1.2Cr ($75k–$150k)', '₹1.2Cr+ ($150k+)', 'Not sure yet']

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
    description: 'Tailor-made AI systems designed specifically for your unique business workflows. We help automate repetitive tasks and optimize operational efficiency through dedicated machine learning models.',
    technologies: ['AI automation', 'Decision dashboards', 'Intelligent workflows', 'Process Mining'],
    icon: CpuChipIcon
  },
  {
    title: 'AI Chatbots & Assistants',
    description: 'Automate conversations with smart, human-like AI capable of contextual understanding. Provide 24/7 support, qualify leads automatically, and enhance customer satisfaction.',
    technologies: ['WhatsApp bots', 'LLM Agents', 'Lead qualification', 'Voice Bots'],
    icon: ChatBubbleBottomCenterTextIcon
  },
  {
    title: 'Predictive Analytics',
    description: 'Turn your historical data into actionable foresight. We build models that predict trends, forecast demand, and identify potential risks before they impact your business.',
    technologies: ['Sales forecasting', 'Churn prediction', 'Demand forecasting', 'Risk Analysis'],
    icon: ChartBarIcon
  },
  {
    title: 'Generative AI Integration',
    description: 'Leverage the power of Large Language Models to generate high-quality content, code, and automate complex cognitive tasks seamlessly within your infrastructure.',
    technologies: ['ChatGPT Integration', 'Custom LLM fine-tuning', 'RAG pipelines', 'Content generation'],
    icon: SparklesIcon
  },
  {
    title: 'Natural Language Processing',
    description: 'Extract meaning from unstructured text or voice. We develop NLP solutions that analyze customer sentiment, automate document processing, and extract key entities.',
    technologies: ['Sentiment analysis', 'Entity extraction', 'Voice recognition', 'Document automation'],
    icon: LanguageIcon
  },
  {
    title: 'Computer Vision',
    description: 'Empower your systems to understand and interpret images and video streams in real-time. Ideal for quality control, security, and automated visual inspections.',
    technologies: ['Face recognition', 'Object detection', 'CCTV analytics', 'Image classification'],
    icon: EyeIcon
  }
])

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
  'Long-term support',
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
const submitForm = () => {
  // In production: call your API endpoint
  formSucceeded.value = true
}
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
