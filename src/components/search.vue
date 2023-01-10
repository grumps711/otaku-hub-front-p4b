<template>
    <div>
        <p>Enter name of anime</p>
        <form  for="name" method="get" action="#">
            <input 
            v-model="nameSearch" 
            id="searchtext" 
            type="text" 
            name="nameSearch"
            placeholder="Write here" 
            required="">
            <input 
            id="searchbutton" 
            type="button"
            value="Search" />
       
        </form>

    </div>
   
</template>

<script>
import animeresults from "../views/AnimeResultsView.vue";
export default {
    name: "search",
    data() {
        return {
            searched: ""
        }
    },
    components:{ animeresults}
}
</script>

<style>

</style>