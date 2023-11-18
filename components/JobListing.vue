<script setup lang="ts">
defineProps<{job: Partial<JobPosting>}>();

const toHoverColor = (hslColor :string) => {
  const hslValues = hslColor.match(/[0-9]+%?/g);
  return `hsla(${hslValues?.join(', ')}, 0.2)`;
};

</script>


<template>
  <div 
    class="jobListing"
    :style="`--hover-color: ${toHoverColor(job.logoBackground!)}`"
  >
    <NuxtLink :to="`/jobs/${job.id}`">
      <div 
        class="logo" 
        :style="`background-color: ${job.logoBackground};`"
      >
        <img :src="job.logo" :alt="job.company">
      </div>
      <div class="details">
        <div class="flex">
          <p>{{ job.postedAt }}</p>
          <span>|</span>
          <p>{{ job.contract }}</p>      
        </div>
        <h3>{{ job.position }}</h3>
        <p>{{ job.company }}</p>
        <h4>{{ job.location }}</h4>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
.logo {
  position: absolute;
  top: 0;
  left: calc(2rem + 15px);
  display: grid;
  place-items: center;
  width: 60px;
  aspect-ratio: 1 / 1;
  border-radius: 20px;
  transform: translateY(calc(-30px));
}
img {
  object-fit: contain;
}

.flex {
  padding-top: 40px;
  display: flex;
  gap: 10px;
}

.jobListing {
  position: relative;
  height: 275px;
  padding: 1rem 3rem 3rem;
  border-radius: 10px;
  background-color: var(--background-color-elements);
  transition: all .25s;
} 
.jobListing:hover {
  box-shadow: 2px 2px 20px var(--hover-color);
}

.details {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}

h3 {
  font-size: 1.5rem;
  color: var(--color-very-dark-blue);
  position: relative;
}

h4 {
  margin-top: auto;
  font-size: 1.3rem;
  color: var(--color-violet);
}
</style>