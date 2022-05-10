<template>
  <Navbar />
  <div class="container">
    <div class="row justify-content-end">
      <div class="col col-2 d-grid gap-2">
        <button type="button" class="btn btn-primary" @click="$router.push('/AddProduct')">REQUEST</button>
      </div>
    </div>
    <div class="row mt-4">
      <TableProduct />
    </div>
  </div>
</template>

<script>
import TableProduct from "../components/TableProduct.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Product",
  components: {
    TableProduct,
    Navbar,
  },
  data() {
    return {};
  },
  methods: {
    onLogIn() {
      this.$router.replace("/AddProduct");
    },
  },
};
</script>

<style scoped>
.buttonProduct {
  text-align: right;
}
</style>
