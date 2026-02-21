<template>
  <div class="min-h-screen bg-base-100">

    <!-- ═══════════════════════════════════
         1. HERO
    ════════════════════════════════════ -->
    <section id="hero" class="relative bg-gradient-to-br from-base-100 via-base-200 to-base-100 pt-28 pb-24 overflow-hidden">
      <div class="absolute inset-0 opacity-[0.04]">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.6),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.4),transparent_50%)]"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-10 opacity-60">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li><NuxtLink to="/#services">Services</NuxtLink></li>
            <li>Custom Software</li>
          </ul>
        </div>

        <div class="grid lg:grid-cols-2 gap-16 items-center max-w-7xl mx-auto">
          <!-- Left -->
          <div class="space-y-8">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
              <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-semibold text-primary">Mission-Critical Custom Software</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] tracking-tight">
              Custom Software Built for
              <span class="block text-primary mt-2">Outcomes — Faster,<br>Secure, Scalable.</span>
            </h1>

            <p class="text-lg text-base-content/70 leading-relaxed max-w-xl">
              We build mission-critical systems for fintech, healthcare &amp; marketplaces —
              <strong class="text-base-content">8–20× performance gains</strong> in typical deployments.
              Serious leads only: our engagements start with a paid discovery.
            </p>

            <!-- Metrics row -->
            <div class="flex flex-wrap gap-8 pt-4 border-t border-base-content/10">
              <div v-for="m in heroMetrics" :key="m.label" class="flex flex-col">
                <span class="text-3xl font-black text-primary">{{ m.value }}</span>
                <span class="text-xs text-base-content/60 mt-1">{{ m.label }}</span>
              </div>
            </div>

            <!-- CTAs -->
            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="showModal = true"
                class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all group"
              >
                <span>Request Proposal</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
              <button
                @click="scrollTo('#pricing')"
                class="btn btn-outline btn-lg px-8"
              >
                Get Cost Range
              </button>
            </div>

            <!-- Trust strip -->
            <div class="flex flex-wrap items-center gap-4 pt-4">
              <span class="text-xs font-semibold text-base-content/40 uppercase tracking-widest">Trusted by</span>
              <div v-for="c in clientLogos" :key="c" class="px-3 py-1.5 rounded-lg bg-base-200 border border-base-content/10 text-xs font-bold text-base-content/50">{{ c }}</div>
              <div class="flex items-center gap-1 ml-auto">
                <svg v-for="i in 5" :key="i" class="w-4 h-4 text-warning fill-current" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                <span class="text-xs font-semibold ml-1">4.9 / 5 client rating</span>
              </div>
            </div>
          </div>

          <!-- Right — Visual -->
          <div class="hidden lg:block relative">
            <div class="absolute inset-0 bg-gradient-to-br from-primary/10 to-base-300/20 rounded-3xl blur-3xl"></div>
            <div class="relative bg-base-200 border border-base-content/10 rounded-3xl p-8 space-y-4 shadow-xl">
              <div class="flex items-center gap-3 pb-4 border-b border-base-content/10">
                <div class="w-3 h-3 rounded-full bg-error/60"></div>
                <div class="w-3 h-3 rounded-full bg-warning/60"></div>
                <div class="w-3 h-3 rounded-full bg-success/60"></div>
                <span class="ml-2 text-xs text-base-content/40 font-mono">project.config.ts</span>
              </div>
              <div v-for="line in codeLines" :key="line.id" class="flex gap-3 font-mono text-sm">
                <span class="text-base-content/20 select-none w-4 text-right shrink-0">{{ line.id }}</span>
                <span :class="line.cls">{{ line.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         2. SERVICE BUCKETS
    ════════════════════════════════════ -->
    <section id="services" class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">What We Build</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">End-to-End Engineering</h2>
          <p class="text-base-content/60 text-lg">Every engagement covers the full delivery stack — strategy, code, ops.</p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="svc in serviceBuckets" :key="svc.title"
            class="group bg-base-200 rounded-2xl p-8 border border-base-content/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="svc.icon"/>
              </svg>
            </div>
            <h3 class="text-lg font-bold mb-2">{{ svc.title }}</h3>
            <p class="text-base-content/60 text-sm leading-relaxed mb-4">{{ svc.desc }}</p>
            <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-success/10 border border-success/20 text-success text-xs font-semibold">
              <svg class="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/></svg>
              {{ svc.kpi }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         3. WHO IS THIS FOR
    ════════════════════════════════════ -->
    <section id="who-we-serve" class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <div class="badge badge-outline badge-lg mb-6">Ideal Clients</div>
            <h2 class="text-3xl sm:text-4xl font-black mb-8">Who This Is Built For</h2>
            <div class="space-y-4">
              <div v-for="industry in industries" :key="industry.name"
                class="flex items-start gap-4 p-5 bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all group">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 text-xl">{{ industry.icon }}</div>
                <div>
                  <p class="font-bold text-sm">{{ industry.name }}</p>
                  <p class="text-xs text-base-content/60 mt-1 leading-relaxed">{{ industry.desc }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Why a Specialist Studio -->
          <div>
            <div class="badge badge-outline badge-lg mb-6">Our Positioning</div>
            <h2 class="text-3xl sm:text-4xl font-black mb-4">Why a <em>Specialist</em> Studio — Not a Generic Agency</h2>
            <p class="text-base-content/60 text-sm mb-8 leading-relaxed">We work with teams who have a real engineering problem — not a content update. Here's what that means in practice.</p>

            <div class="space-y-4 mb-8">
              <div v-for="pt in positioningPoints" :key="pt.title"
                class="flex items-start gap-4 p-5 bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all">
                <div class="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <svg class="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="pt.icon"/>
                  </svg>
                </div>
                <div>
                  <p class="font-bold text-sm mb-0.5">{{ pt.title }}</p>
                  <p class="text-xs text-base-content/60 leading-relaxed">{{ pt.desc }}</p>
                </div>
              </div>
            </div>

            <!-- Testimonial -->
            <div class="bg-base-100 border border-primary/10 rounded-2xl p-6">
              <p class="text-base-content/80 text-sm leading-relaxed italic mb-4">"KM's paid discovery phase alone was worth the investment — they saved us 6 months of wrong turns and delivered a system processing ₹200Cr+ monthly."</p>
              <div class="flex items-center gap-3">
                <div class="w-9 h-9 rounded-full bg-primary/20 flex items-center justify-center font-bold text-primary text-sm">RK</div>
                <div>
                  <p class="text-sm font-semibold">Ravi Kumar</p>
                  <p class="text-xs text-base-content/50">CTO, FinPay Technologies</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         4. ENGAGEMENT MODELS & PRICING
    ════════════════════════════════════ -->
    <section id="pricing" class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">Engagement Models</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Transparent Pricing Ranges</h2>
          <p class="text-base-content/60">We share ranges — not vague "contact us". Serious projects deserve honest numbers.</p>
        </div>

        <!-- Engagement option cards -->
        <div class="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          <div v-for="(model, i) in engagementModels" :key="model.name"
            :class="[
              'card border rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1',
              i === 1 ? 'border-primary bg-primary/5 ring-1 ring-primary/20' : 'border-base-content/10 bg-base-200'
            ]">
            <div class="card-body p-8">
              <div v-if="i === 1" class="badge badge-primary badge-sm mb-2">Most Common</div>
              <h3 class="text-xl font-black mb-1">{{ model.name }}</h3>
              <p class="text-xs text-base-content/50 mb-4">{{ model.sub }}</p>
              <div class="text-3xl font-black text-primary mb-4">{{ model.range }}</div>
              <ul class="space-y-2 text-sm text-base-content/70">
                <li v-for="f in model.features" :key="f" class="flex items-start gap-2">
                  <svg class="w-4 h-4 text-success shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  {{ f }}
                </li>
              </ul>
              <button @click="showModal = true" :class="['btn btn-sm mt-6 w-full', i === 1 ? 'btn-primary' : 'btn-outline']">
                Get Estimate
              </button>
            </div>
          </div>
        </div>

        <!-- Budget tiers -->
        <div class="max-w-6xl mx-auto">
          <h3 class="text-center text-lg font-bold mb-6 text-base-content/70">Typical Budget Ranges</h3>
          <div class="grid sm:grid-cols-3 gap-4">
            <div v-for="tier in pricingTiers" :key="tier.label"
              class="p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 transition-all">
              <p class="text-xs font-semibold text-base-content/40 uppercase tracking-widest mb-2">{{ tier.label }}</p>
              <p class="text-2xl font-black text-base-content mb-1">{{ tier.inr }}</p>
              <p class="text-xs text-base-content/50 mb-3">{{ tier.usd }}</p>
              <p class="text-xs text-base-content/60 leading-relaxed">{{ tier.desc }}</p>
            </div>
          </div>
          <div class="mt-6 p-5 bg-warning/10 border border-warning/20 rounded-2xl text-sm text-base-content/70 leading-relaxed">
            <strong class="text-warning">Assumption note:</strong>
            Ranges above assume 3–6 month timeline, standard integrations (OAuth, PostgreSQL), and non-regulated data.
            For HIPAA/FHIR/SOC2 compliance, add 20–40%. Features &amp; third-party integrations add cost.
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         5. PROCESS TIMELINE
    ════════════════════════════════════ -->
    <section id="process" class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">How We Work</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Our Delivery Process</h2>
          <p class="text-base-content/60">Six structured phases from first conversation to running production system.</p>
        </div>

        <div class="max-w-5xl mx-auto space-y-4">
          <div v-for="(step, i) in processSteps" :key="step.title"
            class="flex gap-6 items-start p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all group">
            <div class="w-12 h-12 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center font-black text-primary shrink-0 group-hover:bg-primary group-hover:text-primary-content transition-all text-lg">
              {{ i + 1 }}
            </div>
            <div class="flex-1">
              <div class="flex flex-wrap items-center gap-3 mb-1">
                <h3 class="font-bold text-base">{{ step.title }}</h3>
                <span class="badge badge-ghost badge-sm">{{ step.duration }}</span>
              </div>
              <p class="text-sm text-base-content/60 leading-relaxed">{{ step.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         6. SECURITY / IP / TRUST
    ════════════════════════════════════ -->
    <section id="trust" class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <div class="badge badge-outline badge-lg mb-4">Legal &amp; Trust</div>
            <h2 class="text-3xl sm:text-4xl font-black mb-4">Security, IP &amp; Terms — Upfront</h2>
            <p class="text-base-content/60">No surprises in the contract. Everything important is disclosed before you sign.</p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            <div v-for="trust in trustItems" :key="trust.title"
              class="p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all">
              <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" :d="trust.icon"/>
                </svg>
              </div>
              <h3 class="font-bold text-sm mb-2">{{ trust.title }}</h3>
              <p class="text-xs text-base-content/60 leading-relaxed">{{ trust.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         7. CASE STUDIES
    ════════════════════════════════════ -->
    <section id="case-studies" class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 max-w-3xl mx-auto">
          <div class="badge badge-outline badge-lg mb-4">Case Studies</div>
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">Results That Speak</h2>
          <p class="text-base-content/60">Real problem → real solution → measurable outcome.</p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="cs in caseStudies" :key="cs.title"
            class="group bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 overflow-hidden">
            <div class="h-2 bg-primary"></div>
            <div class="p-8">
              <div class="badge badge-outline badge-sm mb-4">{{ cs.industry }}</div>
              <h3 class="font-black text-lg mb-3">{{ cs.title }}</h3>
              <div class="space-y-3 text-sm mb-6">
                <div>
                  <span class="font-semibold text-base-content/50 uppercase text-xs tracking-wider">Problem</span>
                  <p class="text-base-content/70 mt-1">{{ cs.problem }}</p>
                </div>
                <div>
                  <span class="font-semibold text-base-content/50 uppercase text-xs tracking-wider">Solution</span>
                  <p class="text-base-content/70 mt-1">{{ cs.solution }}</p>
                </div>
              </div>
              <div class="flex items-center gap-2 p-3 bg-success/10 border border-success/20 rounded-xl mb-4">
                <svg class="w-5 h-5 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
                <span class="text-success font-bold text-sm">{{ cs.outcome }}</span>
              </div>
              <div class="flex flex-wrap gap-1.5 mb-5">
                <span v-for="t in cs.stack" :key="t" class="badge badge-ghost badge-sm">{{ t }}</span>
              </div>
              <button @click="showModal = true" class="btn btn-outline btn-sm w-full group-hover:btn-primary transition-all">
                Read Case Study →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         8. TEAM & CREDIBILITY
    ════════════════════════════════════ -->
    <section id="team" class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16">
          <div class="badge badge-outline badge-lg mb-4">Team</div>
          <h2 class="text-3xl sm:text-4xl font-black mb-4">Delivery Leads</h2>
        </div>
        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div v-for="member in teamMembers" :key="member.name"
            class="flex gap-4 p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all">
            <div class="w-14 h-14 rounded-2xl bg-primary/20 flex items-center justify-center font-black text-primary text-lg shrink-0">
              {{ member.initials }}
            </div>
            <div>
              <p class="font-bold">{{ member.name }}</p>
              <p class="text-xs text-base-content/50 mb-2">{{ member.role }}</p>
              <div class="flex flex-wrap gap-1">
                <span v-for="s in member.skills" :key="s" class="badge badge-ghost badge-xs">{{ s }}</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Certifications -->
        <div class="mt-12 flex flex-wrap justify-center gap-4">
          <div v-for="cert in certifications" :key="cert" class="px-5 py-2.5 bg-base-200 border border-base-content/10 rounded-xl text-sm font-semibold text-base-content/60">
            {{ cert }}
          </div>
        </div>
      </div>
    </section>

    <!-- ═══════════════════════════════════
         9. FAQ
    ════════════════════════════════════ -->
    <section id="faq" class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16">
            <div class="badge badge-outline badge-lg mb-4">FAQ</div>
            <h2 class="text-3xl sm:text-4xl font-black mb-4">Common Questions</h2>
            <p class="text-base-content/60">Technical, commercial &amp; process questions answered honestly.</p>
          </div>

          <div class="space-y-3">
            <div v-for="(faq, i) in faqs" :key="i"
              class="collapse collapse-plus bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all">
              <input type="radio" name="faq-custom" :checked="i === 0"/>
              <div class="collapse-title font-semibold pr-12 flex items-center gap-3">
                <span class="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xs shrink-0">{{ i + 1 }}</span>
                {{ faq.q }}
              </div>
              <div class="collapse-content text-sm text-base-content/70 leading-relaxed pl-11">
                {{ faq.a }}
              </div>
            </div>
          </div>

          <div class="mt-10 text-center p-8 bg-primary/5 border border-primary/10 rounded-2xl">
            <p class="font-semibold mb-4">Still have questions?</p>
            <button @click="showModal = true" class="btn btn-primary">Request a Proposal</button>
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
            Ready to Start a Paid Discovery?
          </h2>
          <p class="text-xl opacity-80 mb-10">
            30-min scoping call → paid discovery → fixed-price roadmap. No commitment to proceed.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              @click="showModal = true"
              class="btn btn-lg bg-base-100 text-primary hover:bg-base-200 border-none shadow-2xl px-10 group"
            >
              <span class="font-bold">Submit Proposal Request</span>
              <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </button>
            <NuxtLink to="/contact" class="btn btn-lg btn-ghost border-2 border-base-100/40 text-primary-content hover:bg-base-100/10 px-10">
              Or Contact Us
            </NuxtLink>
          </div>
          <div class="mt-10 flex flex-wrap justify-center gap-8 text-sm opacity-80">
            <span>✓ NDA before discussion</span>
            <span>✓ Discovery is non-refundable; credited if you proceed</span>
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
  title: 'Custom Software Development | Mission-Critical Systems — KM Software\'s',
  meta: [
    { name: 'description', content: 'Custom software development for fintech, healthcare & marketplaces. 8–20× performance gains. Transparent pricing, paid discovery, full IP assignment. Request a proposal today.' },
    { property: 'og:title', content: 'Custom Software Development | KM Software\'s' },
    { property: 'og:description', content: 'Mission-critical systems built faster, secure, scalable. Transparent pricing from ₹8L.' }
  ]
})

// ─── Hero ───────────────────────────────
const heroMetrics = [
  { value: '8–20×', label: 'Performance gains' },
  { value: '120+', label: 'Systems delivered' },
  { value: '99.7%', label: 'On-time delivery' },
  { value: '₹200Cr+', label: 'Client transactions/mo' },
]

const clientLogos = ['FinPay', 'MedCore', 'TradeNest', 'ShipSync', 'PulseHealth']

const codeLines = [
  { id: 1, text: 'const project = {', cls: 'text-base-content/80' },
  { id: 2, text: "  client: 'FinPay Technologies',", cls: 'text-success/80' },
  { id: 3, text: "  stack: ['Node', 'PostgreSQL', 'AWS'],", cls: 'text-primary/80' },
  { id: 4, text: '  timeline: "16 weeks",', cls: 'text-warning/80' },
  { id: 5, text: '  outcome: {', cls: 'text-base-content/80' },
  { id: 6, text: "    perf: '12× throughput',", cls: 'text-success/80' },
  { id: 7, text: "    uptime: '99.99%',", cls: 'text-success/80' },
  { id: 8, text: '  }', cls: 'text-base-content/80' },
  { id: 9, text: '}', cls: 'text-base-content/80' },
]

// ─── Service Buckets ────────────────────
const serviceBuckets = [
  { title: 'Discovery & Product Strategy', desc: 'We validate feasibility, define scope, and align business goals with architecture before writing a single line of code.', kpi: 'Reduces rework by 70%', icon: 'M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z' },
  { title: 'Full-Stack Engineering', desc: 'Web, mobile, backend, integrations — built by senior engineers with clean architecture, CI/CD, and automated tests.', kpi: '40% faster time-to-market', icon: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { title: 'AI / ML Integration', desc: 'Embed intelligent features — prediction, NLP, recommendation engines — directly into your product with MLOps pipelines.', kpi: '60% reduction in manual work', icon: 'M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18' },
  { title: 'Systems Modernization', desc: 'Migrate legacy monoliths to modern microservices or cloud-native architecture without business disruption.', kpi: '8–12× throughput gains', icon: 'M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12' },
  { title: 'API & Integrations', desc: 'ERP, payment gateways, CRM, healthcare data (FHIR/HL7) — we build robust, versioned integration layers.', kpi: 'Avg 3 integrations per project', icon: 'M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z' },
  { title: 'Support & DevOps (SLA)', desc: 'Managed infrastructure, 24/7 on-call rotation, incident response SLAs, and continuous performance monitoring.', kpi: '99.9%+ uptime SLA', icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' },
]

// ─── Industries ─────────────────────────
const industries = [
  { icon: '🏦', name: 'Finance & Fintech', desc: 'Risk engines, payment infrastructure, lending platforms, wealth management dashboards, regulatory reporting.' },
  { icon: '🏥', name: 'Healthcare & HealthTech', desc: 'EHR integrations (FHIR/HL7), patient portals, clinical decision support, HIPAA-compliant data pipelines.' },
  { icon: '🛒', name: 'SaaS & Marketplaces', desc: 'Multi-tenant platforms, billing engines, seller/buyer dashboards, recommendation engines, logistics APIs.' },
  { icon: '🏢', name: 'Enterprise IT', desc: 'Legacy modernization, ERP/CRM integrations, internal tooling, data warehouses, SSO & identity infrastructure.' },
  { icon: '🌐', name: 'Industry & Manufacturing', desc: 'IoT data ingestion, real-time dashboards, predictive maintenance, supply chain visibility platforms.' },
]

const positioningPoints = [
  {
    title: 'We scope before we price — always',
    desc: 'Every engagement begins with a structured discovery. This protects you from blown budgets and protects us from scope creep.',
    icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2'
  },
  {
    title: 'Senior-only delivery — no outsourcing',
    desc: 'Your project is delivered by the same engineers you meet on the scoping call. No bait-and-switch with junior staff.',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0'
  },
  {
    title: 'You own everything — 100% IP transfer',
    desc: 'Code, infrastructure configs, data models, documentation — fully transferred on final milestone payment. No hostage code.',
    icon: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z'
  },
  {
    title: 'Fixed-scope or T\u0026M — your choice',
    desc: 'For well-scoped products: fixed price with milestone billing. For evolving requirements: transparent time-and-material with fortnightly demos.',
    icon: 'M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z'
  },
]

// ─── Engagement Models ──────────────────
const engagementModels = [
  {
    name: 'Discovery + Fixed Scope',
    sub: '4–8 week paid discovery → fixed price build',
    range: 'Most Predictable',
    features: [
      'Paid discovery (₹1.5L–₹4L) credited if you proceed',
      'Fixed price after requirements are frozen',
      'Milestone payments & acceptance tests',
      'Ideal for well-defined products',
    ],
  },
  {
    name: 'Time & Material',
    sub: 'Sprint-by-sprint cadence, billed fortnightly',
    range: 'Most Flexible',
    features: [
      '2-week sprint cycles with demos',
      'Scope adjustable between sprints',
      'Transparent hours tracking',
      'Ideal for evolving requirements',
    ],
  },
  {
    name: 'Dedicated Team',
    sub: 'Monthly retainer, full-stack pod',
    range: 'Most Scalable',
    features: [
      'Senior 3-5 engineer embedded team',
      'Monthly billing, ramp up/down',
      'SLA & on-call included',
      'Ideal for product companies',
    ],
  },
]

const pricingTiers = [
  { label: 'MVP / PoC', inr: '₹8L – ₹25L', usd: '~$10k – $30k', desc: 'Core user flows, single integration, 3–4 month build. Ideal for validating a product idea.' },
  { label: 'Mid-size Product', inr: '₹25L – ₹1.2Cr', usd: '~$30k – $150k', desc: 'Multi-module platform, 3–5 integrations, admin panel, 4–8 months.' },
  { label: 'Enterprise Platform', inr: '₹1.2Cr+', usd: '$150k+', desc: 'Regulated environment, high availability, multiple teams. Estimate after paid discovery.' },
]

// ─── Process Steps ──────────────────────
const processSteps = [
  { title: 'Quick Call', duration: '30 min', desc: 'Free scoping call to check fit, ballpark budget, and timeline. No pitch — just honest assessment.' },
  { title: 'Paid Discovery', duration: '2–6 weeks', desc: 'Requirements, prototypes, architecture decisions, risk analysis, and measurable success metrics. Output: detailed SOW.' },
  { title: 'Roadmap & Contract', duration: '1 week', desc: 'Milestone plan, acceptance criteria, payment schedule, IP assignment, NDA, and MSA signing.' },
  { title: 'Sprint Delivery', duration: '2-week cadence', desc: 'Iterative builds with bi-weekly demos. You see working software every fortnight — not a black box.' },
  { title: 'QA, Compliance & Launch', duration: '2–4 weeks', desc: 'Security review, performance benchmarking, compliance checks (HIPAA/SOC2 if required), staging → production.' },
  { title: 'Operate & Improve', duration: 'Ongoing', desc: 'SLA monitoring, incident response, monthly retainer or break-fix support. Optional dedicated ops team.' },
]

// ─── Trust Block ────────────────────────
const trustItems = [
  { title: 'NDA Before Discovery', desc: 'We sign an NDA before any non-public discussion. Tick the box in the intake form.', icon: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Full IP Assignment', desc: 'You own all code & IP upon final payment. We may display the project in our portfolio after your approval.', icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z' },
  { title: 'Encrypted Data Handling', desc: 'Data encrypted at rest & in transit. Optional SOC2 readiness, HIPAA or ISO 27001 compliance scoping.', icon: 'M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z' },
  { title: 'SLA & Incident Response', desc: 'P0/P1 incidents acknowledged within 1 hour. Resolution SLAs defined in contract. Monthly uptime reports.', icon: 'M13 10V3L4 14h7v7l9-11h-7z' },
]

// ─── Case Studies ───────────────────────
const caseStudies = [
  {
    industry: 'Fintech',
    title: 'Real-Time Payment Risk Engine',
    problem: 'Legacy risk system processed 200 TPS, causing ₹40L+ daily fraud losses.',
    solution: 'Event-driven microservices with Kafka, custom ML scoring model, Redis hot-path cache.',
    outcome: '12× throughput (2,400 TPS), fraud losses down 84%',
    stack: ['Node.js', 'Kafka', 'Redis', 'PostgreSQL', 'AWS'],
  },
  {
    industry: 'Healthcare',
    title: 'FHIR-Compliant Patient Portal',
    problem: 'Siloed EHR systems meant clinicians spent 2+ hours/day on manual data entry.',
    solution: 'FHIR R4 integration layer across 3 EHRs, role-based patient portal, HIPAA-compliant audit logs.',
    outcome: 'Manual data entry reduced by 73%, 40-patient pilot → 8,000 in 6 months',
    stack: ['Python', 'FHIR R4', 'React', 'PostgreSQL', 'Azure'],
  },
  {
    industry: 'Marketplace',
    title: 'Multi-Vendor Logistics Platform',
    problem: 'Manual order routing caused 18% SLA misses and ₹15L/month in penalties.',
    solution: 'Rule-based + ML hybrid routing engine, real-time tracking, carrier API integrations.',
    outcome: 'SLA miss rate dropped to 1.2%, ₹12L/month savings',
    stack: ['Go', 'gRPC', 'React', 'MongoDB', 'GCP'],
  },
]

// ─── Team ───────────────────────────────
const teamMembers = [
  { name: 'Karan Mehta', initials: 'KM', role: 'Founding Engineer & Architect', skills: ['System Design', 'Go', 'AWS'] },
  { name: 'Nisha Patel', initials: 'NP', role: 'Product & Delivery Lead', skills: ['Agile', 'Roadmapping', 'Fintech'] },
  { name: 'Arjun Sharma', initials: 'AS', role: 'ML / Data Engineering Lead', skills: ['PyTorch', 'MLOps', 'Spark'] },
  { name: 'Priya Verma', initials: 'PV', role: 'Full-Stack Lead', skills: ['React', 'Node', 'PostgreSQL'] },
  { name: 'Ravi Ghosh', initials: 'RG', role: 'Healthcare & Compliance Expert', skills: ['FHIR', 'HIPAA', 'HL7'] },
  { name: 'Sana Iyer', initials: 'SI', role: 'DevOps & Security Lead', skills: ['Kubernetes', 'Terraform', 'SOC2'] },
]

const certifications = [
  'AWS Solutions Architect',
  'Google Cloud Professional',
  'Azure AI Engineer',
  'HIPAA Compliance',
  'ISO 27001 Aligned',
  'SOC2 Readiness',
]

// ─── FAQ ────────────────────────────────
const faqs = [
  { q: 'What is paid discovery and why is it non-refundable?', a: 'Discovery is a 2–6 week engagement where we deep-dive into requirements, architecture, risks, and build a full SOW. It costs ₹1.5L–₹4L. If you proceed with build, the discovery fee is credited. It is non-refundable because it is real engineering work — not a sales call.' },
  { q: 'What does a typical timeline look like?', a: 'MVP: 3–4 months. Mid-size product: 5–8 months. Enterprise platform: 9–18 months. Timeline depends on integrations, compliance requirements, and scope changes. We define milestones upfront so there are no surprises.' },
  { q: 'Who manages infrastructure and hosting?', a: 'By default, infrastructure is set up on your cloud account (AWS, GCP, or Azure) — you own it. We manage it under our DevOps retainer. You can always take it in-house. We use Terraform for IaC so handover is clean.' },
  { q: 'How are change requests handled?', a: 'Under fixed-scope contracts, changes go through formal change control (scoped, agreed, priced). Under T&M, new items are added to the sprint backlog with your approval. We never gold-plate without sign-off.' },
  { q: 'Do you offer a support SLA after launch?', a: 'Yes. P0 (system down) acknowledged within 1 hour, P1 within 4 hours, P2 within 1 business day. SLA tiers and resolution targets are defined in the MSA before project start.' },
  { q: 'What happens if we need to cancel mid-project?', a: 'Under T&M, 30-day written notice with payment for all work completed. Under fixed scope, completed milestones are billed. We provide full code handover and documentation regardless.' },
  { q: 'Do you work with co-founder or early-stage teams?', a: 'Yes — if the project is substantial (₹8L+) and technically non-trivial. We are not a design agency. If you need a quick landing page or MVP in 2 weeks for under ₹3L, we\'ll happily point you to better options.' },
]

// ─── Modal ──────────────────────────────
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

const submitForm = () => {
  // In production: call your API endpoint
  formSucceeded.value = true
}

const scrollTo = (selector: string) => {
  if (import.meta.client) {
    document.querySelector(selector)?.scrollIntoView({ behavior: 'smooth' })
  }
}
</script>

<style scoped>
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: -1;
}
</style>
