<template lang="">
    <div>
        <img class="homeimage" src="..\assets\1653045471_530623_1653046155_noticia_normal.jpg" alt="anime home image 1">
    </div>
    <div>
        <h1>Otaku Hub</h1>
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
import search from "../components/Search.vue"
export default {
    name:"home",
    data() {
        return {
            
        };
    },
    components:{
        search
    } 
}
</script>
<style>
    .homeimage{
        width: 70%;
    }
    
</style>