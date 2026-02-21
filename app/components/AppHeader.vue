<template>
  <div 
    :class="[
      'fixed left-0 right-0 z-50 transition-all duration-500 px-4 sm:px-6',
      scrollDirection === 'down' && scrollY > 100 ? '-top-32' : 'top-0'
    ]"
  >
    <div 
      :class="[
        'flex items-center justify-between rounded-full px-6 py-3 transition-all duration-500 mx-auto',
        scrollY > 30 
          ? 'bg-base-100 dark:bg-base-200 shadow-2xl border border-base-content/10 backdrop-blur-xl max-w-5xl' 
          : 'max-w-7xl bg-base-100/60 backdrop-blur-md'
      ]"
    >
      <!-- Logo -->
      <NuxtLink to="/" class="flex items-center gap-2 group relative z-10 transition-transform hover:scale-105">
        <img src="/logo.png" alt="KM Software's" class="h-8 sm:h-10 w-auto object-contain" />
      </NuxtLink>
      
      <!-- Desktop Navigation -->
      <nav class="hidden lg:flex items-center gap-1">
        <NuxtLink 
          to="/" 
          class="px-4 py-2 rounded-full text-sm font-medium text-base-content/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          Home
        </NuxtLink>
        
        <!-- Services Dropdown -->
        <div class="dropdown dropdown-hover">
          <div 
            tabindex="0" 
            role="button" 
            class="px-4 py-2 rounded-full text-sm font-medium text-base-content/80 hover:text-primary hover:bg-primary/10 transition-all duration-300 flex items-center gap-1"
          >
            Services
            <svg class="w-3 h-3 transition-transform group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </div>
          <ul 
            tabindex="0" 
            class="dropdown-content menu bg-base-100 dark:bg-base-200 rounded-2xl z-[100] w-72 p-3 shadow-2xl border border-base-content/10 mt-2 backdrop-blur-xl"
          >
            <li v-for="service in services" :key="service.title">
              <NuxtLink :to="service.link" class="flex items-center gap-3 hover:bg-primary/10 rounded-xl p-3 group transition-all">
                <span class="text-2xl group-hover:scale-110 transition-transform">{{ service.icon }}</span>
                <div>
                  <div class="font-semibold text-base-content">{{ service.title }}</div>
                  <div class="text-xs opacity-60">{{ service.subtitle }}</div>
                </div>
              </NuxtLink>
            </li>
          </ul>
        </div>
        
        <NuxtLink 
          to="/about" 
          class="px-4 py-2 rounded-full text-sm font-medium text-base-content/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          About
        </NuxtLink>
        <NuxtLink 
          to="/portfolio" 
          class="px-4 py-2 rounded-full text-sm font-medium text-base-content/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          Portfolio
        </NuxtLink>
        <NuxtLink 
          to="/contact" 
          class="px-4 py-2 rounded-full text-sm font-medium text-base-content/80 hover:text-primary hover:bg-primary/10 transition-all duration-300"
        >
          Contact
        </NuxtLink>
      </nav>
      
      <!-- Right Side Actions -->
      <div class="flex items-center gap-2">
        <!-- Theme Toggle -->
        <div class="dropdown dropdown-end">
          <div 
            tabindex="0" 
            role="button" 
            class="btn btn-ghost btn-sm btn-circle hover:bg-primary/10 group"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5 group-hover:rotate-180 transition-transform duration-500" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
          </div>
          <ul 
            tabindex="0" 
            class="dropdown-content menu bg-base-100 dark:bg-base-200 backdrop-blur-xl rounded-2xl z-[100] w-56 p-3 shadow-2xl border border-base-content/10 max-h-96 overflow-y-auto"
          >
            <li v-for="theme in themes" :key="theme">
              <a 
                @click="selectTheme(theme)" 
                class="rounded-xl hover:bg-primary/10 transition-all capitalize"
              >
                {{ theme }}
              </a>
            </li>
          </ul>
        </div>

        <!-- CTA Button -->
        <a 
          class="btn btn-primary btn-sm rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300 border-0 hidden sm:inline-flex group"
        >
          <span>Get Started</span>
          <svg 
            class="w-4 h-4 group-hover:translate-x-1 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
          </svg>
        </a>

        <!-- Mobile Menu Button -->
        <div class="dropdown dropdown-end lg:hidden">
          <div 
            tabindex="0" 
            role="button" 
            class="btn btn-ghost btn-sm btn-circle hover:bg-primary/10"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              class="h-5 w-5" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul 
            tabindex="0" 
            class="dropdown-content menu bg-base-100 dark:bg-base-200 backdrop-blur-xl rounded-2xl z-[100] w-72 p-3 shadow-2xl border border-base-content/10 mt-2 max-h-[80vh] overflow-y-auto"
          >
            <li><NuxtLink to="/" class="rounded-xl hover:bg-primary/10">Home</NuxtLink></li>
            
            <!-- Services with submenu -->
            <li>
              <details>
                <summary class="rounded-xl hover:bg-primary/10">Services</summary>
                <ul class="p-2 bg-base-200/50 rounded-xl mt-2">
                  <li v-for="service in services" :key="service.title">
                    <NuxtLink :to="service.link" class="flex items-center gap-2 hover:bg-primary/10 rounded-lg text-sm">
                      <span class="text-lg">{{ service.icon }}</span>
                      <span>{{ service.title }}</span>
                    </NuxtLink>
                  </li>
                </ul>
              </details>
            </li>
            
            <li><NuxtLink to="/about" class="rounded-xl hover:bg-primary/10">About</NuxtLink></li>
            <li><NuxtLink to="/portfolio" class="rounded-xl hover:bg-primary/10">Portfolio</NuxtLink></li>
            <li><NuxtLink to="/contact" class="rounded-xl hover:bg-primary/10">Contact</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const themes = [
  "light", "dark", "cupcake", "bumblebee", "emerald", "corporate",
  "synthwave", "retro", "cyberpunk", "valentine", "halloween", "garden",
  "forest", "aqua", "lofi", "pastel", "fantasy", "wireframe", "black",
  "luxury", "dracula", "cmyk", "autumn", "business", "acid", "lemonade",
  "night", "coffee", "winter", "dim", "nord", "sunset"
];

