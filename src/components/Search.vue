<template>
    <div>
        <input v-model.lazy="searchText" @keyup.enter="handleSearch" type="text" placeholder="Search movies by title...">
        <button @click="handleSearch">Find</button>
    </div>
</template>

<script>
    export default {
        name: 'SearchComponent',
        data() {
            return {
                searchText: '',
            }
        },
        methods: {
            handleSearch() {
                this.$router.push(`/?${new URLSearchParams({search: this.searchText})}`);
                this.searchText="";
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>