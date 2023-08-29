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
            <img v-if="details.poster_path !== null" :src="imgRoot + details.poster_path" alt="">
            <div v-if="details.poster_path === null" class="no_img_found cardInfo">
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
                    <img :src="`/flags/${details.original_language}.svg`" :alt="details.original_language">
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

<style lang="scss" scoped>
//Rotating two-sided card
.card {
    font-size: 14px;
    perspective: 150rem;
    position: relative;
    width: 200px;
    aspect-ratio: 2 / 3;
    cursor: pointer;

    .card-side {
        height: 100%;
        width: 100%;
        transition: all 1s ease;
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;

        //IF NO IMAGE IS FOUND
        .no_img_found {
            width: 100%;
            background-color: rgb(130, 125, 125);
            align-items: center;
            justify-content: center;
            text-align: center;
        }

        .cardInfo {
            display: flex;
            flex-direction: column;
            height: 100%;
            padding: 10px;
            word-wrap: break-word;

            .infoElement {
                margin-bottom: 10px;

                img {
                    width: 18px;
                }

                span .fa-solid {
                    color: rgb(255, 225, 56);
                }
            }

            .overview {
                max-height: 100%;
                overflow-y: scroll;
            }
        }

        &.front {
            overflow: hidden;

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
                object-position: center;
            }
        }

        &.back {
            transform: rotateY(180deg);
            border: 1px solid #ffffff;
            border-radius: 10px;

        }

    }
}

.card:hover .card-side.front {
    transform: rotateY(-180deg);
}

.card:hover .card-side.back {
    transform: rotateY(0deg);
}
</style> 