import prisma from "../../client/src/lib/util";

export default async function handle(req, res) {
  const { img, author, title } = req.body;
  const { id } = req.params;
  const food = await prisma.food.create({
    data: {
      title: title,
      author: author,
      img: img,
    },
  });
  const foodItem = await prisma.food.update({
    where: { id: Number(id) },
    data: {
      img,
      author,
      title,
    },
  });
  res.json(food);
  res.json(foodItem);
}
