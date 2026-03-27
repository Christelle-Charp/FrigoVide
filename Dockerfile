# Étape 1 : build React
FROM node:20 AS build
WORKDIR /app

# Copier les fichiers de dépendances
COPY package*.json ./
RUN npm install

# Copier le reste du projet
COPY . .

# Corriger les droits sur node_modules/.bin
RUN chmod +x node_modules/.bin/vite

# Lancer le build avec npx
RUN npx vite build

# Étape 2 : servir avec Nginx
FROM nginx:stable
COPY --from=build /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf   
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]