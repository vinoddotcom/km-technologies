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

          <p class="text-base text-base-content/60 max-w-2xl mx-auto">
            From software development and AI to cloud, security, and digital innovation — our goal is to simplify technology and share knowledge that actually helps businesses grow.
          </p>
        </div>
      </div>
    </section>

    <!-- What You'll Find Here -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-5xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <div class="badge badge-primary badge-lg">What We Cover</div>
              <h2 class="text-4xl sm:text-5xl font-black">What You'll Find Here</h2>
              <p class="text-lg text-base-content/60 leading-relaxed">
                We share practical, easy-to-understand content that helps businesses and developers stay ahead.
              </p>
              <p class="text-base text-base-content/70 font-semibold">
                No fluff — only real, useful content.
              </p>
            </div>

            <div class="space-y-4">
              <div v-for="topic in blogTopics" :key="topic.title"
                class="flex items-center gap-4 p-5 bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all group">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform"
                  :class="topic.bgClass">
                  <svg class="w-5 h-5" :class="topic.textClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="topic.iconPath"/>
                  </svg>
                </div>
                <span class="font-semibold text-base-content/80 group-hover:text-base-content transition-colors">{{ topic.title }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Feature Article + Recent Articles -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="badge badge-secondary badge-lg">Featured & Recent</div>
          <h2 class="text-4xl sm:text-5xl font-black">Latest Articles</h2>
          <p class="text-xl text-base-content/60 max-w-2xl mx-auto font-light">
            Explore our collection of insights and practical guides
          </p>
        </div>

        <!-- Feature Article -->
        <div class="mb-16 max-w-6xl mx-auto">
          <div class="bg-base-100 rounded-3xl border-2 border-base-content/10 overflow-hidden lg:flex flex-row hover:shadow-2xl hover:border-primary/30 transition-all group">
            <div class="lg:w-1/2 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 min-h-[300px] lg:min-h-full flex justify-center items-center relative overflow-hidden">
              <div class="absolute inset-0 group-hover:bg-primary/5 transition-colors"></div>
              <div class="text-center p-8 relative z-10">
                <div class="w-20 h-20 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"/>
                  </svg>
                </div>
                <span class="text-base-content/30 font-bold text-lg tracking-widest">ARCHITECTURE</span>
              </div>
            </div>
            <div class="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div class="flex items-center gap-2 mb-4">
                <span class="badge badge-primary">Engineering</span>
                <span class="text-xs font-semibold text-base-content/40 uppercase tracking-widest">Featured</span>
              </div>
              <h3 class="text-2xl sm:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">The Transition from Monolithic to Composable AI Architectures</h3>
              <p class="text-base-content/70 mb-8 leading-relaxed">
                As scaling demands soar, building static monolithic machine learning pipelines has quickly become an anti-pattern. Discover how modern teams deploy composable architecture effectively.
              </p>
              <span class="font-bold text-primary flex items-center gap-2 max-w-max">
                Coming Soon
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
              </span>
            </div>
          </div>
        </div>

        <!-- Recent Articles Grid -->
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div v-for="post in blogPosts" :key="post.title"
            class="card bg-base-100 border-2 border-base-content/10 overflow-hidden hover:shadow-xl hover:-translate-y-2 hover:border-primary/20 transition-all group">
            <div class="h-48 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 flex justify-center items-center relative overflow-hidden">
              <div class="absolute inset-0 group-hover:bg-primary/5 transition-colors"></div>
              <div class="w-14 h-14 rounded-xl flex items-center justify-center relative z-10" :class="post.iconBgClass">
                <svg class="w-7 h-7" :class="post.iconTextClass" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="post.iconPath"/>
                </svg>
              </div>
            </div>
            <div class="card-body p-6">
              <span class="text-xs font-bold uppercase tracking-widest mb-2 block" :class="post.categoryColor">{{ post.category }}</span>
              <h3 class="card-title text-xl font-bold leading-tight group-hover:text-primary transition-colors">{{ post.title }}</h3>
              <p class="text-sm text-base-content/70 mt-2 mb-4 line-clamp-3">{{ post.excerpt }}</p>
              <div class="mt-auto">
                <span class="text-sm font-semibold text-primary flex items-center gap-1">
                  Coming Soon
                  <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Built for Learners & Builders -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto text-center space-y-8">
          <div class="badge badge-accent badge-lg">For Everyone</div>
          <h2 class="text-4xl sm:text-5xl font-black">Built for Learners & Builders</h2>
          <p class="text-xl text-base-content/60 leading-relaxed max-w-3xl mx-auto">
            Whether you're a founder, developer, student, or tech enthusiast — our blog is designed to give you clarity in a fast-changing digital world.
          </p>
          <p class="text-lg text-base-content/70 max-w-2xl mx-auto">
            We focus on sharing experience-driven insights that help you learn faster and build smarter.
          </p>

          <div class="grid sm:grid-cols-4 gap-6 pt-8">
            <div v-for="audience in audiences" :key="audience.label"
              class="p-5 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all group">
              <div class="text-3xl mb-3">{{ audience.emoji }}</div>
              <h3 class="font-bold text-sm group-hover:text-primary transition-colors">{{ audience.label }}</h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Coming Soon -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center space-y-6">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 border border-secondary/20 backdrop-blur-sm">
            <svg class="w-5 h-5 text-secondary" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732l-3.354 1.935-1.18 4.455a1 1 0 01-1.933 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732l3.354-1.935 1.18-4.455A1 1 0 0112 2z" clip-rule="evenodd"/>
            </svg>
            <span class="text-sm font-bold text-secondary">Coming Soon</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black">Fresh Content on the Way</h2>
          <p class="text-lg text-base-content/60 leading-relaxed max-w-2xl mx-auto">
            We're currently preparing our first set of articles and resources. Soon, you'll find valuable content that reflects our real experience in building modern digital solutions.
          </p>

          <div class="grid sm:grid-cols-3 gap-6 pt-8">
            <div class="p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"/>
                </svg>
              </div>
              <h3 class="font-bold mb-2">In-Depth Articles</h3>
              <p class="text-sm text-base-content/60">Detailed guides and technical deep-dives</p>
            </div>
            <div class="p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-secondary/20 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
                </svg>
              </div>
              <h3 class="font-bold mb-2">Practical Tips</h3>
              <p class="text-sm text-base-content/60">Actionable advice you can apply today</p>
            </div>
            <div class="p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-accent/20 hover:shadow-lg transition-all">
              <div class="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                </svg>
              </div>
              <h3 class="font-bold mb-2">Industry Trends</h3>
              <p class="text-sm text-base-content/60">Stay ahead of the technology curve</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 sm:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-primary via-secondary to-primary"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div class="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s;"></div>

      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-white/20 shadow-2xl">
            <div class="text-center text-white">
              <div class="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 sm:mb-8">
                <svg class="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span class="text-sm sm:text-base font-bold">Stay Connected</span>
              </div>

              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                Stay Connected
              </h2>

              <p class="text-lg sm:text-xl opacity-90 mb-4 max-w-2xl mx-auto leading-relaxed">
                Follow KM Software's for upcoming articles, tech insights, and industry updates.
              </p>
              <p class="text-base opacity-80 mb-8 sm:mb-12 max-w-xl mx-auto">
                New articles coming soon — be the first to know.
              </p>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
                <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-base-200 hover:scale-110 border-none shadow-2xl px-12 py-4 transition-all min-w-[260px] group/btn">
                  <span class="text-lg font-bold">Get Notified</span>
                  <svg class="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path>
                  </svg>
                </NuxtLink>
              </div>

              <div class="pt-10 border-t-2 border-white/20">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="font-semibold">Tech Insights</span>
                  </div>
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9 4.804A7.968 7.968 0 005.5 4c-1.255 0-2.443.29-3.5.804v10A7.969 7.969 0 015.5 14c1.669 0 3.218.51 4.5 1.385A7.962 7.962 0 0114.5 14c1.255 0 2.443.29 3.5.804v-10A7.968 7.968 0 0014.5 4c-1.255 0-2.443.29-3.5.804V12a1 1 0 11-2 0V4.804z"/>
                      </svg>
                    </div>
                    <span class="font-semibold">Practical Guides</span>
                  </div>
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="font-semibold">Industry Updates</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: "Blog & Tech Insights | KM Software's",
  description: 'Insights, ideas, and real-world learnings from the world of technology. Read about software development, AI, cloud, security, and digital innovation.',
});

