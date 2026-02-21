<template>
  <div class="min-h-screen bg-base-100 pt-32 pb-24">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
      
      <!-- Header -->
      <div class="mb-12 border-b border-base-content/10 pb-8">
        <h1 class="text-4xl sm:text-5xl font-black tracking-tight text-base-content mb-4">
          Cookie Policy
        </h1>
        <p class="text-base-content/60 text-sm">
          Effective Date: February 21, 2026
        </p>
      </div>

      <!-- Content -->
      <div class="prose prose-base-content prose-h2:text-2xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-p:text-base-content/80 prose-li:text-base-content/80 max-w-none">
        
        <p class="lead text-lg">
          This Cookie Policy explains how KM Software's ("we," "our," or "us") uses cookies, tracking technologies, and metadata logs when you interact with our website. It outlines your rights to decline tracking and clarifies what these minimal technologies do.
        </p>

        <h2>1. What Are Cookies?</h2>
        <p>
          Cookies are small, encrypted text files that a website or its service provider transfers to your computer's hard drive or mobile device memory space through your Web browser (if you allow). They enable the site's systems to recognize the browser and capture certain functional settings. 
        </p>

        <h2>2. Our Approach to Cookies</h2>
        <p>
          As an engineering firm dealing directly with complex code architectures like Cyber Security and AI/ML, we inherently prefer minimalistic marketing mechanisms. We use only essential cookies required to run this digital property flawlessly. Our platform does not employ aggressive, multi-layered adware tracking.
        </p>

        <h2>3. Types of Cookies We Use</h2>
        <ul class="list-disc pl-6 space-y-2 mt-4">
          <li><strong>Essential Cookies (Strictly Necessary):</strong> These include session identifiers linking browser requests to our Nuxt backend and state containers caching variables like <code>km-theme</code> (dark/light themes). Our site will visibly break and lose state functionality without these.</li>
          <li><strong>Performance & Analytics Cookies:</strong> We utilize anonymized data algorithms to measure site load times, layout shifts, error logging, and traffic sources across pages to optimize UX flows continually.</li>
        </ul>

        <h2>4. Your Consent and Management Control</h2>
        <p>
          You have full authority to decline non-essential cookies via the browser banner prompts when initially landing, or later via your browser preferences. Removing our theme state cookies means the site will fall back to its core default layouts across all service pages instead of remembering your preferences.
        </p>

        <p class="mt-8 font-semibold italic text-base-content/60">
          This policy stands strictly in accordance with digital privacy law frameworks including the GDPR standard, honoring transparency and digital hygiene. 
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: 'Cookie Policy | KM Software\'s',
  description: 'A transparent definition of how KM Software\'s utilizes minimalistic cookies to cache performance and interface settings.',
})
</script>
