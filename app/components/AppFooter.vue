<template>
  <footer class="relative bg-base-200 dark:bg-base-300">
    <!-- Decorative Top Border -->
    <div class="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <!-- Company Info -->
        <div class="space-y-6">
          <div class="flex items-center">
            <img src="/logo.png" alt="KM Software's" class="h-10 w-auto object-contain" />
          </div>
          <p class="text-base-content/90 font-medium text-sm leading-relaxed">
            Delivering cutting-edge IT solutions that transform businesses and drive innovation forward.
          </p>
          <!-- Social Links — Issue 7: WhatsApp icon added -->
          <div class="flex items-center gap-3">
            <!-- LinkedIn -->
            <a 
              href="#" 
              class="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-primary-content border-base-content/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="LinkedIn"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <!-- Twitter/X -->
            <a 
              href="#" 
              class="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-primary-content border-base-content/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="Twitter"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
              </svg>
            </a>
            <!-- GitHub -->
            <a 
              href="#" 
              class="btn btn-circle btn-sm bg-base-100 hover:bg-primary hover:text-primary-content border-base-content/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="GitHub"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <!-- WhatsApp — Issue 7: Added WhatsApp icon -->
            <a 
              href="https://wa.me/917668901013"
              target="_blank"
              rel="noopener noreferrer"
              class="btn btn-circle btn-sm bg-base-100 hover:bg-[#25D366] hover:text-white border-base-content/10 transition-all duration-300 hover:scale-110 hover:shadow-lg"
              aria-label="WhatsApp"
            >
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Services — Issue 8: Headings are now bolder and larger for better visibility -->
        <div>
          <h3 class="text-xl font-black text-base-content mb-2">Services</h3>
          <div class="w-8 h-1 bg-primary rounded-full mb-5"></div>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/services/website-development" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Website Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/app-development" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                App Development
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/custom-software" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Custom Software
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/dedicated-developers" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Dedicated Developers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/ai-ml" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                AI & ML
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/cyber-security" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Cyber Security
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/cloud-and-devops" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Cloud & DevOps
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/services/it-consulting" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                IT Consulting
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Company — Issue 8: Same heading treatment -->
        <div>
          <h3 class="text-xl font-black text-base-content mb-2">Company</h3>
          <div class="w-8 h-1 bg-primary rounded-full mb-5"></div>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/about" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                About Us
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/careers" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Careers
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/portfolio" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Portfolio
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/case-studies" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Case Studies
              </NuxtLink>
            </li>
            <li>
              <NuxtLink to="/blog" class="text-base-content/90 font-medium text-sm hover:text-primary transition-colors duration-300 flex items-center gap-2 group">
                <span class="w-1 h-1 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                Blog
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Contact — Issue 8: Same heading treatment -->
        <div>
          <h3 class="text-xl font-black text-base-content mb-2">Contact</h3>
          <div class="w-8 h-1 bg-primary rounded-full mb-5"></div>
          <ul class="space-y-4">
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
              </svg>
              <div>
                <p class="text-base-content/90 font-medium text-sm">Email</p>
                <a href="mailto:Info@kmsoftwares.com" class="text-primary hover:underline text-sm font-medium">
                  Info@kmsoftwares.com
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
              <div>
                <p class="text-base-content/90 font-medium text-sm">Phone</p>
                <a href="tel:+917668901013" class="text-primary hover:underline text-sm font-medium">
                  +91 76689 01013
                </a>
              </div>
            </li>
            <li class="flex items-start gap-3">
              <svg class="w-5 h-5 text-primary mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
              <div>
                <p class="text-base-content/90 font-medium text-sm">Address</p>
                <p class="text-base-content/90 font-medium text-sm">
                  123 Tech Street<br />
                  Silicon Valley, CA 94000
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <!-- Trust Badges -->
      <!-- <div class="grid grid-cols-2 md:grid-cols-3 gap-4 py-8 border-t border-base-content/10">
        <div class="flex items-center gap-3 p-4 rounded-xl bg-base-100/50">
          <div class="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
            <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
          <div>
            <p class="font-bold text-sm text-base-content/90">ISO Certified</p>
            <p class="text-xs text-base-content/60">Quality Assured</p>
          </div>
        </div>
        <div class="flex items-center gap-3 p-4 rounded-xl bg-base-100/50">
          <div class="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center">
            <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <div>
            <p class="font-bold text-sm text-base-content/90">SOC 2 Compliant</p>
            <p class="text-xs text-base-content/60">Data Secure</p>
          </div>
        </div>
        <div class="flex items-center gap-3 p-4 rounded-xl bg-base-100/50 col-span-2 md:col-span-1">
          <div class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
            <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
            </svg>
          </div>
          <div>
            <p class="font-bold text-sm text-base-content/90">GDPR Ready</p>
            <p class="text-xs text-base-content/60">Privacy First</p>
          </div>
        </div>
      </div> -->

      <!-- Bottom Bar -->
      <div class="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-base-content/10">
        <p class="text-base-content/60 text-sm text-center md:text-left">
          © {{ currentYear }} KM Software's. All rights reserved.
        </p>
        <div class="flex items-center gap-6">
          <NuxtLink to="/privacy-policy" class="text-base-content/80 font-medium text-sm hover:text-primary transition-colors duration-300">
            Privacy Policy
          </NuxtLink>
          <NuxtLink to="/terms-of-service" class="text-base-content/80 font-medium text-sm hover:text-primary transition-colors duration-300">
            Terms of Service
          </NuxtLink>
          <NuxtLink to="/cookie-policy" class="text-base-content/80 font-medium text-sm hover:text-primary transition-colors duration-300">
            Cookie Policy
          </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>
