<template>

   <div>
    <p>
        Estas en el componente anime details
    </p>
   </div>
    <div>

        <button @click="getNaruto">Load Anime Details</button>

        <p>{{animeId}}</p>
        <h1 class="imageAnime">{{animes.animeTitle}}</h1>
        <img :src="animes.animeImg" alt="img">
        <p>{{animes.animeTitle}}</p>
        
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "animedetails",
    data() {
        return {
            animes: [],
            animeId:""
        };
    },
    methods: {

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
            axios.get('https://gogoanime.consumet.org/anime-details/'+ this.animes.animeId)
                .then((response) => {
                    console.log(response.data)
                    this.animes = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    }

}
</script>
<style >
    
</style>