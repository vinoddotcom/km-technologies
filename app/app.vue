<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Set default theme on mount
onMounted(() => {
  if (import.meta.client) {
    document.documentElement.setAttribute("data-theme", "business");
  }
});
</script>
