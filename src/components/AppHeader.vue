<script>
export default {
    name: 'AppHeader',
}
</script>

<template>
    <header>
        <div class="container">
            <h1>BOOLIX</h1>

            <div class="searchBar">
                <input type="text" name="textSearch" id="textSearch" placeholder="Search...">
                <button>
                    send
                </button>
            </div>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    background-color: #000000;
    color: red;
    padding: 15px 30px;
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
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style> 