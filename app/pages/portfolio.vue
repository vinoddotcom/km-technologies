<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

// Fetch projects
const { data: projects, pending } = useFetch('/api/projects')

// Filter State
const selectedIndustry = ref(route.query.industry || 'All')
const industries = ['All', 'Fintech', 'Healthcare', 'Marketplaces', 'SaaS', 'Retail/IoT']

// Watch for filter changes to update URL for shareability
watch(selectedIndustry, (newVal) => {
  router.push({
    query: {
      ...route.query,
      industry: newVal === 'All' ? undefined : newVal
    }
  })
})

// Filtered Projects
const filteredProjects = computed(() => {
  if (!projects.value) return []
  if (selectedIndustry.value === 'All') return projects.value
  return projects.value.filter((p: any) => p.industry === selectedIndustry.value)
})

// Stats calculation
const avgTime = computed(() => {
  if (!filteredProjects.value.length) return '0'
  const total = filteredProjects.value.reduce((acc, p) => acc + p.timeline_months, 0)
  return Math.round(total / filteredProjects.value.length)
})

// Modal State
const selectedProject = ref<any>(null)
const projectModal = ref<HTMLDialogElement | null>(null)

const openProject = (project: any) => {
  selectedProject.value = project
  projectModal.value?.showModal()
}

// Contact Modal
const contactModal = ref<HTMLDialogElement | null>(null)
const openContact = () => {
  contactModal.value?.showModal()
}

// Meta
useHead({
  title: 'Portfolio — Custom Software, AI & Security',
  meta: [
    { name: 'description', content: 'Showcase high-impact, measurable work that proves business outcomes, technical depth, and repeatable delivery.' }
  ]
})
</script>

