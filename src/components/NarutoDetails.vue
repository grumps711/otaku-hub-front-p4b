<template lang="">
    <div>
        <button @click="getNaruto">Load Naruto Details</button>

      <h1 class="imageAnime">{{animes.animeTitle}}</h1>
      <p>Released date: {{animes.releasedDate}}</p>
      <p>Genres: 
       
        
        <div v-for="(genre, index) in animes.genres"
         :item="genre"
         :index="index"
         :key="genre.id">
         <p>{{genre}}</p>  
        </div>

        </p>
        <img :src="animes.animeImg" alt="img">
        <p>{{animes.synopsis}}</p>

        <div v-for="(episode, index) in animes.episodesList"
         :item="episode"
         :index="index"
         :key="episode.id">
        <p> <a :href="episode.episodeUrl">{{episode.episodeId}}</a> </p> 
        </div>
        
        </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "NarutoDetails",
    data() {
        return {
            animes: [],
           
        };
    },
    methods: {


        getNaruto() {
            axios.get('http://localhost:8080/anime/anime-details?id=naruto')
                .then((response) => {
                    console.log(response.data)
                    this.animes = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    props:[]

}
</script>

<style lang="">
   
</style>