<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-primary/5 via-base-100 to-secondary/5 pt-32 pb-24 overflow-hidden">
      <div class="absolute inset-0">
        <div class="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(var(--p),0.08),transparent_50%),radial-gradient(ellipse_at_bottom_left,rgba(var(--s),0.08),transparent_50%)] animate-pulse" style="animation-duration: 8s;"></div>
      </div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-primary/10 to-transparent border border-primary/20 backdrop-blur-sm">
            <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
            </svg>
            <span class="text-sm font-bold text-primary">KM Software's Blog</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-base-content leading-tight">
            Insights, Ideas &
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-2">
              Tech Perspectives
            </span>
          </h1>

          <p class="text-lg sm:text-xl text-base-content/70 leading-relaxed max-w-3xl mx-auto">
            Welcome to the official blog of KM Software's — where we share insights, ideas, and real-world learnings from the world of technology.
          </p>
        </div>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-6xl mx-auto">

          <!-- Loading -->
          <div v-if="pending" class="flex justify-center py-12">
            <span class="loading loading-spinner loading-lg text-primary"></span>
          </div>

          <!-- Posts Grid -->
          <div v-else-if="posts.length > 0">
            <!-- Featured Post (first published post) -->
            <div v-if="posts.length > 0" class="mb-16">
              <NuxtLink :to="`/blog/${posts[0].slug}`"
                class="bg-base-100 rounded-3xl border-2 border-base-content/10 overflow-hidden lg:flex flex-row hover:shadow-2xl hover:border-primary/30 transition-all group">
                <div class="lg:w-1/2 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 min-h-[300px] lg:min-h-full flex justify-center items-center relative overflow-hidden">
                  <img v-if="posts[0].coverImage" :src="posts[0].coverImage" :alt="posts[0].title" class="w-full h-full object-cover absolute inset-0" />
                  <div v-else class="text-center p-8 relative z-10">
                    <div class="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                      </svg>
                    </div>
                    <span class="text-base-content/30 font-bold text-lg tracking-widest uppercase">{{ posts[0].category }}</span>
                  </div>
                </div>
                <div class="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
                  <div class="flex items-center gap-2 mb-4">
                    <span class="badge badge-primary">{{ posts[0].category }}</span>
                    <span class="text-xs font-semibold text-base-content/40 uppercase tracking-widest">Featured</span>
                  </div>
                  <h3 class="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">{{ posts[0].title }}</h3>
                  <p class="text-base-content/70 mb-6 leading-relaxed">{{ posts[0].excerpt }}</p>
                  <div class="flex items-center gap-4 text-sm text-base-content/50">
                    <span>By {{ posts[0].author }}</span>
                    <span>{{ formatDate(posts[0].publishedAt) }}</span>
                  </div>
                  <span class="font-bold text-primary flex items-center gap-2 max-w-max mt-4">
                    Read Article
                    <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                  </span>
                </div>
              </NuxtLink>
            </div>

            <!-- Other Posts Grid -->
            <div v-if="posts.length > 1" class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <NuxtLink v-for="post in posts.slice(1)" :key="post.id" :to="`/blog/${post.slug}`"
                class="card bg-base-100 border-2 border-base-content/10 overflow-hidden hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all group">
                <div class="h-48 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex justify-center items-center relative overflow-hidden">
                  <img v-if="post.coverImage" :src="post.coverImage" :alt="post.title" class="w-full h-full object-cover absolute inset-0" />
                  <div v-else class="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center relative z-10">
                    <svg class="w-7 h-7 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
                    </svg>
                  </div>
                </div>
                <div class="card-body p-6">
                  <span class="text-xs font-bold uppercase tracking-widest mb-2 block text-primary">{{ post.category }}</span>
                  <h3 class="card-title text-xl font-bold leading-tight group-hover:text-primary transition-colors">{{ post.title }}</h3>
                  <p class="text-sm text-base-content/70 mt-2 mb-4 line-clamp-3">{{ post.excerpt }}</p>
                  <div class="flex items-center gap-4 text-xs text-base-content/40 mt-auto">
                    <span>{{ post.author }}</span>
                    <span>{{ formatDate(post.publishedAt) }}</span>
                  </div>
                </div>
              </NuxtLink>
            </div>
          </div>

          <!-- Empty State -->
          <div v-else class="text-center py-16">
            <div class="w-20 h-20 rounded-2xl bg-base-200 flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-base-content/30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"/>
              </svg>
            </div>
            <h2 class="text-2xl font-bold mb-2">Fresh Content on the Way</h2>
            <p class="text-base-content/60 max-w-md mx-auto">We're preparing our first set of articles. Stay tuned for valuable tech insights and practical guides.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 sm:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-3xl mx-auto text-center text-white">
          <h2 class="text-3xl sm:text-4xl md:text-5xl font-black mb-4">Stay Connected</h2>
          <p class="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto">Follow KM Software's for upcoming articles, tech insights, and industry updates.</p>
          <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-base-200 border-none shadow-2xl px-12 transition-all">
            Get Notified
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Blog & Tech Insights | KM Software's",
  description: 'Insights, ideas, and real-world learnings from the world of technology.',
});

const { data: posts, pending } = await useFetch('/api/blogs', {
  default: () => [] as any[],
});

const formatDate = (dateStr: string | null) => {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
};
</script>
