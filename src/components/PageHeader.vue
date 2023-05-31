<script setup></script>

<template>
  <header>
    <router-link active-class="actif" to="/">
      <img
        src="/img/logo-jppjsl.png"
        class="logo"
        alt="Logo de J&#039;peux pas j&#039;ai sabre laser"
      />
    </router-link>
    <nav>
      <ul>
        <li>
          <router-link active-class="actif" to="/">No sabres</router-link>
        </li>
        <li>
          <router-link active-class="actif " to="/service-client"> Service Client </router-link>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #eeeeee;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
}

header .logo {
  max-height: 150px;
}

/********** STYLE NAVIGATION *********/

header nav ul {
  display: flex;
  padding: 0;
  margin: 0;
  list-style: none;
  margin-left: auto;
}

header nav a {
  font-size: 1.25rem;
  padding: 1em;
  font-weight: bold;
  color: #3b3d40;
}

header nav a.actif {
  color: #6bbbda;
}

header nav a:hover {
  color: #e72854;
}
</style>
