<template>
  <Navbar />

  <div class="container">
    <div class="row justify-content-end">
      <div class="col col-2 d-grid gap-2">
        <button
          style="border: 0px gray solid"
          type="button"
          class="btn btn-primary"
          @click="$router.push('/OrderPage')"
          
        >
          Add Order
        </button>
      </div>
    </div>
    <div class="row mt-4">
      <TableOrder />
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
.btn:hover{
     transform: scale(1.05);
  box-shadow: 0 10px 20px rgba(0,0,0,.12), 0 4px 8px rgba(0,0,0,.06);
}
</style>
