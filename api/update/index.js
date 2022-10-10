import prisma from "../../../lib/prisma";

export default async function handle(req, res) {
  const { img, author, title } = req.body;
  const { id } = req.params;
  const foodItem = await prisma.food.update({
    where: { id: Number(id) },
    data: {
      img,
      author,
      title,
    },
  });
  res.json(foodItem);
}
