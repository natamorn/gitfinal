<template>
  <div class="container text-center">
    <table class="table table-hover">
      <thead>
        <tr class="table-danger">
          <td>NO.</td>
          <td>NAME</td>
          <td>EMAIL</td>
          <td>DATE</td>
          <td>AMOUNT</td>
          <td></td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="(it, index) in listOrder" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ it.HospitalName.Name }}</td>
          <td>{{ it.HospitalName.Email }}</td>
          <td>{{ it.HospitalDate }}</td>
          <td>{{ it.products[it.products.length -1].total.toLocaleString('en-US') }} บาท</td>
          <td>viewmore</td>
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

<style></style>
