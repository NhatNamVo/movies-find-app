<template>
    <header class="header">
        <h1>Movie</h1>
        <SearchComponent/>
    </header>
</template>

<script>
import SearchComponent from '../search/Search.vue';
    export default {
        name: 'HeaderComponent',
        components: {
            SearchComponent
        }
    }
</script>

<style lang="scss" scoped>
@import './Header.scss';
</style>