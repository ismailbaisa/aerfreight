<template>
  <div class="ml-96 p-4">
    <h1 class="text-4xl font-bold mt-2 mb-6 -ml-10 text-aerfreight"> New Cargo </h1>
    <div class="rounded-lg bg-white shadow-lg w-19/20 p-10">
      <div class="grid grid-cols-2 gap-10">
        <div>
          <label class="block font-black">Cargo Number</label>
          <input required type="text" v-model="form.number" maxlength="6"
            class="p-4 text-center mt-3 uppercase border-4 bg-gray-200 rounded h-20 w-full">
        </div>
        <div>
          <label class="block font-black">Capacity</label>
          <input required type="number" v-model="form.capacity"
            class="p-4 text-center mt-3 border-4 bg-gray-200 rounded h-20 w-full" min="1" max="5">
        </div>
        <div>
          <label class="block font-black">Country Origin</label>
          <select required class="p-4 border-4 mt-3  bg-gray-200 rounded h-20 w-full" v-model="form.origin">
            <option v-for="(country, index) in countries" :value="country">{{country}}</option>
          </select>
        </div>
        <div>
          <label class="block font-black">Country Destination</label>
          <select required class="p-4  border-4 mt-3  bg-gray-200 rounded h-20 w-full" v-model="form.destination">
            <option v-for="(country, index) in countries" :value="country">{{country}}</option>
          </select>
        </div>
      </div>
      <div class="grid grid-cols-2 mt-3 gap-10 text-center">
        <div>
          <label class="w-full align-middle font-black">Schedule</label>
          <div class="grid grid-cols-2  gap-1">
            <div>
              <label class="">Time</label>
              <input required type="time" v-model="form.schedule.time"
                class="p-4 text-center border-4  bg-gray-200 rounded w-full">
            </div>
            <div>
              <label class="">Date</label>
              <input required type="date" v-model="form.schedule.date"
                class="p-4 text-center border-4  bg-gray-200 rounded w-full">
            </div>
          </div>
        </div>
        <div>
          <label class="w-full align-middle text-center font-black">Flight Detail</label>
          <div class="grid grid-cols-2 gap-1">
            <div>
              <label class="">Airline Name</label>
              <input required class="p-4 text-center  border-4  bg-gray-200 rounded w-full" maxlength="25"
                v-model="form.detail.airline">
            </div>
            <div>
              <label class="">Flight Number</label>
              <input required class="p-4 text-center border-4  bg-gray-200 rounded w-full" maxlength="25" v-model="form.detail.flight">
            </div>
          </div>
        </div>
      </div>
      <div class="mt-6 text-right">
        <button
          class="bg-indigo-600 hover:bg-indigo-400 text-white font-black text-xl p-6 w-1/5 border-b-4 border-indigo-700 hover:border-indigo-500 rounded"
          @click="subCargo">
          Submit
        </button>
      </div>
    </div>
  </div>
</template>

<script>
  import Swal from 'sweetalert2';
  import {
    mapGetters,
    mapActions
  } from "vuex";;
  export default {
    data() {
      return {
        countries: ['USA', 'Singapore', 'Indonesia', 'Japan', 'China'],
        form: {
          number: '',
          capacity: '',
          origin: '',
          destination: '',
          schedule: {
            time: '',
            date: ''
          },
          detail: {
            airline: '',
            flight: ''
          },
          status: 'active',
          editable: true,
        }
      }
    },
    methods: {
      subCargo() {
        if (!this.form.number) {
          Swal.fire('Fields cannot be empty', '', 'error')
        } else if (!this.form.capacity) {
           Swal.fire('Fields cannot be empty', '', 'error')
        } else if (!this.form.origin) {
          Swal.fire('Fields cannot be empty', '', 'error')
        } else if (!this.form.destination) {
          Swal.fire('Fields cannot be empty', '', 'error')
        } else if (!this.form.schedule) {
         Swal.fire('Fields cannot be empty', '', 'error')
        } else if (!this.form.schedule.time) {
         Swal.fire('Fields cannot be empty', '', 'error')
        } else if (!this.form.schedule.date) {
           Swal.fire('Fields cannot be empty', '', 'error')
        } else if (!this.form.detail.airline) {
          Swal.fire('Fields cannot be empty', '', 'error')
        } else if (!this.form.detail.flight) {
           Swal.fire('Fields cannot be empty', '', 'error')
        } else {
          this.$store.dispatch('createCargo', this.form);
        }
    }
  }
  }
</script>