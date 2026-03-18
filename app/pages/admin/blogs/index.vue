<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <h1 class="text-2xl font-black">Blog Posts</h1>
        <p class="text-base-content/60 mt-1">Manage your blog content</p>
      </div>
      <NuxtLink to="/admin/blogs/create" class="btn btn-primary">
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/></svg>
        New Post
      </NuxtLink>
    </div>

    <!-- Filters -->
    <div class="flex flex-wrap gap-2">
      <button
        v-for="filter in statusFilters"
        :key="filter.value"
        @click="activeFilter = filter.value"
        class="btn btn-sm transition-all"
        :class="activeFilter === filter.value ? 'btn-primary' : 'btn-ghost'"
      >
        {{ filter.label }}
        <span class="badge badge-sm" :class="activeFilter === filter.value ? 'badge-primary-content' : 'badge-neutral'">{{ filter.count }}</span>
      </button>
    </div>

    <!-- Blog List -->
    <div class="space-y-4">
      <div v-for="blog in filteredBlogs" :key="blog.id" @click="navigateTo(`/admin/blogs/${blog.slug}`)"
        class="block bg-base-100 rounded-2xl border border-base-content/10 p-6 hover:shadow-lg hover:border-primary/50 transition-all group cursor-pointer">
        <div class="flex items-start gap-6">
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 mb-2">
              <span class="badge badge-sm" :class="blog.status === 'published' ? 'badge-success' : 'badge-warning'">
                {{ blog.status === 'published' ? '✓ Published' : '✎ Draft' }}
              </span>
              <span class="badge badge-ghost badge-sm">{{ blog.category }}</span>
            </div>
            <h3 class="text-xl font-bold group-hover:text-primary transition-colors">{{ blog.title }}</h3>
            <p class="text-sm text-base-content/60 mt-1 line-clamp-2">{{ blog.excerpt }}</p>
            <div class="flex items-center gap-4 mt-3 text-xs text-base-content/40">
              <span>By {{ blog.author }}</span>
              <span>{{ blog.status === 'published' ? `Published ${formatDate(blog.publishedAt)}` : `Updated ${formatDate(blog.updatedAt)}` }}</span>
            </div>
          </div>

          <div class="flex items-center gap-2 shrink-0">
            <span class="btn btn-ghost btn-sm text-primary group-hover:bg-primary/10">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/></svg>
              Edit
            </span>
            <button @click.stop.prevent="deleteBlog(blog)" class="btn btn-ghost btn-sm text-error relative z-10">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div v-if="filteredBlogs.length === 0" class="bg-base-100 rounded-2xl border border-base-content/10 p-12 text-center">
        <div class="w-16 h-16 rounded-2xl bg-base-200 flex items-center justify-center mx-auto mb-4">
          <svg class="w-8 h-8 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/></svg>
        </div>
        <h3 class="text-lg font-bold mb-1">No blog posts yet</h3>
        <p class="text-base-content/60 mb-4">Get started by creating your first post.</p>
        <NuxtLink to="/admin/blogs/create" class="btn btn-primary btn-sm">Create First Post</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

useSeoMeta({ title: 'Blog Posts | KM Admin' });

const activeFilter = ref('all');

const { data: blogs, refresh } = await useFetch('/api/blogs?all=true', {
  default: () => [] as any[],
});

const statusFilters = computed(() => [
  { label: 'All', value: 'all', count: (blogs.value as any[]).length },
  { label: 'Published', value: 'published', count: (blogs.value as any[]).filter((b: any) => b.status === 'published').length },
  { label: 'Drafts', value: 'draft', count: (blogs.value as any[]).filter((b: any) => b.status === 'draft').length },
]);

const filteredBlogs = computed(() => {
  const list = blogs.value as any[];
  if (activeFilter.value === 'published') return list.filter(b => b.status === 'published');
  if (activeFilter.value === 'draft') return list.filter(b => b.status === 'draft');
  return list;
});

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
};

const deleteBlog = async (blog: any) => {
  if (!confirm(`Are you sure you want to delete "${blog.title}"?`)) return;
  try {
    await $fetch(`/api/blogs/${blog.slug}`, { method: 'DELETE' });
    await refresh();
  } catch (err) {
    alert('Failed to delete blog post');
  }
};
</script>
