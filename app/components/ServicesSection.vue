<template>
  <div class="bg-gradient-to-b from-base-100 via-base-200 to-base-100 py-24 lg:py-32 relative overflow-hidden">
    <!-- Background Patterns -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-[500px] h-[500px] bg-secondary/5 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Section Header -->
      <div 
        class="text-center mb-16 lg:mb-20 transition-all duration-1000"
        :class="headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'"
      >
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-secondary/20 bg-secondary/5 backdrop-blur-sm mb-6">
          <span class="text-xs font-bold tracking-wider uppercase text-secondary">Our Expertise</span>
        </div>
        <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
          <span class="bg-gradient-to-r from-base-content via-primary to-base-content bg-clip-text text-transparent">
            Services That Scale
          </span>
        </h2>
        <p class="text-lg sm:text-xl text-base-content/70 max-w-3xl mx-auto leading-relaxed">
          Scroll down to discover our <span class="font-semibold text-base-content">full-stack capabilities</span> and how we deliver excellence.
        </p>
      </div>
      
      <!-- Services - Vertical Scroll Layout -->
      <div class="space-y-16 lg:space-y-24 max-w-7xl mx-auto">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          :ref="el => { if (el) serviceRefs[index] = el as unknown as HTMLElement }"
          class="relative"
        >
          <!-- Service Card with Alternating Layout -->
          <div 
            :class="[
              'grid lg:grid-cols-2 gap-8 lg:gap-12 items-center transition-all duration-1000 ease-out',
              visibleServices[index] 
                ? 'opacity-100 translate-y-0' 
                : 'opacity-0 translate-y-12',
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            ]"
            :style="{ transitionDelay: '200ms' }"
          >
            <!-- Content Side -->
            <div 
              :class="[
                'space-y-6 transition-all duration-1000',
                visibleServices[index]
                  ? 'opacity-100 translate-x-0'
                  : index % 2 === 0 
                    ? 'opacity-0 -translate-x-12' 
                    : 'opacity-0 translate-x-12'
              ]"
              :style="{ transitionDelay: '400ms' }"
            >
              <!-- Icon & Title -->
              <div class="flex items-center gap-4">
                <div 
                  :class="[
                    'w-20 h-20 rounded-2xl flex items-center justify-center text-5xl shadow-2xl transition-all duration-700',
                    visibleServices[index] ? 'scale-100 rotate-0' : 'scale-0 rotate-180',
                    getServiceBgColor(index)
                  ]"
                  :style="{ transitionDelay: '600ms' }"
                >
                  {{ service.icon }}
                </div>
                <div>
                  <div :class="['badge badge-lg', getServiceBadgeColor(index)]">
                    Service {{ index + 1 }} of {{ services.length }}
                  </div>
                  <h3 class="text-3xl lg:text-4xl font-black mt-2">{{ service.title }}</h3>
                </div>
              </div>
             
              
              <!-- Description -->
              <p class="text-lg lg:text-xl text-base-content/70 leading-relaxed">
                {{ service.details }}
              </p>
              
              <!-- Key Capabilities -->
              <div>
                <h4 class="text-sm font-bold uppercase tracking-wider text-base-content/60 mb-4 flex items-center gap-2">
                  <svg class="w-5 h-5 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Key Capabilities
                </h4>
                <div class="grid sm:grid-cols-2 gap-3">
                  <div 
                    v-for="(capability, capIdx) in service.capabilities" 
                    :key="capIdx"
                    :class="[
                      'flex items-center gap-2 text-sm bg-base-200 rounded-lg px-4 py-3 hover:bg-base-300 transition-all duration-300 hover:scale-105',
                      visibleServices[index]
                        ? 'opacity-100 translate-x-0'
                        : 'opacity-0 -translate-x-4'
                    ]"
                    :style="{ transitionDelay: `${800 + capIdx * 100}ms` }"
                  >
                    <svg class="w-4 h-4 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                    </svg>
                    <span class="font-medium">{{ capability }}</span>
                  </div>
                  </div>
              </div>
              
              <!-- Metrics & CTA -->
              <div class="flex flex-wrap items-center gap-4 pt-4">
                <div 
                  :class="[
                    'badge badge-lg font-mono font-bold shadow-lg px-6 py-4 transition-all duration-700',
                    visibleServices[index] ? 'scale-100 opacity-100' : 'scale-50 opacity-0',
                    getServiceBadgeColor(index)
                  ]"
                  :style="{ transitionDelay: '1000ms' }"
                >
                  {{ service.metrics }}
                </div>
                <button class="btn btn-outline btn-primary group hover:scale-105 transition-transform">
                  Explore More
                  <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <!-- Visual Side - Tech Stack Grid -->
            <div 
              :class="[
                'relative transition-all duration-1000',
                visibleServices[index]
                  ? 'opacity-100 scale-100'
                  : 'opacity-0 scale-95'
              ]"
              :style="{ transitionDelay: '400ms' }"
            >
              <!-- Main Tech Card -->
              <div class="card bg-gradient-to-br from-base-200 to-base-300 shadow-2xl border border-base-content/10 overflow-hidden">
                <div class="card-body p-8">
                  <h4 class="text-lg font-bold mb-6 flex items-center gap-2">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                    </svg>
                    Technology Stack
                  </h4>
                  
                  <div class="grid grid-cols-2 gap-4">
                    <div 
                      v-for="(tech, techIdx) in service.techStack" 
                      :key="techIdx"
                      :class="[
                        'aspect-square rounded-2xl bg-base-100 shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-110 hover:-rotate-3 flex flex-col items-center justify-center p-4 cursor-pointer group',
                        visibleServices[index]
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-4'
                      ]"
                      :style="{ transitionDelay: `${800 + techIdx * 150}ms` }"
                    >
                      <div class="text-5xl mb-3 group-hover:scale-125 transition-transform duration-300">
                        {{ tech.icon }}
                      </div>
                      <div class="text-xs font-bold text-center opacity-70 group-hover:opacity-100 transition-opacity">
                        {{ tech.label }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <!-- Floating Success Badge -->
              <div 
                :class="[
                  'absolute -top-4 -right-4 card bg-base-100 shadow-2xl border-4 border-base-200 transition-all duration-1000',
                  visibleServices[index] 
                    ? 'opacity-100 scale-100 rotate-0' 
                    : 'opacity-0 scale-50 -rotate-45'
                ]"
                :style="{ transitionDelay: '1200ms' }"
              >
                <div class="card-body p-4">
                  <div class="flex items-center gap-2">
                    <div :class="['radial-progress', getServiceTextColor(index)]" style="--value:95; --size:3rem; --thickness: 4px;" role="progressbar">
                      <span class="text-xs font-bold">95%</span>
                    </div>
                    <div>
                      <div class="text-xs font-bold">Success Rate</div>
                      <div class="text-[10px] opacity-60">Industry Leading</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Separator Line (except last) -->
          <div 
            v-if="index < services.length - 1"
            :class="[
              'mt-16 lg:mt-24 h-px bg-gradient-to-r from-transparent via-base-content/20 to-transparent transition-all duration-1000',
              visibleServices[index] ? 'opacity-100 scale-x-100' : 'opacity-0 scale-x-0'
            ]"
            :style="{ transitionDelay: '1400ms' }"
          ></div>
        </div>
      </div>
      
      <!-- Bottom CTA -->
      <div 
        :class="[
          'mt-20 text-center transition-all duration-1000',
          allServicesVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        ]"
      >
        <div class="inline-block">
          <div class="bg-gradient-to-r from-primary via-secondary to-accent p-1 rounded-2xl">
            <div class="bg-base-100 roundedxl px-8 py-6 rounded-2xl">
              <div class="flex flex-col sm:flex-row items-center gap-4">
                <div class="text-5xl">🎯</div>
                <div class="text-center sm:text-left">
                  <div class="font-black text-2xl mb-1">Ready to Get Started?</div>
                  <div class="text-sm text-base-content/60">Let's discuss which services fit your needs best</div>
                </div>
                <button class="btn btn-primary btn-lg shadow-2xl hover:scale-105 transition-transform">
                  Book Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';
