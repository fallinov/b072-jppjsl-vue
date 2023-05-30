<script setup>
const props = defineProps({
  sabre: {
    type: Object,
    required: true
  }
})
</script>

<template>
  <div class="sabre" :class="{ rupture: sabre.stock < 1 }">
    <router-link :to="{ name: 'sabre', params: { id: sabre.id } }">
      <figure>
        <img :src="'/img/' + sabre.image" :alt="sabre.nom" />
        <figcaption>
          <p v-if="sabre.stock < 1">Noooon, les stocks sont vides !</p>
          <h2>{{ sabre.nom }}</h2>
          <div class="prix">{{ sabre.prix }} CHF</div>
        </figcaption>
      </figure>
    </router-link>
  </div>
</template>

<style scoped>
.sabre {
  overflow: hidden;
  flex: 2 0 300px;
  padding: 0;
  border-radius: 10px;
  box-shadow: 0 0.03rem 0.06rem rgba(0, 0, 0, 0.2), 0 0.1rem 0.3rem rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
  background-color: #e72854;
}

.sabre:hover {
  box-shadow: 0 0.03rem 0.06rem rgba(0, 0, 0, 0.6), 0 0.1rem 0.3rem rgba(0, 0, 0, 0.6);
  background-color: #6bbbda;
}

.sabre.rupture {
  background-color: #27282a;
}

.sabre figure {
  padding: 0;
  margin: 0;
}

.sabre figcaption {
  padding: 1rem;
  color: white;
}
</style>
