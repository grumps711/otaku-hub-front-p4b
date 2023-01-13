<template>
    <div>

        <br><br><br><br><br>
        {{ this.$route.params.episodeid }}
        <br><br>

        <div>
            <a :href="episodeReferer" target="_blank">
                <button>View episode</button>
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

</style>