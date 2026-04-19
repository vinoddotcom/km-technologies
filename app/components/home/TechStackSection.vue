<template>
  <section class="pt-10 pb-20 sm:pt-14 sm:pb-24 bg-base-200 overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-accent/10 border border-accent/20">
          <span class="text-sm font-semibold text-accent">Technology Stack</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black">
          Technologies We <span class="text-primary">Expertise</span>
        </h2>
        <p class="text-lg text-base-content/60 font-light">
          We work with the latest technologies to deliver cutting-edge solutions
        </p>
      </div>

      <!-- Tech Categories -->
      <div class="space-y-10 max-w-6xl mx-auto">
        <div 
          v-for="category in techCategories" 
          :key="category.name"
          class="space-y-4"
        >
          <!-- Issue 4: Category heading with accent bar -->
          <div class="flex items-center justify-center gap-3 mb-4">
            <div class="h-px flex-1 max-w-20 bg-base-content/10 rounded"></div>
            <h3 class="text-sm font-bold text-primary uppercase tracking-widest">
              {{ category.name }}
            </h3>
            <div class="h-px flex-1 max-w-20 bg-base-content/10 rounded"></div>
          </div>
          
          <!-- Marquee Container -->
          <div class="relative overflow-hidden">
            <!-- Gradient overlays -->
            <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base-200 to-transparent z-10"></div>
            <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base-200 to-transparent z-10"></div>
            
            <!-- Scrolling content -->
            <div class="flex w-max animate-marquee hover:[animation-play-state:paused]">
              <div class="flex gap-4 pr-4" aria-hidden="true">
                <!-- Issue 4: Improved pill — vertical layout, bigger icon, hover lift + shadow -->
                <div 
                  v-for="(tech, index) in category.technologies" 
                  :key="`first-${category.name}-${tech.name}-${index}`"
                  class="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl bg-base-100
                         border border-base-content/8 hover:border-primary/40
                         hover:shadow-md hover:shadow-primary/10
                         transition-all duration-300 whitespace-nowrap group
                         hover:-translate-y-1"
                >
                  <Icon :name="tech.icon" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  <span class="text-xs font-semibold text-base-content/75 group-hover:text-primary transition-colors">
                    {{ tech.name }}
                  </span>
                </div>
              </div>
              <div class="flex gap-4 pr-4" aria-hidden="true">
                <!-- Duplicate group to create seamless infinite loop -->
                <div 
                  v-for="(tech, index) in category.technologies" 
                  :key="`second-${category.name}-${tech.name}-${index}`"
                  class="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl bg-base-100
                         border border-base-content/8 hover:border-primary/40
                         hover:shadow-md hover:shadow-primary/10
                         transition-all duration-300 whitespace-nowrap group
                         hover:-translate-y-1"
                >
                  <Icon :name="tech.icon" class="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
                  <span class="text-xs font-semibold text-base-content/75 group-hover:text-primary transition-colors">
                    {{ tech.name }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Tech {
  name: string;
  icon: string;
}

interface TechCategory {
  name: string;
  technologies: Tech[];
}

const techCategories = ref<TechCategory[]>([
  {
    name: "Frontend",
    technologies: [
      { name: "React.js", icon: "logos:react" },
      { name: "Vue.js", icon: "logos:vue" },
      { name: "Angular", icon: "logos:angular-icon" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Nuxt.js", icon: "logos:nuxt-icon" },
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Python", icon: "logos:python" },
      { name: "Java", icon: "logos:java" },
      { name: "Django", icon: "vscode-icons:file-type-django" },
      { name: "Spring Boot", icon: "logos:spring-icon" },
      { name: "Flask", icon: "devicon:flask" },
      { name: "Express.js", icon: "skill-icons:expressjs-light" },
    ]
  },
  {
    name: "Mobile & Database",
    technologies: [
      { name: "Flutter", icon: "logos:flutter" },
      { name: "React Native", icon: "logos:react" },
      { name: "Swift", icon: "logos:swift" },
      { name: "Kotlin", icon: "logos:kotlin-icon" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MongoDB", icon: "logos:mongodb-icon" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "Firebase", icon: "logos:firebase" },
    ]
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Azure", icon: "logos:microsoft-azure" },
      { name: "Google Cloud", icon: "logos:google-cloud" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "devicon:githubactions" },
    ]
  },
  {
    name: "AI/ML & Security",
    technologies: [
      { name: "TensorFlow", icon: "logos:tensorflow" },
      { name: "PyTorch", icon: "logos:pytorch-icon" },
      { name: "OpenCV", icon: "logos:opencv" },
      { name: "Scikit-learn", icon: "devicon:scikitlearn" },
      { name: "Kali Linux", icon: "devicon:kalilinux" },
      { name: "AppSec", icon: "carbon:ibm-cloud-security" },
      { name: "Pen Testing", icon: "mdi:shield-bug" },
    ]
  },
])
</script>

<style scoped>
@keyframes marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

.animate-marquee {
  animation: marquee 30s linear infinite;
}
</style>
