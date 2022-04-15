<template>
  <div id="main-content">
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


export default {
  name:"Product",
  components:{
    TableProduct,
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