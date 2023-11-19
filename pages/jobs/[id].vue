<script setup>
const route = useRoute();
const { data: job } = await useFetch(`/api/jobs/${route.params.id}`);
</script>


<template>
  <JobDetailsHeader :job="job" />
  <main class="container-m">
    <section class="topSection">
      <div class="wrap">
        <div class="postAndContract">
          <p>{{ job.postedAt }}</p>
          <p>|</p>
          <p>{{ job.contract }}</p>      
        </div>
        <h2>{{ job.position }}</h2>
        <h4>{{ job.location }}</h4>
      </div>
      <a :href="job.apply" class="apply">Apply Now</a>
    </section>
    <section class="description">
      <p>{{ job.description }}</p>
    </section>

    <JobDetailsSection 
      :content="job.requirements.content" 
      title="Requirements" 
      :items="job.requirements.items"
      deco="▫"
    />

    <JobDetailsSection 
      :content="job.role.content" 
      title="What You Will Do" 
      :items="job.role.items"
      deco="default"
    />

  </main>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 3rem;
  background: var(--background-color-elements);
  border-radius: 10px;
  margin-bottom: 3rem;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

.topSection {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.postAndContract {
  display: flex;
  gap: 10px;
}

h2 {
  font-size: 2rem;
  color: var(--color-text);
  line-height: 2;  
}


.apply {
  color: #fff;
  background-color: var(--color-violet);
  border-radius: 10px;
  padding: 20px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all .25s;
}
.apply:hover {
  background-color: var(--color-light-violet);
}
</style>