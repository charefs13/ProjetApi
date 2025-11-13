import { PrismaClient } from '../generated/prisma'
const prisma = new PrismaClient();
const now = new Date();

async function main() {
  const now = new Date();

  // --- Création des utilisateurs ---
  const user1 = await prisma.user.create({
    data: {
      email: 'user1@example.com',
      password: 'password123',
      firstname: 'John',
      lastname: 'Doe',
      role: 'USER',
      createdAt: now,
      updatedAt: now,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: 'user2@example.com',
      password: 'password456',
      firstname: 'Jane',
      lastname: 'Smith',
      role: 'USER',
      createdAt: now,
      updatedAt: now,
    },
  });

  // --- Création des recettes ---
  const recipe1 = await prisma.recipe.create({
    data: {
      title: 'Spaghetti Carbonara',
      description: 'Classic Italian pasta dish with eggs, cheese, pancetta, and pepper.',
      ingredients: 'Spaghetti, Pancetta, Eggs, Parmesan, Pepper',
      userId: user1.id,
    },
  });

  const recipe2 = await prisma.recipe.create({
    data: {
      title: 'Tomato Soup',
      description: 'Creamy tomato soup perfect for cold days.',
      ingredients: 'Tomatoes, Onion, Garlic, Cream, Salt & Pepper',
      userId: user2.id,
    },
  });

  console.log('✅ Utilisateurs et recettes créés avec succès :');
  console.log({ user1, user2, recipe1, recipe2 });
}

main()
  .catch((e) => {
    console.error('❌ Erreur lors du seed :', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


 