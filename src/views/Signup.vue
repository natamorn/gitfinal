<template>
  <div>
    <LoginHeader />
    <div class="container-fluid">
      <SignupForm />
    </div>
  </div>
</template>

<script>
import SignupForm from '../components/SignupForm.vue'
import LoginHeader from '../components/LoginHeader.vue'

export default {
  name: 'Signup',
  components: {
    SignupForm,
    LoginHeader
  }
}
</script>

<style>
</style>
