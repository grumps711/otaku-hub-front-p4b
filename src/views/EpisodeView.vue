<template>
    <div>

        <br><br><br><br><br>
        {{ this.$route.params.episodeid }}
        <br><br>

        <div class="episodediv">
            <a  :href="episodeReferer" target="_blank">
                <button class="link">View episode</button>
            </a>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "episodeview",
    data() {
        return {
            animes: [],
            episodeid: "",
            episodeId: "",
            episodeReferer: ""
        };
    },

    mounted() {

        axios.get('http://localhost:80/anime/watch?episodeId=' + this.$route.params.episodeid)
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

  .episodediv{
    display: flex;
    justify-content: center;
  }
</style>