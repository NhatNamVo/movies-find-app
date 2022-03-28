<template>
    <section class="movie-detail" >
      <loading-component v-if="loading" />
      <div class="movie-detail__info" v-else>
        <movie-info :movie="currentMovie" />
      </div>
      <div class="movie-detail__movies">
        <movie-list-page :movieLists="getMovies" />
      </div>
    </section>
</template>

<script>
import store from "../store/index";
import MovieListPage from "../components/movie-list/MovieList.vue";
import getMovies from "../api/getMovies";
import MovieInfo from "../components/movie-info/MovieInfo.vue";
import LoadingComponent from "../components/loading/Loading.vue";
export default {
  name: "MovieDetailPage",
  components: {
    MovieListPage,
    MovieInfo,
    LoadingComponent
  },
  data() {
    return {
      currentIndex: store.currentIndex,
      imdbID: this.$route.params.id,
      currentMovie: {},
      loading: false,
    };
  },
  computed: {
    getMovies() {
      return store.movieLists.slice(
        this.currentIndex + 1,
        this.currentIndex + 21
      );
    },
  },
  mounted() {
    console.log(this.getMovies, this.currentIndex);
    console.log(this.imdbID);
    this.loading = true;
    getMovies
      .getOneMovies(this.imdbID)
      .then((res) => {
        console.log(res.data);
        this.currentMovie = res.data;
        this.loading = false;
      })
      .catch((error) => console.log(error));
  },
};
</script>

<style lang="scss" scoped>
</style>