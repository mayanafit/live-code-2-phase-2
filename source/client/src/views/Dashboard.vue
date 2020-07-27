<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light d-flex" 
        style="background: palegreen; justify-content: space-between">
            <router-link :to="{name: 'AnimalPage'}" class="navbar-brand">
              🦁
            </router-link>
            <button class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <div class="hoverAction">
                    <router-link
                    class="nav-link" :to="{name: 'AnimalPage'}">
                    Animals
                  </router-link>
                  </div>
                </li>
                <li class="nav-item active">
                  <div class="hoverAction">
                    <router-link
                      class="nav-link" :to="{name: 'FavoritePage'}">
                      My Favorites
                    </router-link>
                  </div>
                </li>
              </ul>
            <button @click="logout"
            class="btn btn-danger my-2 my-sm-0"
            type="button">Logout</button>
            </div>
        </nav>
        <router-view/>
    </div>
</template>

<script>
import swal from 'sweetalert';

export default {
  name: 'Dashboard',
  methods: {
    logout() {
      this.$router.push({ name: 'Home' });
    },
  },
  beforeRouteLeave(to, from, next) {
    if (to.name === 'Home') {
      swal({
        title: 'Logout from Animal Kingdom?',
        text: 'You cant come back anytime you want! 😁',
        icon: '',
        buttons: true,
        dangerMode: true,
      })
        .then((willDelete) => {
          if (willDelete) {
            localStorage.clear();
            next();
          }
        });
    }
  },
};
</script>

<style scoped>
.hoverAction:hover {
  font-weight: bold;
}
.navbar-brand:hover {
  font-weight: bold;
}
</style>
