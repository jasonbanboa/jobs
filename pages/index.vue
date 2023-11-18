<script setup>
const { data: jobs } = await useLazyFetch('/api/jobs');

</script>


<template>
  <main>
    <JobListing v-for="job in jobs"
     :href="`/jobs/${job.id}`"
     class="jobApplication" 
     :job="job"
    />
    
  </main>
</template>

<style>
main {
  justify-content: center;
  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 2rem;
}
</style>