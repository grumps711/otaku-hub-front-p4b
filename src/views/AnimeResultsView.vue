<template >

  <div class="linkdiv">
    <router-link class="link" to="/home">Home</router-link>
  </div>
  <div>
    <p id="entername">Enter name of anime </p>
    <form for="name" method="get" action="#">
      <div>
        <input  id="search" v-model="search"  type="text" name="search" placeholder="Write here" required="">
        <input id="searchbutton" type="button" value="Search" @click="getSearch()" />
      </div>
      <div>
        <input  id="searchByGenre" v-model="searchByGenre"  type="text" name="search" placeholder="Write here" required="">
        <input id="searchbuttonByGenre" type="button" value="Search by genre" @click="getSearchByGenre()" />
      </div>
      

      <div class="results">
        <div v-for="anime in animes" :key="anime.id" class="anime">
          <h4 class="animetitle">{{ anime.animeTitle }}</h4>
          <router-link :to="{ name: 'animedetails', params: { animeid: anime.animeId } }"><img class="image"
              :src="anime.animeImg" alt="img"></router-link>
         
          <p>{{ anime.status }} {{anime.type}} </p>
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
      nameSearch: ""
    };
  },

  methods: {
    getSearch() {
      axios
        .get("http://localhost:80/anime/search?keyw=" + this.search)
        .then((response) => {
          console.log(response.data)
          this.animes = response.data
        })
        .catch((error) => {
          console.log(error)
        })
    },
    getSearchByGenre() {
      axios
        .get("http://localhost:80/anime/search/byGenre?genre=" + this.searchByGenre)
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
  components: {
    animeDetails
  },
  props: ["searched"]

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
.animetitle {
  font-size: small;
}

.image {
  width: 80%;
  height: 80%;
}

.results {
  display: grid;
  grid-template-columns: [col1] 20% [col2] 20% [col3] 20% [col4] 20% [col5] 20%;
  grid-gap: 10px;
  grid-template-rows: [row1] 20% [row2] 20% [row3] 20% [row4] 20%;
  text-align: center;
  color: #FFF;
}

.anime {
  color: rgb(94, 94, 94);
  background-color: #d2dfa2;
  padding: 30px;
  margin: 10px;
  border-radius: 6px;
}

.anime:hover{
  background-color: #bfd66e;
}

.link {
  text-decoration: none;
  color: rgb(94, 94, 94);
  background-color: #d2dfa2;
  display: block;
  margin: 40px auto;
  width: 90%;
  max-width: 200px;
  padding: 12px 8px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.4s;
  padding: 10px;
  margin: 20px;
}

.link:hover {
  color: rgb(94, 94, 94);
  background-color: #bfd66e;
}

.linkdiv {
  display: flex;
  justify-content: center;
}

#entername, #search, #searchbutton{
  font-family: monospace;
}
</style>