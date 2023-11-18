<script setup>
const { data: jobs } = await useLazyFetch('/api/jobs');

</script>


<template>
  <main class="container">
    <JobListing v-for="job in jobs"
     :href="`/jobs/${job.id}`"
     :job="job"
    />
    
  </main>
</template>

<style scoped>
main {
  display: grid;
  grid-template-columns: repeat(3, 420px);
  justify-content: center;
  padding: 12rem 0rem 6rem;
  gap: 4rem;
}
</style>