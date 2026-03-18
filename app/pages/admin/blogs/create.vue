<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="flex items-center justify-between">
      <div>
        <NuxtLink to="/admin/blogs" class="text-sm text-base-content/50 hover:text-primary transition-colors mb-2 inline-flex items-center gap-1">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
          Back to Posts
        </NuxtLink>
        <h1 class="text-2xl font-black">Create New Post</h1>
      </div>
      <div class="flex gap-2">
        <button @click="saveDraft" class="btn btn-ghost" :disabled="isSaving">
          <span v-if="isSaving" class="loading loading-spinner loading-sm"></span>
          Save Draft
        </button>
        <button @click="publish" class="btn btn-primary" :disabled="isSaving">
          <span v-if="isSaving" class="loading loading-spinner loading-sm"></span>
          Publish
        </button>
      </div>
    </div>

    <!-- Error -->
    <div v-if="errorMsg" class="alert alert-error shadow-sm">
      <span>{{ errorMsg }}</span>
    </div>

    <!-- Form -->
    <div class="grid lg:grid-cols-3 gap-6">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- Title -->
        <div class="form-control">
          <input
            v-model="form.title"
            type="text"
            placeholder="Blog post title..."
            class="input input-bordered input-lg w-full text-2xl font-bold"
            required
          />
        </div>

        <!-- Editor -->
        <DashboardTiptapEditor v-model="form.content" placeholder="Write your amazing blog post here..." />
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Excerpt -->
        <div class="bg-base-100 rounded-2xl border border-base-content/10 p-6 space-y-4">
          <h3 class="font-bold">Post Details</h3>

          <div class="form-control">
            <label class="label"><span class="label-text font-semibold">Excerpt</span></label>
            <textarea
              v-model="form.excerpt"
              class="textarea textarea-bordered h-24 resize-none"
              placeholder="Brief description for blog listing..."
            ></textarea>
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
            <input
              v-model="tagsInput"
              type="text"
              class="input input-bordered w-full"
              placeholder="vue, nuxt, frontend (comma separated)"
            />
          </div>

          <div class="form-control">
            <label class="label"><span class="label-text font-semibold">Cover Image URL</span></label>
            <input
              v-model="form.coverImage"
              type="text"
              class="input input-bordered w-full"
              placeholder="https://example.com/image.jpg"
            />
          </div>

          <!-- Cover preview -->
          <div v-if="form.coverImage" class="rounded-xl overflow-hidden border border-base-content/10">
            <img :src="form.coverImage" alt="Cover preview" class="w-full h-32 object-cover" />
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

useSeoMeta({ title: 'Create Post | KM Admin' });

const isSaving = ref(false);
const errorMsg = ref('');
const tagsInput = ref('');

const form = ref({
  title: '',
  content: '',
  excerpt: '',
  category: '',
  coverImage: '',
});

const saveDraft = async () => {
  await savePost('draft');
};

const publish = async () => {
  await savePost('published');
};

const savePost = async (status: 'draft' | 'published') => {
  if (!form.value.title || !form.value.content) {
    errorMsg.value = 'Title and content are required';
    return;
  }
  if (!form.value.category) {
    errorMsg.value = 'Please select a category';
    return;
  }

  isSaving.value = true;
  errorMsg.value = '';

  try {
    const tags = tagsInput.value
      .split(',')
      .map(t => t.trim())
      .filter(t => t.length > 0);

    await $fetch('/api/blogs', {
      method: 'POST',
      body: {
        ...form.value,
        tags,
        status,
      },
    });

    navigateTo('/admin/blogs');
  } catch (err: any) {
    errorMsg.value = err?.data?.statusMessage || 'Failed to save blog post';
  } finally {
    isSaving.value = false;
  }
};
</script>
