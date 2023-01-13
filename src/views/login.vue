<template>
  <div class="main-w3layouts wrapper loginBG" id="loginView">
 
    <div
      class="main-agileinfo bg-light shadow-lg p-3 mb-5 bg-light rounded-4 container col-12 col-sm-10 col-md-6 col-lg-4"
    >
      <div class="d-flex flex-column align-items-center">
        <h3 class="text-secondary">
          Hello again!
          <p>Welcome back!</p>
        </h3>
      </div>
      <div class="agileits-top form-floating">
        <form
          @submit.prevent="signIn(email, password)"
          action="#"
          method="post"
          class="d-flex flex-column align-items-center row"
        >
          <div class="form-floating col-8">
            <input
              class="text rounded-2 mb-3 border-0 form-control"
              id="floatingInput2"
              type="text"
              name="Username"
              placeholder=" "
              required=""
              v-model="email"
            />

            <label class="ms-2" for="floatingInput2">Email</label>
          </div>

          <div class="form-floating col-8">
            <input
              class="text rounded-2 w3lpass mb-3 border-0 form-control"
              id="floatingInput1"
              type="password"
              name="password"
              placeholder=" "
              required=""
              v-model="password"
            />

            <label class="ms-2" for="floatingInput1">Password</label>
          </div>
          <br />
          <input
            class="btn rounded-pill bg-primary w-50 border-0"
            type="submit"
            value="LOG IN"
          />
        </form>

        <div>
          
        </div>
        <p class="text-secondary d-flex justify-content-center mt-3">
          Not registered?
          <router-link class="text-primary ms-2" to="/signup"
            >Create an account</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../stores/UserStore";
import { mapState, mapActions } from "pinia";
export default {
  name: "signin",
  data() {
    return {
      email: null,
      password: null,
    };
  },

  methods: {
    ...mapActions(useUserStore, ["signIn"]),
  },
  mounted() {
    console.log("email is: " + this.email);
  },
};
</script>

<style scoped>
h3 {
  font-weight: 900 !important;
}

input[type="text"]::-webkit-input-placeholder {
  color: #524e79;
}

input[type="password"]::-webkit-input-placeholder {
  color: #524e79;
}

body {
    margin: 0;
    font-family: var(--bs-body-font-family);
    font-size: var(--bs-body-font-size);
    font-weight: var(--bs-body-font-weight);
    line-height: var(--bs-body-line-height);
    color: #524e79;
    text-align: var(--bs-body-text-align);
    background-color: var(--bs-body-bg);
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: #524e79;
}



</style>
