# Étape 1 : Node Alpine léger
FROM node:20-alpine

# Étape 2 : dossier de travail
WORKDIR /usr/src/app

# Étape 3 : copier package.json et package-lock.json
COPY package*.json ./

# Étape 4 : installer les dépendances
RUN npm install

# Étape 5 : copier le reste du code
COPY . .

# Étape 6 : déclarer l'argument de build pour DATABASE_URL
ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

# Étape 7 : générer le client Prisma
RUN npx prisma generate --schema=prisma/schema.prisma

# Étape 8 : build NestJS (TypeScript -> JS)
RUN npm run build

# Étape 9 : exposer le port
EXPOSE 3000

# Étape 10 : commande par défaut (prod)
CMD ["npm", "run", "start:prod"]
