<template>
    <Navbar />
  <NewProduct/>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import NewProduct from '../components/NewProduct.vue'


export default {
    name:"NewProductPage",
    components:{
        NewProduct,
        Navbar,
    }
}

</script>

<style>

</style>