<script setup>
const { data: jobs } = await useLazyFetch('/api/jobs');

</script>


<template>
  <main>
    <JobListing v-for="job in jobs"
     :href="`/jobs/${job.id}`"
     :job="job"
    />
    
  </main>
</template>

<style>
main {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 420px);
  gap: 4rem;
}
</style>