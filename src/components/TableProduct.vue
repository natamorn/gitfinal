<template>
  <div class="container text-center">
    <table class="table  table-hover">
      <thead>
        <tr class="table-danger">
          <td>NO</td>
          <td>RI_NO</td>
          <td>NAME</td>
          <td>จำนวนสินค้าที่เหลือ</td>
          <td></td>
        </tr>
      </thead>
      <tbody>
        <tr  v-for="(it, index) in listProduct" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ it.RequestInventoryNO }}</td>
          <td>{{ it.Insert_Product_Name }}</td>
          <td>{{ it.Total_RI.toLocaleString('en-US') }}</td>
          <td><a :href="`/AddProduct?key=${it.key}`"> viewmore</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import RequestInventoryService from "../services/RequestInventoryService";


export default {
  name: "TableProduct",
  setup() {},

  data() {
    return {
      listProduct: [],
    };
  },
  created() {
   
  },
  mounted() {
    //  RequestInventoryService.get().then((snapshotChange) => {

    //   snapshotChange.forEach((doc) => {
    //     RequestInventoryService.doc(doc.id).delete()
    //   });
    // });
    
     RequestInventoryService.get().then((snapshotChange) => {
      this.listProduct = [];
      snapshotChange.forEach((doc) => {
        let res = doc.data().products.map(it => ({
          key: doc.id,
          ...it,
          RequestInventoryNO: doc.data().RequestInventoryNO
        }))
        this.listProduct.push(...res)
        console.log("🚀 ~ file: TableProduct.vue ~ line 59 ~ snapshotChange.forEach ~ this.listProduct", this.listProduct)
        // this.listProduct.push({
        //   key: doc.id,
        //   ...doc.data()
        // });
      });
    });
  },
  methods: {
      onDataChange(items) {
      let _tutorials = [];
      items.forEach((item) => {
        let key = item.key;
        let data = item.val();
        _tutorials.push({
          key: key,
          title: data.title,
          description: data.description,
          published: data.published,
        });
      });
      this.tutorials = _tutorials;
    },
  },
};
</script>

<style></style>