const blogTopics = ref([
  { title: 'Technology trends & insights', bgClass: 'bg-primary/10', textClass: 'text-primary', iconPath: 'M13 7h8m0 0v8m0-8l-8 8-4-4-6 6' },
  { title: 'Software development knowledge', bgClass: 'bg-secondary/10', textClass: 'text-secondary', iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4' },
  { title: 'AI & automation use cases', bgClass: 'bg-accent/10', textClass: 'text-accent', iconPath: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' },
  { title: 'Cybersecurity awareness', bgClass: 'bg-primary/10', textClass: 'text-primary', iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z' },
  { title: 'Cloud & startup tech strategies', bgClass: 'bg-secondary/10', textClass: 'text-secondary', iconPath: 'M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z' }
]);

const blogPosts = ref([
  {
    title: 'Zero Trust Networking in the Era of Remote Developers',
    category: 'Security',
    categoryColor: 'text-primary',
    excerpt: 'A detailed exploration of Zero Trust principles, securing endpoints, and protecting corporate assets without locking down developer productivity.',
    iconPath: 'M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z',
    iconBgClass: 'bg-primary/10',
    iconTextClass: 'text-primary'
  },
  {
    title: 'Why Vue and Nuxt are Winning the Enterprise Market',
    category: 'Web Development',
    categoryColor: 'text-secondary',
    excerpt: 'We analyze the performance, developer experience, and scalability factors that elevate Nuxt 4 as the premier choice for modern web applications.',
    iconPath: 'M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4',
    iconBgClass: 'bg-secondary/10',
    iconTextClass: 'text-secondary'
  },
  {
    title: 'WCAG 2.2 Compliant Design for Maximum Conversion',
    category: 'Design & UX',
    categoryColor: 'text-accent',
    excerpt: 'Exploring the methodology we use to map contrast ratios in SaaS dashboard design to guarantee flawless accessibility metrics.',
    iconPath: 'M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01',
    iconBgClass: 'bg-accent/10',
    iconTextClass: 'text-accent'
  }
]);

const audiences = ref([
  { emoji: '🚀', label: 'Founders' },
  { emoji: '👨‍💻', label: 'Developers' },
  { emoji: '🎓', label: 'Students' },
  { emoji: '💡', label: 'Tech Enthusiasts' }
]);
</script>
