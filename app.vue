<script setup>
const theme = useTheme();
</script>
<template>
  <div id="app" :class="theme">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>