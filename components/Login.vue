<template>
  <div class="w-full max-w-xs">
    <form class="bg-white shadow-xl rounded px-8 pt-6 pb-8 mb-4">
      <img class="items-center justify-between" src="../assets/images/aerfreight.jpg">
      <br>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Username
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          autocomplete="off" id="username" v-model="username" type="text" placeholder="Username" required>
      </div>
      <div class="mb-6">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
          Password
        </label>
        <input
          class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
          autocomplete="off" id="password" v-model="password" type="password" placeholder="Password" required>
        <p class="text-red-500 text-xs italic" v-if="empty">Please input username and password.</p>
        <p class="text-red-500 text-xs italic" v-if="error">Invalid username or password.</p>
      </div>
      <div class="flex items-center justify-between">
        <button
          class="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
          type="button" @click="login">
          Sign In
        </button>
        <button
          class="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-4 border-b-4 border-green-700 hover:border-green-500 rounded"
          type="button" @click="guest">
          Guest
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapGetters, mapActions, mapMutations } from "vuex";
  export default {
    data() {
      return {
        username: "",
        password: "",
        error: "",
        empty: "",
      }
    },
    methods: {
      login() {
        this.error = false;
        this.empty = false;
        if (!this.username || !this.password) {
          this.empty = true;
        } else if (this.username == "admin" && this.password == 123) {
          this.$router.replace('/home')
          this.$store.commit('checkUser', 'admin');
        } else {
          this.error = true
        }
      },
      guest(){
         this.$router.replace('/guest')
         this.$store.commit('checkUser', 'guest');
      }



    }
  }
</script>

<style>

</style>