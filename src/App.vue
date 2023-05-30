<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />

 <footer>
      <div class="wrapper">
        <p>&copy;2023 JPPJSL</p>
      </div>
  </footer>
</template>

<style scoped>

</style>
