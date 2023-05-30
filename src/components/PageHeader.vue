<script setup>

</script>

<template>
  <header>
    <router-link active-class="actif" to="/">
      <img src="/img/logo-jppjsl.png"
           class="logo"
           alt="Logo de J&#039;peux pas j&#039;ai sabre laser">
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link active-class="actif" to="/">No sabres</router-link>
        </li>
        <li>
          <router-link active-class="actif " to="/service-client">
            Service Client
          </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

