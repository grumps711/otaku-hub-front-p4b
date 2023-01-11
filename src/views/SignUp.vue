<template>
    <div class="main-w3layouts wrapper loginBG">
      
      <div
        class="main-agileinfo bg-light shadow-lg p-3 mb-5 bg-light rounded-4 container col-12 col-sm-1giu0 col-md-6 col-lg-4"
      >
        <div class="d-flex flex-column align-items-center">
          <h3 class="text-secondary">
            Hello!
            <p>Sign up to get started</p>
          </h3>
        </div>
        <div class="agileits-top form-floating">
          <form
            @submit.prevent="signUp(email, password)"
            action="#"
            method="post"
            class="d-flex flex-column align-items-center row"
          >
            <div class="form-floating col-8">
              <input
                class="text email bg-danger rounded-2 mb-3 border-0 form-control"
                id="email1"
                type="email"
                name="email"
                placeholder=" "
                required=""
                v-model="email"
              />
              <label class="ms-2" for="floatingInput">Email</label>
            </div>
  
            <div class="form-floating col-8">
              <input
                class="text bg-danger rounded-2 mb-3 border-0 form-control"
                id="password1"
                type="password"
                name="password"
                placeholder=" "
                required=""
                v-model="password"
              />
              <label class="ms-2" for="floatingInput">Password</label>
            </div>
  
            <div class="form-floating col-8">
              <input
                class="text bg-danger rounded-2 w3lpass border-0 form-control"
                id="password2"
                type="password"
                name="password"
                placeholder=" "
                required=""
                v-model="passwordConfirm"
              />
              <label class="ms-2" for="floatingInput">Confirm Password</label>
            </div>
            <div class="wthree-text">
              <br />
              <label class="anim d-flex justify-content-center border-0 mb-3">
                <input
                  type="checkbox"
                  class="checkbox bg-primary"
                  required=""
                  v-model="terms"
                />
                <span class="text-secondary ms-2"
                  >I Agree To The Terms & Conditions</span
                >
              </label>
              <div class="clear"></div>
            </div>
            <input
              class="btn mt-2 rounded-pill bg-primary w-50 border-0"
              type="submit"
              value="SIGN UP"
            />
          </form>
  
          <p class="text-secondary d-flex justify-content-center mt-3">
            Already have an Account?
            
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useUserStore } from "../stores/UserStore.js";
  import { mapState, mapActions } from "pinia";
  
  export default {
    name: "signup",
    data() {
      return {
        email: null,
        password: null,
        passwordConfirm: null,
        terms: false,
        correcte: false,
      };
    },
    computed:{
      ...mapState(useUserStore, ["user"])
    },
    methods: {
      ...mapActions(useUserStore, ["signUp"]),

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
  
  input[type="email"]::-webkit-input-placeholder {
    color: #524e79;
  }
  
  input[type="password"]::-webkit-input-placeholder {
    color: #524e79;
  }
  </style>
  