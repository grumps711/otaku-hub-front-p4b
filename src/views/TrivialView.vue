<template>

    <div class="linkdiv">
        <router-link class="link" to="/home">home</router-link>
      </div>
    <div>
        <h1>Otaku Trivial</h1>
    </div>

</template>

<script>
export default {
    name:"trivial",
    data() {
        return {
            
        };
    }
}
</script>

<style scoped>
    
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

.linkdiv{
    margin-right: 50px;
    display: flex;
    justify-content: center;
}
</style>