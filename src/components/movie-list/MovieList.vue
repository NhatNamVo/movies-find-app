<template>
  <section class="movieList">
    <div class="movieList__content" v-if="movieLists.length">
        <movie-item v-for="(movie, idx) in movieLists" :key="idx" :movie="movie" @movie-select="handleMovieDetail(movie.imdbID, idx)"/>
    </div>
    <div v-if="!movieLists.length && !loading">Movies not found</div>
  </section>
</template>

<script>
import MovieItem from '../movie-item/MovieItem.vue';
import store from '../../store/index';
export default {
  name: "MovieListPage",
  components: {
    MovieItem,
  },
  props: ["movieLists", "loading"],
  methods: {
    handleMovieDetail(id, index) {
      store.currentIndex = index;
      this.$router.push({name: 'movie-detail', params: {id: id}});
    }
  }
};
</script>

<style lang="scss" scoped>
@import './MovieList.scss';
</style>