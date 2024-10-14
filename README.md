# Amis Solidaires

## Description
**Amis Solidaires** est une application web conçue pour faciliter la gestion des membres, cotisations, prêts, et aides au sein d'une communauté solidaire. Cette plateforme vise à renforcer les liens sociaux et à promouvoir l'entraide financière entre ses membres.

Développé par **Rodrigue Nzomo**, Associé Directeur Bureau Brazzaville, Analyste-Concepteur Développeur Full Stack Java chez **TMR COMPUTING CONGO LTD**, certifié **ODOO 17 FUNCTIONAL CERTIFICATION**.

Coordonnées :
- **Email** : [nzomo.rodrigue@tmrcomputing.com](mailto:nzomo.rodrigue@tmrcomputing.com)
- **Téléphone** : +242 065 218 412 / 05 597 41 86
- **Adresse** : Tour Jumelle, Brazzaville, Congo
- **Site Web** : [tmrcomputing.com](https://tmrcomputing.com)

## Table des matières
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Structure du projet](#structure-du-projet)
- [Besoins et Algorithme](#besoins-et-algorithme)
- [Langages et Technologies](#langages-et-technologies)
- [Agilité Scrum et Sprints](#agilité-scrum-et-sprints)
- [Roadmap](#roadmap)
- [Utilisation](#utilisation)
- [API](#api)
- [Tests](#tests)
- [Déploiement](#déploiement)
- [Contribution](#contribution)
- [Licence](#licence)

## Prérequis
- Node.js (v14.0.0 ou supérieure)
- npm (v6.0.0 ou supérieure)
- MongoDB (v4.0.0 ou supérieure)

## Installation
1. **Clonez le dépôt :**
   ```bash
   git clone https://github.com/votre-organisation/amis-solidaires.git
   cd amis-solidaires
   ```

2. **Installez les dépendances :**
   ```bash
   npm install
   ```

3. **Configurez les variables d'environnement :**
   Créez un fichier `.env` à la racine du projet et ajoutez les variables suivantes :
   ```env
   PORT=3000
   MONGODB_URI=mongodb://localhost:27017/amis_solidaires
   JWT_SECRET=votre_secret_jwt
   ```

4. **Lancez l'application :**
   ```bash
   npm start
   ```
   L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

## Structure du projet
```
amis-solidaires/
├── frontend/
│   ├── index.html                # Page d'accueil de l'application
│   ├── css/                      # Fichiers de styles CSS
│   │   ├── main.css              # Styles généraux de l'application
│   │   ├── auth.css              # Styles spécifiques pour l'authentification
│   │   ├── membres.css           # Styles pour la gestion des membres
│   │   ├── cotisations.css       # Styles pour la gestion des cotisations
│   │   ├── prets.css             # Styles pour la gestion des prêts
│   │   └── aides.css             # Styles pour la gestion des aides
│   ├── js/                       # Scripts JavaScript côté client
│   │   ├── main.js               # Logique principale du frontend
│   │   ├── auth.js               # Gestion de l'authentification côté client
│   │   ├── membres.js            # Gestion des membres
│   │   ├── cotisations.js        # Gestion des cotisations
│   │   ├── prets.js              # Gestion des prêts
│   │   ├── aides.js              # Gestion des aides
│   │   └── utils.js              # Fonctions utilitaires communes
│   ├── pages/                    # Pages HTML supplémentaires
│   │   ├── login.html            # Page de connexion des utilisateurs
│   │   ├── register.html         # Page d'inscription des utilisateurs
│   │   ├── dashboard.html        # Tableau de bord principal
│   │   ├── membres.html          # Page de gestion des membres
│   │   ├── cotisations.html      # Page de gestion des cotisations
│   │   ├── prets.html            # Page de gestion des prêts
│   │   └── aides.html            # Page de gestion des aides
│   └── assets/                   # Ressources telles que les images et icônes
│       ├── images/
│       └── icons/
├── backend/
│   ├── server.js                 # Fichier principal pour démarrer le serveur backend
│   ├── routes/                   # Routes de l'API
│   │   ├── authRoutes.js         # Routes d'authentification
│   │   ├── membresRoutes.js      # Routes de gestion des membres
│   │   ├── cotisationsRoutes.js  # Routes de gestion des cotisations
│   │   ├── pretsRoutes.js        # Routes de gestion des prêts
│   │   └── aidesRoutes.js        # Routes de gestion des aides
│   ├── controllers/              # Logique de gestion des différentes entités
│   │   ├── authController.js     # Contrôleur pour l'authentification
│   │   ├── membresController.js  # Contrôleur pour la gestion des membres
│   │   ├── cotisationsController.js # Contrôleur pour la gestion des cotisations
│   │   ├── pretsController.js    # Contrôleur pour la gestion des prêts
│   │   └── aidesController.js    # Contrôleur pour la gestion des aides
│   ├── models/                   # Modèles de données (MongoDB)
│   │   ├── User.js               # Modèle utilisateur
│   │   ├── Membre.js             # Modèle membre
│   │   ├── Cotisation.js         # Modèle cotisation
│   │   ├── Pret.js               # Modèle prêt
│   │   └── Aide.js               # Modèle aide
│   ├── middleware/               # Middleware pour gérer l'authentification, les erreurs, etc.
│   │   ├── auth.js               # Middleware pour la vérification des tokens JWT
│   │   └── errorHandler.js       # Middleware pour la gestion des erreurs
│   └── utils/                    # Utilitaires pour les fonctions réutilisables
│       ├── database.js           # Connexion à la base de données MongoDB
│       └── helpers.js            # Fonctions d'assistance diverses
├── .gitignore                    # Fichiers à ignorer par Git
├── package.json                  # Fichier de configuration des dépendances Node.js
└── README.md                     # Document d'explication du projet
```

## Besoins et Algorithme
L'objectif de **Amis Solidaires** est de permettre une gestion efficace des membres d'une communauté solidaire, de leurs cotisations, ainsi que des prêts et aides qu'ils peuvent solliciter. Les besoins identifiés sont :

- **Authentification des utilisateurs** (inscription, connexion, gestion des sessions).
- **Gestion des membres** : Ajouter, modifier, supprimer et lister les membres.
- **Gestion des cotisations** : Suivre les cotisations versées par les membres, générer des rappels de paiement.
- **Gestion des prêts et aides** : Permettre aux membres de demander des prêts, suivre les remboursements, et gérer les aides.
- **Rôles et permissions** : Implémenter différents rôles pour restreindre l'accès aux fonctionnalités selon le profil utilisateur.
  - **Président** : Accès complet à toutes les fonctionnalités de la plateforme, y compris la gestion des prêts et aides.
  - **Trésorier** : Accès aux fonctionnalités liées aux cotisations, prêts, et aides, avec des autorisations spécifiques pour valider les transactions.
  - **Membres** : Accès limité à leur propre profil, aux cotisations et aux demandes de prêts ou aides.

**Différence entre Prêts et Aides** :
- **Prêts** : Ce sont des montants accordés aux membres, qui doivent être remboursés avec ou sans intérêt. La plateforme gère le suivi des remboursements et des échéances.
- **Aides** : Ce sont des soutiens financiers non remboursables accordés aux membres pour des situations spécifiques (ex. urgences médicales).

**Algorithme principal** :
1. Authentification : Chaque requête est validée à l'aide d'un token JWT pour garantir la sécurité.
2. Gestion des entités (membres, cotisations, prêts, aides) : Implémentation des opérations CRUD avec des validations.
3. Notifications et rappels : Utilisation de tâches asynchrones pour générer des rappels automatiques.

## Langages et Technologies
- **Frontend** : HTML, CSS (Bootstrap pour le design réactif), JavaScript.
- **Backend** : Node.js, Express.
- **Base de données** : MongoDB pour la gestion des données (non relationnelles).
- **Authentification** : JWT (JSON Web Tokens) pour sécuriser les accès.
- **Tests** : Mocha & Chai pour les tests unitaires et d'intégration.

## Agilité Scrum et Sprints
Le développement de **Amis Solidaires** suit une approche agile en utilisant le framework **Scrum**. Le projet est divisé en plusieurs sprints, chacun ayant un objectif spécifique. Voici les principaux sprints :

### Sprint 1 : Mise en place de l'authentification
- **Objectif** : Mettre en place l'inscription et la connexion des utilisateurs avec JWT.
- **Tâches** :
  - Création du modèle utilisateur.
  - Implémentation des routes d'inscription et de connexion.
  - Gestion des rôles (Président, Trésorier, Membres).

### Sprint 2 : Gestion des membres
- **Objectif** : Permettre la gestion des membres par le Président et le Trésorier.
- **Tâches** :
  - CRUD des membres.
  - Affichage de la liste des membres avec des filtres spécifiques.

### Sprint 3 : Gestion des cotisations
- **Objectif** : Implémenter la gestion des cotisations des membres.
- **Tâches** :
  - Suivi des cotisations (montants, dates, statuts).
  - Génération de rappels automatiques pour les paiements en retard.

### Sprint 4 : Gestion des prêts
- **Objectif** : Implémenter la gestion des prêts avec suivi des remboursements.
- **Tâches** :
  - Création et validation des prêts.
  - Suivi des remboursements et des intérêts.
  - Permissions spécifiques pour le Trésorier.

### Sprint 5 : Gestion des aides
- **Objectif** : Implémenter la gestion des aides non remboursables.
- **Tâches** :
  - Création et validation des aides.
  - Gestion des conditions d'octroi des aides.

### Sprint 6 : Sécurité et rôles
- **Objectif** : Renforcer la sécurité et gérer les rôles des utilisateurs.
- **Tâches** :
  - Mise en place de permissions basées sur les rôles.
  - Vérification des accès pour chaque fonctionnalité.

### Sprint 7 : Interface utilisateur et expérience
- **Objectif** : Améliorer l'interface utilisateur pour une meilleure expérience.
- **Tâches** :
  - Mise en place d'un design réactif avec Bootstrap.
  - Simplification de la navigation et des interactions.

### Sprint 8 : Tests, optimisation et déploiement
- **Objectif** : Tester et déployer l'application.
- **Tâches** :
  - Tests fonctionnels et unitaires.
  - Optimisation des performances.
  - Déploiement avec Docker.

## Roadmap
Notre vision pour **Amis Solidaires** est de construire une plateforme robuste et conviviale, étape par étape, en suivant la méthodologie Agile. Voici notre roadmap :

### Phase 1 : Authentification et Rôles (0 - 1 mois)
- Mise en place de l'inscription et de la connexion des utilisateurs.
- Gestion des rôles et permissions pour chaque utilisateur.

### Phase 2 : Gestion des Membres et Cotisations (1 - 2 mois)
- Implémentation des fonctionnalités CRUD pour les membres.
- Gestion des cotisations avec rappels automatisés.

### Phase 3 : Gestion des Prêts et Aides (3 - 4 mois)
- Mise en place de la gestion des prêts avec suivi des remboursements.
- Gestion des aides non remboursables.

### Phase 4 : Sécurité et Expérience Utilisateur (5 - 6 mois)
- Renforcement de la sécurité des données.
- Amélioration de l'expérience utilisateur.

### Phase 5 : Tests, Optimisation et Déploiement (6+ mois)
- Tests complets de l'application.
- Optimisation des performances.
- Déploiement final via Docker.

## Utilisation
### Frontend
Le frontend est construit avec HTML, CSS, et JavaScript. Pour accéder à l'application, ouvrez `frontend/index.html` dans votre navigateur.

### Backend
Le backend est une API RESTful construite avec Node.js et Express. Pour démarrer le serveur :
```bash
npm run server
```

## API
L'API expose les endpoints suivants :

### Authentification :
- **POST** `/api/auth/login` : Connexion de l'utilisateur.
- **POST** `/api/auth/register` : Inscription de l'utilisateur.

### Membres :
- **GET** `/api/membres` : Liste des membres.
- **POST** `/api/membres` : Ajouter un membre.
- **GET** `/api/membres/:id` : Obtenir un membre par ID.
- **PUT** `/api/membres/:id` : Modifier un membre.
- **DELETE** `/api/membres/:id` : Supprimer un membre.

### Cotisations :
- **GET** `/api/cotisations` : Liste des cotisations.
- **POST** `/api/cotisations` : Ajouter une cotisation.
- **GET** `/api/cotisations/:id` : Obtenir une cotisation par ID.
- **PUT** `/api/cotisations/:id` : Modifier une cotisation.
- **DELETE** `/api/cotisations/:id` : Supprimer une cotisation.

### Prêts :
- **GET** `/api/prets` : Liste des prêts.
- **POST** `/api/prets` : Ajouter un prêt.
- **GET** `/api/prets/:id` : Obtenir un prêt par ID.
- **PUT** `/api/prets/:id` : Modifier un prêt.
- **DELETE** `/api/prets/:id` : Supprimer un prêt.

### Aides :
- **GET** `/api/aides` : Liste des aides.
- **POST** `/api/aides` : Ajouter une aide.
- **GET** `/api/aides/:id` : Obtenir une aide par ID.
- **PUT** `/api/aides/:id` : Modifier une aide.
- **DELETE** `/api/aides/:id` : Supprimer une aide.

## Tests
Pour exécuter les tests :
```bash
npm test
```

## Déploiement
Le déploiement de **Amis Solidaires** est réalisé à l'aide de **Docker** pour garantir une portabilité maximale. Les étapes pour déployer sont :
1. Construire l'image Docker :
   ```bash
   docker build -t amis-solidaires .
   ```
2. Lancer le conteneur :
   ```bash
   docker run -p 3000:3000 amis-solidaires
   ```

## Contribution
Nous accueillons favorablement les contributions à **Amis Solidaires**. Veuillez suivre ces étapes pour contribuer :

1. **Forkez** le projet.
2. **Créez** votre branche de fonctionnalité (`git checkout -b feature/AmazingFeature`).
3. **Committez** vos changements (`git commit -m 'Add some AmazingFeature'`).
4. **Poussez** vers la branche (`git push origin feature/AmazingFeature`).
5. **Ouvrez** une Pull Request.

Veuillez vous assurer de mettre à jour les tests si nécessaire et de suivre notre guide de style de code.

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](./LICENSE) pour plus de détails.

Développé avec ❤️ par l'équipe **Amis Solidaires**.#   a m i s - s o l i d a i r e s - l a s t e s t - c o d e  
 