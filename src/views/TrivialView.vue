<template>

    <div class="linkdiv">
        <router-link class="link" to="/home">home</router-link>
    </div>
    <div>
        <h1>Otaku Trivial</h1>
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
                    <li>a) {{ answerListQuotes[0] }} </li>
                    <li>b) {{ answerListQuotes[1] }}</li>
                    <li>c) {{ answerListQuotes[2] }}</li>
                </ul>
            </div>
            <button @click="getQuote">Next Quote</button>
        </div>

        <div v-if="sceneImage">
            <div id="quiz">
                <h1>Image Trivia!</h1>

                <p class="questions">
                <div v-if="quote">
                    <img class="image" :src="sceneImage.image" alt="img">
                </div>
                </p>

                <div class="answers">
                    <ul>
                        <li>a) {{ answerListImages[0] }}</li>
                        <li>b) {{ answerListImages[1] }}</li>
                        <li>c) {{ answerListImages[2] }}</li>
                    </ul>
                </div>
                <button @click="getImage">Next Image</button>
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
            wronganswers: null
        };
    },

    methods: {
        getQuote() {
            axios.get('http://localhost:80/trivial/quote')
                .then((response) => {
                    console.log(response.data)
                    this.quote = response.data
                    this.answerListQuotes = []
                    console.log("Antes de meter valores:    " + this.answerListQuotes)
                    this.answerListQuotes.push(response.data.correctAnswer)
                    this.answerListQuotes.push(response.data.wrongAnswer1)
                    this.answerListQuotes.push(response.data.wrongAnswer2)
                    console.log("ORIGINAL QUOTES posicion 0" + this.answerListQuotes[0] + " posicion 1: " + this.answerListQuotes[1] + " posicion 2: " + this.answerListQuotes[2])
                    this.shuffleArray(this.answerListQuotes)
                    console.log(this.answerListQuotes)
                    console.log("SHUFFLED QUOTES posicion 0" + this.answerListQuotes[0] + " posicion 1: " + this.answerListQuotes[1] + " posicion 2: " + this.answerListQuotes[2])
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
                    console.log("Antes de meter valores:    " + this.answerListImages)
                    this.answerListImages.push(response.data.correctAnswer)
                    this.answerListImages.push(response.data.wrongAnswer1)
                    this.answerListImages.push(response.data.wrongAnswer2)
                    console.log("ORIGINAL Images posicion 0" + this.answerListImages[0] + " posicion 1: " + this.answerListImages[1] + " posicion 2: " + this.answerListImages[2])
                    this.shuffleArray(this.answerListImages)
                    console.log(this.answerListImages)
                    console.log("SHUFFLED QUOTES posicion 0" + this.answerListImages[0] + " posicion 1: " + this.answerListImages[1] + " posicion 2: " + this.answerListImages[2])
                })
                .catch((error) => {
                    console.log(error)
                })
        },

        shuffleArray(array) {
            for (var i = array.length - 1; i > 0; i--) {
                var j = Math.floor(Math.random() * (i + 1));
                var temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }
    },

    mounted() {

        axios.get('http://localhost:80/trivial/quote')
            .then((response) => {
                console.log(response.data)
                this.quote = response.data
                this.answerListQuotes = []
                console.log("Antes de meter valores:    " + this.answerListQuotes)
                this.answerListQuotes.push(response.data.correctAnswer)
                this.answerListQuotes.push(response.data.wrongAnswer1)
                this.answerListQuotes.push(response.data.wrongAnswer2)
                console.log("ORIGINAL QUOTES posicion 0" + this.answerListQuotes[0] + " posicion 1: " + this.answerListQuotes[1] + " posicion 2: " + this.answerListQuotes[2])
                this.shuffleArray(this.answerListQuotes)
                console.log(this.answerListQuotes)
                console.log("SHUFFLED QUOTES posicion 0" + this.answerListQuotes[0] + " posicion 1: " + this.answerListQuotes[1] + " posicion 2: " + this.answerListQuotes[2])
            })
            .catch((error) => {
                console.log(error)
            })

        axios.get('http://localhost:80/trivial/sceneImage')
            .then((response) => {
                console.log(response.data)
                this.sceneImage = response.data
                this.answerListImages = []
                console.log("Antes de meter valores:    " + this.answerListImages)
                this.answerListImages.push(response.data.correctAnswer)
                this.answerListImages.push(response.data.wrongAnswer1)
                this.answerListImages.push(response.data.wrongAnswer2)
                console.log("ORIGINAL Images posicion 0" + this.answerListImages[0] + " posicion 1: " + this.answerListImages[1] + " posicion 2: " + this.answerListImages[2])
                this.shuffleArray(this.answerListImages)
                console.log(this.answerListImages)
                console.log("SHUFFLED QUOTES posicion 0" + this.answerListImages[0] + " posicion 1: " + this.answerListImages[1] + " posicion 2: " + this.answerListImages[2])
            })
            .catch((error) => {
                console.log(error)
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
    padding: 10px;
    margin: 20px;
}

.linkdiv {
    margin-right: 50px;
    display: flex;
    justify-content: center;
}

.wrapper {

    margin: 20px;
    height: 100%;
    padding-top: 0px;
}

#quiz {
    background-color: #34495E;
    padding-bottom: 60px;
    border-radius: 2%;
    color: #fff;
    text-align: center;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
    width: 50%;
    margin: 50px;
}

#quiz>h1 {
    text-align: center;
    padding-top: 25px;
    font-size: 20px;
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

.wrapper {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
}

.false {
    background-color: #DC4437;
}
</style>