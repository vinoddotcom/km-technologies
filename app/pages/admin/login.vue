<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-br from-base-200 via-base-100 to-base-200 p-4">
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 8s;"></div>
      <div class="absolute bottom-20 right-20 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse" style="animation-duration: 12s;"></div>
    </div>

    <div class="relative z-10 w-full max-w-md">
      <!-- Logo -->
      <div class="text-center mb-8">
        <div class="w-16 h-16 mx-auto rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 shadow-lg">
          <span class="text-white font-black text-2xl">K</span>
        </div>
        <h1 class="text-3xl font-black tracking-tight">Admin Dashboard</h1>
        <p class="text-base-content/60 mt-2">Sign in to manage your website</p>
      </div>

      <!-- Login Card -->
      <div class="bg-base-100 rounded-3xl p-8 shadow-2xl border border-base-content/10">
        <form @submit.prevent="handleLogin" class="space-y-5">
          <!-- Error -->
          <div v-if="error" class="alert alert-error shadow-sm">
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
            <span class="text-sm">{{ error }}</span>
          </div>

          <!-- Email -->
          <div class="form-control">
            <label class="label"><span class="label-text font-semibold">Email Address</span></label>
            <input
              v-model="email"
              type="email"
              placeholder="admin@kmsoftware.com"
              class="input input-bordered w-full focus:input-primary transition-all"
              required
            />
          </div>

          <!-- Password -->
          <div class="form-control">
            <label class="label"><span class="label-text font-semibold">Password</span></label>
            <input
              v-model="password"
              type="password"
              placeholder="••••••••"
              class="input input-bordered w-full focus:input-primary transition-all"
              required
            />
          </div>

          <!-- Submit -->
          <button
            type="submit"
            class="btn btn-primary btn-lg w-full shadow-xl hover:shadow-2xl hover:scale-[1.02] transition-all"
            :disabled="isSubmitting"
          >
            <span v-if="isSubmitting" class="loading loading-spinner"></span>
            {{ isSubmitting ? 'Signing in...' : 'Sign In' }}
          </button>
        </form>
      </div>

      <!-- Back to website -->
      <div class="text-center mt-6">
        <NuxtLink to="/" class="text-sm text-base-content/50 hover:text-primary transition-colors">
          ← Back to website
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false, // No layout for login page
});

useSeoMeta({ title: 'Admin Login | KM Software' });

const { login, user } = useAuth();
const email = ref('');
const password = ref('');
const error = ref('');
const isSubmitting = ref(false);

// If already logged in, redirect
onMounted(async () => {
  const { fetchUser } = useAuth();
  await fetchUser();
  if (user.value) {
    navigateTo('/admin');
  }
});

const handleLogin = async () => {
  error.value = '';
  isSubmitting.value = true;

  try {
    await login(email.value, password.value);
    navigateTo('/admin');
  } catch (err: any) {
    error.value = err?.data?.statusMessage || 'Invalid email or password';
  } finally {
    isSubmitting.value = false;
  }
};
</script>
