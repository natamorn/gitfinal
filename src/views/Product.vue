<template>
  <div>
    <Navbar />
    <div class="container">
      <div class="row justify-content-end">
        <div class="col col-2 d-grid gap-2">
          <v-btn
            dark
            type="button"
            style="border: 0px gray solid"
            class="btn btn-primary"
            @click="$router.push('/NewProductPage')"
          >
            New Product
          </v-btn>
        </div>
      </div>
      <div class="row mt-4">
        <TableProduct />
      </div>
    </div>
  </div>
</template>

<script>
import TableProduct from '../components/TableProduct.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'Product',
  components: {
    TableProduct,
    Navbar
  },
  data () {
    return {}
  },
  methods: {
    onLogIn () {
      this.$router.replace('/AddProduct')
    }
  }
}
</script>

<style scoped>
.buttonProduct {
  text-align: right;
}
.btn:hover {
  transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
}
</style>
