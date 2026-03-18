<template>
  <div class="min-h-screen bg-base-100">
    <!-- Loading -->
    <div v-if="pending" class="min-h-screen flex items-center justify-center">
      <span class="loading loading-spinner loading-lg text-primary"></span>
    </div>

    <!-- 404 -->
    <div v-else-if="!post" class="min-h-screen flex items-center justify-center">
      <div class="text-center">
        <h1 class="text-6xl font-black text-base-content/10 mb-4">404</h1>
        <p class="text-xl font-bold mb-2">Post not found</p>
        <NuxtLink to="/blog" class="btn btn-primary btn-sm mt-4">← Back to Blog</NuxtLink>
      </div>
    </div>

    <template v-else>
      <!-- Hero -->
      <section class="relative pt-32 pb-16 bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div class="max-w-4xl mx-auto">
            <!-- Breadcrumb -->
            <div class="flex items-center gap-2 text-sm text-base-content/50 mb-8">
              <NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink>
              <span>/</span>
              <NuxtLink to="/blog" class="hover:text-primary transition-colors">Blog</NuxtLink>
              <span>/</span>
              <span class="text-base-content/70 truncate">{{ post.title }}</span>
            </div>

            <!-- Meta -->
            <div class="flex items-center gap-3 mb-6">
              <span class="badge badge-primary">{{ post.category }}</span>
              <span class="text-sm text-base-content/50">{{ formatDate(post.publishedAt) }}</span>
            </div>

            <!-- Title -->
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight mb-6">{{ post.title }}</h1>

            <!-- Author -->
            <div class="flex items-center gap-3">
              <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <span class="text-white font-bold text-sm">{{ post.author?.charAt(0) }}</span>
              </div>
              <div>
                <p class="font-semibold text-sm">{{ post.author }}</p>
                <p class="text-xs text-base-content/50">{{ readingTime }} min read</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Cover Image -->
      <div v-if="post.coverImage" class="container mx-auto px-4 sm:px-6 lg:px-8 -mt-4 mb-12">
        <div class="max-w-4xl mx-auto">
          <img :src="post.coverImage" :alt="post.title" class="w-full rounded-3xl shadow-2xl object-cover max-h-[500px]" />
        </div>
      </div>

      <!-- Content -->
      <section class="pb-24">
        <div class="container mx-auto px-4 sm:px-6 lg:px-8">
          <article class="max-w-4xl mx-auto">
            <div class="prose prose-lg max-w-none blog-content" v-html="post.content"></div>

            <!-- Tags -->
            <div v-if="post.tags?.length" class="mt-12 pt-8 border-t border-base-content/10">
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in post.tags" :key="tag" class="badge badge-outline badge-lg">#{{ tag }}</span>
              </div>
            </div>

            <!-- Share -->
            <div class="mt-8 pt-8 border-t border-base-content/10">
              <h3 class="font-bold mb-4">Share this article</h3>
              <div class="flex gap-3">
                <a :href="`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(pageUrl)}`" target="_blank" class="btn btn-circle btn-outline btn-sm hover:btn-primary">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                </a>
                <a :href="`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent(post.title)}`" target="_blank" class="btn btn-circle btn-outline btn-sm hover:btn-primary">
                  <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
              </div>
            </div>
          </article>

          <!-- Back to blog -->
          <div class="max-w-4xl mx-auto mt-12">
            <NuxtLink to="/blog" class="btn btn-ghost">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/></svg>
              Back to Blog
            </NuxtLink>
          </div>
        </div>
      </section>
    </template>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const slug = route.params.slug as string;

const { data: post, pending } = await useFetch(`/api/blogs/${slug}`);

const config = useRuntimeConfig();
const pageUrl = computed(() => `${config.public.siteUrl}/blog/${slug}`);

const readingTime = computed(() => {
  if (!post.value) return 0;
  const text = (post.value as any).content?.replace(/<[^>]*>/g, '') || '';
  return Math.max(1, Math.ceil(text.split(/\s+/).length / 200));
});

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};

// Dynamic SEO
watchEffect(() => {
  if (post.value) {
    const p = post.value as any;
    useSeoMeta({
      title: `${p.title} | KM Software's Blog`,
      description: p.excerpt,
      ogTitle: p.title,
      ogDescription: p.excerpt,
      ogImage: p.coverImage,
      ogType: 'article',
    });
  }
});
</script>

<style>
.blog-content h1 { font-size: 2em; font-weight: 800; margin: 0.67em 0; }
.blog-content h2 { font-size: 1.5em; font-weight: 700; margin: 1em 0 0.5em; }
.blog-content h3 { font-size: 1.25em; font-weight: 600; margin: 1em 0 0.5em; }
.blog-content p { margin: 0.75em 0; line-height: 1.8; }
.blog-content ul { list-style: disc; padding-left: 1.5em; margin: 1em 0; }
.blog-content ol { list-style: decimal; padding-left: 1.5em; margin: 1em 0; }
.blog-content li { margin: 0.5em 0; line-height: 1.7; }
.blog-content blockquote { border-left: 4px solid oklch(var(--p)); padding: 1em 1.5em; margin: 1.5em 0; background: oklch(var(--b2)); border-radius: 0 0.5em 0.5em 0; font-style: italic; }
.blog-content pre { background: oklch(var(--b2)); padding: 1.5em; border-radius: 0.75em; overflow-x: auto; font-family: monospace; margin: 1.5em 0; }
.blog-content code { background: oklch(var(--b2)); padding: 0.15em 0.4em; border-radius: 0.25em; font-family: monospace; font-size: 0.9em; }
.blog-content pre code { background: none; padding: 0; }
.blog-content img { max-width: 100%; border-radius: 0.75em; margin: 1.5em 0; }
.blog-content a { color: oklch(var(--p)); text-decoration: underline; }
.blog-content hr { border: none; border-top: 2px solid oklch(var(--bc) / 0.1); margin: 2em 0; }
</style>
