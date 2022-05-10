<template>
  <Navbar />

  <div class="container">
    <div class="row justify-content-end">
      <div class="col col-2 d-grid gap-2">
        <button
          type="button"
          class="btn btn-primary"
          @click="$router.push('/OrderPage')"
        >
          ADD ORDER
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
</style>
