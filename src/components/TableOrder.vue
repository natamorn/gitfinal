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
          <td>{{ it.name }}</td>
          <td></td>
          <td>{{ it.HospitalDate }}</td>
          <td></td>
          <td></td>
        </tr>
      </tbody>
    </table>
    <code>{{listOrder}}</code>
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
     OrderService.onSnapshot((snapshotChange) => {
      this.listOrder = [];
      snapshotChange.forEach((doc) => {
        this.listOrder.push({
          key: doc.id,
          ...doc.data()
        });
      });
    });
  },
};
</script>

<style></style>
