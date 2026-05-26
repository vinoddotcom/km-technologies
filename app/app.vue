<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Set light theme as the default for SSR and client to prevent any black-to-light flash
useHead({
  htmlAttrs: {
    'data-theme': 'km-theme'
  }
});
</script>
