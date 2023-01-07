<template lang="">
  <h2>Here are the results</h2>

  <button @click="getSearch">Load Naruto Animes Similar</button>

    <div v-for="anime in animes" :key="anime.id" class="anime">
      <h4>{{anime.animeTitle}}</h4>
      <router-link to="/animedetails"><img class="image" :src="anime.animeImg" alt="img"></router-link>
      <p>{{anime.status}}</p>
      <!-- </animeDetails> -->
    </div>

</template>

<script>
import axios from "axios";
import animeDetails from "./AnimeDetails.vue";
export default {
  name: "animeresults",
  data() {
    return {
      animes: []
    };
  },

  methods: {
    getSearch() {
    axios.get("https://gogoanime.consumet.org/search?keyw=naruto")
      .then((response) => {
        console.log(response.data)
        this.animes = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    }
  },
  components:{
      animeDetails
  },

  /*  mounted() {
     fetch("http://localhost:9090/public/anime/search?keyw=naruto")    //<!--aixo es asincon i retorna una promesa-->
       .then(res=>res.json())
       .then(data => this.animes = data)
       .catch(err => console.log(err.message))

     console.log(this.animes)
   }, */
}
</script>
<style scoped>
    .image{
      width:100px;
    }
</style>