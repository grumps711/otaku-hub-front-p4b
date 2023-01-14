<template>


    <div class="linkdiv">
        <router-link class="link" to="/home">Home</router-link>
    </div>

    <div class="all">
        <div class="topdiv">
            <div class="animecontent">
                <div class="animeimage">
                    <img class="animeimage" :src="animes.animeImg" alt="img">
                </div>
                <div class="animecontentcontent">
                    <h1 class="animetitle">{{ animes.animeTitle }}</h1>

                    <div class="todomenostitle">
                        <p class="releaseddate"><strong>Released date:</strong> {{ animes.releasedDate }}</p>
                        <div class="genres">
                            <strong>Genres:</strong>
                            <div v-for="(genre, index) in animes.genres" :item="genre" :index="index" :key="genre.id">
                                <p>{{ genre }}</p>
                            </div>
                        </div>
                        <p><strong>Type:</strong> {{ animes.type }} </p>
                        <p><strong>Status:</strong> {{ animes.status }} </p>

                        <strong>Synopsis:</strong>
                        <p class="animesynopsis">{{ animes.synopsis }}</p>


                    </div>

                </div>
            </div>
            <div class="linkdiv">
                <router-link class="link" to="/animeresults">Search again</router-link>
            </div>
        </div>
        <vue-basic-alert ref="alert" />
        <button 
        @click="addToAnimeList();$refs.alert
        .showAlert(
            'success', // There are 4 types of alert: success, info, warning, error
            35, // Size of the icon (px)
            'Added to Anime List', // Icon styles: now only 2 styles 'solid' and 'regular'
            'Success 200', // Header of the alert
            'This is the information of something you may know Success.' // Message of the alert
        )">

        Add to Anime List
         </button>

        <div class="episodediv">
            <div class="episodecontent">
                <h3><strong>List of episodes</strong></h3>
                <div class="episodelist">
                    <div class="episode" v-for="(episode, index) in animes.episodesList" :item="episode" :index="index"
                        :key="episode.id">
                        <router-link :to="{ name: 'episodeview', params: { episodeid: episode.episodeId } }">{{
                            episode.episodeId
                        }}</router-link>
                        -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { useUserStore } from "../stores/UserStore";
import { mapState, mapActions } from "pinia";
import VueBasicAlert from 'vue-basic-alert';
import axios from 'axios'
export default {
    name: "animedetails",
    data() {
        return {
            animes: [],
            animeid: "",
            Alert: undefined

        };
    },
    components: {
    VueBasicAlert
  },
    computed: { ...mapState(useUserStore, ["dbUser"]), },

    methods: {

        getEpisode(episodeid) {
            axios.get('http://localhost:80/anime/watch?episodeId=' + episodeid)
                .then((response) => {
                    console.log(response.data)
                    this.episodeurl = response.data.Referer
                })
                .catch((error) => {
                    console.log(error)
                })

        },

        addToAnimeList() {
            axios.patch('http://localhost:80/users/addanime/' + this.dbUser.username + '?animeId=' + this.$route.params.animeid)
                .then((response) => {
                    console.log(response.data)
                    
                })
                .catch((error) => {
                    console.log(error)
                })
        },

       


    },
/*props:["animeId"],
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
    axios.get('https://gogoanime.consumet.org/anime-details/' + this.$route.params.animeid)
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
.all {
    font-family: cursive;
}

.animeimage {
    height: 100%;
    margin: 10px;
}

.animecontent {
    display: flex;
    margin: 80px;
    background-color: #bfd66e;
    align-items: center;

}

.episodecontent {
    background-color: #ede6d3;
    padding: 30px;
}

.todomenostitle {
    background-color: #feffc6;
    padding: 20px;
    margin: 20px;
}

.genres {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
}



.animetitle {
    background-color: #feffc6;
    padding: 20px;
    margin: 20px;
}



.episodelist {
    margin-top: 50px;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
}

.episode {
    margin: 0px;
}

.episodediv {

    margin-left: 400px;
    margin-right: 400px;
}

.searchagain {
    display: flex;
    justify-content: flex-end;
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


.topdiv {
    display: flex;
    align-items: center;
}

.linkdiv {
    display: flex;
    justify-content: center;
}

.alert-message {
    line-height: 20px;
    font-size: 15px;
    padding-bottom: 12px;
}

h1 {
    color: #e35154 !important;
    font-size: 18px;
    margin-left: 20px;
    margin-bottom: 20px;
    font-weight: 700;
    text-transform: uppercase;
}

.unstyled {
    margin: 0;
    list-style: none;
}

.unstyled a,
.unstyled #test {
    width: 120px;
    text-decoration: none;
    padding: .5em 1em;
    background-color: #213347;
    border-radius: 4px;
    display: block;
    margin-bottom: .5em;
    font-size: 15px;
    font-weight: 300;
    font-family: 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

.unstyled a:hover,
.unstyled #test:hover {
    background-color: #f25c5d;
}

.cf,
.alert {
    *zoom: 1;
}

.cf:before,
.alert:before,
.cf:after,
.alert:after {
    display: table;
    content: "";
    line-height: 0;
}

.cf:after,
.alert:after {
    clear: both;
}

#alerts {
    width: 400px;
    top: 12px;
    right: 50px;
    position: fixed;
    z-index: 9999;
    list-style: none;
}

.alert {
    width: 100%;
    margin-bottom: 8px;
    display: block;
    position: relative;
    border-left: 4px solid;
    right: -50px;
    opacity: 0;
    line-height: 1;
    padding: 0;
    transition: right 400ms, opacity 400ms, line-height 300ms 100ms, padding 300ms 100ms;
    display: table;
}

.alert:hover {
    cursor: pointer;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.3);
}

.open {
    right: 0;
    opacity: 1;
    line-height: 2;
    padding: 3px 15px;
    transition: line-height 200ms, padding 200ms, right 350ms 200ms, opacity 350ms 200ms;
}

.alert-title {
    font-weight: bold;
}

.alert-block {
    width: 80%;
    width: -webkit-calc(100% - 10px);
    width: calc(100% - 10px);
    text-align: left;
}

.alert-block em,
.alert-block small {
    font-size: .75em;
    opacity: .75;
    display: block;
}

.alert i {
    font-size: 2em;
    width: 1.5em;
    max-height: 48px;
    top: 50%;
    margin-top: -12px;
    display: table-cell;
    vertical-align: middle;
}

.alert-success {
    color: #fff;
    border-color: #539753;
    background-color: #8fbf2f;
}

.alert-error {
    color: #fff;
    border-color: #dc4a4d;
    background-color: #f25c5d;
}

.alert-trash {
    color: #fff;
    border-color: #dc4a4d;
    background-color: #f25c5d;
}

.alert-info {
    color: #fff;
    border-color: #076d91;
    background-color: #3397db;
}

.alert-warning {
    color: #fff;
    border-color: #dd6137;
    background-color: #f7931d;
}
</style>