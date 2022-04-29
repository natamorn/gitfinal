<template>
  <Navbar/>
<div>
  <h1>Request Inventory</h1>
  <AddProductForm/>
  </div>
</template>

<script>
import AddProductForm from '../components/AddProductForm.vue'
import Navbar from '../components/Navbar.vue'

export default {
    name:"AddProduct",
    components:{
    AddProductForm,
    Navbar
  },
}

</script>

<style>

</style>