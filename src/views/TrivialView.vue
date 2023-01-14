<template>

    <div class="linkdiv">
        <router-link class="link" to="/home">Home</router-link>
    </div>
    <div>
        <img id="otakutriviatitle" src="..\assets\text-1673648583481.png">
    </div>
    <div class="userdata">

    </div>
    <div class="wrapper">
        <div id="quiz">
            <h1>Quote Trivia!</h1>


            <p class="questions">
            <div v-if="quote">
                {{ quote.quote }}
            </div>
            </p>

            <div class="answers">
                <ul>
                    <li><button id="answer" @click="checkCorrectQuote(answerListQuotes[0])">a) {{ answerListQuotes[0] }}</button>
                    </li>
                    <li><button id="answer" @click="checkCorrectQuote(answerListQuotes[1])">b) {{ answerListQuotes[1] }}</button>
                    </li>
                    <li><button id="answer" @click="checkCorrectQuote(answerListQuotes[2])">c) {{ answerListQuotes[2] }}</button>
                    </li>
                </ul>
                <div v-if="isCorrectQuote=='yes'"><button type="button" class="btn btn-success">Correct!</button></div>
                <div v-else-if="isCorrectQuote=='no'"><button type="button" class="btn btn-danger">Wrong..</button></div>
               
                
            </div>
        </div>

        <div class="imagequiz" v-if="sceneImage">
            <div id="quiz">
                <h1>Image Trivia!</h1>

                <p class="questions">
                <div v-if="sceneImage">
                    <img class="image" :src="sceneImage.image" alt="img">
                </div>
                </p>

                <div class="answers">
                    <ul>
                        <li><button id="answer" @click="checkCorrectImage(answerListImages[0])">a) {{
                            answerListImages[0]
                        }}</button> </li>
                        <li><button id="answer" @click="checkCorrectImage(answerListImages[1])">b) {{
                            answerListImages[1]
                        }}</button> </li>
                        <li><button id="answer" @click="checkCorrectImage(answerListImages[2])">c) {{
                            answerListImages[2]
                        }}</button> </li>
                    </ul>
                    <div v-if="isCorrectImage=='yes'"><button type="button" class="btn btn-success">Correct!</button></div>
                    <div v-else-if="isCorrectImage=='no'"><button type="button" class="btn btn-danger">Wrong..</button></div>
                </div>
            </div>
        </div>
    </div>




    <!-- <h1 class="imageAnime">{{animes.animeTitle}}</h1>
      <p>Released date: {{animes.releasedDate}}</p>
      <p>Genres: 
       
        
        <div v-for="(genre, index) in animes.genres"
         :item="genre"
         :index="index"
         :key="genre.id">
         <p>{{genre}}</p>  
        </div>

        </p>
        <img :src="animes.animeImg" alt="img">
        <p>{{animes.synopsis}}</p>

        <div v-for="(episode, index) in animes.episodesList"
         :item="episode"
         :index="index"
         :key="episode.id">
        <p> <a :href="episode.episodeUrl">{{episode.episodeId}}</a> </p> 
        </div>  -->



</template>

