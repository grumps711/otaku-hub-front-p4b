<template>

   <div>
    <p>
        Estas en el componente anime details
        {{ $route.params.animeid }}
    </p>
   </div>


    <div>
        
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
    name: "animedetails",
    data() {
        return {
            animes: [],
            animeid:""
            
        };
    },
  /*   methods: {

        getSearch() {
            axios.get('https://gogoanime.consumet.org/anime-details/'+ this.animes.animeId)
                .then((response) => {
                    console.log(response.data)
                    this.animes = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    props:["animeId"],
    mounted:{
        getSearch() {
            axios.get('https://gogoanime.consumet.org/anime-details/'+ this.animeid)
                .then((response) => {
                    console.log(response.data)
                    this.animes = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    } */
     mounted() {
        axios.get('https://gogoanime.consumet.org/anime-details/'+ this.$route.params.animeid )
                .then((response) => {
                    console.log(response.data)
                    this.animes = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
    }, 

}
</script>
<style >
    
</style>