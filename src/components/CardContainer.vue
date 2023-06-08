<script>
import { store } from "../store.js";

export default {
    name: 'CardContainer',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="container">

        <!-- CARD -->
        <div v-for="item in store.movieList">
            <div>TITOLO: {{ item.title }}</div>
            <div>TITOLO ORIGINALE: {{ item.original_title }}</div>
            <div>LINGUA: {{ item.original_language }}</div>
            <div>VOTO: {{ item.vote_average }}</div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
// DEBUG

.container {
    border: 1px solid purple;
}
</style> 