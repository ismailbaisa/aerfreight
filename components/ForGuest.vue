<template>
  <main class="ml-96 p-4">
    <h1 class="text-4xl font-bold mt-2 mb-6 -ml-10 text-aerfreight"> Guest Dashboard </h1>
    <div class="grid grid-cols-3 gap-10 w-19/20">
      <span class="bg-white rounded-lg shadow-lg p-5 mr-4 mb-6 w-full">
        <plane-icon class="h-20 text-purple-700" />
        <br>
        <p class="text-2xl font-extrabold">50</p>
        <br>
        <h1 class="font-bold text-xl">Available Planes</h1>
      </span>
      <span class="bg-white rounded-lg shadow-lg p-5 mr-4 mb-6 w-full">
        <box-icon class="h-20 text-orange-700" />
        <br>
        <p class="text-2xl font-extrabold">425</p>
        <br>
        <h1 class="font-bold text-xl">Available Cargos</h1>
      </span>
      <span class="bg-white rounded-lg shadow-lg p-5 mb-6 w-full">
        <parachute-icon class="h-20 text-yellow-500" />
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

          </tr>
        </thead>
        <tbody v-for="(data, index) in datas" v-bind:key="data.id">
          <tr class="font-bold ">
            <td class="p-2">
              <input disabled v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].number" class="w-full rounded text-center h-16">
            </td>
            <td class="p-2">
              <input disabled v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].capacity"
                class="w-full rounded text-center h-16">
            </td>
            <td class="p-2">
              <input disabled type="time" v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].schedule.time"
                class="w-full rounded text-center h-7 mb-3">
              <input disabled type="date" v-bind:class="datas[index].editable == false ? 'bg-blue-300' : 'bg-gray-200'"
                :disabled="datas[index].editable" v-model="datas[index].schedule.date"
                class="w-full rounded text-center h-7">
            </td>
            <td class="p-2">
               <input disabled
                 v-model="datas[index].origin"
                class="w-full rounded h-16 text-center bg-gray-200 capitalize">
              </input>
            </td>
            <td class="p-2">
              <input disabled
                 v-model="datas[index].destination"
                class="w-full rounded h-16 text-center bg-gray-200 capitalize">
              </input>
            </td>
            <td class="p-2">
              <input disabled
                v-model="datas[index].detail.name"
                class="w-full rounded break-words text-center bg-gray-200 h-7 mb-3">
              <input disabled title="table" v-model="datas[index].detail.number"
                class="w-full rounded break-words text-center bg-gray-200 h-7">
            </td>
            <td class="p-2 capitalize">
              <p
                v-bind:class="data.status == 'active' ? 'bg-green-400 hover:bg-green-400' : 'bg-red-600 hover:bg-red-400'"
                class="text-white font-bold capitalize p-2 w-full rounded-lg shadow-lg gray-500 text-center"  type="button">
                {{data.status}}
              </p>
            </td>

          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style>
</style>

<script>
  export default {
    name: 'Table',
    data() {
      return {
        countries: ['japan', 'usa', 'indonesia'],
        detail: [{
            name: 'Air Asia',
            number: 'XD533',
          },
          {
            name: 'Garuda',
            number: 'YE666',
          },
          {
            name: 'Fly Emirates',
            number: 'JEY4P',
          }
        ],
        submit: true,
        datas: [{
            id: 1,
            number: 'ACO53',
            capacity: '200 kg',
            schedule: {
              date: null,
              time: null,
            },
            origin: 'japan',
            destination: 'usa',
            detail: {
              name: 'Garuda',
              number: 'HEL50'
            },
            status: 'active',
            editable: true,
          },
          {
            id: 2,
            number: 'YELO05',
            capacity: '200 kg',
            schedule: {
              date: null,
              time: null,
            },
            origin: 'japan',
            destination: 'usa',
            detail: {
              name: 'Garuda',
              number: 'HEL50'
            },
            status: 'active',
            editable: true,
          },
          {
            id: 3,
            number: 'EIJU0U',
            capacity: '200 kg',
            schedule: {
              date: null,
              time: null,
            },
            origin: 'japan',
            destination: 'usa',
            detail: {
              name: 'Garuda',
              number: 'HEL50'
            },
            status: 'active',
            editable: true,
          },
          {
            id: 4,
            number: 'AIUEUY',
            capacity: '200 kg',
            schedule: {
              date: null,
              time: null,
            },
            origin: 'japan',
            destination: 'usa',
            detail: {
              name: 'Garuda',
              number: 'HEL50'
            },
            status: 'active',
            editable: true,
          },
          {
            id: 5,
            number: 'QWEUIASD',
            capacity: '200 kg',
            schedule: {
              date: null,
              time: null,
            },
            origin: 'japan',
            destination: 'usa',
            detail: {
              name: 'Garuda',
              number: 'HEL50'
            },
            status: 'active',
            editable: true,
          },
          {
            id: 6,
            number: 'ZKXJ5',
            capacity: '200 kg',
            schedule: {
              date: null,
              time: null,
            },
            origin: 'japan',
            destination: 'usa',
            detail: {
              name: 'Garuda',
              number: 'HEL50'
            },
            status: 'active',
            editable: true,
          },
        ]
      }
    },
  }
</script>