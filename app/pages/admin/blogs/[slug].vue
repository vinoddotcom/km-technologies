<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <NuxtLink to="/admin/blogs" class="text-sm text-base-content/50 hover:text-primary transition-colors mb-2 inline-flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Posts
        </NuxtLink>
        <h1 class="text-2xl font-black">Edit Post</h1>
      </div>
      <div class="flex gap-2">
        <button @click="saveChanges('draft')" class="btn btn-ghost" :disabled="isSaving">
          <span v-if="isSaving" class="loading loading-spinner loading-sm"></span>
          Save as Draft
        </button>
        <button @click="saveChanges('published')" class="btn btn-primary" :disabled="isSaving">
          <span v-if="isSaving" class="loading loading-spinner loading-sm"></span>
          {{ blog?.status === 'published' ? 'Update' : 'Publish' }}
        </button>
      </div>
    </div>

    <!-- Loading -->
    <div v-if="pending" class="flex justify-center py-12">
      <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>

    <!-- Error -->
    <div v-if="errorMsg" class="alert alert-error shadow-sm">
      <span>{{ errorMsg }}</span>
    </div>

    <!-- Form -->
    <div v-if="blog" class="grid lg:grid-cols-3 gap-6">
      <div class="lg:col-span-2 space-y-6">
        <div class="form-control">
          <input
            v-model="form.title"
            type="text"
            placeholder="Blog post title..."
            class="input input-bordered input-lg w-full text-2xl font-bold"
            required
          />
        </div>

        <DashboardTiptapEditor v-model="form.content" />
      </div>

      <div class="space-y-6">
        <div class="bg-base-100 rounded-2xl border border-base-content/10 p-6 space-y-4">
          <h3 class="font-bold">Post Details</h3>

          <div class="form-control">
            <label class="label"><span class="label-text font-semibold">Excerpt</span></label>
            <textarea v-model="form.excerpt" class="textarea textarea-bordered h-24 resize-none" placeholder="Brief description..."></textarea>
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text font-semibold">Category</span></label>
            <select v-model="form.category" class="select select-bordered w-full">
              <option value="">Select category</option>
              <option value="Web Development">Web Development</option>
              <option value="App Development">App Development</option>
              <option value="AI & ML">AI & ML</option>
              <option value="Cloud & DevOps">Cloud & DevOps</option>
              <option value="Cyber Security">Cyber Security</option>
              <option value="Design & UX">Design & UX</option>
              <option value="Engineering">Engineering</option>
              <option value="Business">Business</option>
            </select>
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text font-semibold">Tags</span></label>
            <input v-model="tagsInput" type="text" class="input input-bordered w-full" placeholder="vue, nuxt, frontend" />
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text font-semibold">Cover Image URL</span></label>
            <input v-model="form.coverImage" type="text" class="input input-bordered w-full" placeholder="https://..." />
          </div>

          <div v-if="form.coverImage" class="rounded-xl overflow-hidden border border-base-content/10">
            <img :src="form.coverImage" alt="Cover preview" class="w-full h-32 object-cover" />
          </div>

          <!-- Info -->
          <div class="pt-4 border-t border-base-content/10 space-y-2 text-sm text-base-content/60">
            <p>Status: <span class="badge badge-sm" :class="blog.status === 'published' ? 'badge-success' : 'badge-warning'">{{ blog.status }}</span></p>
            <p>Created: {{ new Date(blog.createdAt).toLocaleDateString() }}</p>
            <p v-if="blog.publishedAt">Published: {{ new Date(blog.publishedAt).toLocaleDateString() }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
  middleware: 'auth',
});

const route = useRoute();
const slug = route.params.slug as string;

const isSaving = ref(false);
const errorMsg = ref('');
const tagsInput = ref('');

const { data: blog, pending } = await useFetch(`/api/blogs/${slug}`);

const form = ref({
  title: '',
  content: '',
  excerpt: '',
  category: '',
  coverImage: '',
});

// Populate form when data loads
watch(blog, (val: any) => {
  if (val) {
    form.value = {
      title: val.title || '',
      content: val.content || '',
      excerpt: val.excerpt || '',
      category: val.category || '',
      coverImage: val.coverImage || '',
    };
    tagsInput.value = (val.tags || []).join(', ');
    useSeoMeta({ title: `Edit: ${val.title} | KM Admin` });
  }
}, { immediate: true });

const saveChanges = async (status: 'draft' | 'published') => {
  if (!form.value.title || !form.value.content) {
    errorMsg.value = 'Title and content are required';
    return;
  }

  isSaving.value = true;
  errorMsg.value = '';

  try {
    const tags = tagsInput.value.split(',').map(t => t.trim()).filter(t => t.length > 0);

    await $fetch(`/api/blogs/${slug}`, {
      method: 'PUT',
      body: {
        ...form.value,
        tags,
        status,
      },
    });

    navigateTo('/admin/blogs');
  } catch (err: any) {
    errorMsg.value = err?.data?.statusMessage || 'Failed to update blog post';
  } finally {
    isSaving.value = false;
  }
};
</script>
