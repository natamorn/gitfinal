<template>
<Navbar/>
  <div class="container">
        <div class="buttonProduct">
      <input
        value="Requst"
        @click="onLogIn"
        class="btn btn-outline-success"
      />
    </div>
    <TableProduct/>
  </div>
</template>

<script>
import TableProduct from '../components/TableProduct.vue'
import Navbar from '../components/Navbar.vue'


export default {
  name:"Product",
  components:{
    TableProduct,
    Navbar
  },
  data() {
    return {};
  },
  methods: {
    onLogIn() {
      this.$router.replace("/AddProduct");
    },
  },
}
</script>

<style scoped>
.buttonProduct{
  text-align: right;
}
</style>