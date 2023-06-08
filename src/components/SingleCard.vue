<script>

export default {
    name: 'SingleCard',
    props: {
        details: Object,
        imgRoot: String,
    },
    methods: {
        roundUp(value) {
            return Math.ceil(value)
        }
    },
}
</script>

<template>
    <!-- CARD -->
    <div class="card">

        <!-- COVER IMAGE -->
        <div class="imgCover">
            <img :src="imgRoot + details.poster_path" :alt="`${details.title || details.name} cover`">
        </div>

        <!-- CARD INFO -->
        <div class="cardInfo">
            <div>
                <strong>Titolo: </strong>
                {{ details.title || details.name }}
            </div>
            <div>
                <strong>Titolo originale: </strong>
                {{ details.original_title || details.original_name }}
            </div>
            <div>
                <img :src="`/flags/${details.original_language}.svg`" :alt="`Language: ${details.original_language}`">
            </div>
            <div>
                Voto: {{ roundUp(details.vote_average / 2) }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style> 