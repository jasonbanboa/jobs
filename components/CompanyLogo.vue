<script setup lang="ts">
defineProps<{ job: { 
  logoBackground: string,  
  logo: string,
  company: string,  
} }>();
</script>
<template>
  <div 
    :style="`background-color: ${job.logoBackground};`"
  >
    <img :src="job.logo.replace(/^\./, '')" :alt="job.company">
  </div>
</template>