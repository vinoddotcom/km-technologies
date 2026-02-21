<template>
  <div class="min-h-screen bg-gradient-to-b from-base-100 via-base-200 to-base-100 pt-32 pb-24 pt-32">
    <!-- Background Pattern -->
    <div class="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
    
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm mb-6">
          <span class="text-xs font-bold tracking-wider uppercase text-primary">Get in Touch</span>
        </div>
        
        <h1 class="text-4xl sm:text-5xl lg:text-6xl font-black mb-6 tracking-tight">
          <span class="bg-gradient-to-r from-base-content via-primary to-base-content bg-clip-text text-transparent">
            Let's Chat, Reach Out to Us
          </span>
        </h1>
        
        <p class="text-lg sm:text-xl text-base-content/70 max-w-2xl mx-auto leading-relaxed">
          Have questions or feedback? We're here to help. Send us a message, and we'll respond within 24 hours
        </p>
      </div>

      <!-- Main Content Grid -->
      <div class="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
        <!-- Contact Form -->
        <div class="order-2 lg:order-1">
          <div class="bg-base-100 rounded-3xl p-8 lg:p-10 shadow-2xl border border-base-content/10">
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name Fields -->
              <div class="grid sm:grid-cols-2 gap-4">
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">First Name</span>
                  </label>
                  <input 
                    v-model="formData.firstName"
                    type="text" 
                    placeholder="John" 
                    class="input input-bordered w-full focus:input-primary transition-all"
                    required
                  />
                </div>
                
                <div class="form-control">
                  <label class="label">
                    <span class="label-text font-semibold">Last Name</span>
                  </label>
                  <input 
                    v-model="formData.lastName"
                    type="text" 
                    placeholder="Doe" 
                    class="input input-bordered w-full focus:input-primary transition-all"
                    required
                  />
                </div>
              </div>

              <!-- Email -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-semibold">Email Address</span>
                </label>
                <input 
                  v-model="formData.email"
                  type="email" 
                  placeholder="john.doe@example.com" 
                  class="input input-bordered w-full focus:input-primary transition-all"
                  required
                />
              </div>

              <!-- Phone -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-semibold">Phone Number</span>
                </label>
                <input 
                  v-model="formData.phone"
                  type="tel" 
                  placeholder="+1 (234) 567-8900" 
                  class="input input-bordered w-full focus:input-primary transition-all"
                />
              </div>

              <!-- Service Interest -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-semibold">Service Interest</span>
                </label>
                <select 
                  v-model="formData.service"
                  class="select select-bordered w-full focus:select-primary transition-all"
                  required
                >
                  <option value="">Select a service...</option>
                  <option value="ai-ml">AI/ML Solutions</option>
                  <option value="cyber-security">Cyber Security</option>
                  <option value="dedicated-developers">Dedicated Developers</option>
                  <option value="mobile-apps">Mobile Apps</option>
                  <option value="website-development">Website Development</option>
                  <option value="custom-software">Custom Software</option>
                  <option value="consultation">General Consultation</option>
                </select>
              </div>

              <!-- Budget Range -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-semibold">Budget Range</span>
                </label>
                <select 
                  v-model="formData.budget"
                  class="select select-bordered w-full focus:select-primary transition-all"
                >
                  <option value="">Select budget range...</option>
                  <option value="under-10k">Under $10,000</option>
                  <option value="10k-50k">$10,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-plus">$100,000+</option>
                  <option value="not-sure">Not sure yet</option>
                </select>
              </div>

              <!-- Message -->
              <div class="form-control">
                <label class="label">
                  <span class="label-text font-semibold">Message</span>
                </label>
                <textarea 
                  v-model="formData.message"
                  class="textarea textarea-bordered h-32 w-full focus:textarea-primary transition-all resize-none" 
                  placeholder="Tell us about your project..."
                  required
                ></textarea>
              </div>

              <!-- Privacy Policy Checkbox -->
              <div class="form-control">
                <label class="label cursor-pointer justify-start gap-3">
                  <input 
                    v-model="formData.agreedToPrivacy"
                    type="checkbox" 
                    class="checkbox checkbox-primary" 
                    required
                  />
                  <span class="label-text">
                    I agree to the 
                    <a href="/privacy-policy" class="link link-primary font-semibold">privacy policy</a>
                  </span>
                </label>
              </div>

              <!-- Submit Button -->
              <button 
                type="submit" 
                class="btn btn-primary btn-lg w-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all group"
                :disabled="isSubmitting"
              >
                <svg v-if="!isSubmitting" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"></path>
                </svg>
                <span v-if="isSubmitting" class="loading loading-spinner"></span>
                {{ isSubmitting ? 'Sending...' : 'Send Message' }}
                <svg v-if="!isSubmitting" class="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                </svg>
              </button>
            </form>
          </div>
        </div>

        <!-- Contact Info & Image -->
        <div class="order-1 lg:order-2 space-y-6">
          <!-- Contact Cards -->
          <div class="space-y-4">
            <!-- Email Card -->
            <div class="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-6 border border-primary/20 hover:scale-[1.02] transition-all group">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Email</h3>
                  <a href="mailto:info@kmsoftware.com" class="text-primary hover:underline font-medium">
                    info@kmsoftware.com
                  </a>
                  <p class="text-sm text-base-content/60 mt-1">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>

            <!-- Phone Card -->
            <div class="bg-gradient-to-br from-secondary/10 to-secondary/5 rounded-2xl p-6 border border-secondary/20 hover:scale-[1.02] transition-all group">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Phone</h3>
                  <a href="tel:+1234567890" class="text-secondary hover:underline font-medium">
                    +1 (234) 567-890
                  </a>
                  <p class="text-sm text-base-content/60 mt-1">Mon-Fri, 9AM-6PM EST</p>
                </div>
              </div>
            </div>

            <!-- Office Card -->
            <div class="bg-gradient-to-br from-accent/10 to-accent/5 rounded-2xl p-6 border border-accent/20 hover:scale-[1.02] transition-all group">
              <div class="flex items-start gap-4">
                <div class="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <svg class="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-lg mb-1">Office</h3>
                  <p class="font-medium">123 Tech Street</p>
                  <p class="text-sm text-base-content/60">Silicon Valley, CA 94000</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Social Links -->
          <div class="bg-base-100 rounded-2xl p-6 shadow-xl border border-base-content/10">
            <h3 class="font-bold text-lg mb-4">Connect With Us</h3>
            <div class="flex gap-3">
              <a href="https://twitter.com/kmsoftware" target="_blank" class="btn btn-circle btn-outline hover:btn-primary transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="https://linkedin.com/company/kmsoftware" target="_blank" class="btn btn-circle btn-outline hover:btn-primary transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
              </a>
              <a href="https://github.com/kmsoftware" target="_blank" class="btn btn-circle btn-outline hover:btn-primary transition-all">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Success Toast (shown after submission) -->
    <div v-if="showSuccess" class="toast toast-top toast-end z-50">
      <div class="alert alert-success shadow-lg">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
        <span>Message sent successfully! We'll be in touch soon.</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  service: '',
  budget: '',
  message: '',
  agreedToPrivacy: false
});

const isSubmitting = ref(false);
const showSuccess = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;
  
  // Simulate API call
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Show success message
  showSuccess.value = true;
  
  // Reset form
  formData.value = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    service: '',
    budget: '',
    message: '',
    agreedToPrivacy: false
  };
  
  isSubmitting.value = false;
  
  // Hide success message after 5 seconds
  setTimeout(() => {
    showSuccess.value = false;
  }, 5000);
};
</script>
