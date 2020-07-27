<template>
    <div class="container" style="margin: 50px auto">
        <h1 class="text-center">Animals</h1>
        <div class="row my-5">
            <AnimalCard v-for="(animal, index) in $store.state.animals" :key="index" :animal="animal"></AnimalCard>
        </div>
    </div>
</template>

<script>
import AnimalCard from '../components/AnimalCard'
export default {
  name: 'Animals',
  components: {
    AnimalCard
  },
  created() {
    this.$store.dispatch('fetchAnimals')
  }
}
</script>

<style>

</style>