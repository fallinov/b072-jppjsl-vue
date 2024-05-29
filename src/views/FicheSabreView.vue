<script setup>
const props = defineProps({
  id: { // doit avoir le même nom que le paramètre de la route
    type: String,
    required: true,
  },
})
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

      <img :src="'/img/' + sabre.image" :alt="sabre.nom">

      <p>{{ sabre.description }}</p>

      <ul class="details">
        <li>Prix: {{ sabre.prix }} CHF</li>
        <li v-if="sabre.stock <= 10">Stock: {{ sabre.stock }} pièces</li>
        <li v-else>Stock: plus de 10 pièces</li>
        <li>Longueur: {{ sabre.longueur }}cm</li>
        <li>Poids: {{ sabre.poids }} kg</li>
      </ul>
    </div>
  </main>
</template>

