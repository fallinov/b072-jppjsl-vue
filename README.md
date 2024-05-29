# Exercice "Je peux pas, j'ai sabre laser"

## Commandes
### Installer les libraires
```sh
npm install
```
### Démarrer le serveur de développement
```sh
npm run dev
```
### Créer une version de production
```sh
npm run build
```
### Reformatter le code avec [Prettier](https://prettier.io/)
```sh
npm run format
```
### Analyser votre code avec with [ESLint](https://eslint.org/)
```sh
npm run lint
```

## Objectif
Transformer le site _Je peux pas, j'ai sabre laser_
que vous trouverez dans le dossier `_sources/` de ce dépôt en application Vue.js.

Comment y parvenir ?
1. Lire le support de cours sur [Vue Router](https://divtec.gitbook.io/vuejs/vue-router).
2. Suivre attentivement les consignes de ce fichier

### Résultat final attendu
![acceuil.png](_medias%2Facceuil.png)

## Etapes
### 1. Initialisation
* Nettoyer le projet, suppression des fichiers inutiles (CSS, composants, ...)
  * Supprimer le fichier `src/assets/base.css`
  * Supprimer tous les fichiers dans `public/`
  * Supprimer tous les dossiers et fichiers dans `src/components/`
  * Remplacer le contenu de `src/App.vue` avec le contenu suivant :
    ```html
    <script setup>
    import { RouterLink, RouterView } from 'vue-router'
    </script>

    <template>
      <header>
        <nav>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
          </ul>
        </nav>
      </header>
      <main>
        <RouterView />
      </main>
    </template>
    
    <style scoped>
    
    </style>
    ```
* Remplacer le contenu de `src/views/HomeView.vue` avec le contenu suivant :
  ```html
  <template>
    <h1>Accueil</h1>
  </template>
  ```
* Remplacer le contenu de `src/views/About.vue` avec le contenu suivant :
  ```html
  <template>
    <h1>About</h1>
  </template>
  ```
* Intégrer le **CSS** et les **médias** (images, icônes) du site dans l'application.
  * Copier les fichiers CSS du dossier `_sources/css/` dans `src/assets/`
    * Ecraser le fichier `src/assets/main.css` avec le contenu du fichier `_sources/css/main.css`
  * Copier les médias (image et icônes) dans `public/`
    * Copier le dossier des images `_sources/img/` dans `public/`
    * Copier le fichier d'icône `_sources/favicon.ico` dans `public/`
* Modifier le **titre** de l'application dans `index.html`
  * `<title>J&#039;peux pas j&#039;ai sabre laser</title>`

#### Résultat attendu
A ce stade, vous devriez avoir une application qui ressemble au
résultat ci-dessous et qui vous permet de naviguer entre les pages `Home` et `About`.


![etape-1-resultat.png](_medias%2Fetape-1-resultat.png)
---


### 2. Création des vues et des routes
* Supprimer les composants `src/views/About.vue` et `src/views/HomeView.vue`
* Créer les composants suivants pour les trois pages en y ajoutant
  un simple titre de niveau 1. Par exemple `<h1>Accueil</h1>` pour `AccueilView.vue`.
  * `AccueilView.vue`
  * `ServiceClientView.vue`
  * `FicheSabreView.vue`
* Créer les routes pour les trois vues dans `src/router/index.js`
  * `/`
    * Composant à importer : `src/views/AccueilView.vue`
    * Nom de la route : `home`
  * `/service-client`
    * Composant à importer : `src/views/ServiceClientView.vue`
    * Nom de la route : `service-client`
  * `/sabre/:id` (:id est un paramètre de route dynamique)
    * Composant à importer : `src/views/FicheSabreView.vue`
    * Nom de la route : `sabre`
  * **Ne pas oublier de supprimer les routes inutiles comme `/about` 
    et l'importation des composants correspondants (HomeView)**
* Tester le bon fonctionnement de vos routes :
  * Accueil http://localhost:5173/
  * Service CLient http://localhost:5173/service-client
  * Fiche d'un sabre : http://localhost:5173/sabre/1
* Modifier les liens vers vos pages dans le menu de navigation de `src/App.vue`
  * `<router-link to="/">Accueil</router-link>`
  * `<router-link to="/service-client">Service Client</router-link>`
  * `<router-link to="/sabre/1">Fiche du sabre 1</router-link>`

#### Résultat attendu
A ce stade, vous devriez avoir une application qui ressemble au
résultat ci-dessous et qui vous permet de naviguer entre les pages `Accueil`, `Service Client` et `Fiche du sabre 1`.


![etape-2-resultat.png](_medias%2Fetape-2-resultat.png)

---


### 3. Intégration du code HTLM et CSS des pages
Il faut maintenant intégrer le code HTML et CSS des pages du site dans les composants correspondants.
Mais avant cela, nous allons créer les composants pour l'entête et le pied de page du site.

> **Note :** Pour accéder à une image dans le dossier `public/`
> toujours commencer par `/` suivi du chemin relatif au fichier.
> Par exemple, pour accéder à l'image `sl-vad.jpg` dans le dossier `public/img/`
> on utilisera `<img src="/img/sl-vad.jpg" alt="SL-VAD">`

* Dans le dossier `src/components/` créer les composants suivants
  et y ajouter le code HTML et CSS correspondant :
  * `EnteteDePage.vue` contient la balise `<header>` et son contenu
  * `PiedDepage.vue` contient la balise `<footer>` et son contenu
  * Ne pas oublier d'ajouter les styles CSS correspondants dans les composants.
* Dans `EnteteDePage.vue` remplacer les liens de navigation par des `<router-link>`.
  * Ne pas oublier le lien du logo
  * Ne pas oublier d'ajouter la class au lien actif. `<router-link class="active" to="/">Accueil</router-link>`
    * Comment faire ? Voir la documentation : https://router.vuejs.org/guide/essentials/active-links
* Intégrez les composants `EnteteDePage.vue` et `PiedDepage.vue` de page dans `App.vue`
  ```html
  <template>
    <EnteteDePage />
    <main>
      <RouterView />
    </main>
    <PiedDepage />
  </template>
  ```
* Tester la navigation entre les pages avec votre nouveau menu.
* Intégrer le code HTML des pages dans les composants correspondants.
    * `AccueilView.vue`
      * Remplacer le lien vers la page de détail du sabre par un `<router-link to="/sabre/1"">`.
      * Ne pas oublier de passer un identifiant de sabre dans la route (on met 1 à tous les sabres pour le moment),
        sinon la page de détail ne s'affichera pas.
    * `ServiceClientView.vue`
    * `FicheSabreView.vue`
* Intégrer le code CSS des pages dans les composants correspondants.
* Tester que l'affichage des pages est correct.

#### Résultat attendu
A ce stade, vous devriez avoir une application qui ressemble au
résultat ci-dessous et qui vous permet de :
* naviguer entre les pages `Accueil`, `Service Client` dans le menu
* ouvrir la `Fiche Sabre` en cliquant sur un sabre de la page d'accueil.


![etape-3-resultat.png](_medias%2Fetape-3-resultat.png)
---

### 4. Intégration des données pour la liste des sabres
![acceuil.png](_medias%2Facceuil.png)
* Ajouter le tableau JavaScript des sabres du fichier `_sources/sabres.js` dans
  `AccueilView.vue`.
* Parcourir le tableau des sabres pour afficher les informations de chaque sabre.
* Créer un composant `SabreLaser.vue` pour afficher les informations d'un sabre.
* Intégrer le composant `SabreLaser.vue` dans `AccueilView.vue` pour
  afficher les sabres en lui passant les informations du sabre en props.

#### Particularités liées au stock
Sur lapage d'acceuil, si un sabre a un **stock inférieur à 1** :
* Ajouter la classe CSS `rupture` à la `<div class="sabre">`
  * Le plus simple est d'utiliser la liaison de classe :
    https://fr.vuejs.org/guide/essentials/class-and-style.html#binding-html-classes
* Ajouter le paragraphe suivant juste avant le titre `<h2>` du sabre,
  comme c'est le cas pour le deuxième sabre de la maquette HTML.
```html 
<p>Noooon, les stocks sont vides !</p>
```
---

### 5. Fiche de détail (fiche d'un sabre)
![fiche-id.png](_medias%2Ffiche-id.png)
* Dans `router/index.js` déclarer un paramètre `id` dans la route 
  `/sabre/:id` (normalement, c'est déjà fait) et activer l'injection automatique de ce paramètre dans le
  composant `FicheSabreView.vue` via une propriété
  ```javascript
  {
      path: '/sabre/:id',
      name: 'sabre',
      component: FicheSabreView,
      props: true // Injection automatique des paramètres dans le composant
  }
  ```
* Créer une propriété `id` dans le composant `FicheSabreView.vue`
  `const props = defineProps(['id'])`
* Modifier le lien sur les sabres pour accéder à la page de détail du
  sabre avec un `<router-link>` qui passera l'id du sabre.
  Par exemple pour afficher le sabre 35: `<router-link to="/sabre/35">`
  * De manière dynamique, l'on passera l'identifiant du sabre dans le lien
    ainsi : `<router-link :to="'/sabre/' + sabre.id">`
  * Ou encore mieux : `<router-link :to="{ name: 'sabre', params: { id: sabre.id } }">`
* Dans le composant `FicheSabreView.vue` récupérer l'identifiant du sabre et
  l'afficher comme titre principal. `<h1>{{ id }}</h1>`
* Tester le fonctionnement en passant manuellement un id dans l'URL
* Tester en cliquant sur les sabres de la page d'accueil
---

### 6. Création d'un magasin de données _Pinia_
* Créer un fichier `src/store/sabres.js` et y ajouter le code suivant :
  ```javascript
  import { defineStore } from 'pinia'
  
  export const useSabresStore = defineStore('sabres', {
    /* Définition des données du magasin
    On ne doit jamais accéder directement aux données du magasin,
    on utilise les getters */
    state: () => ({
      sabres: [
        {
          id: 445,
          nom: 'SL-VAD',
          image: 'sl-vad.jpg',
          stock: 4,
          prix: 399,
          poids: 1.5,
          longueur: 28,
          description:
                  'Le SL-VAD est un sabre laser de la gamme REPLIKA. Inspiré' +
                  ' par le sabre du méchant le plus iconique du cinéma, Dark Vador,' +
                  'tel qu’on peut le voir dans la saga Star Wars, version Empire,' +
                  'Episode IV, IV et VI. (réplique non officielle).'
        },
        {
          id: 4,
          nom: 'SL-SKY',
          image: 'sl-sky.jpg',
          stock: 0,
          prix: 399,
          poids: 0.999,
          longueur: 28,
          description:
                  'Le SL-Sky (V2) est le premier sabre de la gamme REPLIKA.' +
                  ' Inspiré par le sabre de Luke Skywalker, version « Retour du Jedi ».' +
                  ' (réplique non officielle).'
        },
        {
          id: 67,
          nom: 'SL-OBI 1',
          image: 'sl-obi.jpg',
          stock: 22,
          prix: 379,
          poids: 1.5,
          longueur: 28.5,
          description:
                  'Le SL-OBI 1 est une de nos dernières sorties sabre de la gamme' +
                  'REPLIKA. Inspiré par le sabre de Obi-wan Kenobi version Episode I ' +
                  '(réplique non officielle).'
        },
        {
          id: 99,
          nom: 'SL-CAL',
          image: 'sl-vad.jpg',
          stock: 8,
          prix: 399,
          poids: 0.6,
          longueur: 38,
          description:
                  'Le SL-Cal est un sabre laser de la gamme REPLIKA.' +
                  'Inspiré par le sabre de Cal Kestis,' +
                  'dans le jeu « Fallen Order » (réplique non officielle).'
        },
        {
          id: 111,
          nom: 'SL-TANO-curve',
          image: 'sl-tano-curve.jpg',
          stock: 15,
          prix: 699,
          poids: 0.6,
          longueur: 27.5,
          description:
                  'Les SL-TANO Curve sont deux de nos dernières sorties sabre de' +
                  'la gamme REPLIKA. Inspirés par les doubles sabres d’Ashoka' +
                  'Tano version Mandalorian (réplique non officielle).'
        },
        {
          id: 345,
          nom: 'SL-PIKE',
          image: 'sl-pike.jpg',
          stock: 2,
          prix: 189,
          poids: 1.9,
          longueur: 69,
          description:
                  'La SL-PIKE est notre modèle de lance laser de référence ! ' +
                  'Idéal pour compléter un cosplay, étudié pour le combat.'
        },
        {
          id: 373,
          nom: 'SL-Opress',
          image: 'sl-opress.jpg',
          stock: 6,
          prix: 499,
          poids: 1.5,
          longueur: 65,
          description:
                  'La SL-PIKE est notre modèle de lance laser de référence ! ' +
                  'Idéal pour compléter un cosplay, étudié pour le combat.'
        }
      ]
    }),
    /* Définition des getters du magasin
    Les getters permettent d'accéder aux données du magasin */
    getters: {
      // Retourne le tableau des sabres
      getSabres: (state) => state.sabres,
      // Retourne un sabre par son identifiant
      getSabreById: (state) => (id) => state.sabres.find((s) => s.id === Number(id)),
      // Retourne le tableau des sabres triés par nom croissant
      // localeCompare() permet de comparer deux chaînes de caractères en 
      // fonction de la langue.
      getSabresAZ: (state) => state.sabres.sort((a, b) => a.nom.localeCompare
  (b.nom, 'fr'))
    }
  })
  ```
* Utiliser le magasin Pinia dans `AccueilView.vue` pour récupérer la liste des
  sabres triés par ordre alphabétique avec le getter `getSabresAZ`.
  ```html
  <script setup>
  // Import du composant SabreLaser
  import SabreLaser from '@/components/SabreLaser.vue'
  // Import du magasin des sabres
  import { useSabresStore } from '@/stores/sabres'
  // Création d'une instance du magasin des sabres pour le composant
  const storeSabres = useSabresStore()
  // Récupération des données des sabres triés par ordre alphabétique
  const sabres = storeSabres.getSabresAZ
  </script>
  ```
* Utiliser le magasin Pinia dans `FicheSabreView.vue` pour récupérer les
  informations du sabre.
  ```html
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
  ```
#### Particularités liées au stock
Dans la fiche de détail d'un sabre, si un sabre à un `stock plus grand que 10`,
on affichera phrase suivante à la place de la quantité exacte afin de ne pas
donner trop d'informations à nos concurrents :)
```html 
<li>Stock: plus de 10 pièces</li>
```
## Pour aller plus loin
Voici quelques pistes pour aller plus loin dans le développement de ce projet :
* Ajouter un système de panier
  * Créer un magasin `panier.js`
  * Ajouter un bouton "Ajouter au panier" à `FicheSabreView.vue` et `SabreLaser.vue`
  * Ajouter un bouton "Voir le panier" dans le menu
  * Créer une vue `PanierView.vue` qui affiche le contenu du panier
  * Afficher le total du panier dans l'entête du site
* Ajouter un système de connexion, d'authentification
  * Permet de distinguer les clients des administrateurs
* Ajouter une partie administration
  * Formulaire d'ajout de sabre
  * Formulaire de modification de sabre
  * Suppression de sabre
* Sauvegarder les données sur le poste client
  * Utiliser le localStorage
* Sauvegarder toutes les données de manière pérène
  * Créer une base de données
  * Créer une API

