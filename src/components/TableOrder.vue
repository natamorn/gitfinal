<template>
  <div class="container text-center">
    <!-- <table class="table table-hover" :fields="fields">
      <thead>
        <tr class="table-danger">
          <td class="fw-bold">NO.</td>
          <td class="fw-bold" style="text-align: left">Name</td>
          <td class="fw-bold" style="text-align: left">Email</td>
          <td class="fw-bold">Date</td>
          <td class="fw-bold" style="text-align: right">Amount</td>
          <td></td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(it, index) in listOrder" :key="index">
          <td>{{ index + 1 }}</td>
          <td style="text-align: left">{{ it.HospitalName }}</td>
          <td style="text-align: left">{{ it.HospitalEmail }}</td>
          <td>{{ it.HospitalDate }}</td>
          <td style="text-align: right">
            {{
              it.products
                ? it.products[it.products.length - 1].total.toLocaleString(
                    "en-US"
                  )
                : ""
            }}
            บาท
          </td>
          <td><a :href="`/viewOrder?key=${it.key}`"> View More</a></td>
        </tr>
      </tbody>
    </table> -->

    <v-data-table
      :headers="headers"
      :items="listOrder"
      :items-per-page="5"
      class="elevation-1"
    >
    <template v-slot:item.Amount="{ item }">
       {{ item.Amount.toLocaleString(
                    "en-US"
                  )}}
      </template>
      <template v-slot:item.actions="{ item }">
         <router-link :to="`/viewOrder?key=${item.key}`">View More</router-link>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import OrderService from '../services/OrderService'

export default {
  name: 'TableOrder',
  data () {
    return {
      headers: [
        {
          text: 'NO.',
          align: 'start',
          sortable: false,
          value: 'no',
          class: 'tableHeader text-h6'
        },
        {
          text: 'Name',
          align: 'center',
          value: 'HospitalName',
          class: 'tableHeader text-h6'
        },
        {
          text: 'Email',
          align: 'center',
          value: 'HospitalEmail',
          class: 'tableHeader text-h6'
        },
        {
          text: 'Date',
          align: 'center',
          value: 'HospitalDate',
          class: 'tableHeader text-h6'
        },
        {
          text: 'Amount',
          align: 'center',
          value: 'Amount',
          class: 'tableHeader text-h6'
        },
        { text: '', align: 'center', value: 'actions', class: 'tableHeader text-h6' }
      ],

      listOrder: [],
      fields: [
        {
          key: 'Name',
          sortable: true
        }
      ]
    }
  },
  mounted () {
    OrderService.orderBy('HospitalDate', 'desc').get()
      .then((snapshotChange) => {
        this.listOrder = []
        let index = 1
        snapshotChange.forEach((doc) => {
          this.listOrder.push({
            no: index++,
            key: doc.id,
            ...doc.data(),
            Amount: doc.data().products.reduce((total, it) => total + it.total, 0)
          })
        // OrderService.doc(doc.id).delete()
        })
        console.log(' this.listOrder :>> ', this.listOrder)
      })
  }
}
</script>

<style  scoped>
</style>
