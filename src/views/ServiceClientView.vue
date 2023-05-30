<script setup></script>

<template>
  <main class="page-service-client">
    <h1>Service <strong>CLIENTS</strong></h1>

    <h2>Contact / SAV</h2>

    <p>Toujours connectés et heureux de répondre à vos questions.</p>

    <p>
      Vous pouvez nous joindre par téléphone au
      <a href="tel:+41 79 123 45 67">+41 79 123 45 67</a>
      ou encore par <em>Whatsapp</em>.
    </p>

    <p>
      Avant de nous contacter, avez-vous pensé à télécharger le
      <strong>manuel utilisateur</strong> ?
    </p>

    <div class="manuels">
      <a href="https://drive.google.com/file/d/1ShyF2qRjVgUbM8ywt1rnSeDj9Poecg1l/view?usp=sharing">
        <img src="img/manuel-stunt.png" alt="Manuel utilisateur Stunt" />
      </a>
      <a href="https://drive.google.com/file/d/1v01sjxo2BnTzpaQcDFJsecB7yvZe3KO-/view?usp=sharing">
        <img src="img/manuel-sound.png" alt="Manuel utilisateur Sound" />
      </a>
      <a href="https://drive.google.com/file/d/1K0iZyPng4rZ4IqitedQ5b_cNgeThqcVY/view?usp=sharing">
        <img src="img/manuel-neopixel.png" alt="Manuel utilisateur Neopixel" />
      </a>
    </div>
  </main>
</template>

<style scoped>
/********** STYLE PAGE SERVICE CLIENTS *********/
.page-service-client {
  max-width: 660px;
  margin: 0 auto;
}
.page-service-client .manuels {
  margin: 2rem 0;
  display: flex;
  gap: 1rem;
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
}

.page-service-client .manuels a {
  transition: all 0.2s ease-in-out;
}

.page-service-client .manuels a:hover {
  transform: scale(1.1);
}

.page-service-client .manuels img {
  max-width: 190px;
}
</style>
