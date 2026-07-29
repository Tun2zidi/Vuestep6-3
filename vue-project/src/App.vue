<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav>
    <RouterLink :to="{ name: 'home' }">Users</RouterLink>
  </nav>

  <RouterView />
</template>

<style>
body {
  font-family: 'Helvetica Neue', Arial, sans-serif;
  color: #2c3e50;
}

nav {
  padding: 30px;
  text-align: center;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>