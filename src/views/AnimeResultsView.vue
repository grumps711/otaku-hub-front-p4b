<template >
  <h2>Here are the results</h2>

  <div>
        <p>Enter name of anime </p>
         <form  for="name" method="get" action="#"> 
             <input 
            v-model="search" 
            id="search" 
            type="text" 
            name="search"
            placeholder="Write here" 
            required="">
            <input 
            id="searchbutton" 
            type="button"
            value="search" 
            @click="getSearch()"
            
            /> 

            <div v-for="anime in animes" :key="anime.id" class="anime">
              <h4>{{anime.animeTitle}}</h4>
              <router-link :to=" '/animedetails/' + anime.animeId"><img class="image" :src="anime.animeImg" alt="img"></router-link>
              <p>{{anime.status}}</p>
              
            </div>

            

           <!--  <input id="sendButton" type="submit" value="search" @click="sendRequest()>   -->

        </form>  
     </div>



      <!--  <button @click="getSearch">Load Naruto Animes Similar</button>  -->

    

</template>

<script>
import axios from "axios";
import animeDetails from "./animedetails.vue";

export default {
  name: "animeresults",
  data() {
    return {
      animes: [],
      nameSearch:""
    };
  },

  methods: {
    getSearch() {
    axios
      .get("http://localhost:80/anime/search?keyw="+this.search)
      .then((response) => {
        console.log(response.data)
        this.animes = response.data
      })
      .catch((error) => {
        console.log(error)
      })
    },

    sendRequest() {
        if (this.$refs.input.value) {
            axios.get("http://localhost:80/anime/search?keyw={nameSearch}", {
                params: {
                    param: this.$refs.input.value
                }   
            })
            .then(response => (this.bookResponse = response.data))
        }
    }
  },
  components:{
      animeDetails
  },
  props:["searched"]

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