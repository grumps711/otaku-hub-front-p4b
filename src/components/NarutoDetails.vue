<template lang="">
    <div>
        <button @click="getNaruto">Load Naruto Details</button>
        <div v-for="anime in animes" :key="anime.id">
            <p>{{anime}}</p>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name:"NarutoDetails",
    data() {
        return {
            animes:[],
        };
    },
    methods: {
        getNaruto(){
            axios.get('https://gogoanime.consumet.org/anime-details/naruto')
                .then((response)=> {
                    console.log(response.data)
                    this.animes = response.data
                })
                .catch((error) =>{
                    console.log(error)
                })
        }
    },
}
</script>
<style lang="">
    
</style>