<template>
    <div class="col-sm-3 mt-4">
        <div class="card h-100" style="width: 16rem;">
            <img :src=animal.imageUrl class="card-img-top" alt="ini image.">
            <div class="card-body d-flex flex-column">
                <div>
                    <h5 class="card-title text-center">{{animal.name}}</h5>
                    <p class="card-text text-center">{{animal.description}}</p>
                </div>
            </div>
                <a @click="addFavorite(animal.id)"
                role="button"
                class="btn btn-warning mt-4">
                    Add to Favorites
                </a>
        </div>
    </div>
</template>

<script>
export default {
  name: 'AnimalCard',
  props: ['animal'],
  methods: {
    addFavorite(id) {
      this.$store.dispatch('addFavorite', id);
    },
  },
};
</script>

<style>

</style>
