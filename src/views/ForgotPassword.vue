<template>
    <LoginHeader />
    <div class="container-fluid">
        <ForgotPasswordForm/>
    </div>
</template>

<script>
import ForgotPasswordForm from '../components/ForgotPasswordForm.vue'
import LoginHeader from '../components/LoginHeader.vue'

export default {
    name:"ForgotPassword",
    components:{
        ForgotPasswordForm,
        LoginHeader
    }
}
</script>

<style>

</style>