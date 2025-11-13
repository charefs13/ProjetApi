# Étape 1 : utiliser une image officielle Node
FROM node:20-alpine

# Etape 2 : définir le dossier de travail
WORKDIR /usr/src/app

# Etape 3 copier les fichiers de dépendances
COPY package*.json ./

# Etape 4 : installer les dépendances
RUN npm install

# Etape 5 : copier le reste du code
COPY . .

# Etape 6 : Construire le projet (TypeScript -> JS)
RUN npm run build

# Etape 7 : Exposer le port utilisé par NestJS
EXPOSE 3000

# Etape 8 : commande de démarrage
CMD ["npm", "run", "start:prod"]