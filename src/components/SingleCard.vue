<script>
import { store } from "../store.js";

export default {
    name: 'SingleCard',
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <!-- CARD -->
    <div v-for="item in store.movieList" :key="item.id" class="card">
        <div class="cardInfo">
            <div>
                <strong>Titolo: </strong>
                {{ item.title }}
            </div>
            <div>
                <strong>Titolo originale: </strong>
                {{ item.original_title }}
            </div>
            <div>
                <img :src="`/flags/${item.original_language}.svg`" :alt="`Language: ${item.original_language}`">
            </div>
            <div>
                Voto: {{ item.vote_average }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style> 