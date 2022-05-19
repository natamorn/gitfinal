<template>
    <nav class="navbar navbar-expand-lg fixed-top bg-white navbar-light  shadow-navbar">
        <div class="container">
            <a class="navbar-brand" href="/Home">ENP</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            
            <div class="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
                <div class="navbar-nav w-100 nav-item-center">
                    <router-link class="nav-item nav-link active" to="/Home">Home</router-link>
                    <router-link class="nav-item nav-link" to="/Product">Product</router-link>
                    <router-link class="nav-item nav-link" to="/customer">Customer</router-link>
                    <!-- <router-link class="nav-item nav-link d-lg-none d-block" to="/">LLog Out</router-link> -->
                </div>
            </div>
            <div class="d-none d-lg-block">
                <router-link class="nav-item nav-link" to="/">
                   <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                        <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
                    </svg>
                </router-link>
            </div>
        </div>
        </nav>
</template>


<script>
export default {
  name: "LoginHeader",
};
</script>

<style >
    a.router-link-exact-active{
        /* background-color: lightblue; */
        /* text-decoration: underline 5px brown;  */
        /* text-shadow: 3px 2px rgb(90, 222, 245) */

     /* transform: scale(1.05); */
        box-shadow: 0 10px  20px rgba(0,0,0,.12), 0 4px  8px rgba(0,0,0,.06);
        border-radius:8px;

    }
</style>
