<template>
  <router-link to="/home">Home</router-link>  |
  <router-link to="/search">Search Anime</router-link>  |
  <router-link to="/animeresults">Anime List Searched</router-link>  |
  <router-link to="/narutodetails">Naruto Details Example</router-link>  |
  <router-link to="/trivial">Trivial</router-link>  |


  <router-view/>
</template>

<script>

export default {
  name: "App",
};
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  background: linear-gradient(
    117.97deg,
    rgba(247, 240, 254, 0.16) 26.4%,
    rgba(251, 209, 196, 0.5725) 99.99%,
    rgba(255, 168, 121, 0.08) 100%
  );
  background-attachment: fixed;
}
</style>
