<template>
  <Navbar />
  <div>
    <div class="row justify-content-center">
      <div class="col col-auto">
        <h1 class="text-primary">View More</h1>
      </div>
    </div>
    <OrderForm :orderId="orderId" flag="viewOrder"/>

    <!-- <Footer /> -->
  </div>
</template>

<script>
// import Footer from "../components/Footer.vue";
import OrderForm from "../components/OrderForm.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Viewmore",
  components: {
    OrderForm,
    Navbar,
    // Footer,
  },
  data() {
    return {
      orderId: null
    }
  },
  mounted () {
    this.$nextTick(()=> {
      if( this.$route.query.key) {
        this.orderId = this.$route.query.key
      }
    });
  },
};
</script>

<style>
button {
  text-align: center;
}
</style>
