<template>
  <section class="py-10 sm:py-14 bg-base-100">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-success/10 border border-success/20">
          <span class="text-sm font-semibold text-success">Testimonials</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black">
          What Our <span class="text-primary">Clients Say</span>
        </h2>
        <p class="text-lg text-base-content/60 font-light">
          Real feedback from businesses we've helped grow
        </p>
      </div>

      <!-- Testimonials Carousel -->
      <div class="max-w-5xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div 
            v-for="testimonial in testimonials" 
            :key="testimonial.name"
            class="card bg-base-200/50 border border-base-content/5 hover:border-primary/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
          >
            <div class="card-body p-6">
              <!-- Quote Icon -->
              <div class="text-primary/20 mb-2">
                <svg class="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                </svg>
              </div>

              <!-- Quote Text -->
              <p class="text-base-content/80 leading-relaxed text-sm italic flex-grow">
                "{{ testimonial.quote }}"
              </p>

              <!-- Rating -->
              <div class="flex items-center gap-0.5 my-3">
                <svg 
                  v-for="i in 5" 
                  :key="i" 
                  class="w-4 h-4" 
                  :class="i <= testimonial.rating ? 'text-warning' : 'text-base-content/20'"
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                </svg>
              </div>

              <!-- Author -->
              <div class="flex items-center gap-3 pt-3 border-t border-base-content/10">
                <div class="avatar placeholder">
                  <div class="w-10 rounded-full bg-primary/10 text-primary">
                    <span class="text-sm font-bold">{{ testimonial.initials }}</span>
                  </div>
                </div>
                <div>
                  <p class="font-bold text-sm text-base-content">{{ testimonial.name }}</p>
                  <p class="text-xs text-base-content/60">{{ testimonial.role }}, {{ testimonial.company }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  initials: string;
  rating: number;
}

const testimonials = ref<Testimonial[]>([
  {
    quote: "KM Global Tech transformed our outdated systems into a modern, scalable platform. Their team's expertise and dedication exceeded our expectations.",
    name: "Sarah Johnson",
    role: "CTO",
    company: "TechCorp Inc",
    initials: "SJ",
    rating: 5
  },
  {
    quote: "The mobile app they developed for us has significantly improved our customer engagement. Professional team with excellent communication throughout.",
    name: "Michael Chen",
    role: "Founder",
    company: "StartupHub",
    initials: "MC",
    rating: 5
  },
  {
    quote: "Outstanding AI solution that automated our data analysis processes. The team understood our needs perfectly and delivered on time.",
    name: "Emily Rodriguez",
    role: "Data Director",
    company: "Analytics Pro",
    initials: "ER",
    rating: 5
  },
  {
    quote: "Their cybersecurity audit identified critical vulnerabilities we didn't know existed. Highly recommended for security-conscious businesses.",
    name: "David Park",
    role: "IT Manager",
    company: "SecureFinance",
    initials: "DP",
    rating: 5
  },
  {
    quote: "The dedicated development team became an extension of our company. Flexible, skilled, and always ready to go the extra mile.",
    name: "Lisa Thompson",
    role: "Product Lead",
    company: "InnovateCo",
    initials: "LT",
    rating: 5
  },
  {
    quote: "From concept to deployment, the team guided us through every step. Our e-commerce platform now handles 3x more traffic seamlessly.",
    name: "James Wilson",
    role: "CEO",
    company: "ShopGlobal",
    initials: "JW",
    rating: 5
  },
])
</script>
