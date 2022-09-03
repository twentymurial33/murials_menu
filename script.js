// const { PrismaClient } = require("@prisma/client");

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.$connect();

//   await prisma.food.create({
//     data: {
//       title: "Sushi",
//       author: "Ted",
//     },
//   });

//   await prisma.food.create({
//     data: {
//       title: "Lava Cake",
//       author: "Chef Andy",
//     },
//   });

//   await prisma.food.create({
//     data: {
//       title: "Testing Testing",
//       author: "Testing ",
//     },
//   });

//   const food = await prisma.food.findMany();

//   console.dir(food, { depth: Infinity });
// }
