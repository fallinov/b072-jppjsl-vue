<script setup>
// Import du magasin des sabres
import { useSabresStore } from '@/stores/sabres'
import SabreLaser from "@/components/SabreLaser.vue";
// Création d'une instance du magasin des sabres pour le composant
const storeSabres = useSabresStore()
// Récupération des données des sabres triés par ordre alphabétique
const tableauSabres = storeSabres.getSabresAZ
</script>

<template>
  <main class="page-accueil">
    <h1>Découvrez nos sabres <strong>LASER</strong></h1>

    <div class="sabres">
      <SabreLaser v-for="sabre in tableauSabres"
                  :key="sabre.id"
                  :sabre="sabre"
      />
    </div>
  </main>
</template>

