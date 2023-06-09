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
    }
}
</script>

<template>
    <!-- CARD -->
    <div class="card">

        <div class="card-side front">
            <!-- COVER IMAGE -->
            <img :src="imgRoot + details.poster_path" alt="">
            <div v-if="details.poster_path == null" class="no_img_found cardInfo">
                <div>
                    <h2>NO IMAGE FOUND FOR</h2> {{ details.title || details.name }}
                </div>
            </div>
        </div>

        <div class="card-side back">
            <!-- CARD INFO -->
            <div class="cardInfo">
                <div class="infoElement">
                    <strong>Titolo: </strong>
                    {{ details.title || details.name }}
                </div>
                <div class="infoElement">
                    <strong>Titolo originale: </strong>
                    {{ details.original_title || details.original_name }}
                </div>
                <div class="infoElement">
                    <strong>Language: </strong>
                    <img :src="`/flags/${details.original_language}.svg`" :alt="`Language: ${details.original_language}`">
                </div>
                <div class="infoElement">
                    <!-- Voto: {{ this.roundUp(details.vote_average / 2) }} -->
                    <span v-for="num in this.roundUp(details.vote_average / 2)">
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <span v-for="num in (5 - this.roundUp(details.vote_average / 2))">
                        <i class="fa-regular fa-star"></i>
                    </span>
                </div>

                <div class="infoElement">
                    <strong>Overview: </strong>
                </div>

                <div class="overview">{{ details.overview }}</div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style> 