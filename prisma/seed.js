const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  const insertResult = await prisma.food.createMany({
    data: [
      { id: 10, title: "toast", img: "bellablue", author: "lenovo" },
      { id: 22, title: "sausage", img: "pinkpurple", author: "lenovo" },
    ],
  });
  console.info(`The prisma database was seeded with ${insertResult.count} items.`);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
