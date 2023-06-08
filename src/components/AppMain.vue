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
    padding: 20px 30px;
    min-height: calc(100% - 100px);
    background-color: #3f3f3f;
    color: #e6e6e6;
    overflow-y: scroll;
}
</style> 