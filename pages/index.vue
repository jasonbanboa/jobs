<script setup>
const { data: jobs } = await useLazyFetch('/api/jobs');
const filter = useFilter();

const filteredJobs = computed(() => {

  const filtered = {
    value: jobs.value,
  };

  if (filter.value.byContract) {
    filtered.value = filtered.value.filter(({ contract }) => contract === 'Full Time');
  }

  if (filter.value.byLocation) {
    filtered.value = filtered.value.filter(({ location }) => location.toLowerCase().includes(filter.value.byLocation));
  }

  if (filter.value.byTitleOrCompany) {
    filtered.value = filtered.value.filter(({ position, company }) => 
      position.toLowerCase().includes(filter.value.byTitleOrCompany) 
      || company.toLowerCase().includes(filter.value.byTitleOrCompany)
    );
  }

  return filtered.value;
});

</script>


<template>
  <Filter />
  <main class="container">
    <JobListing v-for="job in filteredJobs"
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
  padding: 6rem 0rem;
  gap: 4rem;
}
@media (max-width: 1420px) {
  main.container {
    padding: 6rem 2rem;
    grid-template-columns: repeat(2, 420px);
  }
}

@media (max-width: 950px) {
  main.container {
    padding: 6rem 2rem; 
    grid-template-columns: repeat(1, 420px);
  }
}


@media (max-width: 400px) {
  main.container {
    padding: 6rem 2rem; 
    grid-template-columns: repeat(1, 1fr);
  }
}

</style>