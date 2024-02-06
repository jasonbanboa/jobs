<script setup>
const filter = useFilter();

const byTitleOrCompany = ref('');
const byLocation = ref('');
const byContract = ref(false);

const search = () => {
  filter.value = {
    byTitleOrCompany: byTitleOrCompany.value.toLowerCase(),
    byLocation: byLocation.value.toLowerCase(),
    byContract: byContract.value,
  };
}

</script>


<template>
  <section class="container">
    <div class="fieldset">
      <img src="~/assets/svgs/icon-search.svg" alt="search icon">
      <input type="text" placeholder="Filter by title or companies" v-model="byTitleOrCompany">
    </div>
    <div class="fieldset">
      <img src="~/assets/svgs/icon-location.svg" alt="search icon">
      <input type="text" placeholder="Filter by location" v-model="byLocation">
    </div>
    <div class="fieldset contract" >
      <label for="contract">
        <input type="checkbox" id="contract" v-model="byContract">
        Full Time Only
      </label>
      <button class="pc search" @click="search">Search</button>
    </div>
    <button class="mobile search" @click="search">Search</button>
  </section>
</template>

<style scoped>

section {
  width: 100%;
  display: flex;
  border-radius: 10px;
  background-color: var(--background-color-elements);
  transform: translateY(-30px);
}

.fieldset {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem; 
}
.fieldset:not(.contract) {
  flex: 1;
}

.fieldset:nth-child(1), .fieldset:nth-child(2) {
  border-right: 1px solid var(--color-border-sperator);
} 

.contract label {
  display: flex;
  gap: 10px;
}

input {
  font-size: 1rem;
  flex: 1;
}

.search {
  background-color: var(--color-violet);
  color: #fff;
  border-radius: 10px;
  padding: 20px 40px;
  font-size: 1.1rem;
  font-weight: bold;
  transition: all .25s;
}

.search:hover {
  background-color: var(--color-light-violet);
  color: #fff;
}

.mobile {display: none; justify-content: center;}

@media (max-width: 950px) {
  section.container {
    display: flex;
    flex-direction: column;
    padding: 3rem;
  }

  section.container .contract label {
    margin-right: auto;
  }
   .pc {
    display: none;
  }
  .fieldset:not(:has(+button)) {
    border-bottom: 1px solid #ccc;
  }
  .mobile {display: flex;}
}
</style>