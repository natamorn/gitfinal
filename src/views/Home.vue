<template>
  <Navbar />

  <div class="container">
    <div class="card-body">
      <div class="home">
        <input
          value="Add Order"
          @click="onLogIn"
          class="btn btn-outline-success"
        />
        <br />
        <br />
        <TableOrder />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
import TableOrder from "../components/TableOrder.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    onLogIn() {
      this.$router.replace("/OrderPage");
    },
  },
  components: {
    TableOrder,
    Navbar,
  },
};
</script>

<style scoped>
.home {
  text-align: right;
}
</style>