const serviceRefs = ref<(HTMLElement | null)[]>([]);
const visibleServices = ref<boolean[]>([false, false, false, false, false, false]);
const headerVisible = ref(false);
const services = [
  {
    shortTitle: "AI/ML",
    title: "AI/ML Solutions",
    description: "Machine Learning, Deep Learning, NLP, Computer Vision & Predictive Analytics",
    details: "Harness the power of artificial intelligence and machine learning to transform your business. From intelligent automation to predictive insights, we build cutting-edge AI solutions that drive innovation and competitive advantage.",
    icon: "🤖",
    metrics: "95% Model Accuracy",
    capabilities: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics", "AI Integration", "Deep Learning"],
    techStack: [
      { icon: "🧠", label: "TensorFlow" },
      { icon: "🐍", label: "PyTorch" },
      { icon: "📊", label: "Scikit-learn" },
      { icon: "💡", label: "OpenAI" }
    ]
  },
  {
    shortTitle: "Security",
    title: "Cyber Security",
    description: "Threat Detection, Penetration Testing, Security Audits & Compliance",
    details: "Protect your digital assets with enterprise-grade cybersecurity solutions. We provide comprehensive security assessments, vulnerability management, and continuous monitoring to safeguard your business from evolving threats.",
    icon: "🔒",
    metrics: "99.9% Threat Prevention",
    capabilities: ["Security Audits", "Penetration Testing", "Vulnerability Assessment", "Compliance Management", "Incident Response", "Security Training"],
    techStack: [
      { icon: "🛡️", label: "Firewalls" },
      { icon: "🔐", label: "Encryption" },
      { icon: "🚨", label: "SIEM" },
      { icon: "✅", label: "ISO Compliance" }
    ]
  },
  {
    shortTitle: "Dedicated Team",
    title: "Dedicated Developers",
    description: "Full-Stack, Frontend, Backend, DevOps & Mobile Developers",
    details: "Scale your team instantly with our dedicated developers. Get experienced professionals who integrate seamlessly with your in-house team, committed to delivering excellence and meeting your specific project requirements.",
    icon: "👨‍💻",
    metrics: "500+ Developers",
    capabilities: ["Full-Stack Development", "Frontend Specialists", "Backend Engineers", "Mobile Developers", "DevOps Engineers", "QA Specialists"],
    techStack: [
      { icon: "⚛️", label: "React/Vue" },
      { icon: "🟢", label: "Node.js" },
      { icon: "🐍", label: "Python" },
      { icon: "☕", label: "Java" }
    ]
  },
  {
    shortTitle: "Mobile",
    title: "Mobile Apps",
    description: "iOS, Android, React Native, Flutter & Progressive Web Apps",
    details: "Create stunning mobile experiences that engage users and drive growth. We build native and cross-platform mobile applications with intuitive interfaces, seamless performance, and enterprise-grade security.",
    icon: "📱",
    metrics: "300+ Apps Launched",
    capabilities: ["iOS Development", "Android Development", "Cross-Platform Apps", "UI/UX Design", "App Store Optimization", "Mobile Backend"],
    techStack: [
      { icon: "🍎", label: "Swift" },
      { icon: "🤖", label: "Kotlin" },
      { icon: "⚡", label: "React Native" },
      { icon: "🎯", label: "Flutter" }
    ]
  },
  {
    shortTitle: "Web",
    title: "Website Development",
    description: "Corporate Sites, E-commerce, Landing Pages & Web Applications",
    details: "Build powerful web presences that convert visitors into customers. From responsive corporate websites to complex web applications, we deliver pixel-perfect, high-performance solutions optimized for search and conversion.",
    icon: "🌐",
    metrics: "1000+ Sites Live",
    capabilities: ["Responsive Design", "E-commerce Solutions", "CMS Development", "SEO Optimization", "Web Applications", "Progressive Web Apps"],
    techStack: [
      { icon: "⚛️", label: "React" },
      { icon: "💚", label: "Vue/Nuxt" },
      { icon: "⚡", label: "Next.js" },
      { icon: "🎨", label: "Tailwind" }
    ]
  },
  {
    shortTitle: "Custom Software",
    title: "Custom Software",
    description: "Enterprise Systems, SaaS Platforms, API Development & Integration",
    details: "Transform your unique business challenges into competitive advantages with tailor-made software solutions. We architect and build scalable, secure systems that perfectly align with your processes and goals.",
    icon: "⚙️",
    metrics: "150+ Custom Solutions",
    capabilities: ["Enterprise Software", "SaaS Development", "API Development", "System Integration", "Legacy Modernization", "Microservices Architecture"],
    techStack: [
      { icon: "🏗️", label: "Cloud Native" },
      { icon: "🔗", label: "APIs" },
      { icon: "🐳", label: "Docker" },
      { icon: "☸️", label: "Kubernetes" }
    ]
  },
];
const allServicesVisible = computed(() => {
  return visibleServices.value.every(visible => visible);
});
const getServiceBgColor = (index: number) => {
  const colors = [
    'bg-gradient-to-br from-primary/20 to-primary/10',
    'bg-gradient-to-br from-secondary/20 to-secondary/10',
    'bg-gradient-to-br from-accent/20 to-accent/10',
    'bg-gradient-to-br from-info/20 to-info/10',
    'bg-gradient-to-br from-success/20 to-success/10',
    'bg-gradient-to-br from-warning/20 to-warning/10',
  ];
  return colors[index % colors.length];
};
const getServiceBadgeColor = (index: number) => {
  const colors = ['badge-primary', 'badge-secondary', 'badge-accent', 'badge-info', 'badge-success', 'badge-warning'];
  return colors[index % colors.length];
};
const getServiceTextColor = (index: number) => {
  const colors = ['text-primary', 'text-secondary', 'text-accent', 'text-info', 'text-success', 'text-warning'];
  return colors[index % colors.length];
};
const checkVisibility = () => {
  // Check header
  const headerRect = document.querySelector('h2')?.getBoundingClientRect();
  if (headerRect && headerRect.top < window.innerHeight * 0.9) {
    headerVisible.value = true;
  }
  
  // Check each service
  serviceRefs.value.forEach((el, index) => {
    if (!el) return;
    
    const rect = el.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    
    // Element is visible if it's in the viewport (with some offset for early trigger)
    if (rect.top < windowHeight * 0.75 && rect.bottom > 0) {
      visibleServices.value[index] = true;
    }
  });
};
onMounted(() => {
  checkVisibility();
  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
});
onUnmounted(() => {
  window.removeEventListener('scroll', checkVisibility);
  window.removeEventListener('resize', checkVisibility);
});
</script>
<style scoped>
/* Custom smooth transitions */
.transition-all {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
</style>
