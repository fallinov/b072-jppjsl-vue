<script setup>
import SabreLaser from '@/components/SabreLaser.vue'
import { useSabresStore } from '@/stores/sabres'
// Récupération du magasin des sabres
const storeSabres = useSabresStore()
// Récupération des données des sabres triés par ordre alphabétique
const sabres = storeSabres.getSabresAZ
</script>

<template>
  <main class="page-accueil">
    <h1>Découvrez nos sabres <strong>LASER</strong></h1>

    <div class="sabres">
      <SabreLaser v-for="sabre in sabres" :key="sabre.id" :sabre="sabre" />
    </div>
  </main>
</template>

<style scoped>
.sabres {
  display: flex;
  flex-wrap: wrap;
  gap: 1.25rem;
  align-content: space-evenly;
  justify-content: center;
  padding: 0;
}
</style>
