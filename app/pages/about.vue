<template>
  <div class="min-h-screen bg-gradient-to-b from-base-100 via-base-200 to-base-100 pt-32 pb-24">
    <!-- Background Pattern -->
    <div
      class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none">
    </div>

    <!-- Floating Elements -->
    <div class="absolute top-40 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-40 right-10 w-48 h-48 bg-primary/5 rounded-full blur-3xl"></div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- HERO : ABOUT INTRO -->
      <section class=" text-center max-w-5xl mx-auto relative">
        <!-- subtle glow -->
        <div class="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
          <span class="text-lg font-bold tracking-wider uppercase text-primary">About KM Software's</span>
        </div>

        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
          <span class="bg-gradient-to-r from-base-content via-accent to-base-content bg-clip-text text-transparent">
            Engineering the Future with Smart & Secure Technology
          </span>
        </h1>

        <p class="text-xl sm:text-2xl text-base-content/70 leading-relaxed max-w-3xl mx-auto mb-8">
          KM Technologies is a technology-driven IT company specializing in building modern, intelligent,
          and secure digital solutions that empower businesses to grow and innovate.
        </p>

        <!-- Quick Stats -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 max-w-2xl mx-auto">
          <div class="stat bg-base-200/50 backdrop-blur-sm rounded-2xl p-4 hover:bg-base-300/50 transition-colors">
            <div class="stat-value text-3xl text-accent font-black">500+</div>
            <div class="stat-title text-sm opacity-70">Projects Delivered</div>
          </div>
          <div class="stat bg-base-200/50 backdrop-blur-sm rounded-2xl p-4 hover:bg-base-300/50 transition-colors">
            <div class="stat-value text-3xl text-primary font-black">200+</div>
            <div class="stat-title text-sm opacity-70">Happy Clients</div>
          </div>
          <div class="stat bg-base-200/50 backdrop-blur-sm rounded-2xl p-4 hover:bg-base-300/50 transition-colors">
            <div class="stat-value text-3xl text-secondary font-black">50+</div>
            <div class="stat-title text-sm opacity-70">Expert Team</div>
          </div>
          <div class="stat bg-base-200/50 backdrop-blur-sm rounded-2xl p-4 hover:bg-base-300/50 transition-colors">
            <div class="stat-value text-3xl text-info font-black">99%</div>
            <div class="stat-title text-sm opacity-70">Client Retention</div>
          </div>
        </div>
      </section>

      <!-- OUR STORY -->
      <section class="py-24">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-12 items-center">
            <!-- Left: Content -->
            <div class="space-y-8">
              <div class="space-y-6">
                <span class="badge badge-outline badge-lg border-primary/30 text-primary mb-4">
                  <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                  Our Story
                </span>

                <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold">
                  From Vision to Global Impact
                </h2>

                <div class="space-y-4">
                  <p class="text-lg text-base-content/70 leading-relaxed">
                    KM Technologies was founded with a revolutionary vision — to bridge the gap between
                    innovative technology and real-world business needs. What began as a small team of
                    passionate engineers has evolved into a global technology partner trusted by enterprises
                    across multiple industries.
                  </p>

                  <p class="text-lg text-base-content/70 leading-relaxed">
                    Our journey started with a simple yet powerful belief:
                    <span class="font-semibold text-accent">technology should not just solve problems,
                      but create new opportunities for growth and innovation.</span>
                  </p>
                </div>
              </div>

              <!-- Key Milestones -->
              <div class="grid grid-cols-2 gap-4 mt-8">
                <div
                  class="p-4 rounded-xl bg-primary/5 border border-primary/10 hover:border-primary/30 transition-colors">
                  <div class="text-2xl font-black text-primary mb-1">2015</div>
                  <div class="text-sm opacity-80">Company Founded</div>
                </div>
                <div
                  class="p-4 rounded-xl bg-accent/5 border border-accent/10 hover:border-accent/30 transition-colors">
                  <div class="text-2xl font-black text-accent mb-1">2018</div>
                  <div class="text-sm opacity-80">Global Expansion</div>
                </div>
              </div>
            </div>

            <!-- Right: Visual -->
            <div class="relative">
              <div
                class=" rounded-3xl overflow-hidden bg-gradient-to-br from-base-200 to-base-300 p-8 shadow-2xl">
                <div
                  class="aspect-video rounded-2xl bg-gradient-to-br from-primary/10 via-accent/10 to-secondary/10 flex items-center justify-center">
                  <div class="text-center">
                    <div
                      class="text-6xl font-black bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-2">
                      KM</div>
                    <div class="text-lg font-bold text-base-content/70">TECHNOLOGIES</div>
                    <div class="text-sm text-base-content/50 mt-2">Engineering Excellence Since 2015</div>
                  </div>
                </div>

                <!-- Floating Badges -->
                <div class="absolute -top-4 -right-4 flex gap-2">
                  <div class="badge badge-primary badge-lg shadow-lg">Innovation</div>
                  <div class="badge badge-accent badge-lg shadow-lg">Excellence</div>
                </div>
                <div class="absolute -bottom-4 -left-4 flex gap-2">
                  <div class="badge badge-secondary badge-lg shadow-lg">Security</div>
                  <div class="badge badge-info badge-lg shadow-lg">Growth</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHO WE ARE -->
      <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <span class="badge badge-secondary badge-lg mb-4 px-8 py-3 border-2 border-secondary/30 ">
              Who We Are
            </span>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              A Team of Passionate Innovators
            </h2>

            <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
              We are a team of passionate developers, designers, and technology experts with a strong
              focus on quality and innovation. At KM Technologies, we believe technology should not only
              solve problems but also create new opportunities for businesses to scale and succeed.
            </p>
          </div>

          <!-- Team Values -->
          <div class="grid md:grid-cols-3 gap-8 mt-12">
            <!-- Expertise & Excellence -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">Expertise & Excellence</h3>
              <p class="text-base-content/70">Deep technical knowledge combined with a commitment to delivering exceptional quality in every project.</p>
            </div>
            
            <!-- Innovation Driven -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">Innovation Driven</h3>
              <p class="text-base-content/70">Constantly exploring new technologies and methodologies to provide cutting-edge solutions.</p>
            </div>
            
            <!-- Client Partnership -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
              <div class="w-16 h-16 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                </svg>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">Client Partnership</h3>
              <p class="text-base-content/70">Building long-term relationships based on trust, transparency, and mutual success.</p>
            </div>
          </div>

          <!-- Core Principles -->
          <div
            class="mt-16 p-8 rounded-3xl bg-gradient-to-br from-base-100 to-base-200 border-2 border-base-content/10">
            <h3 class="text-2xl font-bold mb-6 text-center">Our Core Principles</h3>
            <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div v-for="(principle, index) in corePrinciples" :key="index"
                class="flex items-start gap-3 p-4 rounded-xl hover:bg-base-300/50 transition-colors">
                <div class="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd" />
                  </svg>
                </div>
                <span class="font-medium">{{ principle }}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHAT WE DO (Specializations) -->
      <section class="py-24">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <span class="badge badge-primary badge-lg mb-4 px-8 py-3 border-2 border-primary/30 ">
              What We Specialize In
            </span>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Our Technology Expertise
            </h2>

            <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
              Our expertise lies in delivering advanced IT solutions tailored to real-world business needs.
            </p>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <!-- Web Development -->
            <div class="group bg-base-100 border-2 border-transparent hover:border-accent hover:bg-base-100 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div class="mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                Web Development
              </h3>
              <p class="text-base-content/70 mb-6">
                Modern, responsive websites built for performance and scalability with clean design and strong functionality.
              </p>
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">React</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Vue.js</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Next.js</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Tailwind</span>
              </div>
            </div>
            
            <!-- App Development -->
            <div class="group bg-base-100 border-2 border-transparent hover:border-accent hover:bg-base-100 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div class="mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                App Development
              </h3>
              <p class="text-base-content/70 mb-6">
                Robust Android and iOS applications that are scalable, secure, and optimized for performance.
              </p>
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Flutter</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">React Native</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Swift</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Kotlin</span>
              </div>
            </div>
            
            <!-- Custom Software -->
            <div class="group bg-base-100 border-2 border-transparent hover:border-accent hover:bg-base-100 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div class="mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                Custom Software
              </h3>
              <p class="text-base-content/70 mb-6">
                Custom-built software solutions designed specifically for your business processes and requirements.
              </p>
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Node.js</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Python</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">.NET</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Java</span>
              </div>
            </div>
            
            <!-- AI & Cyber Security -->
            <div class="group bg-base-100 border-2 border-transparent hover:border-accent hover:bg-base-100 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
              <div class="mb-6">
                <div class="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                AI & Cyber Security
              </h3>
              <p class="text-base-content/70 mb-6">
                Intelligent systems with AI/ML and comprehensive security solutions for modern digital businesses.
              </p>
              <!-- Technologies -->
              <div class="flex flex-wrap gap-2">
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">TensorFlow</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Security Audit</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Pen Testing</span>
                <span class="badge badge-outline badge-sm opacity-70 hover:opacity-100 transition-opacity">Compliance</span>
              </div>
            </div>
          </div>

          <!-- Additional Services -->
          <div class="mt-16 grid md:grid-cols-2 gap-8">
            <div
              class="bg-base-200/50 rounded-2xl p-8 border-2 border-base-content/5 hover:border-primary/30 transition-colors">
              <h3 class="text-2xl font-bold mb-4 text-primary">Enterprise Solutions</h3>
              <p class="text-base-content/70 mb-4">
                Scalable enterprise-grade solutions for large organizations with complex requirements,
                ensuring high availability, security, and performance.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm">
                  <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>Digital Transformation Consulting</span>
                </li>
                <li class="flex items-center gap-2 text-sm">
                  <svg class="w-4 h-4 text-primary" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>Cloud Migration & Optimization</span>
                </li>
              </ul>
            </div>

            <div
              class="bg-base-200/50 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 transition-colors">
              <h3 class="text-2xl font-bold mb-4 text-accent">Support & Maintenance</h3>
              <p class="text-base-content/70 mb-4">
                Comprehensive support and maintenance services to ensure your digital solutions
                remain secure, updated, and optimized for peak performance.
              </p>
              <ul class="space-y-2">
                <li class="flex items-center gap-2 text-sm">
                  <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>24/7 Technical Support</span>
                </li>
                <li class="flex items-center gap-2 text-sm">
                  <svg class="w-4 h-4 text-accent" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clip-rule="evenodd" />
                  </svg>
                  <span>Performance Monitoring & Optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- MISSION & VISION -->
      <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-8">
            <!-- Mission -->
            <div class="group relative bg-base-100 border-2 border-transparent hover:border-primary
                  hover:shadow-2xl rounded-3xl p-10 transition-all duration-500">

              <div
                class="absolute top-6 right-6 text-5xl font-black text-primary/10 group-hover:text-primary/20 transition-colors">
                01
              </div>

              <div class="mb-8">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 
                            flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z">
                    </path>
                  </svg>
                </div>

                <h3 class="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                  Our Mission
                </h3>

                <p class="text-lg text-base-content/70 leading-relaxed">
                  To deliver innovative, secure, and scalable technology solutions that help businesses
                  stay competitive in an ever-evolving digital landscape.
                </p>
              </div>

              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-primary"></div>
                  <span class="font-medium">Drive digital innovation</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-primary"></div>
                  <span class="font-medium">Ensure maximum security</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-primary"></div>
                  <span class="font-medium">Deliver measurable business value</span>
                </div>
              </div>
            </div>

            <!-- Vision -->
            <div class="group relative bg-base-100 border-2 border-transparent hover:border-accent
                  hover:shadow-2xl rounded-3xl p-10 transition-all duration-500">

              <div
                class="absolute top-6 right-6 text-5xl font-black text-accent/10 group-hover:text-accent/20 transition-colors">
                02
              </div>

              <div class="mb-8">
                <div class="w-20 h-20 rounded-2xl bg-gradient-to-br from-accent/10 to-accent/5 
                            flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <svg class="w-10 h-10 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>

                <h3 class="text-2xl font-bold mb-4 group-hover:text-accent transition-colors">
                  Our Vision
                </h3>

                <p class="text-lg text-base-content/70 leading-relaxed">
                  To become a trusted global IT partner known for technical excellence, intelligent solutions,
                  and long-term client success.
                </p>
              </div>

              <div class="space-y-3">
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-accent"></div>
                  <span class="font-medium">Global technology leadership</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-accent"></div>
                  <span class="font-medium">Sustainable business growth</span>
                </div>
                <div class="flex items-center gap-3">
                  <div class="w-2 h-2 rounded-full bg-accent"></div>
                  <span class="font-medium">Industry recognition for excellence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- WHY CHOOSE US -->
      <section class="py-24">
        <div class="max-w-6xl mx-auto">
          <div class="text-center mb-16">
            <span class="badge badge-accent badge-lg mb-4 px-8 py-3 border-2 border-accent/30">
             
              Why Choose Us
            </span>

            <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Your Trusted Technology Partner
            </h2>

            <p class="text-xl text-base-content/70 max-w-3xl mx-auto">
              We go beyond development to build future-ready digital solutions that deliver real business value
            </p>
          </div>

          <!-- Benefits Grid -->
          <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <!-- Strong Expertise -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div class="mb-6">
                <div class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                Strong Expertise
              </h3>
              <p class="text-base-content/70">
                Deep knowledge across multiple technologies and frameworks with certified professionals.
              </p>
            </div>
            
            <!-- Security Focus -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div class="mb-6">
                <div class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                Security Focus
              </h3>
              <p class="text-base-content/70">
                Enterprise-grade security protocols and best practices integrated into every solution.
              </p>
            </div>
            
            <!-- Custom Solutions -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div class="mb-6">
                <div class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                Custom Solutions
              </h3>
              <p class="text-base-content/70">
                Tailored solutions aligned with your business goals and specific requirements.
              </p>
            </div>
            
            <!-- Transparent Communication -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div class="mb-6">
                <div class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                Transparent Communication
              </h3>
              <p class="text-base-content/70">
                Regular updates and clear communication throughout projects with dedicated account managers.
              </p>
            </div>
            
            <!-- Timely Delivery -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div class="mb-6">
                <div class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                Timely Delivery
              </h3>
              <p class="text-base-content/70">
                Commitment to deadlines and project milestones with agile development methodologies.
              </p>
            </div>
            
            <!-- Quality Commitment -->
            <div class="group bg-base-100 rounded-2xl p-8 border-2 border-base-content/5 hover:border-accent/30 hover:shadow-xl transition-all duration-500 hover:-translate-y-2">
              <div class="mb-6">
                <div class="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-7 h-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
              </div>
              <h3 class="text-xl font-bold mb-4 group-hover:text-accent transition-colors">
                Quality Commitment
              </h3>
              <p class="text-base-content/70">
                Rigorous testing and quality assurance processes ensuring excellence in every deliverable.
              </p>
            </div>
          </div>

          <!-- Our Commitment -->
          <div class="mt-16 bg-base-200/50 rounded-3xl p-12 text-center border-2 border-base-content/10">
            <div class="max-w-3xl mx-auto">
              <h3 class="text-3xl font-bold mb-6">
                Our Commitment to You
              </h3>

              <p class="text-xl text-base-content/70 mb-8 leading-relaxed">
                At <span class="font-bold text-accent">KM Technologies</span>, we go beyond development.
                We collaborate with our clients to build future-ready digital solutions that deliver
                real business value and sustainable growth.
              </p>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
                <div class="text-center">
                  <div class="text-3xl font-black text-primary mb-2">✓</div>
                  <div class="text-sm font-medium">Quality First</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-black text-accent mb-2">✓</div>
                  <div class="text-sm font-medium">Client Focused</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-black text-secondary mb-2">✓</div>
                  <div class="text-sm font-medium">Innovation Driven</div>
                </div>
                <div class="text-center">
                  <div class="text-3xl font-black text-info mb-2">✓</div>
                  <div class="text-sm font-medium">Results Oriented</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- SOFT CTA -->
      <section class="py-24 relative">
        <div class="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 blur-3xl"></div>

        <div class="relative max-w-4xl mx-auto">
          <div class="bg-base-100 border-2 border-accent/20 rounded-3xl p-12 text-center 
                     shadow-2xl hover:shadow-3xl transition-all duration-500">

            <span class="badge badge-accent badge-lg mb-6 px-6 py-3">
              <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z">
                </path>
              </svg>
              Let's Connect
            </span>

            <h3 class="text-3xl sm:text-4xl font-bold mb-6">
              Let's Build Something Intelligent & Secure
            </h3>

            <p class="text-xl text-base-content/70 mb-8 max-w-2xl mx-auto leading-relaxed">
              Partner with KM Technologies to transform your ideas into powerful digital solutions
              that drive business growth and innovation.
            </p>

            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <NuxtLink to="/contact" class="btn btn-accent btn-lg px-10 shadow-lg hover:shadow-xl group">
                <span class="flex items-center gap-2">
                  Start Your Project
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6">
                    </path>
                  </svg>
                </span>
              </NuxtLink>

              <NuxtLink to="/services" class="btn btn-outline btn-accent btn-lg px-10 group">
                <span class="flex items-center gap-2">
                  Explore Services
                  <svg class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </NuxtLink>
            </div>

            <p class="mt-10 text-base-content/60 text-sm">
              KM Technologies — Building Smart, Secure & Scalable Digital Solutions
            </p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'About Us | KM Technologies - Engineering the Future with Smart & Secure Technology',
  meta: [
    {
      name: 'description',
      content: 'KM Technologies is a technology-driven IT company specializing in building modern, intelligent, and secure digital solutions that empower businesses to grow and innovate.'
    }
  ]
})

const corePrinciples = [
  'Quality First Approach',
  'Security by Design',
  'Transparent Communication',
  'Timely Delivery',
  'Client-Centric Solutions',
  'Continuous Learning',
  'Ethical Practices',
  'Innovation & Excellence'
]
</script>

<style scoped>
/* Custom scrollbar */
::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  background: #1a1a1a;
}

::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
</style>