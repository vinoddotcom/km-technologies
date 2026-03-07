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
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"/>
            </svg>
            <span class="text-sm font-bold text-primary">Careers at KM Software's</span>
          </div>

          <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-base-content leading-tight">
            Grow With Us,
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-2">
              Build the Future
            </span>
          </h1>

          <p class="text-lg sm:text-xl text-base-content/70 leading-relaxed max-w-3xl mx-auto">
            At KM Software's, we're building a team of passionate innovators who love solving real-world problems through technology. We believe great products come from great people — and we're always looking for talent that wants to grow, learn, and make an impact.
          </p>

          <p class="text-base text-base-content/60 max-w-2xl mx-auto">
            Even if we're not actively hiring for multiple roles, we're always open to connecting with exceptional individuals.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <a href="#open-positions" class="btn btn-primary btn-lg px-10 shadow-2xl hover:shadow-primary/50 hover:scale-105 transition-all group">
              <span class="flex items-center gap-2">
                View Opportunities
                <svg class="w-5 h-5 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </span>
            </a>
            <a href="#send-resume" class="btn btn-outline btn-primary btn-lg px-8 group hover:scale-105 transition-all">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <span>Send Your Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Work With Us -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="badge badge-primary badge-lg">Why Join Us</div>
          <h2 class="text-4xl sm:text-5xl font-black">Why Work With Us?</h2>
          <p class="text-xl text-base-content/60 max-w-2xl mx-auto font-light">
            We offer more than just a job — we offer growth and purpose
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          <div v-for="perk in whyWorkWithUs" :key="perk.title"
            class="flex items-start gap-4 p-6 bg-base-100 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all group">
            <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
              <svg class="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>
              </svg>
            </div>
            <div>
              <h3 class="font-bold mb-1">{{ perk.title }}</h3>
              <p class="text-sm text-base-content/60 leading-relaxed">{{ perk.desc }}</p>
            </div>
          </div>
        </div>

        <p class="text-center text-base-content/60 font-medium text-lg">We grow together as a team.</p>
      </div>
    </section>

    <!-- Life at KM Software's -->
    <section class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="badge badge-secondary badge-lg">Culture</div>
          <h2 class="text-4xl sm:text-5xl font-black">Life at KM Software's</h2>
          <p class="text-xl text-base-content/60 max-w-2xl mx-auto font-light">
            We value people, creativity, and innovation
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="(item, index) in lifeAt" :key="item.title"
            class="bg-gradient-to-br from-base-100 to-base-200 p-8 rounded-3xl border border-base-content/5 hover:border-primary/20 hover:shadow-xl transition-all group text-center">
            <div class="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform"
              :class="[index === 0 ? 'bg-primary/10' : index === 1 ? 'bg-secondary/10' : 'bg-accent/10']">
              <svg class="w-8 h-8" :class="[index === 0 ? 'text-primary' : index === 1 ? 'text-secondary' : 'text-accent']" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="item.iconPath" />
              </svg>
            </div>
            <h3 class="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{{ item.title }}</h3>
            <p class="text-base-content/70 leading-relaxed">{{ item.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Who Should Apply -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <div class="space-y-6">
              <div class="badge badge-accent badge-lg">Who We're Looking For</div>
              <h2 class="text-4xl sm:text-5xl font-black">Who Should Apply?</h2>
              <p class="text-lg text-base-content/60 leading-relaxed">
                We're always happy to connect with talented individuals who share our passion for building and learning.
              </p>
              <p class="text-base text-base-content/70 font-medium">
                If you love building and learning — you'll fit right in.
              </p>
            </div>

            <div class="space-y-4">
              <div v-for="candidate in idealCandidates" :key="candidate"
                class="flex items-center gap-4 p-5 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-md transition-all group">
                <div class="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20 transition-colors">
                  <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <span class="font-semibold text-base-content/80 group-hover:text-base-content transition-colors">{{ candidate }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Opportunities at KM Software's -->
    <section class="py-24 bg-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="badge badge-primary badge-lg">Opportunities</div>
          <h2 class="text-4xl sm:text-5xl font-black">Opportunities at KM Software's</h2>
          <p class="text-xl text-base-content/60 max-w-3xl mx-auto font-light">
            While we may not always have multiple open positions, we frequently offer various ways to collaborate
          </p>
        </div>

        <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto mb-10">
          <div v-for="opp in opportunities" :key="opp.title"
            class="p-6 bg-base-200 rounded-2xl border border-base-content/5 hover:border-primary/20 hover:shadow-lg transition-all group text-center">
            <div class="text-3xl mb-4">{{ opp.emoji }}</div>
            <h3 class="font-bold mb-2 group-hover:text-primary transition-colors">{{ opp.title }}</h3>
            <p class="text-sm text-base-content/60 leading-relaxed">{{ opp.desc }}</p>
          </div>
        </div>

        <p class="text-center text-base-content/60 font-medium">We believe in building long-term relationships with talent.</p>
      </div>
    </section>

    <!-- Open Positions -->
    <section id="open-positions" class="py-24 bg-gradient-to-b from-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <div class="badge badge-secondary badge-lg">Current Openings</div>
            <h2 class="text-4xl sm:text-5xl font-black">Open Positions</h2>
            <p class="text-xl text-base-content/60 font-light">
              Explore our current opportunities
            </p>
          </div>

          <div class="space-y-6">
            <div v-for="job in openPositions" :key="job.title"
              class="bg-base-100 border-2 border-base-content/10 p-6 sm:p-8 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-6 hover:shadow-xl hover:border-primary/30 transition-all group">
              <div>
                <div class="flex items-center gap-3 mb-2">
                  <h3 class="text-xl font-bold text-base-content group-hover:text-primary transition-colors">{{ job.title }}</h3>
                  <span class="badge badge-primary badge-sm">{{ job.type }}</span>
                </div>
                <p class="text-base-content/60 text-sm mb-4">{{ job.description }}</p>
                <div class="flex items-center gap-4 text-sm font-medium text-base-content/70">
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    {{ job.location }}
                  </span>
                  <span class="flex items-center gap-1">
                    <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {{ job.commitment }}
                  </span>
                </div>
              </div>
              <NuxtLink to="/contact" class="btn btn-primary sm:w-auto w-full group-hover:scale-105 transition-transform">
                Apply Now
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Send Your Resume -->
    <section id="send-resume" class="py-24 bg-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-3xl mx-auto text-center space-y-6">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 backdrop-blur-sm">
            <svg class="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span class="text-sm font-bold text-accent">Send Your Resume</span>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black">Think You're a Good Fit?</h2>
          <p class="text-lg text-base-content/60 leading-relaxed max-w-2xl mx-auto">
            We'd still love to hear from you. Share your resume, portfolio, or GitHub profile with us. If there's a match, we'll reach out when an opportunity opens up.
          </p>
          <div class="pt-4">
            <NuxtLink to="/contact" class="btn btn-primary btn-lg px-12 shadow-xl hover:shadow-primary/50 hover:scale-105 transition-all group">
              <svg class="w-5 h-5 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
              </svg>
              <span>Submit Your Profile</span>
            </NuxtLink>
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
                  <path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"/>
                </svg>
                <span class="text-sm sm:text-base font-bold">Let's Grow Together</span>
              </div>

              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
                Let's Grow Together
              </h2>

              <p class="text-lg sm:text-xl opacity-90 mb-4 max-w-2xl mx-auto leading-relaxed">
                Your next big opportunity might start here. Join KM Software's and be part of a journey where learning never stops and innovation never slows down.
              </p>

              <div class="flex flex-col sm:flex-row gap-6 justify-center items-center mt-10 mb-12">
                <NuxtLink to="/contact" class="btn btn-lg bg-white text-primary hover:bg-base-200 hover:scale-110 border-none shadow-2xl px-12 py-4 transition-all min-w-[260px] group/btn">
                  <span class="text-lg font-bold">Submit Your Profile</span>
                  <svg class="w-6 h-6 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </NuxtLink>
              </div>

              <div class="pt-10 border-t-2 border-white/20">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clip-rule="evenodd"/>
                        <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
                      </svg>
                    </div>
                    <span class="font-semibold">Real Projects</span>
                  </div>
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0z"/>
                      </svg>
                    </div>
                    <span class="font-semibold">Continuous Learning</span>
                  </div>
                  <div class="flex flex-col items-center gap-3 p-4 rounded-2xl bg-white/10 backdrop-blur-sm hover:bg-white/15 transition-all">
                    <div class="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                      <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                      </svg>
                    </div>
                    <span class="font-semibold">Great Culture</span>
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
  title: "Careers at KM Software's | Join Our Team",
  description: 'Join KM Software\'s team of passionate innovators. We offer real-world projects, continuous learning, and a culture of growth. Explore our career opportunities.',
});

const whyWorkWithUs = ref([
  { title: 'Real-world project experience', desc: 'Work on live projects for clients across industries and build solutions that matter.' },
  { title: 'Learning-focused environment', desc: 'We invest in your growth with mentorship, learning resources, and hands-on training.' },
  { title: 'Friendly & collaborative culture', desc: 'A supportive team where ideas are heard, discussed, and celebrated.' },
  { title: 'Modern technologies', desc: 'Work with cutting-edge tools like AI, cloud-native frameworks, and modern stacks.' },
  { title: 'Exposure to global clients', desc: 'Gain international experience and work on projects for businesses worldwide.' },
  { title: 'Flexible work environment', desc: 'We support remote work, flexible hours, and a healthy work-life balance.' }
]);

const lifeAt = ref([
  {
    title: 'Supportive Team',
    desc: 'Work in a collaborative environment where ideas are valued, feedback is constructive, and every voice matters.',
    iconPath: 'M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z'
  },
  {
    title: 'Continuous Learning',
    desc: 'We encourage upskilling, experimentation, and personal growth through real challenges and mentorship.',
    iconPath: 'M13 10V3L4 14h7v7l9-11h-7z'
  },
  {
    title: 'Meaningful Work',
    desc: 'Be part of projects that create real business impact for startups, growing businesses, and enterprises.',
    iconPath: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  }
]);

const idealCandidates = ref([
  'Passionate developers and designers',
  'Curious learners and freshers',
  'Self-driven problem solvers',
  'Tech enthusiasts building their careers'
]);

const opportunities = ref([
  { emoji: '🎓', title: 'Internships', desc: 'Kick-start your career with real-world experience and mentorship.' },
  { emoji: '🤝', title: 'Freelance', desc: 'Collaborate on short-term projects with flexible commitments.' },
  { emoji: '📋', title: 'Project-Based', desc: 'Join us for specific projects and deliver great results.' },
  { emoji: '💼', title: 'Full-Time', desc: 'Grow with us long-term as a core team member.' }
]);

const openPositions = ref([
  {
    title: 'Senior Frontend Engineer',
    type: 'Remote',
    description: 'Build high-performance Vue/Nuxt applications with modern, responsive interfaces and excellent UX.',
    location: 'Anywhere',
    commitment: 'Full-time'
  },
  {
    title: 'AI & Machine Learning Lead',
    type: 'Remote',
    description: 'Lead our AI initiatives and engineer solutions that implement LLMs and generative models for our clients.',
    location: 'North America / EU',
    commitment: 'Full-time'
  }
]);
</script>
