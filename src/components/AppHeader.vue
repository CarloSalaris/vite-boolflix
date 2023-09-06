<script>
import { store } from "../store.js";

export default {
    name: 'AppHeader',
    data() {
        return {
            store,
        }
    }
}

</script>

<template>
    <header>
        <div class="container">
            <h1>BOOLFLIX</h1>

            <div class="searchBar">
                <input type="text" name="textSearch" id="textSearch" placeholder="Search..." @keyup.enter="$emit('search')"
                    v-model.trim="store.searchText">
                <button @click.prevent="$emit('search')">
                    Send
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
@use '../styles/partials/mixins' as *;


header {
    height: 100px;
    background-color: #000000;
    color: red;
    padding: 15px;
}

.searchBar {

    input,
    button {
        background-color: #ffffff;
        border: none;
        padding: 8px;
    }

    input {
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
    }

    button {
        cursor: pointer;
        border-left: 1px solid lightgrey;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;

    }
}

//UTILITIES
.container {
    @include center('y');
    justify-content: space-between;

}
</style> 