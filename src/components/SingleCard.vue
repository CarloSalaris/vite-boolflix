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
            <div>TITOLO: {{ item.title }}</div>
            <div>TITOLO ORIGINALE: {{ item.original_title }}</div>
            <div>LINGUA:
                <img :src="`/flags/${item.original_language}.svg`" :alt="item.original_language">
            </div>
            <div>VOTO: {{ item.vote_average }}</div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style> 