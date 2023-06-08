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
            <SingleCard v-for="item in store.movieList" :key="item.id" :movieDetails="item" />
        </div>

    </section>

    <section v-if="store.tvList.length !== 0">

        <h2>TV SERIES</h2>

        <!-- <div class="container">
        
                <SingleCard v-for="item in store.tvList" :key="item.id" :tvDetails="item" />
            </div> -->
        <div class="container">

            <!-- CARD -->

            <div v-for="item in store.tvList" :key="item.id" class="card">
                <div class="cardInfo">
                    <div>
                        <strong>Titolo: </strong>
                        {{ item.name }}
                    </div>
                    <div>
                        <strong>Titolo originale: </strong>
                        {{ item.original_name }}
                    </div>
                    <div>
                        <img :src="`/flags/${item.original_language}.svg`" :alt="`Language: ${item.original_language}`">
                    </div>
                    <div>
                        Voto: {{ item.vote_average }}
                    </div>
                </div>
            </div>
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