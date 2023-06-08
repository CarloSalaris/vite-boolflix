<script>
import SingleCard from "./SingleCard.vue";

export default {
    name: 'CardContainer',
    components: {
        SingleCard,
    }
}
</script>

<template>
    <div class="container">

        <!-- CARD -->
        <SingleCard />

    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;

.container {
    border: 1px solid purple;
    @include center('x');
}
</style> 