<template>
  <div>
    <Navbar />
    <div class="container">
      <customerTable />
    </div>
  </div>
</template>

<script>
import customerTable from '../components/customerTable.vue'
import Navbar from '../components/Navbar.vue'

export default {
  name: 'customer',
  components: {
    customerTable,
    Navbar
  }
}
</script>

<style>
</style>
