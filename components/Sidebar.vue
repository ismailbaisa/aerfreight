<template>
  <div>
    <nav class="w-72  bg-white fixed h-screen shadow-2xl items-center">
      <div class="h-screen grid grid-rows-6 grid-flow-col gap-16">
        <img class="h-20 text-center p-4" src="../assets/images/aerfreight.jpg">
        <button
          class="bg-aerfreight hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded h-32 w-11/12 m-auto"
          type="button" @click="goHome">
          <home-icon class="h-10" /> Overview
        </button>
        <button v-if="user == 'admin'"
          class="bg-purple-500 hover:bg-purple-400 text-white font-bold py-2 px-4 border-b-4 border-purple-700 hover:border-purple-500 rounded h-32 w-11/12 m-auto"
          type="button" @click="newCargo">
          <box-icon class="h-10" />New Cargo
        </button>
        <span v-if="user == 'guest'"></span>
        <span></span>
        <span></span>
        <button
          class="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-2 px-4 border-b-4 border-indigo-700 hover:border-indigo-500 rounded h-16 w-11/12 m-auto"
          type="button" @click="logOut">
          Logout
        </button>
      </div>
    </nav>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {}
    },
    methods: {
      newCargo() {
        this.$router.replace('/new')
      },
      goHome() {
        this.$router.replace('/home')
      },
      logOut() {
        this.$router.replace('/')
      }
    },
     computed: mapGetters({
      user: "dataUser"
    }),
    // mounted:
    // console.log(this.user)
  }
</script>

<style>

</style>