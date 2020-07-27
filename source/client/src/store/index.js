import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';
import swal from 'sweetalert';
import router from '../router';

Vue.use(Vuex);
const baseUrl = 'http://localhost:3000/';

export default new Vuex.Store({
  state: {
    animals: [],
    favorites: [],
  },
  mutations: {
    SET_ANIMALS(state, animals) {
      state.animals = animals;
    },
    SET_FAVORITES(state, favorites) {
      state.favorites = favorites;
    },
    DELETE_FAVORITE(state, AnimalId) {
      state.favorites = state.favorites.filter((item) => item.AnimalId !== AnimalId);
    },
  },
  actions: {
    processLogin(context, user) {
      axios({
        method: 'POST',
        url: `${baseUrl}login`,
        data: {
          email: user.email,
          password: user.password,
        },
      })
        .then((result) => {
          localStorage.setItem('access_token', result.data.access_token);
          router.push({ name: 'AnimalPage' });
        })
        .catch((err) => {
          swal('Error!', `${err.response.data.message} Please try again.`, 'error');
        });
    },
    fetchAnimals(context) {
      axios({
        method: 'GET',
        url: `${baseUrl}animals`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((result) => {
          context.commit('SET_ANIMALS', result.data.animals);
        })
        .catch(() => {
          swal('Error!', 'Can\'t access this page at the moment. Please try again later.', 'error');
        });
    },
    fetchFavorites(context) {
      axios({
        method: 'GET',
        url: `${baseUrl}favorites`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((result) => {
          console.log(result.data.favorites);
          context.commit('SET_FAVORITES', result.data.favorites);
        })
        .catch(() => {
          swal('Error!', 'Can\'t access this page at the moment. Please try again later.', 'error');
        });
    },
    addFavorite(context, AnimalId) {
      axios({
        method: 'POST',
        url: `${baseUrl}favorites/${AnimalId}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then(() => {
          router.push({ name: 'FavoritePage' });
          swal('Success!', 'Successfully add this animal to your favorites!', 'success');
        })
        .catch(() => {
          swal('Error!', 'Can\'t access this page at the moment. Please try again later.', 'error');
        });
    },
    deleteFavorite(context, AnimalId) {
      axios({
        method: 'DELETE',
        url: `${baseUrl}favorites/${AnimalId}`,
        headers: {
          access_token: localStorage.access_token,
        },
      })
        .then((result) => {
          context.commit('DELETE_FAVORITE', AnimalId);
          swal('Success!', `${result.data.message}`, 'success');
        })
        .catch((err) => {
          swal('Error!', `${err.response.message}`, 'error');
        });
    },
  },
  modules: {
  },
});