<script>
import { useUserStore } from "../stores/UserStore.js";
import { mapState, mapActions } from "pinia";
import axios from 'axios'
export default {
    name: "trivial",
    data() {
        return {
            quote: [],
            sceneImage: [],
            answerListQuotes: [],
            answerListImages: [],
            correctAnswers: null,
            wronganswers: null,
            dbUserUpdated: [],
            isCorrectQuote:"void",
            isCorrectImage:"void",
        };
    },
    computed: {
        ...mapState(useUserStore, ["dbUser"])
    },

    methods: {
        
        getQuote() {
            axios.get('http://localhost:80/trivial/quote')
                .then((response) => {
                    console.log(response.data)
                    this.quote = response.data
                    this.answerListQuotes = []
                    this.answerListQuotes.push(response.data.correctAnswer)
                    this.answerListQuotes.push(response.data.wrongAnswer1)
                    this.answerListQuotes.push(response.data.wrongAnswer2)
                    this.shuffleArray(this.answerListQuotes)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        getImage() {
            axios.get('http://localhost:80/trivial/sceneImage')
                .then((response) => {
                    console.log(response.data)
                    this.sceneImage = response.data
                    this.answerListImages = []
                    this.answerListImages.push(response.data.correctAnswer)
                    this.answerListImages.push(response.data.wrongAnswer1)
                    this.answerListImages.push(response.data.wrongAnswer2)
                    this.shuffleArray(this.answerListImages)
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        updateUser() {
            axios
            .get("http://localhost:80/users/getByUsername?username=" + this.dbUser.username)
            .then((response) => {
                console.log(response.data)
                this.dbUserUpdated = response.data
                console.log(this.dbUserUpdated.username)
            })
        },

        shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        },

        checkCorrectQuote(answerUser) {
            if (answerUser == this.quote.correctAnswer) {
                console.log("CORRECT QUOTE ANSWER!!!")
                this.getQuote()
                try {
                    this.addPointToUser()
                    console.log("Point added!!")
                    this.isCorrectQuote="yes"
                } catch (error) {
                    console.log("Couldn't add point!")
                }
                try {
                    this.updateUser()
                    console.log("User updated!!")
                    this.isCorrectQuote="yes"
                } catch (error) {
                    console.log("Couldn't update user!")
                }
            }
            else {
                console.log("WRONG QUOTE ANSWER...")
                this.getQuote()
                this.isCorrectQuote="no"
            }
        },

        checkCorrectImage(answerUser) {
            if (answerUser == this.sceneImage.correctAnswer) {
                console.log("CORRECT IMAGE ANSWER!!!")
                this.getImage()
                console.log(this.dbUser.username)
                try {
                    this.addPointToUser()
                    console.log("Point added!!")
                    this.isCorrectImage="yes"
                } catch (error) {
                    console.log("Couldn't add point!")
                }
                try {
                    this.updateUser()
                    console.log("User updated!!")
                    this.isCorrectImage="yes"
                } catch (error) {
                    console.log("Couldn't update user!")
                }
            }
            else {
                console.log("WRONG IMAGE ANSWER...")
                this.getImage()
                this.isCorrectImage="no"
            }
        },

        addPointToUser() {
            axios.patch('http://localhost:80/users/addpoints/' + this.dbUser.username)
                .then((response) => {
                    console.log(response.data)
                })
                .catch((error) => {
                    console.log(error)
                })
        },
    },

    mounted() {

        axios.defaults.headers.common = {
          "x-trace-key": "SATtVQ5QqUCXDShLldHXapLIZACp43TKLA7a24hFt5Q",
        };

        axios.get('http://localhost:80/trivial/quote')
            .then((response) => {
                console.log(response.data)
                this.quote = response.data
                this.answerListQuotes = []
                this.answerListQuotes.push(response.data.correctAnswer)
                this.answerListQuotes.push(response.data.wrongAnswer1)
                this.answerListQuotes.push(response.data.wrongAnswer2)
                this.shuffleArray(this.answerListQuotes)
            })
            .catch((error) => {
                console.log(error)
            })

        axios.get('http://localhost:80/trivial/sceneImage')
            .then((response) => {
                console.log(response.data)
                this.sceneImage = response.data
                this.answerListImages = []
                this.answerListImages.push(response.data.correctAnswer)
                this.answerListImages.push(response.data.wrongAnswer1)
                this.answerListImages.push(response.data.wrongAnswer2)
                this.shuffleArray(this.answerListImages)
            })
            .catch((error) => {
                console.log(error)
            })

            axios
            .get("http://localhost:80/users/getByUsername?username=" + this.dbUser.username)
            .then((response) => {
                console.log(response.data)
                this.dbUserUpdated = response.data
                console.log(this.dbUserUpdated.username)
            })
        /*   this.answerListImages.push(this.sceneImage.correctAnswer)
          this.answerListImages.push(this.sceneImage.wrongAnswer1)
          this.answerListImages.push(this.sceneImage.wrongAnswer2)
          console.log(this.answerListImages) */
    },
}
</script>

<style scoped>
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

.linkdiv {
    display: flex;
    justify-content: center;
}

.wrapper {

    margin: 20px;
    height: 100%;
    padding-top: 0px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

}

#quiz {
    background-color: #34495E;
    border-radius: 2%;
    color: #fff;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    margin: 50px;
    width: 50%;
}

#quiz>h1 {
    text-align: center;
    padding-top: 25px;
    font-size: 20px;
}

#answer{
    text-decoration: none;
  color: rgb(94, 94, 94);
  background-color: #d2dfa2;
  
 
  width: 90%;
  max-width: 200px;
  padding: 12px 8px;
  text-decoration: none;
  border-radius: 5px;
  transition: background 0.4s;
  padding: 10px;
  margin: 10px;
}

#answer:hover{
    color: rgb(94, 94, 94);
    background-color: #bfd66e;
}

.questions {
    font-size: 20px;
    font-weight: 700;
    font-style: italic;
    border-top: 1px solid #FFFFFF;
    border-bottom: 1px solid #FFFFFF;
    padding: 20px;
}

.answers div {
    padding: 10px 0 0 0;
    font-size: 16px;

}

.image {
    width: 70%;
}

.answers div:hover {
    cursor: pointer;
    color: #FBCB43;
}

.answers {
    padding: 0px 0 10px 0px;
}

.answers ul {
    list-style: none;
}

.answers div {
    width: 50%;
    margin: 0 auto;
    padding-bottom: 15px;
    border-top: 1px solid grey;
}

.answers div:first-child {
    border: none;
}

.checker {
    display: inline-block;
    width: 200px;
    margin: 0 auto;
}

.correct,
.false {
    background-color: #109D59;
    width: 60px;
    height: 30px;
    line-height: 30px;
    padding-left: 4px;
    float: left;
    margin-left: 2px;
    margin-top: 2px;
}



.false {
    background-color: #DC4437;
}

.imagequiz {
    width: 50%;
}

#otakutriviatitle{
    width: 30%;
    margin: 20px;
}

.userdata{
    font-family: monospace;
}
</style>