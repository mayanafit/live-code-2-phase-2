<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-info">
            <a class="navbar-brand" href="#">Animal Kingdom</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
          
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <router-link class="nav-link" :to="{name: 'AnimalPage'}">Animals</router-link>
                </li>
                <li class="nav-item active">
                  <router-link class="nav-link" :to="{name: 'FavoritePage'}">My Favorites</router-link>
                </li>
              </ul>
            <button @click="logout" class="btn btn-dark my-2 my-sm-0" type="button">Logout</button>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
  name: 'Dashboard',
  methods: {
    logout() {
      localStorage.clear()
      this.$router.push({name: 'Home'})
    }
  },
  beforeRouteLeave (to, from, next) {
    if(to.name === 'Home') {
      swal({
        title: "Logout from Animal Kingdom?",
        text: "You cant come back anytime you want! :)",
        icon: "",
        buttons: true,
        dangerMode: true,
        })
        .then((willDelete) => {
          if (willDelete) {
            this.logout()
          }
        });
      }
  }
}
</script>

<style>

</style>