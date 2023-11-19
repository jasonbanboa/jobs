<script setup lang="ts">

defineProps<{
  content: string,
  items: string[],
  deco: string,
  title: string,
}>();
</script>

<template>
  <section class="requirements">
      <h3>{{ title }}</h3>
      <article>
        <p>{{ content }}</p>
      </article>
      <article>
        <ul>
          <li v-for="(item, index) in items" :key="index">
            <span class="deco">{{ deco === 'default' ? index + 1 : deco }}</span> 
            {{ item }}
          </li>
        </ul>
      </article>
    </section>
</template>

<style scoped>
p {
  font-size: 1.2rem;
  line-height: 1.6;
}

h4 {
  margin-top: auto;
  font-size: 1.1rem;
  color: var(--color-violet);
}

h3 {
  font-size: 1.6rem;
  line-height: 3;
  color: var(--color-text);
}

li {
  font-size: 1.1rem;
  display: flex;
  gap: 1rem;
  line-height: 1.5;
}

li .deco {
  width: 20px;
  color: var(--color-violet);
}
article > p {
  padding-bottom: 10px;
}

</style>