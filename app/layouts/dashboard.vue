<template>
  <div class="min-h-screen bg-base-200 flex">
    <!-- Sidebar -->
    <aside class="w-64 bg-base-100 border-r border-base-content/10 flex flex-col fixed top-0 left-0 h-full z-40 transition-transform lg:translate-x-0" :class="sidebarOpen ? 'translate-x-0' : '-translate-x-full'">
      <!-- Logo -->
      <div class="p-6 border-b border-base-content/10">
        <NuxtLink to="/admin" class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
            <span class="text-white font-black text-lg">K</span>
          </div>
          <div>
            <h1 class="font-bold text-lg leading-tight">KM Admin</h1>
            <p class="text-xs text-base-content/50">Dashboard</p>
          </div>
        </NuxtLink>
      </div>

      <!-- Navigation -->
      <nav class="flex-1 p-4 space-y-1">
        <NuxtLink
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all hover:bg-primary/10 hover:text-primary group"
          :class="isActive(item.path) ? 'bg-primary/10 text-primary shadow-sm' : 'text-base-content/70'"
        >
          <div v-html="item.icon" class="w-5 h-5 shrink-0"></div>
          {{ item.label }}
          <span v-if="item.badge" class="ml-auto badge badge-primary badge-sm">{{ item.badge }}</span>
        </NuxtLink>
      </nav>

      <!-- Back to site -->
      <div class="p-4 border-t border-base-content/10">
        <NuxtLink to="/" class="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-base-content/50 hover:bg-base-200 hover:text-base-content transition-all">
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Website
        </NuxtLink>
      </div>
    </aside>

    <!-- Overlay for mobile -->
    <div v-if="sidebarOpen" class="fixed inset-0 bg-black/50 z-30 lg:hidden" @click="sidebarOpen = false"></div>

    <!-- Main Content -->
    <div class="flex-1 lg:ml-64 flex flex-col min-h-screen">
      <!-- Top Bar -->
      <header class="bg-base-100 border-b border-base-content/10 px-6 py-4 flex items-center justify-between sticky top-0 z-20">
        <button class="btn btn-ghost btn-square lg:hidden" @click="sidebarOpen = !sidebarOpen">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>

        <div class="flex-1 lg:flex-none">
          <h2 class="text-lg font-bold text-base-content hidden lg:block">{{ pageTitle }}</h2>
        </div>

        <div class="flex items-center gap-4">
          <div class="flex items-center gap-3">
            <div class="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
              <span class="text-white font-bold text-sm">{{ user?.name?.charAt(0) || 'A' }}</span>
            </div>
            <div class="hidden sm:block">
              <p class="text-sm font-semibold">{{ user?.name || 'Admin' }}</p>
              <p class="text-xs text-base-content/50">{{ user?.email }}</p>
            </div>
          </div>
          <button @click="logout" class="btn btn-ghost btn-sm text-error hover:bg-error/10">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"/></svg>
            <span class="hidden sm:inline">Logout</span>
          </button>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 p-6">
        <slot />
      </main>
    </div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const { user, logout } = useAuth();
const sidebarOpen = ref(false);

const navItems = [
  {
    path: '/admin',
    label: 'Dashboard',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"/></svg>',
  },
  {
    path: '/admin/contacts',
    label: 'Contacts',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>',
  },
  {
    path: '/admin/blogs',
    label: 'Blog Posts',
    icon: '<svg fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>',
  },
];

const isActive = (path: string) => {
  if (path === '/admin') return route.path === '/admin';
  return route.path.startsWith(path);
};

const pageTitle = computed(() => {
  const item = navItems.find(n => isActive(n.path));
  return item?.label || 'Dashboard';
});

// Close sidebar on navigation
watch(() => route.path, () => {
  sidebarOpen.value = false;
});
</script>
