<template>
  <div class="space-y-8">
    <!-- Welcome Header -->
    <div>
      <h1 class="text-3xl font-black">Welcome back, {{ user?.name || 'Admin' }}! 👋</h1>
      <p class="text-base-content/60 mt-1">Here's what's happening with your website today.</p>
    </div>

    <!-- Stats Grid -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      <div class="bg-base-100 rounded-2xl p-6 border border-base-content/10 hover:shadow-lg transition-all group">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
          </div>
          <span v-if="unreadContacts > 0" class="badge badge-primary badge-sm">{{ unreadContacts }} new</span>
        </div>
        <h3 class="text-3xl font-black">{{ totalContacts }}</h3>
        <p class="text-sm text-base-content/60 mt-1">Total Contacts</p>
      </div>

      <div class="bg-base-100 rounded-2xl p-6 border border-base-content/10 hover:shadow-lg transition-all group">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
          </div>
        </div>
        <h3 class="text-3xl font-black">{{ publishedBlogs }}</h3>
        <p class="text-sm text-base-content/60 mt-1">Published Posts</p>
      </div>

      <div class="bg-base-100 rounded-2xl p-6 border border-base-content/10 hover:shadow-lg transition-all group">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
          </div>
        </div>
        <h3 class="text-3xl font-black">{{ draftBlogs }}</h3>
        <p class="text-sm text-base-content/60 mt-1">Draft Posts</p>
      </div>

      <div class="bg-base-100 rounded-2xl p-6 border border-base-content/10 hover:shadow-lg transition-all group">
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
            <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
          </div>
        </div>
        <h3 class="text-3xl font-black">{{ totalBlogs }}</h3>
        <p class="text-sm text-base-content/60 mt-1">Total Posts</p>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <NuxtLink to="/admin/blogs/create" class="bg-base-100 rounded-2xl p-6 border-2 border-dashed border-primary/30 hover:border-primary hover:shadow-lg transition-all flex items-center gap-4 group">
        <div class="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
        </div>
        <div>
          <h3 class="font-bold text-lg group-hover:text-primary transition-colors">Create New Blog Post</h3>
          <p class="text-sm text-base-content/60">Write and publish a new article</p>
        </div>
      </NuxtLink>

      <NuxtLink to="/admin/contacts" class="bg-base-100 rounded-2xl p-6 border-2 border-dashed border-secondary/30 hover:border-secondary hover:shadow-lg transition-all flex items-center gap-4 group">
        <div class="w-14 h-14 rounded-2xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
          <svg class="w-7 h-7 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"/></svg>
        </div>
        <div>
          <h3 class="font-bold text-lg group-hover:text-secondary transition-colors">View Contact Submissions</h3>
          <p class="text-sm text-base-content/60">{{ unreadContacts > 0 ? `${unreadContacts} unread messages` : 'All caught up!' }}</p>
        </div>
      </NuxtLink>
    </div>

    <!-- Recent Contacts -->
    <div v-if="recentContacts.length > 0" class="bg-base-100 rounded-2xl border border-base-content/10 overflow-hidden">
      <div class="p-6 border-b border-base-content/10 flex items-center justify-between">
        <h2 class="text-xl font-bold">Recent Contacts</h2>
        <NuxtLink to="/admin/contacts" class="text-sm text-primary font-semibold hover:underline">View All →</NuxtLink>
      </div>
      <div class="divide-y divide-base-content/5">
        <NuxtLink v-for="contact in recentContacts" :key="contact.id" :to="`/admin/contacts`" class="block p-4">
          <div class="flex items-center gap-4 hover:bg-base-200/50 transition-colors cursor-pointer rounded-xl p-2 -m-2">
            <div class="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
              :class="contact.isRead ? 'bg-base-200 text-base-content/50' : 'bg-primary/10 text-primary'">
              {{ contact.firstName.charAt(0) }}{{ contact.lastName.charAt(0) }}
            </div>
            <div class="flex-1 min-w-0">
              <p class="font-semibold truncate" :class="!contact.isRead ? 'text-base-content' : 'text-base-content/70'">
                {{ contact.firstName }} {{ contact.lastName }}
              </p>
              <p class="text-sm text-base-content/50 truncate">{{ contact.service }} — {{ contact.message.substring(0, 60) }}...</p>
            </div>
            <div class="text-xs text-base-content/40 shrink-0">
              {{ formatTime(contact.submittedAt) }}
            </div>
            <span v-if="!contact.isRead" class="w-2 h-2 rounded-full bg-primary shrink-0"></span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

useSeoMeta({ title: 'Dashboard | KM Admin' });

const { user } = useAuth();

// Fetch stats
const { data: contactsData } = await useFetch('/api/contact', {
  default: () => [] as any[],
});

const { data: blogsData } = await useFetch('/api/blogs?all=true', {
  default: () => [] as any[],
});

const totalContacts = computed(() => (contactsData.value as any[])?.length || 0);
const unreadContacts = computed(() => (contactsData.value as any[])?.filter((c: any) => !c.isRead).length || 0);
const totalBlogs = computed(() => (blogsData.value as any[])?.length || 0);
const publishedBlogs = computed(() => (blogsData.value as any[])?.filter((b: any) => b.status === 'published').length || 0);
const draftBlogs = computed(() => (blogsData.value as any[])?.filter((b: any) => b.status === 'draft').length || 0);
const recentContacts = computed(() => ((contactsData.value as any[]) || []).slice(0, 5));

const formatTime = (dateStr: string) => {
  const date = new Date(dateStr);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const hours = Math.floor(diff / (1000 * 60 * 60));
  if (hours < 1) return 'Just now';
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  if (days < 7) return `${days}d ago`;
  return date.toLocaleDateString();
};
</script>
