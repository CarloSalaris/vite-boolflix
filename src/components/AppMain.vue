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
    min-height: calc(100% - 100px);
    background-color: #5d5d5d;
    overflow-y: scroll;
}
</style> 