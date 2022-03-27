<template>
  <section class="movieList">
    <div v-if="!movieLists.length">Movies not found</div>
    <div class="movieList__content" v-if="movieLists.length">
        <movie-item v-for="(movie, idx) in movieLists" :key="idx" :movie="movie"/>
                
    </div>
    
  </section>
</template>

<script>
import MovieItem from '../movie-item/MovieItem.vue';
export default {
  name: "MovieListPage",
  components: {
    MovieItem,
  },
  props: ["movieLists"],
};
</script>

<style lang="scss" scoped>
@import './MovieList.scss';
</style>