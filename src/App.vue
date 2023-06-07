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
      console.log(store.searchText);
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
