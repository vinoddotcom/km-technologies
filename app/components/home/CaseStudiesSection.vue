<template>
  <section id="portfolio" class="py-20 sm:py-24 bg-gradient-to-b from-base-200 to-base-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-warning/10 border border-warning/20">
          <span class="text-sm font-semibold text-warning">Portfolio</span>
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
          v-for="project in projects" 
          :key="project.title"
          class="group card bg-base-100 border border-base-content/5 hover:border-primary/30 overflow-hidden transition-all duration-500 hover:-translate-y-2 hover:shadow-md"
        >
          <!-- Project Image -->
          <figure class="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
            <div class="absolute inset-0 flex items-center justify-center">
              <span class="text-6xl opacity-50 group-hover:scale-125 transition-transform duration-500">
                {{ project.emoji }}
              </span>
            </div>
            <!-- Overlay on hover -->
            <div class="absolute inset-0 bg-gradient-to-t from-base-100/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
              <button class="btn btn-primary btn-sm">
                View Case Study
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </button>
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
              {{ project.description }}
            </p>

            <!-- Tech Stack -->
            <div class="flex flex-wrap gap-1.5 mt-3">
              <span 
                v-for="tech in project.technologies" 
                :key="tech"
                class="px-2 py-0.5 text-xs rounded bg-base-200 text-base-content/70"
              >
                {{ tech }}
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
interface Project {
  emoji: string;
  title: string;
  description: string;
  industry: string;
  technologies: string[];
}

const projects = ref<Project[]>([
  {
    emoji: "🏥",
    title: "HealthCare Plus",
    description: "A comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine features.",
    industry: "Healthcare",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    emoji: "💰",
    title: "FinTrack Pro",
    description: "Mobile banking application with real-time transaction tracking, budgeting tools, and investment analytics.",
    industry: "FinTech",
    technologies: ["Flutter", "Python", "PostgreSQL"]
  },
  {
    emoji: "🛒",
    title: "ShopEase Commerce",
    description: "Full-featured e-commerce platform with AI-powered recommendations and seamless checkout experience.",
    industry: "E-Commerce",
    technologies: ["Next.js", "Django", "Redis"]
  },
  {
    emoji: "📚",
    title: "EduLearn LMS",
    description: "Learning management system with interactive courses, progress tracking, and certification features.",
    industry: "EdTech",
    technologies: ["Vue.js", "Laravel", "MySQL"]
  },
  {
    emoji: "🏢",
    title: "PropManager",
    description: "Real estate management platform for property listings, virtual tours, and tenant management.",
    industry: "Real Estate",
    technologies: ["React Native", "Spring Boot", "AWS"]
  },
  {
    emoji: "🚚",
    title: "LogiTrack",
    description: "Supply chain and logistics management system with real-time tracking and route optimization.",
    industry: "Logistics",
    technologies: ["Angular", "Java", "GCP"]
  },
])

const industryBadgeClass = (industry: string): string => {
  const classes: Record<string, string> = {
    'Healthcare': 'badge-success',
    'FinTech': 'badge-info',
    'E-Commerce': 'badge-warning',
    'EdTech': 'badge-primary',
    'Real Estate': 'badge-secondary',
    'Logistics': 'badge-accent',
  }
  return classes[industry] || 'badge-ghost'
}
</script>
