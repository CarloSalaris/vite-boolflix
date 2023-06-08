<script>
import { store } from "../store.js";
import SingleCard from "./SingleCard.vue";

export default {
    name: 'CardContainer',
    components: {
        SingleCard,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <section v-if="store.movieList.length !== 0">

        <h2>MOVIES</h2>

        <div class="container">
            <!-- CARD -->
            <SingleCard v-for="item in store.movieList" :key="item.id" :details="item" />
        </div>

    </section>

    <section v-if="store.tvList.length !== 0">

        <h2>TV SERIES</h2>

        <div class="container">
            <!-- CARD -->
            <SingleCard v-for="item in store.tvList" :key="item.id" :details="item" />
        </div>

    </section>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

section {
    margin-bottom: 20px;
}

h2 {
    margin-bottom: 20px;
}

.container {
    @include center('x');
    gap: 10px;
}
</style> 