const services = [
  { icon: '🤖', title: 'AI/ML Solutions', subtitle: 'Intelligent Automation', link: '/services/ai-ml' },
  { icon: '🔒', title: 'Cyber Security', subtitle: 'Advanced Protection', link: '/services/cyber-security' },
  { icon: '👨‍💻', title: 'Dedicated Developers', subtitle: 'Expert Teams', link: '/services/dedicated-developers' },
  { icon: '📱', title: 'Mobile Apps', subtitle: 'iOS & Android', link: '/services/mobile-apps' },
  { icon: '🌐', title: 'Website Development', subtitle: 'Modern Web Solutions', link: '/services/website-development' },
  { icon: '⚙️', title: 'Custom Software', subtitle: 'Tailored Solutions', link: '/services/custom-software' },
];

const scrollY = ref(0);
const scrollDirection = ref<'up' | 'down'>('up');
let lastScrollY = 0;

const handleScroll = () => {
  if (import.meta.client) {
    const currentScrollY = window.scrollY;
    scrollY.value = currentScrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      scrollDirection.value = 'down';
    } else {
      scrollDirection.value = 'up';
    }
    
    lastScrollY = currentScrollY;
  }
};

const selectTheme = (theme: string) => {
  if (import.meta.client) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem('theme', theme);
  }
};

onMounted(() => {
  if (import.meta.client) {
    // window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Load saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      document.documentElement.setAttribute("data-theme", savedTheme);
    }
  }
});

onUnmounted(() => {
  if (import.meta.client) {
    window.removeEventListener('scroll', handleScroll);
  }
});
</script>
