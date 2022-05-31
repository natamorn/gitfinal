
<template>
  <div class="container text-center">
    <!-- <table class="table table-hover">
      <thead>
        <tr class="table-danger">
          <td class="fw-bold">NO</td>
          <td class="fw-bold">P/N</td>
          <td class="fw-bold" style="text-align: left">Name</td>
          <td class="fw-bold" style="text-align: right">สินค้าคงเหลือ</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(it, index) in listProduct" :key="index">
          <td>{{ index + 1 }}</td>
          <td style="text-align: left">{{ it.RequestInventoryNO }}</td>
          <td style="text-align: left">{{ it.Insert_Product_Name }}</td>
          <td style="text-align: right">
            {{ it.Total_RI.toLocaleString("en-US") }}
          </td>
          <td><a :href="`/AddProduct?key=${it.key}`">Request</a></td>
        </tr>
      </tbody>
    </table> -->

    <v-data-table
      :headers="headers"
      :items="listProduct"
      :items-per-page="5"
      class="elevation-1"
    >
      <template v-slot:[`item.actions`]="{ item }">
        <router-link :to="`/AddProduct?key=${item.key}`">Request</router-link>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import ProductService from '../services/ProductService'

export default {
  name: 'TableProduct',
  setup () {},

  data () {
    return {
      listProduct: [],
      headers: [
        {
          text: 'NO.',
          align: 'start',
          sortable: false,
          value: 'no',
          class: 'tableHeader text-h6'
        },
        {
          text: 'P/N',
          align: 'left',
          value: 'PN',
          class: 'tableHeader text-h6'
        },
        {
          text: 'ProductName',
          align: 'left',
          value: 'Name',
          class: 'tableHeader text-h6'
        },
        {
          text: 'Description',
          align: 'left',
          value: 'Name',
          class: 'tableHeader text-h6'
        },
        {
          text: 'สินค้าคงเหลือ',
          align: 'right',
          value: 'Total_RI',
          class: 'tableHeader text-h6'
        },
        { text: '', align: 'center', value: 'actions', class: 'tableHeader text-h6' }
      ]
    }
  },
  created () {},
  mounted () {
    // ProductService.get().then((snapshotChange) => {
    //   snapshotChange.forEach((doc) => {
    //     ProductService.doc(doc.id).delete()
    //   })
    // })

    ProductService.get().then((snapshotChange) => {
      this.listProduct = []
      let index = 1
      snapshotChange.forEach((doc) => {
        // const res = doc.data().products.map((it) => ({
        //   key: doc.id,
        //   ...it
        // }))
        this.listProduct.push({
          no: index++,
          key: doc.id,
          ...doc.data()
        })
        // this.listProduct.push({
        //   key: doc.id,
        //   ...doc.data()
        // });
      })
    })
  },
  methods: {
    onDataChange (items) {
      const _tutorials = []
      items.forEach((item) => {
        const key = item.key
        const data = item.val()
        _tutorials.push({
          key: key,
          title: data.title,
          Description: data.Description,
          published: data.published
        })
      })
      this.tutorials = _tutorials
    }
  }
}
</script>

<style></style>
