<script setup>
// Définition des propriétés du composant
// Rappel : on injecte l'id dans ce composant à partir de la route, de l'URL
const props = defineProps(['id'])
// Import du magasin des sabres
import { useSabresStore } from '@/stores/sabres'
// Création d'une instance du magasin des sabres pour le composant
const storeSabres = useSabresStore()
// Récupération des données du sabre à afficher en fonction de l'id passé en props
const sabre = storeSabres.getSabreById(props.id)
</script>

<template>
  <main class="page-sabre">
    <div class="sabre">
      <h1>{{ sabre.nom }}</h1>

      <img :src="'/img/' + sabre.image" :alt="sabre.nom" />

      <p>{{ sabre.description }}</p>

      <ul class="details">
        <li>Prix: {{ sabre.prix }} CHF</li>
        <li v-if="sabre.stock < 11">Stock: {{ sabre.stock }} pièces</li>
        <li v-else>Stock: Plus de 10 pièces</li>
        <li>Longueur: {{ sabre.longueur }}cm</li>
        <li>Poids: {{ sabre.poids }}kg</li>
      </ul>
    </div>
  </main>
</template>

<style scoped>
/********** STYLE PAGE SABRE *********/
.page-sabre .sabre {
  max-width: 500px;
  margin: 0 auto;
}

.page-sabre .sabre img {
  border: 6px solid #e72854;
}

.page-sabre ul.details {
  list-style-type: none;
  padding: 0;
  margin: 1rem 0;
  font-size: 1.1rem;
}

.page-sabre ul.details li {
  padding: 0.5em 1em;
}

.page-sabre ul.details li:nth-child(odd) {
  background-color: #eeeeee;
}
</style>
