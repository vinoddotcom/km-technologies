<template>
  <section class="py-12 bg-base-200/50 border-y border-base-content/5">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-wrap items-center justify-center gap-8 md:gap-16">
        <div 
          v-for="item in trustItems" 
          :key="item.label"
          class="flex items-center gap-3 group"
        >
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
            <component :is="item.icon" class="w-6 h-6 text-primary" />
          </div>
          <div>
            <div class="text-2xl font-black text-base-content">{{ item.value }}</div>
            <div class="text-xs text-base-content/60 uppercase tracking-wide">{{ item.label }}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { h } from 'vue'

// Icon components
const ShieldIcon = {
  render() {
    return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z' })
    ])
  }
}

const UsersIcon = {
  render() {
    return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z' })
    ])
  }
}

const CodeIcon = {
  render() {
    return h('svg', { fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' })
    ])
  }
}

const StarIcon = {
  render() {
    return h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
      h('path', { d: 'M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' })
    ])
  }
}

const trustItems = ref([
  { value: "10+", label: "Years Experience", icon: ShieldIcon },
  { value: "100+", label: "Projects Delivered", icon: CodeIcon },
  { value: "50+", label: "Happy Clients", icon: UsersIcon },
  { value: "4.9/5", label: "Client Rating", icon: StarIcon },
])
</script>
