<template>
  <section id="services" class="py-10 sm:py-15 bg-gradient-to-b from-base-100 to-base-200">
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
          class="group card bg-base-100 border border-base-content/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-md cursor-pointer"
        >
          <div class="card-body p-6">
            <!-- Icon -->
            <div class="text-4xl mb-3 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
              {{ service.emoji }}
            </div>
            
            <!-- Title -->
            <h3 class="text-lg font-bold text-base-content group-hover:text-primary transition-colors">
              {{ service.title }}
            </h3>
            
            <!-- Description -->
            <p class="text-base-content/60 text-sm leading-relaxed flex-grow">
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
            
            <!-- Read More -->
            <div class="mt-4 pt-4 border-t border-base-content/5">
              <span class="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                Read More
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

const services = ref<Service[]>([
  {
    emoji: "🌐",
    title: "Web Development",
    description: "Modern, responsive websites and web applications built for performance",
    features: [
      "Responsive & mobile-friendly",
      "Modern UI/UX design",
      "React / Vue / Next.js",
      "SEO-friendly development",
      "High performance & security"
    ],
    link: "/services/website-development"
  },
  {
    emoji: "📱",
    title: "Mobile App Development",
    description: "Native and cross-platform mobile applications for iOS and Android",
    features: [
      "Android & iOS apps",
      "Flutter & React Native",
      "Native app development",
      "App Store support",
      "Scalable architecture"
    ],
    link: "/services/mobile-apps"
  },
  {
    emoji: "💻",
    title: "Custom Software",
    description: "Tailored software solutions designed for your unique business needs",
    features: [
      "Business-specific solutions",
      "Scalable architecture",
      "API integrations",
      "Secure & reliable",
      "Ongoing maintenance"
    ],
    link: "/services/custom-software"
  },
  {
    emoji: "👨‍💻",
    title: "Dedicated Teams",
    description: "Hire dedicated developers and teams for your projects",
    features: [
      "Full-time developers",
      "Flexible hiring models",
      "Scalable team size",
      "Multiple tech stacks",
      "Continuous support"
    ],
    link: "/services/dedicated-developers"
  },
  {
    emoji: "🤖",
    title: "AI / Machine Learning",
    description: "Intelligent solutions powered by artificial intelligence and ML",
    features: [
      "Predictive analytics",
      "Chatbots & automation",
      "Computer vision",
      "NLP applications",
      "Data-driven insights"
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
      "Network security",
      "Data encryption",
      "Threat monitoring"
    ],
    link: "/services/cyber-security"
  },
  {
    emoji: "☁️",
    title: "Cloud & DevOps",
    description: "Cloud infrastructure and DevOps solutions for scalability",
    features: [
      "AWS, Azure & GCP",
      "Cloud migration",
      "CI/CD pipelines",
      "Docker & Kubernetes",
      "High availability"
    ],
    link: "/services/cloud-devops"
  },
  {
    emoji: "🤝",
    title: "IT Consulting",
    description: "Strategic technology consulting to drive your business forward",
    features: [
      "Technology strategy",
      "Digital transformation",
      "System architecture",
      "Cost optimization",
      "Tech support"
    ],
    link: "/services/it-consulting"
  },
])
</script>
