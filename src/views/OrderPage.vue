<template>
  <Navbar />
  <div>
    <div class="row justify-content-center">
      <div class="col col-auto">
        <h1 class="text-primary">ORDER FORM</h1>
      </div>
    </div>
    <OrderForm />

    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from "../components/Footer.vue";
import OrderForm from "../components/OrderForm.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "OrderPage",
  components: {
    OrderForm,
    Navbar,
    // Footer,
  },
};
</script>

<style>
button {
  text-align: center;
}
</style>
