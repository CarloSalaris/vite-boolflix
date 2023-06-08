<script>

export default {
    name: 'SingleCard',
    props: {
        details: Object,
    }
}
</script>

<template>
    <!-- CARD -->
    <div class="card">
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
                Voto: {{ details.vote_average }}
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style> 