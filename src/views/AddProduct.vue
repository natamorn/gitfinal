<template>
  <Navbar />
  <div>
    <div class="row justify-content-center">
      <div class="col col-auto">
        <h1 class="text-primary">Request Inventory</h1>
      </div>
    </div>
    <AddProductForm />
  </div>
</template>

<script>
import AddProductForm from "../components/AddProductForm.vue";
import Navbar from "../components/Navbar.vue";

export default {
  name: "AddProduct",
  components: {
    AddProductForm,
    Navbar,
  },
};
</script>

<style></style>
