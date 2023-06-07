<script>
import CardContainer from './CardContainer.vue';
export default {
    name: 'AppMain',
    components: {
        CardContainer
    }
}
</script>

<template>
    <main>
        <CardContainer />
    </main>
</template>

<style lang="scss" scoped>
main {
    height: calc(100vh - 100px);
    background-color: #5d5d5d;
}
</style> 