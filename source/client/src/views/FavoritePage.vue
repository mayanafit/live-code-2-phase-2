<template>
   <div class="container" style="margin: 50px auto">
        <h1 class="text-center">My Favorites</h1>
        <div class="row my-5">
            <FavoriteCard v-for="(favorite, index) in $store.state.favorites" :key="index" :favorite="favorite"></FavoriteCard>
        </div>
    </div>
</template>

<script>
import FavoriteCard from '../components/FavoriteCard.vue';

export default {
  name: 'Favorites',
  components: {
    FavoriteCard
  },
  created() {
    this.$store.dispatch('fetchFavorites')
    console.log(`ini fav`, this.$store.state.favorites)
  }
}
</script>

<style>

</style>