<template>
  <main class="min-h-screen bg-base-100 text-base-content selection:bg-primary/30 antialiased">
    <!-- ═══════════════════════════════════
         1. HERO
    ════════════════════════════════════ -->
    <section class="relative bg-gradient-to-br from-base-100 via-base-200 to-base-100 pt-16 lg:pt-24 pb-16 lg:pb-24 overflow-hidden border-b border-base-200">
      <div class="absolute inset-0 opacity-[0.04]">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(59,130,246,0.6),transparent_50%),radial-gradient(circle_at_75%_75%,rgba(99,102,241,0.4),transparent_50%)]"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-6 opacity-60">
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>
            <li>Portfolio</li>
          </ul>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <!-- Text Content -->
          <div class="max-w-2xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8">
              <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-semibold text-primary">Proven Case Studies</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-base-content leading-tight mb-6">
              Software that moves people and profit — <span class="text-base-content/50 block mt-2">validated by results.</span>
            </h1>
            <p class="text-xl text-base-content/70 mb-10 leading-relaxed max-w-xl">
              Selected projects across fintech, healthcare, marketplaces and enterprise IT. Each case shows the business problem, architecture, measurable outcome and the delivery model.
            </p>
            <div class="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <button @click="openContact" class="btn btn-primary btn-lg px-8 shadow-lg hover:shadow-xl hover:scale-105 transition-all group">
                <span>Request Project Brief</span>
                <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </button>
              <a href="#projects" class="btn btn-outline btn-lg px-8 border-base-content/20 hover:bg-base-200">
                See ROI examples
              </a>
            </div>
            <div class="mt-8 flex items-center gap-3 text-sm text-base-content/60 font-medium pb-8 lg:pb-0">
              <svg class="w-4 h-4 text-success shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <span>We sign an NDA before any non-public discussion • You own the IP • SOC2 & HIPAA readiness</span>
            </div>
          </div>
          
          <!-- High-Level CSS Visual Content -->
          <div class="relative hidden lg:block perspective-[1200px] h-[450px] w-full mt-10">
            <!-- Glowing background blob -->
            <div class="absolute inset-x-0 bottom-0 top-10 bg-gradient-to-tr from-primary/20 via-secondary/10 to-accent/20 blur-3xl opacity-60 rounded-full animate-pulse"></div>
            
            <div class="relative z-10 w-full h-full transform-gpu rotate-y-[-15deg] rotate-x-[10deg] hover:rotate-y-[0deg] hover:rotate-x-[0deg] transition-transform duration-1000 ease-out">
              
              <!-- Back Dashboard Frame (Darker/Base-200) -->
              <div class="absolute top-4 right-0 w-80 h-64 bg-base-200 border border-base-content/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col translate-z-[-60px] opacity-90 backdrop-blur-md">
                <div class="h-6 border-b border-base-content/10 bg-base-300 flex items-center px-4 gap-1.5 shadow-sm">
                  <div class="w-2 h-2 rounded-full bg-error/80"></div>
                  <div class="w-2 h-2 rounded-full bg-warning/80"></div>
                  <div class="w-2 h-2 rounded-full bg-success/80"></div>
                </div>
                <div class="p-5 flex-1 flex flex-col gap-4">
                  <div class="flex justify-between items-center mb-2">
                    <div class="h-3 w-1/3 bg-base-content/10 rounded-full"></div>
                    <div class="h-3 w-8 bg-base-content/5 rounded-full"></div>
                  </div>
                  <div class="flex-1 flex items-end justify-between gap-2.5">
                    <div class="w-full bg-primary/20 rounded-t-sm h-[30%]"></div>
                    <div class="w-full bg-primary/30 rounded-t-sm h-[60%] hover:h-[65%] transition-all cursor-pointer"></div>
                    <div class="w-full bg-primary/40 rounded-t-sm h-[40%]"></div>
                    <div class="w-full bg-primary/70 rounded-t-sm h-[85%]"></div>
                    <div class="w-full bg-primary/30 rounded-t-sm h-[75%]"></div>
                    <div class="w-full bg-primary/20 rounded-t-sm h-[45%]"></div>
                  </div>
                </div>
              </div>

              <!-- Front Main Dashboard Frame (Base-100) -->
              <div class="absolute top-16 right-24 w-80 h-72 bg-base-100/95 border border-base-content/10 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] overflow-hidden flex flex-col translate-z-[40px] backdrop-blur-xl">
                <div class="p-6 flex flex-col h-full">
                  <div class="flex justify-between items-start mb-6">
                    <div>
                      <div class="text-[10px] text-base-content/50 font-bold tracking-widest mb-1.5">REVENUE LIFT</div>
                      <div class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">+34.8%</div>
                    </div>
                    <div class="w-10 h-10 rounded-xl bg-success/10 flex items-center justify-center text-success shadow-inner shadow-success/20">
                      <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                    </div>
                  </div>
                  
                  <div class="space-y-5">
                    <div>
                      <div class="flex justify-between text-[11px] mb-1.5 font-medium text-base-content/70"><span>API Gateway</span> <span>99.99%</span></div>
                      <div class="w-full bg-base-200 rounded-full h-1.5 overflow-hidden"><div class="bg-success h-full rounded-full w-[99%]"></div></div>
                    </div>
                    <div>
                      <div class="flex justify-between text-[11px] mb-1.5 font-medium text-base-content/70"><span>Database Auto-scaling</span> <span>Active</span></div>
                      <div class="w-full bg-base-200 rounded-full h-1.5 overflow-hidden"><div class="bg-primary h-full rounded-full w-[65%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div></div>
                    </div>
                    <div>
                      <div class="flex justify-between text-[11px] mb-1.5 font-medium text-base-content/70"><span>Fraud Inference</span> <span>&lt;4ms</span></div>
                      <div class="w-full bg-base-200 rounded-full h-1.5 overflow-hidden"><div class="bg-accent h-full rounded-full w-[85%]"></div></div>
                    </div>
                  </div>

                  <div class="mt-auto pt-5 border-t border-base-content/5 flex items-center justify-between">
                    <div class="h-2 w-24 bg-base-content/10 rounded-full"></div>
                    <div class="w-5 h-5 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                  </div>
                </div>
              </div>

              <!-- Minimal Floating Badge -->
              <div class="absolute top-52 right-[-10px] bg-base-100 border border-base-content/10 px-4 py-3 rounded-2xl shadow-xl translate-z-[100px] flex items-center gap-3 animate-[bounce_3s_infinite] shadow-primary/10">
                <div class="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary relative">
                  <div class="absolute inset-0 bg-primary/20 rounded-full animate-ping"></div>
                  <svg class="w-4 h-4 relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div>
                  <div class="text-[9px] tracking-wider text-base-content/50 font-bold uppercase">System Status</div>
                  <div class="text-xs font-black text-base-content">All systems operational</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filters & Quick Stats -->
    <section id="projects" class="sticky top-0 z-40 bg-base-100/90 backdrop-blur-md border-b border-base-200 shadow-sm">
      <div class="container mx-auto px-6 max-w-7xl py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <!-- Filters -->
        <div class="w-full md:w-auto overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
          <div class="flex gap-2">
            <button 
              v-for="ind in industries" 
              :key="ind"
              @click="selectedIndustry = ind"
              class="btn btn-sm rounded-full transition-all duration-200"
              :class="selectedIndustry === ind ? 'btn-primary' : 'btn-ghost border border-base-300 text-base-content/70 hover:bg-base-200'"
            >
              {{ ind }}
            </button>
          </div>
        </div>
        
        <!-- Stats -->
        <div class="hidden lg:flex items-center gap-6 text-sm">
          <div class="flex flex-col">
            <span class="text-base-content/50 text-xs font-semibold uppercase tracking-wider">Projects</span>
            <span class="font-medium text-base-content">{{ filteredProjects.length }} shown</span>
          </div>
          <div class="w-px h-8 bg-base-200"></div>
          <div class="flex flex-col">
            <span class="text-base-content/50 text-xs font-semibold uppercase tracking-wider">Avg Timeline</span>
            <span class="font-medium text-base-content">{{ avgTime }} months</span>
          </div>
          <div class="w-px h-8 bg-base-200"></div>
          <div class="flex flex-col">
            <span class="text-base-content/50 text-xs font-semibold uppercase tracking-wider">Security</span>
            <span class="font-medium text-base-content">Enterprise Grade</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Project Grid -->
    <section class="py-20 bg-base-100">
      <div class="container mx-auto px-6 max-w-7xl">
        
        <div v-if="pending" class="flex justify-center py-20">
          <span class="loading loading-spinner loading-lg text-primary"></span>
        </div>
        
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article 
            v-for="project in filteredProjects" 
            :key="project.id"
            class="group relative flex flex-col bg-base-100 rounded-2xl border border-base-200 overflow-hidden hover:shadow-xl hover:shadow-base-content/5 hover:border-base-300 transition-all duration-300 cursor-pointer"
            @click="openProject(project)"
            tabindex="0"
            @keydown.enter="openProject(project)"
            aria-label="View project details"
          >
            <!-- Card Image Area (placeholder for now) -->
            <div class="aspect-[16/9] bg-base-200 relative overflow-hidden flex items-center justify-center p-6">
              <div class="absolute inset-0 bg-gradient-to-t from-base-100 to-transparent z-10 opacity-60"></div>
              
              <!-- Abstract Data/Architecture Graphic instead of missing image -->
              <div class="w-full h-full relative z-0 flex items-center justify-center translate-y-4 group-hover:-translate-y-2 transition-transform duration-700 ease-in-out opacity-40 group-hover:opacity-80">
                <div class="absolute inset-0 border border-base-content/10 bg-base-100/50 backdrop-blur-sm rounded-xl shadow-sm"></div>
                <div class="w-3/4 h-1/2 border-t border-b border-primary/20 flex flex-col justify-around py-2 relative z-10">
                  <div class="h-1 bg-primary/20 w-1/3 rounded-full"></div>
                  <div class="h-1 bg-success/20 w-3/4 rounded-full"></div>
                  <div class="h-1 bg-warning/20 w-1/2 rounded-full"></div>
                </div>
              </div>
              
              <!-- Tags floating on top -->
              <div class="absolute top-4 left-4 z-20 flex gap-2">
                <span class="badge badge-sm border-base-content/10 bg-base-100/80 backdrop-blur text-base-content shadow-sm">{{ project.industry }}</span>
                <span class="badge badge-sm border-base-content/10 bg-base-100/80 backdrop-blur text-base-content font-medium opacity-80 shadow-sm">{{ project.budget_band }}</span>
              </div>
            </div>

            <!-- Card Content -->
            <div class="p-6 flex flex-col flex-grow">
              <h3 class="text-xl font-semibold text-base-content mb-2 group-hover:text-primary transition-colors">
                {{ project.title }}
              </h3>
              
              <div class="mb-4 inline-flex items-center gap-2 text-sm font-medium text-success bg-success/10 px-3 py-1 rounded-md w-fit">
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                {{ project.outcome }}
              </div>
              
              <p class="text-base-content/70 text-sm mb-6 line-clamp-2 flex-grow">
                {{ project.summary }}
              </p>
              
              <!-- Tech Stack Badges -->
              <div class="flex flex-wrap gap-2 mt-auto pt-4 border-t border-base-200">
                <span v-for="tech in project.tech_stack.slice(0,4)" :key="tech" class="text-xs font-mono text-base-content/60 bg-base-200 px-2 py-1 rounded">
                  {{ tech }}
                </span>
                <span v-if="project.tech_stack.length > 4" class="text-xs font-mono text-base-content/60 bg-base-200 px-2 py-1 rounded">
                  +{{ project.tech_stack.length - 4 }}
                </span>
              </div>
            </div>
          </article>
        </div>

        <!-- Empty State -->
        <div v-if="!pending && filteredProjects.length === 0" class="text-center py-20">
          <p class="text-base-content/50">No projects found for the selected filters.</p>
          <button @click="selectedIndustry = 'All'" class="btn btn-ghost mt-4">Clear Filters</button>
        </div>
      </div>
    </section>

    <!-- Trust & Compliance Rails -->
    <section class="py-16 bg-base-200 border-t border-base-300">
      <div class="container mx-auto px-6 max-w-7xl text-center">
        <p class="text-sm font-semibold uppercase tracking-wider text-base-content/50 mb-8">Audited, Compliant, & Secure By Design</p>
        <div class="flex flex-wrap justify-center gap-8 md:gap-16 items-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <!-- Placeholder logos for certifications -->
          <div class="text-lg font-bold">SOC 2 Type II <span class="text-xs font-normal align-top">Ready</span></div>
          <div class="text-lg font-bold">HIPAA <span class="text-xs font-normal align-top">Compliant</span></div>
          <div class="text-lg font-bold">PCI-DSS <span class="text-xs font-normal align-top">Architecture</span></div>
          <div class="text-lg font-bold">ISO 27001 <span class="text-xs font-normal align-top">Aligned</span></div>
        </div>
        <p class="mt-8 text-xs text-base-content/40 max-w-2xl mx-auto">
          We execute a unilateral NDA before sharing non-public architecture materials. Intellectual property ownership is assigned completely to you upon final payment. All infrastructure is provisioned strictly within your cloud accounts.
        </p>
      </div>
    </section>

    <!-- Deep Dive Modal -->
    <section id="contact" class="py-24 bg-base-100 relative overflow-hidden border-t border-base-200">
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
              @click="openContact"
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

    <dialog id="project-modal" ref="projectModal" class="modal modal-bottom sm:modal-middle">
      <div v-if="selectedProject" class="modal-box max-w-4xl p-0 bg-base-100 overflow-hidden shadow-2xl relative">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4 z-50 bg-base-100/50 backdrop-blur">✕</button>
        </form>
        
        <!-- Modal Content -->
        <div class="max-h-[85vh] overflow-y-auto w-full">
          <!-- Header Bar -->
          <div class="bg-base-200 p-8 pt-12 pb-8 border-b border-base-300">
            <div class="flex items-center gap-3 mb-4">
              <span class="badge badge-outline border-base-content/20 text-base-content/70">{{ selectedProject.industry }}</span>
              <span class="text-base-content/40 text-sm">•</span>
              <span class="text-sm font-medium text-base-content/60">{{ selectedProject.timeline_months }} Months Delivery</span>
            </div>
            <h2 class="text-3xl font-bold text-base-content mb-4">{{ selectedProject.title }}</h2>
            <div class="p-4 bg-success/10 border border-success/20 rounded-xl inline-block">
              <p class="text-success font-semibold flex items-center gap-2">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                Measurable Impact: {{ selectedProject.outcome }}
              </p>
            </div>
          </div>

          <div class="p-8 lg:p-12">
            <!-- Grid Layout for Content -->
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              <!-- Main Content Column -->
              <div class="lg:col-span-2 space-y-10 focus:outline-none">
                
                <section>
                  <h3 class="text-xl font-semibold mb-3">The Problem</h3>
                  <p class="text-base-content/70 leading-relaxed">{{ selectedProject.summary }} We approached this by thoroughly mapping the existing constraints and identifying the primary bottleneck causing revenue leakage.</p>
                </section>

                <section>
                  <h3 class="text-xl font-semibold mb-3">Architecture & Solution</h3>
                  <div class="aspect-video bg-base-200 rounded-xl mb-4 border border-base-300 flex items-center justify-center">
                     <span class="text-base-content/40 font-mono text-sm">[Interactive Architecture Diagram SVG]</span>
                  </div>
                  <p class="text-base-content/70 leading-relaxed mb-4">
                    The solution leverages a modern, event-driven microservices approach to ensure scalability and isolation of failure domains.
                  </p>
                  <ul class="list-disc pl-5 space-y-2 text-base-content/70">
                    <li v-for="sec in selectedProject.security" :key="sec">{{ sec }}</li>
                  </ul>
                </section>

                <section v-if="selectedProject.testimonial" class="bg-base-200/50 rounded-2xl p-6 border border-base-200 relative overflow-hidden">
                  <svg class="absolute top-4 left-4 w-10 h-10 text-base-content/5 opacity-50" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
                  <blockquote class="relative z-10 font-medium text-lg leading-relaxed text-base-content mb-4 pl-4 border-l-2 border-primary">
                    "{{ selectedProject.testimonial.quote }}"
                  </blockquote>
                  <div class="flex items-center gap-3 relative z-10 pl-4">
                    <div class="w-10 h-10 bg-base-300 rounded-full flex items-center justify-center text-sm font-bold text-base-content/50">
                      {{ selectedProject.testimonial.name.charAt(0) }}
                    </div>
                    <div>
                      <div class="font-semibold text-sm">{{ selectedProject.testimonial.name }}</div>
                      <div class="text-xs text-base-content/60">{{ selectedProject.testimonial.title }}</div>
                    </div>
                  </div>
                </section>

              </div>

              <!-- Sidebar Column -->
              <div class="space-y-8">
                
                <div class="bg-base-100 border border-base-200 shadow-sm rounded-2xl p-6">
                  <h4 class="font-semibold mb-4 text-sm uppercase tracking-wider text-base-content/50 border-b border-base-200 pb-2">At a Glance</h4>
                  
                  <div class="space-y-4 text-sm">
                    <div>
                      <div class="text-base-content/50 mb-1">Team Size</div>
                      <div class="font-medium">{{ selectedProject.team_size }} Dedicated Experts</div>
                    </div>
                    <div>
                      <div class="text-base-content/50 mb-1">Budget Band</div>
                      <div class="font-medium">{{ selectedProject.budget_band }}</div>
                    </div>
                    <div>
                      <div class="text-base-content/50 mb-1">Timeline</div>
                      <div class="font-medium">{{ selectedProject.timeline_months }} Months to Production</div>
                    </div>
                  </div>
                </div>

                <div class="p-6 bg-base-200 rounded-2xl">
                  <h4 class="font-semibold mb-3 text-sm uppercase tracking-wider text-base-content/50">Tech Stack</h4>
                  <div class="flex flex-wrap gap-2">
                    <span v-for="tech in selectedProject.tech_stack" :key="tech" class="px-3 py-1 bg-base-100 text-xs font-mono font-medium rounded-md border border-base-300 shadow-sm">
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <div>
                  <button @click="openContact" class="btn btn-primary w-full group">
                    Request Similar Build
                    <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                  </button>
                  <button class="btn btn-outline w-full mt-3">
                    <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Download SOW Sample
                  </button>
                  <p class="text-xs text-base-content/40 text-center mt-3 px-2">
                    Sample Statement of Work and sanitized budget breakdown.
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>

    <!-- Generic Intake Modal -->
    <dialog id="contact-modal" ref="contactModal" class="modal modal-bottom sm:modal-middle">
      <div class="modal-box bg-base-100 border border-base-200">
        <form method="dialog">
          <button class="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">✕</button>
        </form>
        <h3 class="font-bold text-2xl mb-2">Request Project Brief</h3>
        <p class="py-4 text-base-content/70">Fill out a few details to receive a 1-pager + suggested scope within 48 hours for your project. All information is kept strictly confidential.</p>
        
        <form class="space-y-4 mt-2">
          <div class="form-control">
            <label class="label"><span class="label-text font-medium">Work Email</span></label>
            <input type="email" placeholder="you@company.com" class="input input-bordered w-full bg-base-100 focus:border-primary focus:ring-1 focus:ring-primary" required />
          </div>
          <div class="form-control">
            <label class="label"><span class="label-text font-medium">Project Goals / Objective</span></label>
            <textarea placeholder="Briefly describe what you're looking to build or solve..." class="textarea textarea-bordered h-24 bg-base-100 focus:border-primary focus:ring-1 focus:ring-primary" required></textarea>
          </div>
          <div class="form-control">
            <label class="label"><span class="label-text font-medium">Estimated Budget/Size</span></label>
            <select class="select select-bordered w-full bg-base-100 focus:border-primary focus:ring-1 focus:ring-primary">
              <option disabled selected>Select an option</option>
              <option>MVP (₹8L–₹25L)</option>
              <option>Scale (₹25L–₹1.2Cr)</option>
              <option>Enterprise (₹1.2Cr+)</option>
            </select>
          </div>
          <div class="modal-action mt-6">
            <button type="submit" class="btn btn-primary w-full">Request Brief</button>
          </div>
        </form>
      </div>
      <form method="dialog" class="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
    
  </main>
</template>
