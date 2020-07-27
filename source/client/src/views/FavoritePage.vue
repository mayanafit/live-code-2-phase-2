<template>
   <div class="container" style="margin: 20px auto">
        <h1 class="text-center" style="text-decoration: underline">My Favorites</h1>
        <div class="row my-3">
            <FavoriteCard
            v-for="(favorite, index) in $store.state.favorites"
            :key="index" :favorite="favorite"></FavoriteCard>
        </div>
    </div>
</template>

<script>
import FavoriteCard from '../components/FavoriteCard.vue';

export default {
  name: 'Favorites',
  components: {
    FavoriteCard,
  },
  created() {
    this.$store.dispatch('fetchFavorites');
  },
};
</script>

