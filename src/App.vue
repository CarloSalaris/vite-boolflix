<script>
import { store } from "./store.js";
import axios from "axios";
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';



export default {
  components: {
    AppHeader,
    AppMain
  },
  data() {
    return {
      store,
    }
  },
  methods: {
    getMovies() {
      axios.get(store.apiSearchMovieURL + store.searchText)
        .then(res => {
          store.movieList = res.data.results;
          console.log(store.movieList);
        })
        .catch(err => {
          console.log(err);
        })

      store.searchText = '';
    }
  },
}
</script>

<template>
  <AppHeader @search="getMovies" />
  <AppMain />
</template>

<style lang="scss">
@use './styles/general.scss';
@use './styles/partials/mixins.scss';
</style>
