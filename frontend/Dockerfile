# Dockerfile du Frontend

# Utiliser l'image officielle de Nginx comme base
FROM nginx:alpine

# Copier les fichiers du frontend vers le répertoire de Nginx
COPY . /usr/share/nginx/html

# Exposer le port 80 pour le serveur web
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]