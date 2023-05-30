<script setup>
import {useSabresStore} from "@/stores/sabres";

const props = defineProps(['id'])

const store = useSabresStore()

const sabre = store.sabre(props.id)

console.log(sabre)

</script>
<template>
  <main class="page-sabre">
    <div class="sabre">
      <h1>{{ sabre.nom }}</h1>

      <img :src="'/img/' + sabre.image" :alt="sabre.nom">

      <p>{{ sabre.description }}</p>

      <ul class="details">
        <li>Prix: {{ sabre.prix }} CHF</li>
        <li v-if="sabre.stock < 11">Stock: {{ sabre.stock }} pièces</li>
        <li v-else >Stock: Plus de 10 pièces</li>
        <li>Longueur: {{ sabre.longueur }}cm</li>
        <li>Poids: {{ sabre.poids }}kg</li>
      </ul>
    </div>
  </main>
</template>

