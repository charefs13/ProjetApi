# Étape 1 : image Node officielle
FROM node:20-alpine

# Étape 2 : définir le dossier de travail
WORKDIR /usr/src/app

# Étape 3 : copier package.json et package-lock.json
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier le reste du code
COPY . .

# Étape 6 : générer le client Prisma
RUN npx prisma generate --schema=prisma/schema.prisma

# Étape 7 : construire le projet (TypeScript -> JS)
RUN npm run build

# Étape 8 : exposer le port
EXPOSE 3000

# Étape 9 : commande de démarrage
CMD ["npm", "run", "start:prod"]
