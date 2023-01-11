<template lang="">
    <div>
        <img class="homeimage" src="..\assets\1653045471_530623_1653046155_noticia_normal.jpg" alt="anime home image 1">
    </div>
    <div>
        <h1>Otaku Hub</h1>
    </div>
    <div>
       <!--  <h4 class="text-center text-bg-success">
          Welcome {{ user.email }} you are now
          {{user.aud}}
         
        </h4> -->
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
/* import { useUserStore } from "../stores/UserStore";
import { mapState, mapActions } from "pinia";  */
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
  /*   computed: {
     ...mapState(useUserStore, ["userObject"]), 
  }, */
}
</script>
<style>
    .homeimage{
        width: 70%;
    }
    
</style>