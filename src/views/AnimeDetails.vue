<template lang="">
    <div>
        <p>{{animeId}}</p>
        <h1 class="imageAnime">{{animes.animeTitle}}</h1>
        <img :src="animes.animeImg" alt="img">
        <p>{{animes.animeTitle}}</p>
        
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

        getSearch() {
            axios.get('https://gogoanime.consumet.org/anime-details/')
                .then((response) => {
                    console.log(response.data)
                    this.animes = response.data
                })
                .catch((error) => {
                    console.log(error)
                })
        }
    },
    props:["animeId"]

}
</script>
<style lang="">
    
</style>