import { defineStore } from "pinia";
import { supabase } from "../supabase/init";
import { axios } from '@/plugins/axios';

/*para decirle a Vue que es una Pinia store*/

export const useUserStore = defineStore(
  "UserStore",
  {
    state: () => ({
      user: null,
      points: null,
      userObject:null

    }),

    /*Aqui és on guardem la nostra data reactiva
  (Definit com una funció que retorna el estat inicial) */

    actions: {
      async signUp(email, password) {
        let { user, error } = await supabase.auth.signUp({
          email,
          password,
        });

        const userObject = { "username": email, "password": password };
        const response = await axios.post("http://localhost:80/users/create", userObject);
        this.articleId = response.data.id;


        if (error == null && user !== null) {

          let userObject = {"username": email, "password": password}
          console.log(userObject);
          this.userObject=userObject;
         
        
          console.log("jelou")
          console.log("email registrado " + email);
          console.log("error = " + error);
          alert("Thanks for registering!, you may now login");
          window.location.href = "#/login";
          this.user = user;
        } else if (error !== null || user == null) {
          console.log("error = " + error);
          console.log("Ha habido un error, no es valido");
        }
      },



      async signIn(email, password) {
        let { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (data == null) {
          console.log("error en el sign in!!");

          alert(
            "The email address and password you entered did not match our records. Please double-check and try again."
          );
        } else {
          this.user = data;
          console.log(data);
          window.location.href = "#/home";
        }
      },


    async logOut() {
        let { error } = await supabase.auth.signOut();
        window.location.href = "/";
      },
    async forgotPassword(email) {
      let { data, error } = await supabase.auth.api.resetPasswordForEmail(
        email
      );
      alert("email sent to " + email);
      window.location.href = "#/";
    },
    
    },
    persist: {
      enabled: true,
    },
  }

  /*actions:(),
    son methods que agafen data del state i el modifiquen*/

  /*getters: (),
    son computedProperties que agafen data del state, el modifiquen 
    i retorna alguna cosa*/
);

/*defineStore espera 2 argumentos - arg1: id de la store(sirve para
    conectar pinia con devtools) 
    arg2: options object (con state, actions, getters) */
/* antes del defineStore ponemos un export para enseñar lo que
exportaremos
y ponemos "export const useNameOfStore ="
siendo NameOfStore el nombre de nuestra store
use és una "convention" de vue
*/
