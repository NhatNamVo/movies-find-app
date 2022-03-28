<template>
  <section class="movie-info">
    <div class="image">
      <img :src="movie.Poster" :alt="movie.Title" />
    </div>
    <div class="content">
      <h1>{{ movie.Title }}</h1>
      <p>{{movie.imdbRating}}</p>
      <div class="time">
        <p>{{ movie.Runtime }}</p>
        <p>{{ movie.Year }}</p>
      </div>
      <div class="detail">
        <p>Language</p>
        <p>{{movie.Language}}</p>
      </div>
      <div class="detail">
        <p>Director</p>
        <p>{{movie.Director}}</p>
      </div>
      <div class="detail">
        <p>Writer</p>
        <p>{{movie.Writer}}</p>
      </div>
      <div class="detail">
        <p>Actors</p>
        <p>{{movie.Actors}}</p>
      </div>
      <p>{{movie.Plot}}</p>
    </div>
  </section>
</template>
<script>
export default {
  props: ["movie"],
  name:'MovieInfo'
};
</script>
<style lang="scss" scoped>
@import './MovieInfo.scss';
</style>