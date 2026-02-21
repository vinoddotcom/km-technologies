<template>
  <div>
    <!-- Hero Section -->
    <HomeHeroSection />
    
    <!-- Services Overview -->
    <HomeServicesSection />
    
    <!-- Technology Stack -->
    <HomeTechStackSection />
    
    <!-- Development Process -->
    <HomeProcessSection />
    
    <!-- Why Choose Us -->
    <HomeWhyChooseSection />
    
    <!-- Portfolio / Case Studies -->
    <HomeCaseStudiesSection />
    
    <!-- Client Testimonials -->
    <HomeTestimonialsSection />
    
    <!-- Industries We Serve -->
    <HomeIndustriesSection />
    
    <!-- Call to Action -->
    <HomeCTASection />
  </div>
</template>

<script setup lang="ts">
// SEO Meta
useSeoMeta({
  title: 'KM Global Tech - Scalable Digital Solutions for Your Business',
  description: 'Web, Mobile & Software Development Services Tailored for Growth. 10+ years experience, 100+ projects delivered. Get a free consultation today.',
  ogTitle: 'KM Global Tech - Scalable Digital Solutions',
  ogDescription: 'Transform your business with our expert IT solutions. Web development, mobile apps, AI/ML, cyber security, and more.',
  ogType: 'website',
})

// Page meta
definePageMeta({
  layout: 'default'
})
</script>
