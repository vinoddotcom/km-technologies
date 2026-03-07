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
            <div class="flex animate-marquee hover:[animation-play-state:paused]">
              <div class="flex gap-4 pr-4">
                <!-- Issue 4: Improved pill — vertical layout, bigger icon, hover lift + shadow -->
                <div 
                  v-for="(tech, index) in [...category.technologies, ...category.technologies]" 
                  :key="`${category.name}-${tech.name}-${index}`"
                  class="flex flex-col items-center gap-2 px-5 py-4 rounded-2xl bg-base-100
                         border border-base-content/8 hover:border-primary/40
                         hover:shadow-md hover:shadow-primary/10
                         transition-all duration-300 whitespace-nowrap group
                         hover:-translate-y-1"
                >
                  <span class="text-2xl group-hover:scale-110 transition-transform duration-300">{{ tech.icon }}</span>
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
      { name: "React.js", icon: "⚛️" },
      { name: "Vue.js", icon: "💚" },
      { name: "Angular", icon: "🅰️" },
      { name: "Next.js", icon: "▲" },
      { name: "Nuxt.js", icon: "💚" },
      { name: "TypeScript", icon: "📘" },
      { name: "Tailwind CSS", icon: "🎨" },
    ]
  },
  {
    name: "Backend",
    technologies: [
      { name: "Node.js", icon: "💚" },
      { name: "Python", icon: "🐍" },
      { name: "Java", icon: "☕" },
      { name: "Django", icon: "🎸" },
      { name: "Spring Boot", icon: "🍃" },
      { name: "Flask", icon: "🧪" },
      { name: "Express.js", icon: "🚀" },
    ]
  },
  {
    name: "Mobile & Database",
    technologies: [
      { name: "Flutter", icon: "💙" },
      { name: "React Native", icon: "📱" },
      { name: "Swift", icon: "🍎" },
      { name: "Kotlin", icon: "🤖" },
      { name: "PostgreSQL", icon: "🐘" },
      { name: "MongoDB", icon: "🍃" },
      { name: "MySQL", icon: "🐬" },
      { name: "Firebase", icon: "🔥" },
    ]
  },
  {
    name: "Cloud & DevOps",
    technologies: [
      { name: "AWS", icon: "☁️" },
      { name: "Azure", icon: "🔷" },
      { name: "Google Cloud", icon: "🌐" },
      { name: "Docker", icon: "🐳" },
      { name: "Kubernetes", icon: "⛵" },
      { name: "Jenkins", icon: "🔧" },
      { name: "GitHub Actions", icon: "🐙" },
    ]
  },
  {
    name: "AI/ML & Security",
    technologies: [
      { name: "TensorFlow", icon: "🧠" },
      { name: "PyTorch", icon: "🔥" },
      { name: "OpenCV", icon: "👁️" },
      { name: "Scikit-learn", icon: "📊" },
      { name: "Kali Linux", icon: "🐧" },
      { name: "Burp Suite", icon: "🔐" },
      { name: "Metasploit", icon: "🛡️" },
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
