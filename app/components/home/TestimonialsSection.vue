<template>
  <section class="py-10 sm:py-20 bg-base-100 overflow-hidden">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-12 space-y-4 max-w-3xl mx-auto">
        <div class="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary/10 border border-primary/20">
          <span class="text-sm font-semibold text-primary">Testimonials</span>
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-black">
          What Our <span class="text-primary">Clients Say</span>
        </h2>
        <p class="text-lg text-base-content/60 font-light">
          Real feedback from businesses we've helped grow
        </p>
      </div>

      <!-- Issue 6: Auto-sliding testimonials — one card at a time with smooth transition -->
      <div class="max-w-3xl mx-auto relative">
        <!-- Slide track -->
        <div class="overflow-hidden rounded-2xl">
          <transition
            name="slide-fade"
            mode="out-in"
          >
            <div
              :key="currentIndex"
              class="card bg-base-200/60 border border-primary/15 shadow-lg"
            >
              <div class="card-body p-8 sm:p-10 text-center">
                <!-- Large Quote Icon — Issue 6: highlighted review -->
                <div class="flex justify-center mb-6">
                  <div class="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg class="w-7 h-7 text-primary" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179zm10 0C13.553 16.227 13 15 13 13.011c0-3.5 2.457-6.637 6.03-8.188l.893 1.378c-3.335 1.804-3.987 4.145-4.247 5.621.537-.278 1.24-.375 1.929-.311 1.804.167 3.226 1.648 3.226 3.489a3.5 3.5 0 01-3.5 3.5c-1.073 0-2.099-.49-2.748-1.179z"/>
                    </svg>
                  </div>
                </div>

                <!-- Issue 6: Quote Text — large, highlighted, visually prominent -->
                <blockquote class="text-lg sm:text-xl text-base-content/90 leading-relaxed font-medium italic mb-8 max-w-xl mx-auto">
                  "{{ currentTestimonial.quote }}"
                </blockquote>

                <!-- Star Rating -->
                <div class="flex items-center justify-center gap-1 mb-6">
                  <svg 
                    v-for="i in 5" 
                    :key="i" 
                    class="w-5 h-5" 
                    :class="i <= currentTestimonial.rating ? 'text-warning' : 'text-base-content/20'"
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>

                <!-- Author -->
                <div class="flex items-center justify-center gap-4">
                  <div class="avatar placeholder">
                    <div class="w-12 h-12 rounded-full bg-primary text-primary-content flex items-center justify-center">
                      <span class="text-base font-black">{{ currentTestimonial.initials }}</span>
                    </div>
                  </div>
                  <div class="text-left">
                    <p class="font-bold text-base-content">{{ currentTestimonial.name }}</p>
                    <p class="text-sm text-base-content/60">{{ currentTestimonial.role }}, {{ currentTestimonial.company }}</p>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <!-- Navigation Dots -->
        <div class="flex justify-center items-center gap-2 mt-8">
          <button
            v-for="(_, i) in testimonials"
            :key="i"
            @click="goToSlide(i)"
            class="rounded-full transition-all duration-300"
            :class="i === currentIndex 
              ? 'w-8 h-3 bg-primary' 
              : 'w-3 h-3 bg-base-content/20 hover:bg-primary/50'"
            :aria-label="`Go to testimonial ${i + 1}`"
          ></button>
        </div>

        <!-- Prev / Next Arrows -->
        <button
          @click="prev"
          class="absolute top-1/2 -translate-y-1/2 -left-5 sm:-left-14 btn btn-circle btn-ghost border border-base-content/10 hover:border-primary/40 hover:text-primary"
          aria-label="Previous testimonial"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"/>
          </svg>
        </button>
        <button
          @click="next"
          class="absolute top-1/2 -translate-y-1/2 -right-5 sm:-right-14 btn btn-circle btn-ghost border border-base-content/10 hover:border-primary/40 hover:text-primary"
          aria-label="Next testimonial"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
interface Testimonial {
  quote: string
  name: string
  role: string
  company: string
  initials: string
  rating: number
}

const testimonials = ref<Testimonial[]>([
  {
    quote: "KM Software's transformed our outdated systems into a modern, scalable platform. Their team's expertise and dedication exceeded our expectations.",
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

const currentIndex = ref(0)
let autoSlideInterval: ReturnType<typeof setInterval> | null = null

// Computed to safely access current testimonial without TypeScript errors
const currentTestimonial = computed(() => testimonials.value[currentIndex.value]!)

function goToSlide(index: number) {
  currentIndex.value = index
  resetAutoSlide()
}

function next() {
  currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  resetAutoSlide()
}

function prev() {
  currentIndex.value = (currentIndex.value - 1 + testimonials.value.length) % testimonials.value.length
  resetAutoSlide()
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % testimonials.value.length
  }, 4000) // auto-advance every 4 seconds
}

function resetAutoSlide() {
  if (autoSlideInterval) clearInterval(autoSlideInterval)
  startAutoSlide()
}

onMounted(() => {
  startAutoSlide()
})

onUnmounted(() => {
  if (autoSlideInterval) clearInterval(autoSlideInterval)
})
</script>

<style scoped>
/* Issue 6: Smooth slide-fade transition between testimonials */
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.4s ease;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(40px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-40px);
}
</style>
