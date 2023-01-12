<template>
    <div>
       
        ESTO ES ESPISODE VIEW


        <iframe width="560" height="315" :src="episodeReferer" frameborder="0" allowfullscreen></iframe>
        {{this.$route.params.episodeid}}
       
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "episodeview",
    data() {
        return {
            animes: [],
            episodeid:"",
            episodeId:"",
            episodeReferer:""
        };
    },
    
    mounted() {
        
            axios.get('http://localhost:80/anime/watch?episodeId='+ this.$route.params.episodeid)
                .then((response) => {
                    console.log(response.data)
                    this.episodeReferer = response.data.Referer
                })
                .catch((error) => {
                    console.log(error)
                })
    }

}
</script>
<style>
    
</style>