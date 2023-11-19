<script setup>
const route = useRoute();
const { data: job } = await useFetch(`/api/jobs/${route.params.id}`);
</script>


<template>
  <JobDetailsHeader :job="job" />
</template>