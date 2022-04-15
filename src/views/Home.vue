<template>
<div class="card-body">
  <div class="home">

      <input
        value="Add Order"
        @click="onLogIn"
        class="btn btn-outline-success"
      />
<br>
<br>
    <TableOrder />
    <br />
  </div>
</div>
</template>

<script>
import TableOrder from "../components/TableOrder.vue";

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
  },
};
</script>

<style scoped>
.home{
  text-align: right;

}
</style>