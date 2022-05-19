<template>
  <div class="container text-center">
    
    <table class="table table-hover" :fields="fields">
      <thead>
        <tr class="table-danger">
          <td  class="fw-bold" >NO.</td>
          <td class="fw-bold" style="text-align: left">Name</td>
          <td class="fw-bold" style="text-align: left">Email</td>
          <td class="fw-bold">Date</td>
          <td class="fw-bold" style="text-align:right">Amount</td>
          <td></td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(it, index) in listOrder" :key="index" >
          <td> {{ index + 1 }}</td>
          <td style="text-align: left">{{ it.HospitalName }}</td>
          <td style="text-align: left">{{ it.HospitalEmail }}</td>
          <td>{{ it.HospitalDate }}</td>
          <td style="text-align:right" >{{ it.products ? it.products[it.products.length -1].total.toLocaleString('en-US') : '' }} บาท</td>
          <td ><a :href="`/viewOrder?key=${it.key}`"> View More</a></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import OrderService from "../services/OrderService";

export default {
  name: "TableOrder",
   data() {
    return {
      listOrder: [],
      fields: [
          {
            key: 'Name',
            sortable: true
          },]
    };
  },
  mounted() {
     OrderService.get().then((snapshotChange) => {
      this.listOrder = [];
      snapshotChange.forEach((doc) => {
        this.listOrder.push({
          key: doc.id,
          ...doc.data()
        });
        // OrderService.doc(doc.id).delete()
      });
    });
  },
};
</script>

<style  scoped>

</style>