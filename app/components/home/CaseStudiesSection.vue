<template>
  <section id="portfolio" class="py-20 sm:py-24 bg-gradient-to-b from-base-200 to-base-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span class="text-sm font-semibold text-primary">Portfolio</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black">
          Our Work <span class="text-primary">Speaks for Itself</span>
        </h2>
        <p class="text-lg text-base-content/60 font-light">
          Explore some of our recent projects across various industries
        </p>
      </div>

      <!-- Case Studies Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        <div 
          v-for="project in projects?.slice(0, 3)" 
          :key="project.title"
          class="group card bg-base-100 border border-base-content/5 hover:border-primary/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-md"
        >
          <!-- Project Image -->
          <figure class="relative h-48 bg-base-200 overflow-hidden">
            <img v-if="project.images && project.images.length > 0" :src="project.images[0]" :alt="project.title" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" loading="lazy" />
            <div v-else class="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
              <span class="text-4xl opacity-50">📁</span>
            </div>
            
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-base-100/90 via-base-100/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <a v-if="project.link" :href="project.link" target="_blank" rel="noopener noreferrer" class="btn btn-primary btn-sm w-full shadow-lg">
                Visit Website
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </a>
            </div>
          </figure>

          <div class="card-body p-5">
            <!-- Industry Badge -->
            <div class="flex items-center gap-2 mb-2">
              <span 
                class="badge badge-sm"
                :class="industryBadgeClass(project.industry)"
              >
                {{ project.industry }}
              </span>
            </div>

            <!-- Title -->
            <h3 class="text-lg font-bold text-base-content group-hover:text-primary transition-colors">
              {{ project.title }}
            </h3>

            <!-- Description -->
            <p class="text-sm text-base-content/60 line-clamp-2">
              {{ project.summary }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span 
                v-for="tech in project.tech_stack?.slice(0, 3)" 
                :key="tech"
                class="px-2 py-0.5 text-xs rounded bg-base-200 text-base-content/70"
              >
                {{ tech }}
              </span>
              <span v-if="project.tech_stack && project.tech_stack.length > 3" class="px-2 py-0.5 text-xs rounded bg-base-200 text-base-content/70">
                +{{ project.tech_stack.length - 3 }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Button -->
      <div class="text-center mt-12">
        <NuxtLink 
          to="/portfolio" 
          class="btn btn-outline btn-lg px-8 group hover:btn-primary"
        >
          <span>View All Projects</span>
          <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
          </svg>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const { data: projects } = await useFetch('/api/projects?home=true')

const industryBadgeClass = (industry: string): string => {
  const classes: Record<string, string> = {
    'Healthcare': 'badge-success',
    'FinTech': 'badge-info',
    'E-Commerce': 'badge-warning',
    'Enterprise': 'badge-primary',
    'Automotive': 'badge-secondary',
    'Logistics': 'badge-accent',
    'Tourism': 'badge-primary',
    'Lifestyle': 'badge-secondary',
    'Hospitality': 'badge-success'
  }
  return classes[industry] || 'badge-ghost'
}
</script>
