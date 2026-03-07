<template>
  <section class="py-20 sm:py-24 bg-base-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span class="text-sm font-semibold text-primary">How We Work</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black">
          Our Development <span class="text-primary">Process</span>
        </h2>
        <p class="text-lg text-base-content/60 font-light">
          A proven methodology that ensures successful project delivery
        </p>
      </div>

      <!-- Process Steps -->
      <div class="max-w-5xl mx-auto">
        <!-- Desktop: Horizontal Timeline -->
        <div class="hidden lg:block">
          <ul class="steps steps-horizontal w-full">
            <li 
              v-for="(step, index) in processSteps" 
              :key="step.title"
              class="step"
              :class="index <= activeStep ? 'step-primary' : ''"
              @mouseenter="activeStep = index"
            >
              <div class="flex flex-col items-center text-center mt-4 group cursor-pointer">
                <div 
                  class="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
                  :class="index <= activeStep ? 'bg-primary/20' : 'bg-base-200'"
                >
                  <span class="text-2xl">{{ step.icon }}</span>
                </div>
                <h3 
                  class="font-bold text-sm transition-colors"
                  :class="index <= activeStep ? 'text-primary' : 'text-base-content'"
                >
                  {{ step.title }}
                </h3>
                <p class="text-xs font-medium text-base-content/60 mt-2 max-w-[150px] mx-auto leading-snug">
                  {{ step.shortDesc }}
                </p>
              </div>
            </li>
          </ul>
        </div>

        <!-- Mobile: Vertical Timeline -->
        <div class="lg:hidden">
          <ul class="timeline timeline-vertical">
            <li v-for="(step, index) in processSteps" :key="step.title">
              <div v-if="index > 0" class="timeline-middle">
                <div class="w-2 h-8 bg-primary/30 rounded-full"></div>
              </div>
              <div 
                class="timeline-start md:text-end mb-10"
                :class="index % 2 === 0 ? 'timeline-start' : 'timeline-end'"
              >
                <div class="card bg-base-200/50 border border-base-content/5 hover:border-primary/20 transition-all">
                  <div class="card-body p-4">
                    <div class="flex items-center gap-3">
                      <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <span class="text-xl">{{ step.icon }}</span>
                      </div>
                      <div>
                        <div class="text-xs text-primary font-semibold">Step {{ index + 1 }}</div>
                        <h3 class="font-bold text-base-content">{{ step.title }}</h3>
                      </div>
                    </div>
                    <p class="text-sm text-base-content/60 mt-2">{{ step.description }}</p>
                  </div>
                </div>
              </div>
              <div class="timeline-middle">
                <div class="w-4 h-4 rounded-full bg-primary"></div>
              </div>
              <hr v-if="index < processSteps.length - 1" class="bg-primary/30" />
            </li>
          </ul>
        </div>

        <!-- Selected Step Description (Desktop) -->
        <div class="hidden lg:block mt-16">
          <div 
            :key="activeStep" 
            class="card bg-gradient-to-br from-base-100 to-base-200 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-base-content/10 max-w-3xl mx-auto transform transition-all duration-500 hover:shadow-primary/20 hover:border-primary/30 animate-[fadeIn_0.4s_ease-out]"
          >
            <div class="card-body p-8 sm:p-10 text-center relative overflow-hidden group">
              <!-- Animated background gradient -->
              <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-secondary/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              
              <div class="relative z-10 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8">
                <div class="flex-shrink-0 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center border border-primary/20 shadow-inner transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  <span class="text-4xl">{{ processSteps[activeStep]?.icon }}</span>
                </div>
                
                <div class="text-center sm:text-left flex-1 max-w-xl">
                  <div class="flex items-center justify-center sm:justify-start gap-3 mb-2">
                    <span class="badge badge-primary badge-sm font-bold tracking-widest uppercase">Step {{ activeStep + 1 }}</span>
                    <h3 class="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                      {{ processSteps[activeStep]?.title }}
                    </h3>
                  </div>
                  <p class="text-lg text-base-content/70 leading-relaxed font-light mt-3">
                    {{ processSteps[activeStep]?.description }}
                  </p>
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
interface ProcessStep {
  icon: string;
  title: string;
  shortDesc: string;
  description: string;
}

const activeStep = ref(0)

const processSteps = ref<ProcessStep[]>([
  {
    icon: "📋",
    title: "Requirement Analysis",
    // Issue 5: 'Understanding needs' → 'In-depth requirement analysis'
    shortDesc: "In-depth requirement analysis",
    description: "We begin by thoroughly understanding your business goals, target audience, and project requirements through detailed discussions and research."
  },
  {
    icon: "🎨",
    title: "UI/UX Design",
    shortDesc: "Creating experience",
    description: "Our design team creates intuitive, visually appealing interfaces that provide exceptional user experiences and align with your brand identity."
  },
  {
    icon: "💻",
    title: "Development",
    // Issue 5: 'Building solution' → 'Agile development execution'
    shortDesc: "Agile development execution",
    description: "Using agile methodologies, our developers build robust, scalable solutions with clean code and best practices."
  },
  {
    icon: "🧪",
    title: "Testing & QA",
    shortDesc: "Ensuring quality",
    description: "Rigorous testing across multiple scenarios ensures your product is bug-free, secure, and performs optimally."
  },
  {
    icon: "🚀",
    title: "Deployment",
    shortDesc: "Going live",
    description: "We handle the complete deployment process, ensuring smooth transition to production with zero downtime."
  },
  {
    icon: "🛠️",
    title: "Support & Maintenance",
    // Issue 5: 'Ongoing care' → 'Sustained value creation'
    shortDesc: "Sustained value creation",
    description: "Our team provides continuous support, regular updates, and maintenance to keep your solution running smoothly."
  },
])
</script>
