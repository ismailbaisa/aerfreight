<template>
  <main class="ml-80 p-1">
    <h1 class="text-4xl font-bold mt-4 mb-10 text-aerfreight"> Main Dashboard </h1>
    <div class="rounded-lg bg-white shadow-lg w-11/12 p-10">
      <table class="table-fixed bg-white w-full text-center">
        <thead>
          <tr class="bg-aerfreight text-white shadow-lg">
            <th class="border p-2">Cargo Number</th>
            <th class="border p-2">Capacity</th>
            <th class="border p-2">Flight Schedule</th>
            <th class="border p-2">Country Origin</th>
            <th class="border p-2">Country Destination</th>
            <th class="border p-2">Flight Detail</th>
            <th class="border p-2">Status</th>
            <th class="border p-2">Tools</th>
          </tr>
        </thead>
        <tbody v-for="(data, index) in datas" v-bind:key="data.id">
          <tr class="font-bold">
            <td class="p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].number" class="w-full text-center">
            </td>
            <td class="p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].capacity" class="w-full text-center">
            </td>
            <td class="p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].schedule" class="w-full text-center">
            </td>
            <td class="p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].origin" class="w-full text-center">
            </td>
            <td class="p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].destination" class="w-full text-center">
            </td>
            <td class="p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].detail" class="w-full text-center">
            </td>
            <td class="p-2 capitalize"
              @click="data.status == 'active' ? data.status = 'inactive' : data.status = 'active'">
              <button
                v-bind:class="data.status == 'active' ? 'bg-green-400 hover:bg-green-400' : 'bg-red-600 hover:bg-red-400'"
                class="text-white font-bold capitalize p-2 w-full rounded-lg shadow-lg gray-500" type="button">
                {{data.status}}
              </button>

            </td>
            <td class="p-2 text-center items-center h-full m-0" @click="data.editable = false">
              <div class="grid grid-cols-2">
                <edit-icon class="h-6 cursor-pointer text-blue-600"/>
                <trash-icon class="h-6 clear-pointer  text-orange-600"/>
              </div>

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
        submit: true,
        datas: [{
            id: 1,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 2,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 3,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 4,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 5,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 6,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 7,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 8,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 9,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
          {
            id: 10,
            number: 1,
            capacity: 1,
            schedule: 'tonight',
            origin: 'jakarta',
            destination: 'bandung',
            detail: 'somewhere',
            status: 'active',
            editable: true,
          },
        ]
      }
    },
  }
</script>