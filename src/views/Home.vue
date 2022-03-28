<template>
  <div>
    <movie-list-page ref="movieListRef" :movieLists="movieLists" :loading="loading"/>
    <loading-component v-if="loading" />
  </div>
</template>

<script>
import MovieListPage from "../components/movie-list/MovieList.vue";
import LoadingComponent from "../components/loading/Loading.vue";
import getMovies from "../api/getMovies";
import store from "../store/index";

export default {
  name: "HomePage",
  components: {
    MovieListPage,
    LoadingComponent,
  },
  data() {
    return {
      page: store.currentPage,
      moviesTotalResult: null,
      isInfinityLoad: false,
      loading: store.loading,
      search: this.$route.query.search || store.search,
      movieLists: store.movieLists,
    };
  },
  methods: {
    callApi() {
      this.loading = true;
      getMovies
        .getAllMovies(this.search, this.page)
        .then((res) => {
          const { data } = res;
          if (data.Response === 'True') {
            this.loading = false;
            const movies = this.movieLists.concat(data.Search);
            this.moviesTotalResult = data.totalResults;
            store.movieLists = movies;
            this.movieLists = movies;
          } else {
              this.loading = false;
            this.movieLists = [];
          }
        })
        .catch((err) => console.log(err));
    },
    addMoviesList(list) {
      store.movieLists = list;
    },
    handleScroll() {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      if(scrollTop + clientHeight === scrollHeight){
        if(this.isInfinityLoad){
          this.callApi();
        }
      }
    }
  },
  watch: {
    movieLists(newValue) {
      console.log(newValue.length, this.moviesTotalResult);
      if (newValue.length == this.moviesTotalResult) {
        this.isInfinityLoad = false;
      } else if (!!newValue.length && newValue.length < this.moviesTotalResult) {
        this.page++;
        store.currentPage = this.page;
        this.isInfinityLoad = true;
        const {offsetHeight} = this.$refs.movieListRef.$el;
        if(offsetHeight<window.innerHeight) {
          console.log('hello', offsetHeight, window.innerHeight);
          this.callApi();
        }
      }
    },
    search() {
      this.movieLists = [];
      this.callApi();
    },
    $route() {
      if (this.$route.query.search) {
        this.search = this.$route.query.search;
        this.page = 1;
      }
      else{
        this.search = store.search;
      }
    },
  },
  mounted() {
    this.page = store.currentPage,
    this.movieLists = store.movieLists;
    this.callApi();
    document.addEventListener('scroll',this.handleScroll);
  },
  beforeDestroy(){
    document.removeEventListener('scroll',this.handleScroll);
  }
};
</script>

<style lang="scss" scoped>
</style>