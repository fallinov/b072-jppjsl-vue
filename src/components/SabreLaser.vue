<script setup>
const props = defineProps({
  sabre: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <li :class="{'rupture': sabre.stock < 1}">
    <router-link :to="{ name: 'sabre', params: { id: sabre.id }}">
      <figure>
        <img :src="'/img/' + sabre.image" :alt="sabre.nom">
        <figcaption>
          <p v-if="sabre.stock < 1">Noooon, les stocks sont vides !</p>
          <h2>{{ sabre.nom }}</h2>
          <div class="prix">{{ sabre.prix }} CHF</div>
        </figcaption>
      </figure>
    </router-link>
  </li>
</template>
