<template lang="">
   
   <div class="everything">
    <div class="otakuhub">
        <div>
            <img class="homeimage" src="..\assets\1653045471_530623_1653046155_noticia_normal.jpg" alt="anime home image 1">
        </div>
        <div class="imagediv">
            <img id="titlepng" src="..\assets\text-1673644554952.png">
        </div>
        <div>
            <img class="homeimage" src="..\assets\manga-tekeningen.jpg" alt="anime home image 2">
        </div>
    </div>
    
   <div>
    
   </div>
   
    <div class="info">
        <div class="userstats" v-if="dbUser.username">
            <h2>User stats</h2>
            <p>Welcome  {{dbUserUpdated.username}} </p>
            <p> You have {{dbUserUpdated.points}} points</p>
            <p> Your level is {{dbUserUpdated.level}} </p>
        </div>
        <div class="userstats" v-else>
            Please sign in <router-link to="/login">here</router-link> 
        </div>
    
        <div v-if="dbUser.username" class="options">
            <div class="optionsmenu">
                <div class="linkdiv">
                    <router-link class="link" to="/animeresults">Anime Search</router-link>
                </div>
                <div class="linkdiv">
                    <router-link class="link" to="/trivial">Trivial</router-link>
                </div>
                <button class="logoutbutton linkdiv link" @click="logOut()">Log out</button>
            </div>
           

            <div class="animelist">
                <h2 v-if="dbUserUpdated.animeList"> My anime list</h2>
                    <div v-for="anime in dbUserUpdated.animeList" :key="anime.id" class="anime">
                        {{anime.animeTitle}}
                    </div>
               
            </div>
        </div>
    </div>
   
   </div>
    
    
    

   
   <!--  <div>
        <search/>
    </div>
    <div>
        <router-link to="/trivial"> <h2>Otaku Trivial!</h2></router-link>
    </div> -->
    
</template>

<script>
import { useUserStore } from "../stores/UserStore";
import { mapState, mapActions } from "pinia";
import search from "../components/search.vue"
import axios from 'axios'
export default {
    name: "home",
    data() {
        return {
            email: null,
            authenticated: null,
            dbUserUpdated: []

        };
    },
    components: {
        search
    },
    computed: {
        ...mapState(useUserStore, ["dbUser"]),
        /* ...mapState(useUserStore, ["dbUser"]) */
    },
    methods: {
        ...mapActions(useUserStore, ["logOut"])
    },
    mounted() {

        axios.defaults.headers.common = {
            "X-API-Key": "SATtVQ5QqUCXDShLldHXapLIZACp43TKLA7a24hFt5Q",
        };
        axios
            .get("http://localhost:80/users/getByUsername?username=" + this.dbUser.username)
            .then((response) => {
                this.dbUserUpdated = response.data
            })

    },
}
</script>
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Bangers&display=swap');

.homeimage {
    width: 100%;
}

.userstats {
    font-family: monospace;

}

.linkdiv {
    display: flex;
    justify-content: center;
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
    margin: 10px;


}

.link:hover {
    color: rgb(94, 94, 94);
    background-color: #bfd66e;
}

.everything {
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: row;
}

.info {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fadfad;
    border-radius: 20px;
    width: 25%;
}

.userstats {
    border-radius: 20px;
    width: 70%;
    margin-top: 20px;
    margin-bottom: 20px;
}


.bg-secondary {
    --bs-bg-opacity: 0;
}

#title {
    background-color: white;
    margin: 0;
    padding: 27px;
    font-weight: 500;
    font-family: 'Bangers', cursive;
    font-size: 50px;
}

.otakuhub {
    width: 800px;
}

#titlepng {
    width: 90%;

}

.imagediv {
    background-color: white;
    padding-top: 20px;
    padding-bottom: 20px;
}

.animelist{
    font-family: monospace;
    margin-bottom: 20px;
}

.logoutbutton{
    border: none;
    margin-left: 12%;

}

.optionsmenu{
    display: flex;
    flex-direction: column;
    align-content: stretch;
}
</style>