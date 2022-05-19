<template>
  <div class="container text-center">
    <table class="table table-hover" :fields="fields">
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
    </table>

    <v-data-table
      :headers="headers"
      :items="desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
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
          text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Iron (%)', value: 'iron' }
      ],
      desserts: [
        {
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          iron: '1%'
        },
        {
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          iron: '1%'
        },
        {
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          iron: '7%'
        },
        {
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          iron: '8%'
        },
        {
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          iron: '16%'
        },
        {
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          iron: '0%'
        },
        {
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          iron: '2%'
        },
        {
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          iron: '45%'
        },
        {
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          iron: '22%'
        },
        {
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          iron: '6%'
        }
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
    OrderService.get().then((snapshotChange) => {
      this.listOrder = []
      snapshotChange.forEach((doc) => {
        this.listOrder.push({
          key: doc.id,
          ...doc.data()
        })
        // OrderService.doc(doc.id).delete()
      })
    })
  }
}
</script>

<style  scoped>
</style>
