<script>

export default {
    name: 'SingleCard',
    props: {
        movieDetails: Object,
    }
}
</script>

<template>
    <!-- CARD -->
    <div class="card">
        <div class="cardInfo">
            <div>
                <strong>Titolo: </strong>
                {{ movieDetails.title }}
            </div>
            <div>
                <strong>Titolo originale: </strong>
                {{ movieDetails.original_title }}
            </div>
            <div>
                <img :src="`/flags/${movieDetails.original_language}.svg`"
                    :alt="`Language: ${movieDetails.original_language}`">
            </div>
            <div>
                Voto: {{ movieDetails.vote_average }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style> 