# nginx/Dockerfile

# Utiliser l'image officielle Nginx comme base
FROM nginx:alpine

# Copier le fichier de configuration personnalisé
COPY nginx.conf /etc/nginx/nginx.conf

# Exposer le port 80 pour le serveur web
EXPOSE 80

# Commande par défaut pour démarrer Nginx
CMD ["nginx", "-g", "daemon off;"]
