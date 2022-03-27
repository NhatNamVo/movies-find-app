<template>
    <section class="movieItem">
        <div class="movieItem__img">
            <img v-if="movie.Poster!=='N/A'" :src="movie.Poster" :alt="movie.Title"/>
            <div v-else class="movieItem__noImg">
                <h2>NO IMAGES ADD</h2>
            </div>
        </div>
        <div class="movieItem__content">
            <h1>{{movie.Title}}</h1>
            <p>{{movie.Type}} - {{movie.Year}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name:'MovieItem',
        props: ['movie']
    }
</script>

<style lang="scss" scoped>
@import './MovieItem.scss';
</style>