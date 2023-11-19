<script setup lang="ts">

defineProps<{
  job: JobPosting,
}>();

</script>

<template>  
  <section class="container-m">
    <CompanyLogo class="logo" :job="job" />
    <div class="companyDetails">
      <div class="wrap">
        <h4>{{ job.company }}</h4>
        <p>{{ job.website }}</p>
      </div>
      <a :href="job.website" class="companySite">Company Site</a>
    </div>
  </section>
</template>

<style scoped>
.container-m  {
  display: flex;
  height: 150px;
  background: var(--background-color-elements);
  border-radius: 10px;
  transform: translateY(calc(-150px / 4));
}
.logo {
  display: grid;
  place-items: center;
  height: 150px;
  width: 150px;
  border-radius: inherit;
  border-top-right-radius: 0px;
  border-bottom-right-radius: 0px;
}

.logo::v-deep img {
  width: 100px;
}

.companyDetails {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 3rem;
}

.companyDetails h4 {
  font-size: 1.75rem;
  line-height: 1.6;
  color: var(--color-very-dark-blue);
}

a {
  background-color: var(--color-very-light-violet);
  color: var(--color-violet);
  border-radius: 10px;
  padding: 20px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all .25s;
}

a:hover {
  background-color: var(--color-light-violet);
  color: #fff;
}
</style>