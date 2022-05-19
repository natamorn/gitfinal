<template>
    <LoginHeader/>
    <div class="container-fluid">
        <loginForm/>
        <!-- <router-view/> -->
    </div>
</template>

<script>
import loginForm from '../components/loginForm.vue'
import LoginHeader from '../components/LoginHeader.vue'

export default {
    name:"login",
    components:{
        loginForm,
        LoginHeader
    }
}
</script>

<style>

</style>