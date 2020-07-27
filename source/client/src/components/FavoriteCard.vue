<template>
    <div class="col-sm-3 mt-4">
        <div class="card" style="width: 16rem;">
            <img :src="favorite.Animal.imageUrl" class="card-img-top" alt="ini image.">
            <div class="card-body d-flex flex-column">
                <div>
                    <h5 class="card-title text-center">{{favorite.Animal.name}}</h5>
                    <p class="card-text text-center">{{favorite.Animal.description}}</p>
                </div>
                <a @click="deleteFavorite(favorite.Animal.id)" role="button" class="btn btn-danger text-light mt-4">Remove from Favorites</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'FavoriteCard',
  props: [`favorite`],
  methods: {
    deleteFavorite(id) {
        swal({
            title: "Are you sure?",
            text: "You can choose this animal again in 'Animal Page'.",
            icon: "warning",
            buttons: true,
            dangerMode: true,
            })
            .then((willDelete) => {
            if (willDelete) {
                this.$store.dispatch(`deleteFavorite`, id)
            }
            })
    }
  }
}
</script>

<style>

</style>