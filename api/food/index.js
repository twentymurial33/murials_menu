import prisma from "../../client/src/lib/util";

export default async function handle(req, res) {
  const { img, author, title } = req.body;
  const foodItem = await prisma.food.create({
    data: {
      title: title,
      author: author,
      img: img,
    },
  });
  res.json(foodItem);
}
