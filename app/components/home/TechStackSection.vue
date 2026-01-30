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
          <h3 class="text-lg font-bold text-base-content/80 text-center">
            {{ category.name }}
          </h3>
          
          <!-- Marquee Container -->
          <div class="relative overflow-hidden">
            <!-- Gradient overlays -->
            <div class="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-base-200 to-transparent z-10"></div>
            <div class="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-base-200 to-transparent z-10"></div>
            
            <!-- Scrolling content -->
            <div class="flex animate-marquee hover:[animation-play-state:paused]">
              <div class="flex gap-4 pr-4">
                <div 
                  v-for="(tech, index) in [...category.technologies, ...category.technologies]" 
                  :key="`${category.name}-${tech.name}-${index}`"
                  class="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-base-100 border border-base-content/10 hover:border-primary/30 hover:bg-base-100/80 transition-all duration-300 whitespace-nowrap group"
                >
                  <span class="text-lg">{{ tech.icon }}</span>
                  <span class="text-sm font-medium text-base-content/80 group-hover:text-primary transition-colors">
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
