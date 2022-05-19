
<template>
  <div class="container text-center">
    <table class="table  table-hover">
      <thead>
        <tr class="table-danger">
          <td class="fw-bold">NO</td>
          <td class="fw-bold">P/N</td>
          <td class="fw-bold" style="text-align: left">Name</td>
          <td class="fw-bold" style="text-align: right  " >สินค้าคงเหลือ</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(it, index) in listProduct" :key="index">
          <td>{{ index + 1 }}</td>
          <td style="text-align: left">{{ it.RequestInventoryNO }}</td>
          <td style="text-align: left">{{ it.Insert_Product_Name }}</td>
          <td style="text-align: right  " >{{ it.Total_RI.toLocaleString('en-US') }}</td>
          <td><a :href="`/AddProduct?key=${it.key}`">Request</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import RequestInventoryService from '../services/RequestInventoryService'

export default {
  name: 'TableProduct',
  setup () {},

  data () {
    return {
      listProduct: []
    }
  },
  created () {

  },
  mounted () {
    //  RequestInventoryService.get().then((snapshotChange) => {

    //   snapshotChange.forEach((doc) => {
    //     RequestInventoryService.doc(doc.id).delete()
    //   });
    // });

    RequestInventoryService.get().then((snapshotChange) => {
      this.listProduct = []
      snapshotChange.forEach((doc) => {
        const res = doc.data().products.map(it => ({
          key: doc.id,
          ...it,
          RequestInventoryNO: doc.data().RequestInventoryNO
        }))
        this.listProduct.push(...res)
        console.log('🚀 ~ file: TableProduct.vue ~ line 59 ~ snapshotChange.forEach ~ this.listProduct', this.listProduct)
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
          description: data.description,
          published: data.published
        })
      })
      this.tutorials = _tutorials
    }
  }
}
</script>

<style></style>
