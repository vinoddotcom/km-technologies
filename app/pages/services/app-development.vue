<template>
  <div class="min-h-screen bg-base-100">
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-br from-secondary/5 via-base-100 to-accent/5 pt-24 pb-24 overflow-hidden">
      <!-- Background Pattern -->
      <div class="absolute inset-0 opacity-5">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(236,72,153,0.3),transparent_50%),radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.3),transparent_50%)]"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <!-- Breadcrumbs -->
        <div class="breadcrumbs text-sm mb-8 opacity-70 hover:opacity-100 transition-opacity">
          <ul>
            <li><NuxtLink to="/" class="hover:text-primary transition-colors">Home</NuxtLink></li>
            <li><NuxtLink to="/#services" class="hover:text-primary transition-colors">Services</NuxtLink></li>
            <li>App Development</li>
          </ul>
        </div>
        
        <div class="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <!-- Left: Content -->
          <div class="space-y-8">
            <div>
              <div class="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-secondary/10 to-accent/10 border border-secondary/20 mb-6 hover:scale-105 transition-transform">
                <svg class="w-5 h-5 text-secondary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                </svg>
                <span class="text-sm font-bold text-secondary">Mobile App Development Services</span>
              </div>
              
              <h1 class="text-3xl sm:text-4xl lg:text-[44px] font-black mb-5 leading-tight tracking-tight text-base-content">
                Build High-Performance
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-accent via-primary to-secondary mt-1">
                  Mobile Apps That Users Love
                </span>
              </h1>
              
              <p class="text-base sm:text-lg text-base-content/70 leading-relaxed max-w-lg mb-6">
                At KM Software's, we design and develop scalable, secure, and feature-rich mobile applications tailored for startups, growing businesses, and enterprises worldwide.
              </p>
              <ul class="space-y-2 mb-2">
                <li v-for="point in heroPoints" :key="point" class="flex items-center gap-2 text-sm font-semibold text-base-content/80">
                  <svg class="w-4 h-4 text-secondary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"/></svg>
                  {{ point }}
                </li>
              </ul>
            </div>
            
            <div class="flex flex-col sm:flex-row gap-4">
              <NuxtLink to="/contact" class="btn btn-secondary btn-lg px-10 shadow-2xl hover:shadow-secondary/50 hover:scale-110 transition-all group">
                <span class="text-lg font-bold">Get a Free Consultation</span>
                <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
              
              <NuxtLink to="/portfolio" class="btn btn-outline btn-lg px-10 hover:scale-105 transition-all group">
                <svg class="w-6 h-6 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
                </svg>
                <span class="text-lg">View Portfolio</span>
              </NuxtLink>
            </div>
            
            <!-- Trust Stats -->
            <div class="stats stats-vertical sm:stats-horizontal shadow-xl bg-gradient-to-br from-base-200/80 to-base-300/50 backdrop-blur-lg border border-white/10 rounded-2xl">
              <div v-for="stat in trustStats" :key="stat.title" class="stat hover:bg-secondary/5 transition-colors">
                <div class="stat-figure text-secondary">
                  <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                      <path v-html="stat.iconPath"></path>
                    </svg>
                  </div>
                </div>
                <div class="stat-title text-xs font-semibold opacity-70">{{ stat.title }}</div>
                <div class="stat-value text-4xl text-secondary">{{ stat.value }}</div>
                <div class="stat-desc text-xs opacity-60">{{ stat.desc }}</div>
              </div>
            </div>
          </div>
          
          <!-- Right: App Mockup Showcase -->
          <div class="relative hidden lg:block">
            <div class="absolute inset-0 bg-gradient-to-br from-secondary/20 to-accent/20 rounded-3xl blur-3xl"></div>
            <div class="relative flex justify-center items-center gap-6">
              <!-- Phone Mockup -->
              <div class="relative">
                <div class="w-72 h-[600px] rounded-[3rem] bg-gradient-to-br from-base-300 to-base-100 p-3 shadow-2xl border-8 border-base-content/10 hover:scale-105 transition-transform duration-500">
                  <div class="w-full h-full rounded-[2.5rem] bg-gradient-to-br from-secondary/20 to-accent/20 overflow-hidden">
                    <!-- Screen Content Placeholder -->
                    <div class="p-6 space-y-4">
                      <div class="h-8 bg-white/20 rounded-lg animate-pulse"></div>
                      <div class="h-32 bg-white/30 rounded-2xl animate-pulse" style="animation-delay: 0.1s;"></div>
                      <div class="grid grid-cols-2 gap-3">
                        <div class="h-24 bg-white/20 rounded-xl animate-pulse" style="animation-delay: 0.2s;"></div>
                        <div class="h-24 bg-white/20 rounded-xl animate-pulse" style="animation-delay: 0.3s;"></div>
                      </div>
                      <div class="h-48 bg-white/25 rounded-2xl animate-pulse" style="animation-delay: 0.4s;"></div>
                    </div>
                  </div>
                </div>
                <!-- Platform Badges -->
                <div class="absolute -bottom-4 left-1/2 -translate-x-1/2 flex gap-3">
                  <div class="badge badge-primary badge-lg shadow-xl font-bold">iOS</div>
                  <div class="badge badge-accent badge-lg shadow-xl font-bold">Android</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Platforms & Technologies -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200 relative overflow-hidden">
      <div class="absolute inset-0 opacity-5">
        <div class="absolute top-20 left-10 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 right-10 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 space-y-4 max-w-4xl mx-auto">
          <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 backdrop-blur-sm mb-4 hover:scale-105 transition-transform">
            <svg class="w-5 h-5 text-primary animate-pulse" fill="currentColor" viewBox="0 0 20 20">
              <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
            </svg>
            <span class="text-sm font-bold text-primary">📱 Platforms We Build For</span>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Multi-Platform Expertise
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 font-light">
            We create mobile experiences across all major platforms using modern technologies.
          </p>
        </div>

        <div class="flex flex-col gap-6 max-w-5xl mx-auto">
          <div v-for="(platform, index) in platforms" :key="platform.name"
            class="group card md:card-side bg-gradient-to-br from-base-100 to-base-200 shadow-xl hover:shadow-2xl border-2 border-base-content/10 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 overflow-hidden">
            
            <div class="md:w-1/3 p-8 flex flex-col items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/5 border-b md:border-b-0 md:border-r border-base-content/10 relative">
              <div class="relative z-10 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-500 shadow-lg mb-4 text-primary">
                <svg class="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="platform.iconPath"></path>
                </svg>
              </div>
              <h3 class="relative z-10 text-3xl font-black text-center group-hover:text-primary transition-colors">
                {{ platform.name }}
              </h3>
            </div>
            
            <div class="card-body md:w-2/3 justify-center p-8">
              <p class="text-lg text-base-content/70 mb-6 leading-relaxed">{{ platform.description }}</p>
              
              <div class="space-y-3 mt-auto">
                <div class="text-sm font-bold text-base-content/50 uppercase tracking-widest flex items-center gap-2">
                  <span class="w-8 h-[1px] bg-base-content/20"></span> Technologies
                </div>
                <div class="flex flex-wrap gap-2">
                  <div v-for="tech in platform.technologies" :key="tech"
                    class="px-4 py-2 rounded-lg bg-base-100 border border-base-content/10 hover:border-primary/30 hover:bg-primary/5 transition-all text-sm font-semibold hover:-translate-y-0.5 shadow-sm text-base-content/80">
                    {{ tech }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- App Development Services -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-accent badge-lg mb-4">🚀 Our Mobile App Expertise</div>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            Apps We Build Across Industries
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 max-w-3xl mx-auto font-light">
            We build powerful mobile applications across multiple industries and use cases.
          </p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          <div v-for="(service, index) in appTypes" :key="index"
            class="group card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-base-content/5 hover:border-accent/20 text-center relative overflow-hidden">
            <div class="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="card-body items-center p-8">
              <div class="w-20 h-20 rounded-full bg-gradient-to-br from-accent/5 to-transparent flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-accent/10 transition-all duration-500 border border-accent/10">
                <svg class="w-10 h-10 text-accent group-hover:-rotate-6 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" v-html="service.iconPath"></path>
                </svg>
              </div>
              <h3 class="card-title text-2xl font-black mb-4 group-hover:text-accent transition-colors">{{ service.title }}</h3>
              <p class="text-base-content/70 leading-relaxed mb-6">{{ service.description }}</p>
              <div class="mt-auto w-full pt-6 border-t border-base-content/5">
                <div class="text-xs font-bold text-base-content/40 mb-3 uppercase tracking-widest">Examples</div>
                <div class="flex flex-wrap justify-center gap-2">
                  <div v-for="example in service.examples" :key="example" class="badge badge-accent badge-outline px-3 py-2 uppercase text-[10px] tracking-wider">{{ example }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Development Process - Snake Path -->
    <section class="py-24 bg-gradient-to-b from-base-100 to-base-200 overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-info badge-lg mb-4">Our Process</div>
          </div>
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
            From Idea to App Store
          </h2>
          <p class="text-xl sm:text-2xl text-base-content/60 font-light">
            A proven 6-step process to deliver your mobile app
          </p>
        </div>

        <!-- Snake Path Container: SVG-driven snake/zigzag process -->
        <div class="process-snake-outer">
          <!-- LEFT EDGE LABEL: Start -->
          <div class="process-edge-label process-edge-label--start">Start</div>

          <!-- MAIN SNAKE SVG -->
          <!--
            Layout (matching reference image):
            Dot 1 (left) → curve right-up → Dot 2 (center) → Dot 3 (right) → curve down right side → Dot 4 (right-mid) → curve left → Dot 5 (center-left) → curve down → Dot 6 (bottom-left)

            ViewBox: 1000 x 760
            Dot positions:
              1: (160, 160)  — left
              2: (460, 120)  — center (slightly above center)
              3: (780, 160)  — right
              4: (760, 390)  — right-mid
              5: (360, 490)  — center-left
              6: (160, 650)  — bottom-left
          -->
          <svg
            class="process-snake-svg"
            viewBox="0 0 1000 760"
            preserveAspectRatio="xMidYMid meet"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient id="processPathGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.9" />
                <stop offset="50%" stop-color="#6366f1" stop-opacity="0.9" />
                <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.9" />
              </linearGradient>
              <linearGradient id="processDotGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#2563eb" />
                <stop offset="100%" stop-color="#1d4ed8" />
              </linearGradient>
              <filter id="processPathGlow" x="-10%" y="-10%" width="120%" height="120%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              <filter id="processDotGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            <!-- Snake path -->
            <path
              d="
                M 160,160
                C 260,100 360,100 460,120
                C 580,140 680,140 780,160
                C 840,175 860,260 840,330
                C 820,380 800,400 760,390
                C 700,375 580,430 460,470
                C 410,487 380,492 360,490
                C 280,487 220,560 200,610
                C 180,650 165,655 160,650
              "
              fill="none"
              stroke="url(#processPathGrad)"
              stroke-width="2.5"
              stroke-linecap="round"
              filter="url(#processPathGlow)"
              opacity="0.9"
            />

            <!-- === DOT 1 (160, 160) === -->
            <circle cx="160" cy="160" r="34" fill="#2563eb" fill-opacity="0.2" filter="url(#processDotGlow)" />
            <circle cx="160" cy="160" r="26" fill="url(#processDotGrad)" stroke="#ffffff" stroke-width="2.5" stroke-opacity="0.3" />
            <text x="160" y="160" text-anchor="middle" dominant-baseline="central" font-size="18" font-weight="900" fill="#ffffff" font-family="inherit">1</text>

            <!-- STEP 1 TEXT — right of dot 1 -->
            <text x="204" y="148" text-anchor="start" font-size="14" font-weight="800" fill="#3b82f6" font-family="inherit">{{ processSteps[0]?.title }}</text>
            <foreignObject x="204" y="158" width="240" height="80">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11px;line-height:1.45;color:rgba(0,0,0,0.55);font-family:inherit;margin:0;padding:0;">
                {{ processSteps[0]?.description }}
              </div>
            </foreignObject>

            <!-- === DOT 2 (460, 120) === -->
            <circle cx="460" cy="120" r="34" fill="#2563eb" fill-opacity="0.2" filter="url(#processDotGlow)" />
            <circle cx="460" cy="120" r="26" fill="url(#processDotGrad)" stroke="#ffffff" stroke-width="2.5" stroke-opacity="0.3" />
            <text x="460" y="120" text-anchor="middle" dominant-baseline="central" font-size="18" font-weight="900" fill="#ffffff" font-family="inherit">2</text>

            <!-- STEP 2 TEXT — above / right of dot 2 -->
            <text x="500" y="50" text-anchor="start" font-size="14" font-weight="800" fill="#3b82f6" font-family="inherit">{{ processSteps[1]?.title }}</text>
            <foreignObject x="500" y="62" width="260" height="60">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11px;line-height:1.45;color:rgba(0,0,0,0.55);font-family:inherit;margin:0;padding:0;">
                {{ processSteps[1]?.description }}
              </div>
            </foreignObject>

            <!-- === DOT 3 (780, 160) === -->
            <circle cx="780" cy="160" r="34" fill="#2563eb" fill-opacity="0.2" filter="url(#processDotGlow)" />
            <circle cx="780" cy="160" r="26" fill="url(#processDotGrad)" stroke="#ffffff" stroke-width="2.5" stroke-opacity="0.3" />
            <text x="780" y="160" text-anchor="middle" dominant-baseline="central" font-size="18" font-weight="900" fill="#ffffff" font-family="inherit">3</text>

            <!-- STEP 3 TEXT — right of dot 3 -->
            <text x="824" y="146" text-anchor="start" font-size="14" font-weight="800" fill="#3b82f6" font-family="inherit">{{ processSteps[2]?.title }}</text>
            <foreignObject x="824" y="158" width="170" height="80">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11px;line-height:1.45;color:rgba(0,0,0,0.55);font-family:inherit;margin:0;padding:0;">
                {{ processSteps[2]?.description }}
              </div>
            </foreignObject>

            <!-- === DOT 4 (760, 390) === -->
            <circle cx="760" cy="390" r="34" fill="#2563eb" fill-opacity="0.2" filter="url(#processDotGlow)" />
            <circle cx="760" cy="390" r="26" fill="url(#processDotGrad)" stroke="#ffffff" stroke-width="2.5" stroke-opacity="0.3" />
            <text x="760" y="390" text-anchor="middle" dominant-baseline="central" font-size="18" font-weight="900" fill="#ffffff" font-family="inherit">4</text>

            <!-- STEP 4 TEXT — right of dot 4 -->
            <text x="804" y="374" text-anchor="start" font-size="14" font-weight="800" fill="#3b82f6" font-family="inherit">{{ processSteps[3]?.title }}</text>
            <foreignObject x="804" y="386" width="190" height="80">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11px;line-height:1.45;color:rgba(0,0,0,0.55);font-family:inherit;margin:0;padding:0;">
                {{ processSteps[3]?.description }}
              </div>
            </foreignObject>

            <!-- === DOT 5 (360, 490) === -->
            <circle cx="360" cy="490" r="34" fill="#2563eb" fill-opacity="0.2" filter="url(#processDotGlow)" />
            <circle cx="360" cy="490" r="26" fill="url(#processDotGrad)" stroke="#ffffff" stroke-width="2.5" stroke-opacity="0.3" />
            <text x="360" y="490" text-anchor="middle" dominant-baseline="central" font-size="18" font-weight="900" fill="#ffffff" font-family="inherit">5</text>

            <!-- STEP 5 TEXT — left of dot 5 -->
            <text x="316" y="473" text-anchor="end" font-size="14" font-weight="800" fill="#3b82f6" font-family="inherit">{{ processSteps[4]?.title }}</text>
            <foreignObject x="56" y="485" width="250" height="80">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11px;line-height:1.45;color:rgba(0,0,0,0.55);font-family:inherit;margin:0;padding:0;text-align:right;">
                {{ processSteps[4]?.description }}
              </div>
            </foreignObject>

            <!-- === DOT 6 (160, 650) === -->
            <circle cx="160" cy="650" r="34" fill="#2563eb" fill-opacity="0.2" filter="url(#processDotGlow)" />
            <circle cx="160" cy="650" r="26" fill="url(#processDotGrad)" stroke="#ffffff" stroke-width="2.5" stroke-opacity="0.3" />
            <text x="160" y="650" text-anchor="middle" dominant-baseline="central" font-size="18" font-weight="900" fill="#ffffff" font-family="inherit">6</text>

            <!-- STEP 6 TEXT — right of dot 6 -->
            <text x="204" y="634" text-anchor="start" font-size="14" font-weight="800" fill="#3b82f6" font-family="inherit">{{ processSteps[5]?.title }}</text>
            <foreignObject x="204" y="646" width="300" height="90">
              <div xmlns="http://www.w3.org/1999/xhtml" style="font-size:11px;line-height:1.45;color:rgba(0,0,0,0.55);font-family:inherit;margin:0;padding:0;">
                {{ processSteps[5]?.description }}
              </div>
            </foreignObject>

            <!-- READY APP label at end of path - positioned to the right of dot 6 -->
            <text x="560" y="640" text-anchor="middle" font-size="15" font-weight="800" fill="rgba(0,0,0,0.35)" font-family="inherit" letter-spacing="2">READY APP</text>
          </svg>

          <!-- RIGHT EDGE LABEL: Ready App (visible on wider screens) -->
          <div class="process-edge-label process-edge-label--end">Ready App</div>
        </div>
      </div>
    </section>

    <!-- Tech Stack Section -->
    <section class="py-24 bg-gradient-to-b from-base-200 to-base-100 relative overflow-hidden">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-16 space-y-4">
          <div class="inline-block">
            <div class="badge badge-primary badge-lg mb-4">⚙️ Technology Stack</div>
          </div>
          <h2 class="text-4xl sm:text-5xl font-black mb-4">Modern Tools. Proven Performance.</h2>
          <p class="text-xl text-base-content/60 font-light max-w-2xl mx-auto">
            We leverage modern tools and frameworks to ensure performance, scalability, and security.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div v-for="stack in techStacks" :key="stack.category"
            class="card bg-base-100 border border-base-content/10 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
            <div class="card-body p-8">
              <div class="w-12 h-12 rounded-xl flex items-center justify-center mb-4 text-2xl" :class="stack.bg">{{ stack.icon }}</div>
              <h3 class="text-lg font-black mb-4 text-base-content">{{ stack.category }}</h3>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in stack.items" :key="tech"
                  class="px-3 py-1.5 rounded-lg bg-base-200 border border-base-content/10 text-sm font-semibold text-base-content/80 hover:border-primary/40 hover:bg-primary/5 transition-all">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Why Choose Us Section -->
    <section class="py-24 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.03]">
        <div class="absolute top-1/3 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/3 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
      </div>
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-6xl mx-auto">
          <div class="grid lg:grid-cols-2 gap-16 items-center">
            <!-- Left -->
            <div class="space-y-6">
              <div class="inline-block">
                <div class="badge badge-secondary badge-lg mb-4">🎯 Why Choose KM Software's?</div>
              </div>
              <h2 class="text-4xl sm:text-5xl font-black leading-tight">
                We Don't Just Build Apps.
                <span class="block text-transparent bg-clip-text bg-gradient-to-r from-secondary to-primary">We Build Experiences.</span>
              </h2>
              <p class="text-lg text-base-content/65 leading-relaxed">
                We focus on building mobile apps that are not just visually appealing but also reliable, scalable, and performance-driven.
              </p>
              <div class="space-y-4 pt-2">
                <div v-for="reason in whyChooseUs" :key="reason.title"
                  class="flex items-start gap-4 p-4 rounded-2xl bg-base-200/60 border border-base-content/5 hover:border-secondary/20 hover:bg-secondary/5 transition-all group">
                  <div class="w-10 h-10 rounded-xl bg-secondary/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform text-lg">{{ reason.icon }}</div>
                  <div>
                    <div class="font-bold text-base-content text-sm mb-0.5">{{ reason.title }}</div>
                    <div class="text-sm text-base-content/60">{{ reason.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
            <!-- Right -->
            <div class="grid grid-cols-2 gap-4">
              <div v-for="metric in whyMetrics" :key="metric.value"
                class="card bg-gradient-to-br from-base-200 to-base-100 border border-base-content/10 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all text-center p-6">
                <div class="text-3xl font-black mb-1" :class="metric.color">{{ metric.value }}</div>
                <div class="text-sm font-semibold text-base-content/70">{{ metric.label }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Pricing Section -->
    <section class="py-24 sm:py-32 bg-base-100 relative overflow-hidden">
      <div class="absolute inset-0 opacity-[0.02]">
        <div class="absolute top-1/4 right-1/4 w-96 h-96 bg-primary rounded-full blur-3xl"></div>
        <div class="absolute bottom-1/4 left-1/4 w-96 h-96 bg-secondary rounded-full blur-3xl"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="text-center mb-16 space-y-6 max-w-3xl mx-auto">
          <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight">
            Flexible pricing for
            <span class="block mt-2">every project</span>
          </h2>
          <p class="text-lg sm:text-xl text-base-content/60 font-light">
            Choose the engagement model that fits your budget and timeline.
            <br class="hidden sm:block"/>All plans include quality assurance and post-launch support.
          </p>
        </div>

        <div class="grid lg:grid-cols-3 gap-6 lg:gap-8 max-w-7xl mx-auto mb-16">
          <!-- Fixed Price -->
          <div class="card bg-gradient-to-br from-secondary/10 to-secondary/5 backdrop-blur-sm border border-secondary/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div class="card-body p-8">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Fixed Price</h3>
                <p class="text-sm text-base-content/60">Complete project delivery</p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black text-base-content">$15k+</span>
                </div>
                <p class="text-sm text-base-content/60">Based on project scope</p>
              </div>
              
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Detailed project scope</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Fixed timeline</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">UI/UX design included</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">App store deployment</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn btn-outline border-2 hover:btn-primary w-full group-hover:scale-105 transition-all">
                Get a quote
              </NuxtLink>
            </div>
          </div>

          <!-- Time & Materials (Popular) -->
          <div class="relative card bg-gradient-to-br from-primary/10 to-primary/5 backdrop-blur-sm border-2 border-primary shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:-translate-y-3 lg:scale-105 group">
            <div class="absolute -top-4 left-1/2 -translate-x-1/2">
              <div class="badge badge-primary badge-lg px-6 py-3 shadow-xl font-bold border-2 border-primary-content/20">
                MOST POPULAR
              </div>
            </div>
            
            <div class="card-body p-8 pt-10">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Time & Materials</h3>
                <p class="text-sm text-base-content/60">Flexible hourly engagement</p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">$50-80</span>
                  <span class="text-xl text-base-content/50">/hour</span>
                </div>
                <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-success/10 border border-success/20">
                  <svg class="w-4 h-4 text-success" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span class="text-xs font-semibold text-success">Pay as you go</span>
                </div>
              </div>
              
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Flexible scope changes</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Agile development</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Weekly billing</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Transparent tracking</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-primary mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/90 font-medium">Priority support</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn btn-primary btn-lg w-full shadow-xl hover:shadow-2xl group-hover:scale-105 transition-all">
                <span class="font-bold">Get started</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </NuxtLink>
            </div>
          </div>

          <!-- Dedicated Team -->
          <div class="card bg-gradient-to-br from-success/10 to-success/5 backdrop-blur-sm border border-success/30 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
            <div class="card-body p-8">
              <div class="mb-6">
                <h3 class="text-2xl font-bold text-base-content mb-1">Dedicated Team</h3>
                <p class="text-sm text-base-content/60">Full development team</p>
              </div>
              
              <div class="mb-8">
                <div class="flex items-baseline gap-2 mb-2">
                  <span class="text-5xl font-black text-base-content">$25k+</span>
                  <span class="text-xl text-base-content/50">/month</span>
                </div>
                <p class="text-sm text-base-content/60">Minimum 3 months</p>
              </div>
              
              <div class="space-y-3 mb-8 flex-grow">
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">2-4 developers</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">UI/UX designer</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">Project manager</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">QA specialist</span>
                </div>
                <div class="flex items-start gap-3">
                  <svg class="w-5 h-5 text-success mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span class="text-sm text-base-content/80">DevOps support</span>
                </div>
              </div>
              
              <NuxtLink to="/contact" class="btn btn-outline border-2 hover:btn-success w-full group-hover:scale-105 transition-all">
                Contact us
              </NuxtLink>
            </div>
          </div>
        </div>

        <!-- Trust Indicators -->
        <div class="max-w-5xl mx-auto">
          <div class="divider text-base-content/40 text-sm">DELIVERED 150+ MOBILE APPS</div>
          
          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-secondary/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">4.9/5</div>
              <div class="text-sm text-base-content/60">avg rating</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-primary/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">12-16 weeks</div>
              <div class="text-sm text-base-content/60">avg delivery</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-accent/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">100%</div>
              <div class="text-sm text-base-content/60">on-time delivery</div>
            </div>
            
            <div class="text-center p-6 rounded-2xl bg-base-200/50 backdrop-blur-sm border border-base-content/5 hover:border-success/30 transition-all group">
              <div class="w-12 h-12 mx-auto mb-4 rounded-xl bg-success/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                <svg class="w-6 h-6 text-success" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                </svg>
              </div>
              <div class="text-2xl font-black text-base-content mb-1">95%</div>
              <div class="text-sm text-base-content/60">client retention</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-gradient-to-b from-base-200 via-base-100 to-base-200">
      <div class="container mx-auto px-4 sm:px-6 lg:px-8">
        <div class="max-w-4xl mx-auto">
          <div class="text-center mb-16 space-y-4">
            <div class="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-warning/10 border border-warning/20 backdrop-blur-sm mb-4">
              <svg class="w-5 h-5 text-warning" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-bold text-warning">FAQ</span>
            </div>
            <h2 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6">
              Frequently Asked Questions
            </h2>
            <p class="text-xl sm:text-2xl text-base-content/60 font-light">
              Everything you need to know about mobile app development
            </p>
          </div>

          <div class="space-y-4">
            <div v-for="(faq, index) in faqs" :key="index"
              class="collapse collapse-plus bg-gradient-to-br from-base-100 to-base-200 rounded-2xl border-2 border-base-content/10 hover:border-secondary/30 hover:shadow-2xl transition-all duration-300 group">
              <input type="radio" name="faq-accordion" :checked="index === 0" />
              <div class="collapse-title text-lg sm:text-xl font-bold group-hover:text-secondary transition-colors pr-12">
                {{ faq.question }}
              </div>
              <div class="collapse-content">
                <p class="text-base-content/70 leading-relaxed pt-2 text-base">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-24 sm:py-32 relative overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-secondary via-accent to-primary"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.1),transparent_50%)]"></div>
      <div class="absolute top-10 right-10 w-32 h-32 sm:w-64 sm:h-64 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 4s;"></div>
      <div class="absolute bottom-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 6s;"></div>
      
      <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div class="max-w-4xl mx-auto">
          <div class="bg-white/10 backdrop-blur-xl rounded-3xl p-8 sm:p-12 md:p-16 border-2 border-white/20 shadow-2xl">
            <div class="text-center text-white">
              <div class="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 mb-6 sm:mb-8">
                <svg class="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"/>
                </svg>
                <span class="text-sm sm:text-base font-bold">💬 Ready to Build Your Mobile App?</span>
              </div>
              
              <h2 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-6 sm:mb-8 leading-tight">
                Turn Your Idea Into a
                <span class="block opacity-90">Powerful Mobile Experience</span>
              </h2>
              
              <p class="text-base sm:text-lg md:text-xl opacity-90 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed">
                From concept to launch, our team at KM Software's is here to help you succeed. Let's build something great together.
              </p>
              
              <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-10">
                <NuxtLink to="/contact" class="btn btn-lg bg-white text-secondary hover:bg-base-200 hover:scale-110 border-none shadow-2xl px-10 transition-all min-w-[260px] group">
                  <span class="text-lg font-bold">👉 Get a Free Consultation Today</span>
                  <svg class="w-6 h-6 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                  </svg>
                </NuxtLink>
              </div>
              
              <div class="pt-8 border-t-2 border-white/20">
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">150+</div>
                    <div class="text-sm opacity-90">Apps Launched</div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">5M+</div>
                    <div class="text-sm opacity-90">Downloads</div>
                  </div>
                  <div class="flex flex-col items-center gap-2">
                    <div class="text-3xl font-black">4.9/5</div>
                    <div class="text-sm opacity-90">Client Rating</div>
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
useHead({
  title: "Mobile App Development Services | iOS & Android - KM Software's",
  meta: [
    {
      name: 'description',
      content: "KM Software's designs and develops scalable, secure, and feature-rich mobile applications for iOS, Android & Cross-Platform tailored for startups, growing businesses, and enterprises worldwide."
    },
    {
      property: 'og:title',
      content: "Mobile App Development Services | iOS & Android - KM Software's"
    },
    {
      property: 'og:description',
      content: 'Build high-performance mobile apps that users love. Native iOS, Android & Cross-Platform development with modern UI/UX design and scalable architecture.'
    }
  ]
})

const heroPoints = ref([
  'iOS, Android & Cross-Platform Apps',
  'Modern UI/UX Design',
  'Scalable Architecture',
  'End-to-End Development'
])

const trustStats = ref([
  {
    title: 'Apps Deployed',
    value: '150+',
    desc: 'On App/Play Store',
    iconPath: 'd="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"'
  },
  {
    title: 'Total Downloads',
    value: '5M+',
    desc: 'Combined installs',
    iconPath: 'd="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"'
  },
  {
    title: 'Average Rating',
    value: '4.9',
    desc: 'App Store rating',
    iconPath: 'd="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"'
  }
])

const platforms = ref([
  {
    name: 'iOS Development',
    description: 'Native iPhone and iPad apps built using Swift and the latest Apple frameworks for unmatched performance and seamless integration with the Apple ecosystem.',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    technologies: ['Swift', 'SwiftUI', 'UIKit', 'Core Data', 'ARKit', 'CoreML']
  },
  {
    name: 'Android Development',
    description: 'High-performance Android apps using Kotlin and modern Android SDKs, delivering smooth experiences across the full Android device ecosystem.',
    iconPath: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z',
    technologies: ['Kotlin', 'Jetpack Compose', 'Room', 'ML Kit', 'Firebase', 'WorkManager']
  },
  {
    name: 'Cross-Platform',
    description: 'Build once, deploy everywhere using Flutter and React Native for faster time-to-market without compromising on quality or user experience.',
    iconPath: 'M4 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM14 5a1 1 0 011-1h4a1 1 0 011 1v7a1 1 0 01-1 1h-4a1 1 0 01-1-1V5z',
    technologies: ['Flutter', 'React Native', 'Expo', 'Dart', 'TypeScript', 'Redux']
  }
])

const appTypes = ref([
  {
    title: 'E-Commerce Apps',
    description: 'Mobile shopping apps with secure payments, real-time order tracking, and seamless product catalog experiences.',
    iconPath: 'M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z',
    examples: ['Retail', 'Marketplace', 'Fashion']
  },
  {
    title: 'On-Demand Apps',
    description: 'Food delivery, ride-sharing, and service booking platforms with real-time tracking and smart dispatch.',
    iconPath: 'M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z',
    examples: ['Delivery', 'Rides', 'Booking']
  },
  {
    title: 'Social Networking Apps',
    description: 'Community platforms with chat, feeds, and real-time engagement features for meaningful connections.',
    iconPath: 'M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z',
    examples: ['Networks', 'Dating', 'Forums']
  },
  {
    title: 'Healthcare Apps',
    description: 'Telemedicine, health tracking, and medical appointment apps built to HIPAA-compliant standards.',
    iconPath: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
    examples: ['Telemedicine', 'Fitness', 'Wellness']
  },
  {
    title: 'FinTech Apps',
    description: 'Secure banking, digital wallet, and financial management apps with biometric auth and encryption.',
    iconPath: 'M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
    examples: ['Banking', 'Wallets', 'Trading']
  },
  {
    title: 'Education Apps',
    description: 'E-learning platforms with courses, quizzes, and live sessions for engaging educational experiences.',
    iconPath: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253',
    examples: ['LMS', 'Courses', 'Live Sessions']
  },
  {
    title: 'Enterprise Apps',
    description: 'Internal business apps for operations, automation, and productivity to streamline your workflows.',
    iconPath: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4',
    examples: ['ERP', 'CRM', 'Automation']
  }
])

const techStacks = ref([
  {
    category: 'Languages & Frameworks',
    icon: '💻',
    bg: 'bg-blue-50',
    items: ['Swift', 'Kotlin', 'Flutter', 'React Native', 'Dart', 'TypeScript']
  },
  {
    category: 'Backend',
    icon: '⚡',
    bg: 'bg-purple-50',
    items: ['Node.js', 'Python', 'Firebase', 'Laravel', 'GraphQL', 'REST APIs']
  },
  {
    category: 'Database',
    icon: '🗄️',
    bg: 'bg-green-50',
    items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Firebase', 'Redis', 'SQLite']
  }
])

const whyChooseUs = ref([
  { icon: '👨‍💻', title: 'Experienced Mobile App Developers', desc: 'Senior engineers with 5+ years in iOS, Android & cross-platform development.' },
  { icon: '🏗️', title: 'Scalable & Secure App Architecture', desc: 'Built to grow with your user base from day one, with security at every layer.' },
  { icon: '🎨', title: 'User-Centric Design Approach', desc: 'Beautiful, intuitive interfaces that delight users and drive retention.' },
  { icon: '⚡', title: 'Agile Development Process', desc: 'Iterative sprints with regular demos so you always know exactly where things stand.' },
  { icon: '🚀', title: 'On-Time Delivery', desc: 'We commit to timelines and deliver — 98% on-time delivery rate across all projects.' },
  { icon: '🛡️', title: 'Dedicated Support Team', desc: 'Post-launch monitoring, bug fixes, and ongoing maintenance to keep your app performing.' }
])

const whyMetrics = ref([
  { value: '150+', label: 'Apps Delivered', color: 'text-secondary' },
  { value: '98%', label: 'On-Time Delivery', color: 'text-primary' },
  { value: '5M+', label: 'App Downloads', color: 'text-accent' },
  { value: '4.9/5', label: 'Client Rating', color: 'text-success' }
])

const processSteps = ref([
  {
    title: 'Discovery & Strategy',
    description: 'We sign an NDA, refine your app idea, outline features, and plan delivery from prototype to MVP to full product.',
    duration: '1-2 weeks'
  },
  {
    title: 'Analysis & Planning',
    description: 'We select technologies, plan architecture, estimate costs, and organize the project into milestones or Agile sprints.',
    duration: '1-2 weeks'
  },
  {
    title: 'UI/UX Design',
    description: "We create wireframes and high-fidelity UI/UX designs to simulate the app's real user experience.",
    duration: '2-3 weeks'
  },
  {
    title: 'Full App Development',
    description: 'We design the product architecture, assign tasks, integrate third-party tools, and develop according to the release schedule.',
    duration: '8-12 weeks'
  },
  {
    title: 'App Testing & QA',
    description: 'Testing runs alongside development, with weekly releases sent for your approval before moving to the next sprint.',
    duration: '2-3 weeks'
  },
  {
    title: 'Deployment → Support → Scaling',
    description: 'We launch your app, handle backend deployment, and provide support. As traction grows, we scale it on the right cloud platforms to handle millions of users.',
    duration: 'Ongoing'
  }
])

const faqs = ref([
  {
    question: 'How long does it take to develop a mobile app?',
    answer: 'A typical mobile app takes 12-16 weeks from concept to launch, though simple apps may take 8 weeks and complex apps can take 20+ weeks. The timeline depends on features, platform (native vs cross-platform), design complexity, and third-party integrations.'
  },
  {
    question: 'Should I build a native app or use cross-platform?',
    answer: 'Native apps (separate iOS and Android) offer the best performance and access to all platform features, ideal for complex apps. Cross-platform (React Native/Flutter) is cost-effective and faster to market, perfect for MVPs and apps with standard features. We\'ll recommend based on your specific needs.'
  },
  {
    question: 'What happens after the app is launched?',
    answer: 'We provide 30-90 days of free bug fixes post-launch. After that, we offer maintenance plans that include monitoring, updates for new OS versions, performance optimization, security patches, and feature enhancements. We also help with app marketing and ASO (App Store Optimization).'
  },
  {
    question: 'Can you help me get my app approved on app stores?',
    answer: 'Yes! We handle the entire submission process for both App Store and Play Store. We ensure your app meets all guidelines, prepare required assets, write descriptions, and manage the review process. We have a 98% first-time approval rate.'
  },
  {
    question: 'Do you sign NDAs and ensure IP protection?',
    answer: 'Absolutely. We sign NDAs before any project discussion. All code and intellectual property belong to you from day one. We use secure development practices, code repositories with access controls, and can work within your own infrastructure if needed.'
  }
])
</script>

<style scoped>
/* ============================================================
   SNAKE / ZIGZAG PROCESS SECTION
   ============================================================ */

/* Outer wrapper — provides relative context for edge labels */
.process-snake-outer {
  position: relative;
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 0 2rem;
}

/* The SVG fills the container responsively */
.process-snake-svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

/* ── PATH ── */
.process-snake-path {
  opacity: 0.85;
  transition: opacity 0.3s;
}
.process-snake-outer:hover .process-snake-path {
  opacity: 1;
}

/* ── DOTS ── */
.process-dot-outer {
  fill: oklch(var(--s) / 0.18);
}
.process-dot-inner {
  fill: oklch(var(--s));
  stroke: oklch(var(--b1));
  stroke-width: 3;
  transition: transform 0.3s ease, fill 0.3s ease;
  transform-origin: center;
  transform-box: fill-box;
}
.process-snake-outer:hover .process-dot-inner {
  fill: oklch(var(--p));
}

/* ── DOT NUMBERS ── */
.process-dot-label {
  font-size: 20px;
  font-weight: 900;
  fill: oklch(var(--sc));
  font-family: inherit;
  user-select: none;
  pointer-events: none;
}

/* ── STEP TITLE (SVG text) ── */
.process-step-title {
  font-size: 14px;
  font-weight: 800;
  fill: oklch(var(--s));
  font-family: inherit;
  letter-spacing: 0.01em;
}

/* ── STEP DESCRIPTION inside foreignObject ── */
.process-step-desc {
  font-size: 11px;
  line-height: 1.45;
  color: oklch(var(--bc) / 0.65);
  font-family: inherit;
  margin: 0;
  padding: 0;
  text-align: left;
}
.process-step-desc--right {
  text-align: right;
}

/* ── READY APP SVG label ── */
.process-ready-label {
  font-size: 16px;
  font-weight: 800;
  fill: oklch(var(--bc) / 0.5);
  font-family: inherit;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

/* ── EDGE LABELS (Start / Ready App) ── */
.process-edge-label {
  position: absolute;
  font-size: 0.85rem;
  font-weight: 700;
  color: oklch(var(--bc) / 0.45);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}
.process-edge-label--start {
  /* Position near dot 1 — top-left of SVG */
  top: 9%;
  left: 0;
}
.process-edge-label--end {
  /* Hidden — label is inside SVG */
  display: none;
}

/* ── Responsive: hide edge label on small screens ── */
@media (max-width: 640px) {
  .process-edge-label {
    display: none;
  }
  .process-step-title {
    font-size: 11px;
  }
  .process-step-desc {
    font-size: 9px;
  }
  .process-dot-label {
    font-size: 16px;
  }
}
</style>
