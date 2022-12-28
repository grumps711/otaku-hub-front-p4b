<template>
    <div>
        <p>Enter name of anime</p>
        <form for="name" method="get" action="#">
            <input id="searchtext" type="text" placeholder="Write here" required="">
            <input id="searchbutton" type="button" value="Search">
        </form>
    </div>
 
</template>

<script>
export default {
    name: "search",
    data() {
        return {

        };
    }
}
</script>

<style>

</style>