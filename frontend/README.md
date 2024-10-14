# Frontend du Projet Amis Solidaires

## Description

Ce dossier contient le code frontend de **Amis Solidaires**, une application web communautaire permettant de faciliter la gestion des membres, des cotisations, des prêts, et des aides au sein d'une communauté solidaire. Le frontend est responsable de l'interface utilisateur, rendant les interactions plus accessibles et fluides.

## Prérequis

- Node.js (v14.0.0 ou supérieure)
- npm (v6.0.0 ou supérieure)

## Installation

1. **Clonez le dépôt du projet :**
   ```sh
   git clone https://github.com/RodrigueNzomo/amis-solidaires-frontend.git
   cd amis-solidaires-frontend
   ```

2. **Installez les dépendances :**
   ```sh
   npm install
   ```

## Lancement du Frontend

Pour lancer le serveur frontend en mode de développement :
```sh
npm start
```
L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du Projet

```
frontend/
├── assets/
│   ├── documentation/          # Documentation visuelle
│   ├── icones/                 # Icônes du projet
│   └── images/                 # Images utilisées dans l'interface
│
├── css/                        # Feuilles de style CSS
│   ├── dashboard.css
│   ├── login.css
│   ├── main.css
│   ├── register.css
│   ├── auth.css
│   ├── membre.css
│   ├── cotisation.css
│   ├── pret.css
│   └── aide.css
│
├── js/                         # Fichiers JavaScript frontend
│   ├── dashboard.js
│   ├── login.js
│   ├── main.js
│   ├── register.js
│   ├── utils.js
│   ├── aide.js
│   ├── pret.js
│   ├── cotisation.js
│   ├── membre.js
│   └── auth.js
│
├── pages/                      # Pages HTML de l'application
│   ├── dashboard.html
│   ├── login.html
│   ├── register.html
│   ├── index.html
│   ├── aide.html
│   ├── pret.html
│   ├── cotisation.html
│   └── membre.html
│
└── .markdownlint.json          # Configuration des règles MarkdownLint
```

## Technologies Utilisées

- **HTML** : Utilisé pour structurer le contenu des pages web.
- **CSS (Bootstrap)** : Utilisé pour styliser les pages et garantir une interface responsive.
- **JavaScript** : Fournit la logique côté client pour les interactions utilisateur et la communication avec le backend.

## Scripts Disponibles

- **npm start** : Lance le serveur en mode de développement.
- **npm run build** : Crée une version optimisée du projet pour la production.

## Contribution

1. **Forkez** le projet.
2. **Créez** votre branche (`git checkout -b feature/NouvelleFonctionnalite`).
3. **Committez** vos changements (`git commit -m 'Ajout d'une nouvelle fonctionnalité'`).
4. **Poussez** vers la branche (`git push origin feature/NouvelleFonctionnalite`).
5. **Ouvrez** une Pull Request.

## Bonnes Pratiques

Pour assurer la qualité du code, veillez à respecter les bonnes pratiques suivantes :
- Utilisez des classes CSS et JavaScript de manière cohérente et compréhensible.
- Respectez les règles de linting configurées dans le fichier `.markdownlint.json`.

## Licence

Ce projet est sous licence MIT. Voir le fichier [LICENSE](../LICENSE) pour plus de détails.

