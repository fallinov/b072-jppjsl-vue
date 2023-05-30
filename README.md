# b072-jppjsl-vue

* Nettoyer le projet, suppression des fichiers inutiles (CSS, composants, ...)
* Intégrer le **CSS** et les **médias** (images, icônes) du site dans 
  l'application. N'oubliez d'importer `normalize.css`
* Modifier le **titre** de l'application dans `src/index.html`
* Créer les routes pour les trois pages
  * `/` : Accueil
  * `/service-client` : Service Client
  * `/sabre/:id` : Fiche d'un sabre
* Créer les composants suivants pour les trois pages en y ajoutant 
  simplement un titre `<h1>Accueil</h1>` par exemple.
  * `AccueilView.vue`
  * `ServiceClientView.vue`
  * `SabreView.vue`
* Modifier `App.vue` pour afficher les trois pages avec un 
  `<router-view />`.
  * Supprimer le code HTML et CSS de `App.vue`, ne garder que le `<router-view />`
* Tester le bon fonctionnement de vos routes :
  * Accueil http://localhost:5173/
  * Service CLient http://localhost:5173/service-client
  * Fiche d'un sabre : http://localhost:5173/sabre/1
* Créer les composants pour l'entête et le pied de page du site
  * Remplacer les liens de navigation de l'entête par des `<router-link>`.
  * Ne pas oublier d'ajouter la class au lien actif. `<router-link class="active" to="/">Accueil</router-link>`
* Intégrez les composants entête et pied de page dans `App.vue`
* Tester la navigation entre les pages avec votre menu.
* Intégrer le code HTML des pages dans les composants correspondants.
* Intégrer le code CSS des pages dans les composants correspondants.
* Tester que l'affichage des pages est correct.
* Ajouter le tableau JavaScript des sabres du fichier `_sources/sabres.js` dans 
  `AccueilView.vue`.
* Parcourir le tableau des sabres pour afficher les informations de chaque sabre.
* Créer un composant `SabreLaser.vue` pour afficher les informations d'un sabre.
* Intégrer le composant `SabreLaser.vue` dans `AccueilView.vue` pour afficher les sabres.
* Modifier le lien sur les sabres pour accéder à la page de détail du 
  sabre avec un `<router-link>`. Par exemple pour afficher le sabre 35:
  `<router-link to="/sabre/35">`
* Dans le composant `SabreLaser.vue` récupérer l'identifiant du sabre et 
  l'afficher comme titre principal.


This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
