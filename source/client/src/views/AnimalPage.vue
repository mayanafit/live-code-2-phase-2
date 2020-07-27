<template>
    <div class="container" style="margin: 20px auto">
        <h1 class="text-center" style="text-decoration: underline">Animals</h1>
        <div class="row my-3">
          <AnimalCard
          v-for="(animal, index) in $store.state.animals"
          :key="index" :animal="animal"></AnimalCard>
        </div>
    </div>
</template>

<script>
import AnimalCard from '../components/AnimalCard.vue';

export default {
  name: 'Animals',
  components: {
    AnimalCard,
  },
  created() {
    this.$store.dispatch('fetchAnimals');
  },
};
</script>

<style>

</style>
