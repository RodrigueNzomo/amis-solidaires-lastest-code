# Utiliser une image officielle Node.js
FROM node:14

# Définir le répertoire de travail
WORKDIR /usr/src/app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le code source dans le conteneur
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 5000

# Commande pour démarrer l'application
CMD ["npm", "start"]



# # Dockerfile du Backend

# # Utiliser l'image officielle de Node.js comme base
# FROM node:16-alpine

# # Définir le répertoire de travail
# WORKDIR /usr/src/app

# # Copier package.json et package-lock.json
# COPY package*.json ./

# # Installer les dépendances
# RUN npm install

# # Copier le reste des fichiers de l'application
# COPY . .

# # Exposer le port sur lequel le backend fonctionne
# EXPOSE 5000

# # Démarrer l'application
# CMD ["node", "app.js"]