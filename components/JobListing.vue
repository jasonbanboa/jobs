<script setup lang="ts">
defineProps<{job: Partial<JobPosting>}>();

</script>


<template>
  <a 
  :href="`${job.id}`"
  class="jobApplication"
  >
    <div class="logo" :style="`background-color: ${job.logoBackground};`">
      <img :src="`${job.logo}`" :alt="`${job.company}`">
    </div>
    <p class="flex">
      <span>{{ job.postedAt }}</span>
      |
      <span>{{ job.contract }}</span>      
    </p>
    <h3>{{ job.position }}</h3>
    <p>{{ job.company }}</p>
    <h4>{{ job.location }}</h4>
  </a>
</template>

<style>
.flex {
  display: flex;
  gap: 10px;
}

.jobApplication {
  padding: 1rem;
  border-radius: 30px;
  height: 275px;
  background-color: var(--background-color-elements);
} 
</style>