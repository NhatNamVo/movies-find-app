<template>
  <div id="app">
    <HeaderComponent />
    <router-view :key="$route.path"></router-view>
  </div>
</template>

<script>
import HeaderComponent from "./components/header/Header";
export default {
  name: "App",
  components: {
    HeaderComponent,
  },
};
</script>

<style>
body{
  margin: 0;
  box-sizing: border-box;
  background-color: #1C1917;
}
h1, h2, h3, h4, h5, h6, p {
  margin: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  max-width: 1400px;
  margin: auto;
}
</style>
