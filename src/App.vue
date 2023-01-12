<template>
  <router-link to="/home">Home</router-link>  |
  <router-link to="/signup">Registrarse</router-link>  |
  <router-link to="/login">Entrar</router-link>  |
  <router-link to="/animeresults">Anime Results</router-link>  |
  <router-link to="/animedetails/naruto">Anime Details</router-link>  |
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
    #ebd1a0,
    #de8a69,
    #b489c9
  );
  background-attachment: fixed;
}
</style>
