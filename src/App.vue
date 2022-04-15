<template>
<div>
  <div id="nav">
    <router-link to="/">Home</router-link> |  
    <router-link to="/Product">Product</router-link> |
    <router-link to="/customer">Customer</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
    <router-view/>
  </div>
</template>



<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #274b58;
}

#nav {
  padding: 3rem;
  text-align: center;
}
h1{
  text-align: center;
}

#nav a {
  font-weight: bold;
  color: #274b58;
}

#nav a.router-link-exact-active {
  color: #f2d58f;

}
</style>
