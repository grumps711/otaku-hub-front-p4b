<template lang="">
    <div>
        <img class="homeimage" src="..\assets\1653045471_530623_1653046155_noticia_normal.jpg" alt="anime home image 1">
    </div>
    <div>
        <h1>Otaku Hub</h1>
    </div>
    <div class="userstats" v-if="dbUser.username">
        <h4 class="text-center bg-secondary">
            <h2>User stats:</h2>
          Welcome  {{dbUser.username}}  
          <p> You have {{dbUser.points}} points</p>
          <p> Your level is {{dbUser.level}} </p>
        </h4>
    </div>
    <div v-else>
        Please sign in <router-link to="/login">here</router-link> 
    </div>

    <div class="linkdiv">
        <router-link class="link" to="/animeresults">Anime Search</router-link>
      </div>
      <div class="linkdiv">
        <router-link class="link" to="/trivial">Trivial</router-link>
      </div>
    

   
   <!--  <div>
        <search/>
    </div>
    <div>
        <router-link to="/trivial"> <h2>Otaku Trivial!</h2></router-link>
    </div> -->
    <div>
        <img class="homeimage" src="..\assets\manga-tekeningen.jpg" alt="anime home image 2">
    </div>
</template>

<script>
import { useUserStore } from "../stores/UserStore";
import { mapState, mapActions } from "pinia"; 
import search from "../components/search.vue"
export default {
    name:"home",
    data() {
        return {
            email: null,
             authenticated: null,
             
        };
    },
    components:{
        search
    } ,
    computed: {
     ...mapState(useUserStore, ["dbUser"]), 
     /* ...mapState(useUserStore, ["dbUser"]) */
  },
}
</script>
<style scoped>
    .homeimage{
        width: 50%;
    }

    .userstats{
        display: flex;
        justify-content: center;
    }
    .linkdiv{
        margin-right: 50px;
        display: flex;
        justify-content: center;
    }

    .link{
        text-decoration: none;
        color: #fff;
      background-color: #82bfe5;
      display: block;
      margin: 40px auto;
      width: 90%;
      max-width: 200px;
      padding: 12px 8px;
      text-decoration: none;
      border-radius: 5px;
      transition: background 0.4s;
      padding:10px;
      margin:20px;
    }
</style>