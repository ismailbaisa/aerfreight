<template>
  <main class="ml-96 p-4">
    <h1 class="text-4xl font-bold mt-2 mb-6 -ml-10 text-aerfreight"> Admin Dashboard </h1>
    <div class="grid grid-cols-3 gap-10 w-19/20">
      <span class="bg-white rounded-lg shadow-lg p-5 mr-4 mb-6 w-full">
        <plane-icon class="h-20 text-purple-700" />
        <br>
        <p class="text-2xl font-extrabold">50</p>
        <br>
        <h1 class="font-bold text-xl">Available Planes</h1>
      </span>
      <span class="bg-white rounded-lg shadow-lg p-5 mr-4 mb-6 w-full">
        <box-icon class="h-20 text-purple-500" />
        <br>
        <p class="text-2xl font-extrabold">425</p>
        <br>
        <h1 class="font-bold text-xl">Available Cargos</h1>
      </span>
      <span class="bg-white rounded-lg shadow-lg p-5 mb-6 w-full">
        <parachute-icon class="h-20 text-indigo-500" />
        <br>
        <p class="text-2xl font-extrabold">40</p>
        <br>
        <h1 class="font-bold text-xl">On Delivery</h1>
      </span>
    </div>
    <div class="rounded-lg bg-white shadow-lg w-19/20 p-10">
      <input placeholder="Search Cargo Here" class="w-1/4 mb-3 mr-4 p-3 bg-gray-200 rounded-lg"><button
        class="p-2 bg-aerfreight text-white font-extrabold border border-black rounded">Search</button>
      <table class="table-fixed w-full">
        <thead>
          <tr class="bg-aerfreight text-white shadow-xl">
            <th class="border border-b-4 p-3 border-black">Cargo Number</th>
            <th class="border border-b-4 p-3 border-black ">Capacity</th>
            <th class="border border-b-4 p-3 border-black ">Flight Schedule</th>
            <th class="border border-b-4 p-3 border-black ">Country Origin</th>
            <th class="border border-b-4 p-3 border-black ">Country Destination</th>
            <th class="border border-b-4 p-3 border-black ">Flight Detail</th>
            <th class="border border-b-4 p-3 border-black ">Status</th>
            <th class="border border-b-4 p-3 border-black ">Tools</th>
          </tr>
        </thead>
        <tbody v-for="(data, index) in datas" v-bind:key="data.id">
          <tr class="font-bold ">
            <td class="p-2">
              <input v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].number" class="w-full rounded text-center h-16">
            </td>
            <td class="p-2">
              <input v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].capacity"
                class="w-full rounded text-center h-16">
            </td>
            <td class="p-2">
              <input type="time" v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].schedule.time"
                class="w-full rounded text-center h-7 mb-3">
              <input type="date" v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].schedule.date"
                class="w-full rounded text-center h-7">
            </td>
            <td class="p-2">
              <select v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].origin"
                class="w-full rounded h-16 text-center capitalize">
                <option v-for="(country, index) in countries" :value="country" v-bind:key="index">{{country}}</option>
              </select>
            </td>
            <td class="p-2">
              <select v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].destination"
                class="w-full rounded h-16 text-center capitalize">
                <option v-for="(country, index) in countries" :value="country" v-bind:key="index">{{country}}</option>
              </select>
            </td>
            <td class="p-2">
              <input v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].detail.airline"
                class="w-full rounded break-words text-center h-7 mb-3">
              <input title="table" v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].detail.flight"
                class="w-full rounded break-words text-center h-7">
            </td>
            <td class="p-2 capitalize"
              @click="data.status == 'active' ? data.status = 'inactive' : data.status = 'active'">
              <button
                v-bind:class="data.status == 'active' ? 'bg-green-400 hover:bg-green-400' : 'bg-red-600 hover:bg-red-400'"
                class="text-white font-bold capitalize p-2 w-full rounded-lg shadow-lg gray-500" type="button">
                {{data.status}}
              </button>
            </td>
            <td class="p-2 text-center items-center h-full m-0">
              <div class="grid grid-cols-2">
                <span @click="editCargo(data.id)">
                  <edit-icon class="h-6 cursor-pointer text-blue-600" />
                </span>
                <span @click="delCargo(data.id)">
                  <trash-icon class="h-6 cursor-pointer  text-red-600" />
                </span>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
  export default {
    data() {
      return {
        submit: true,
         countries: ['USA', 'Singapore', 'Indonesia', 'Japan', 'China'],
      }
    },
     computed: mapGetters({
      datas: "dataCargo"
    }),
    methods:{
      delCargo(id){
        this.$store.dispatch('deleteCargo', id);
      },
      editCargo(id){
        this.$store.dispatch('editCargo', id);
      }
    },

    async mounted(){
      await this.$store.dispatch('getCargo');
       console.log(this.datas)
       
    }
  }
</script>