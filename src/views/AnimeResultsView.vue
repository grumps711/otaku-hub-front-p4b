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

            <div class="results">

              <div v-for="anime in animes" :key="anime.id" class="anime">
                <h4 class="animetitle">{{anime.animeTitle}}</h4>
                <router-link :to="{ name: 'animedetails',params: { animeid: anime.animeId}}"><img class="image" :src="anime.animeImg" alt="img"></router-link>
                <p>{{anime.status}}</p>
              </div>

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

    .animetitle{
      font-size: small;
    }
    .image{
      width: 80%;
      height: 80%;
    }

    .results{
      display: grid;
      grid-template-columns: [col1] 20% [col2] 20% [col3] 20% [col4] 20% [col5] 20%;
      grid-gap: 10px;
      grid-template-rows: [row1] 20% [row2] 20% [row3] 20% [row4] 20%;
      text-align: center;
      color: #FFF;
    }

    .anime{
      background-color: #658db5;
	    padding: 30px;
      margin: 10px;
	    border-radius: 6px;
    }
</style>