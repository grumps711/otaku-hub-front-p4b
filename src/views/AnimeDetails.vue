<template>


    <div class="all">

        <div class="animecontent">
            <div class="animeimage"> 
                <img class="animeimage" :src="animes.animeImg" alt="img">
            </div>
            <div class="animecontentcontent">
                <h1 class="animetitle">{{animes.animeTitle}}</h1>

                <div class="todomenostitle">
                    <p class="releaseddate"><strong>Released date:</strong> {{animes.releasedDate}}</p>
                    <div class="genres">
                        <strong>Genres:</strong>
                        <div v-for="(genre, index) in animes.genres"
                        :item="genre"
                        :index="index"
                        :key="genre.id">
                        <p>{{genre}}</p>  
                        </div>
                    </div>  
                    <strong>Synopsis:</strong>
                    <p class="animesynopsis">{{animes.synopsis}}</p>


                </div>
                
            </div>
        </div>
        
        <div class="episodediv">
            <div class="episodecontent">
                <h3><strong>List of episodes</strong></h3>
                <div class="episodelist"> 
                    <div class="episode" v-for="(episode, index) in animes.episodesList"
                    :item="episode"
                    :index="index"
                    :key="episode.id">
                   <p> <a :href="episode.episodeUrl">{{episode.episodeId}}</a> </p> 
                   </div>
                </div>
            </div>
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
<style scoped >

.all{
    font-family: cursive;
}

.animeimage{
    height: 100%;
    margin: 10px;
}

.animecontent{
    display:flex;
    margin: 80px;
    background-color: #ffe28b;
    
}

.episodecontent{
    background-color: #ede6d3;
    padding: 30px;
}

.todomenostitle{
    background-color: #feffc6;
    height: 80%;
}

.animecontentcontent{
    margin: 15px;
}

.releaseddate{

}

.genres{
    display:flex;
    flex-direction: row;
    justify-content: space-evenly;
}

.animeimage{

}

.animetitle{
    background-color: #feffc6;
}

.animesynopsis{

}

.episodelist{
    margin-top: 50px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}

.episode{
    margin:0px;
}

.episodediv{
    
    margin-left: 400px;
    margin-right: 400px;
}
</style>