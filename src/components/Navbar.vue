<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-white">
        <div class="container">
            <a class="navbar-brand" href="/">Xovic</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav w-100 nav-item-center">
                    <router-link class="nav-item nav-link active" to="/">Home</router-link>
                    <router-link class="nav-item nav-link" to="/Product">Product</router-link>
                    <router-link class="nav-item nav-link" to="/customer">Customer</router-link>
                    <router-link class="nav-item nav-link d-lg-none d-block" to="/login">Login</router-link>
                </div>
            </div>
            <div class="d-none d-lg-block">
                <router-link class="nav-item nav-link" to="/login"><i class="far fa-user fa-lg"></i></router-link>
            </div>
        </div>
        </nav>
</template>


<script>
export default {
  name: "LoginHeader",
};
</script>

<style>
</style>