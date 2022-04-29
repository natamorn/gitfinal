<template>
  <Navbar />
  <div>
    <h1>ORDER FORM</h1>
    <OrderForm />

    <!-- <Footer /> -->
</div>
</template>

<script>
// import Footer from "../components/Footer.vue";
import OrderForm from "../components/OrderForm.vue";
import Navbar from '../components/Navbar.vue'

export default {
  name: "OrderPage",
  components: {
    OrderForm,
    Navbar
    // Footer,
  },
};
</script>

<style >
button{
  text-align: center;
}
</style>
