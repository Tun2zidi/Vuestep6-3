<template>
  <div class="not-found">
    <h1>Oops!</h1>
    <h3>The page you're looking for is not here.</h3>
    <router-link :to="{ name: 'home' }">Back to the home page</router-link>
  </div>
</template>

<style scoped>
.not-found {
  text-align: center;
  margin-top: 60px;
}
</style>