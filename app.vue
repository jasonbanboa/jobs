<script setup>
const theme = useTheme();
</script>
<template>
  <div id="app" :class="theme">
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>