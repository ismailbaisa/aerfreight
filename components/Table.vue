<template>
<main class="ml-80 p-1">
  <h1 class="text-4xl font-bold mt-4 mb-10 text-aerfreight"> Main Dashboard </h1>
  <div class="rounded bg-white shadow-lg w-11/12 p-10">
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
            <th class="border p-2" colspan="2">Tools</th>
          </tr>
        </thead>
        <tbody v-for="(data, index) in datas" v-key="data.id">
          <tr class="font-bold">
            <td class="border p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].number" class="w-full text-center"></td>
              <td class="border p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].capacity" class="w-full text-center"></td>
              <td class="border p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].schedule" class="w-full text-center"></td>
              <td class="border p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].origin" class="w-full text-center"></td>
              <td class="border p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].destination" class="w-full text-center"></td>
              <td class="border p-2">
              <input :disabled="datas[index].editable" v-model="datas[index].detail" class="w-full text-center"></td>
            <td class="border p-2 capitalize" v-bind:class="data.status == 'active' ? 'text-green-900 bg-green-400 bg-opacity-50' : 'text-red-900 bg-red-400 bg-opacity-50'"  @click="data.status == 'active' ? data.status = 'deactivated' : data.status = 'active'">
              {{data.status}}
              </td>
              <td class="border p-2" @click="data.editable = false">{{data.editable == true ? 'Edit' : (data.editable == false ? 'Submit' : 'Edit')}}</td>
            <td class="border p-2" @click="datas.splice(index, 1)"></td>
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
        datas: [
          {
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