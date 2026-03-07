<template>
  <section id="services" class="py-10 sm:py-20 bg-gradient-to-b from-base-100 to-base-200">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span class="text-sm font-semibold text-primary">Our Services</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black">
          What We <span class="text-primary">Offer</span>
        </h2>
        <p class="text-lg text-base-content/60 font-light">
          Comprehensive IT solutions to accelerate your digital transformation journey
        </p>
      </div>

      <!-- Services Grid -->
      <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        <NuxtLink 
          v-for="service in services" 
          :key="service.title"
          :to="service.link"
          class="group relative card bg-base-100 border border-base-content/8 overflow-hidden
                 hover:border-primary/40 transition-all duration-500 hover:-translate-y-3 
                 hover:shadow-xl hover:shadow-primary/15 cursor-pointer"
        >
          <!-- Issue 3: Shining hover effect — animated gradient sweep on the card -->
          <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                      bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"></div>
          <!-- Shine sweep — moves from left to right on hover -->
          <div class="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out
                      bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none"></div>

          <div class="card-body p-6 relative z-10">
            <!-- Icon with animated background -->
            <div class="w-14 h-14 rounded-xl flex items-center justify-center mb-4
                        bg-primary/10 group-hover:bg-primary/20 transition-all duration-500">
              <span class="text-3xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 inline-block">
                {{ service.emoji }}
              </span>
            </div>
            
            <!-- Title -->
            <h3 class="text-lg font-bold text-base-content group-hover:text-primary transition-colors duration-300">
              {{ service.title }}
            </h3>
            
            <!-- Description -->
            <p class="text-base-content/65 text-sm leading-relaxed flex-grow mt-1">
              {{ service.description }}
            </p>

            <!-- Features -->
            <ul class="mt-4 space-y-1.5">
              <li 
                v-for="feature in service.features.slice(0, 3)" 
                :key="feature"
                class="flex items-center gap-2 text-xs text-base-content/70"
              >
                <svg class="w-3.5 h-3.5 text-success flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                </svg>
                <span>{{ feature }}</span>
              </li>
            </ul>
            
            <!-- Issue 3: Read More button — highlights more on hover with background fill -->
            <div class="mt-5 pt-4 border-t border-base-content/8">
              <span class="inline-flex items-center gap-2 text-sm font-bold text-primary
                           px-3 py-1.5 rounded-lg
                           group-hover:bg-primary group-hover:text-primary-content
                           transition-all duration-300">
                Read More
                <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </span>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Service {
  emoji: string;
  title: string;
  description: string;
  features: string[];
  link: string;
}

// Issue 3: "Dedicated Teams" renamed to "Dedicated Developers" as per client request
// Issue 9: Services in correct order: Website Dev → App Dev → Custom Software → Dedicated Developers → AI/ML → Cyber Security → Cloud & DevOps → IT Consulting
const services = ref<Service[]>([
  {
    emoji: "🌐",
    title: "Web Development",
    description: "Modern, responsive websites and web applications built for performance",
    features: [
      "Responsive & mobile-friendly",
      "Modern UI/UX design",
      "React / Vue / Next.js",
    ],
    link: "/services/website-development"
  },
  {
    emoji: "📱",
    title: "App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: [
      "Android & iOS apps",
      "Flutter & React Native",
      "Scalable architecture",
    ],
    link: "/services/app-development"
  },
  {
    emoji: "💻",
    title: "Custom Software",
    description: "Tailored software solutions designed for your unique business needs",
    features: [
      "Business-specific solutions",
      "Scalable architecture",
      "API integrations",
    ],
    link: "/services/custom-software"
  },
  {
    emoji: "👨‍💻",
    // Issue 3: Changed from "Dedicated Teams" to "Dedicated Developers"
    title: "Dedicated Developers",
    description: "Hire dedicated developers and teams for your projects",
    features: [
      "Full-time developers",
      "Flexible hiring models",
      "Multiple tech stacks",
    ],
    link: "/services/dedicated-developers"
  },
  {
    emoji: "🤖",
    title: "AI & ML",
    description: "Intelligent solutions powered by artificial intelligence and ML",
    features: [
      "Predictive analytics",
      "Chatbots & automation",
      "Computer vision",
    ],
    link: "/services/ai-ml"
  },
  {
    emoji: "🛡️",
    title: "Cyber Security",
    description: "Protect your digital assets with comprehensive security solutions",
    features: [
      "Security testing",
      "Penetration testing",
      "Threat monitoring",
    ],
    link: "/services/cyber-security"
  },
  {
    emoji: "☁️",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and DevOps solutions for scalability",
    features: [
      "AWS, Azure & GCP",
      "CI/CD pipelines",
      "High availability",
    ],
    link: "/services/cloud-and-devops"
  }
])
</script>
