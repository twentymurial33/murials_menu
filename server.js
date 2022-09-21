const express = require("express");
const cors = require("cors");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

app.get("/menu_items", (req, res) => {
  res.send([
    {
      img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
      title: "Breakfast",
      author: "@bkristastucchio",
    },
    {
      img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
      title: "Burger",
      author: "@rollelflex_graphy726",
    },
    {
      img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
      title: "Coffee",
      author: "@nolanissac",
    },
    {
      img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
      title: "Honey",
      author: "@arwinneil",
    },
    {
      img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
      title: "Mushrooms",
      author: "@silverdalex",
    },
    {
      img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
      title: "Tomato basil",
      author: "@shelleypauls",
    },
  ]);
});

app.post("/food", async (req, res) => {
  const { img, author, title } = req.body;
  const food = await prisma.food.create({
    where: {},
    data: {
      img,
      author,
      title,
    },
  });
  res.json(food);
});

app.delete("/food/:id", async (req, res) => {
  const { id } = req.params;
  const deletedFood = await prisma.food.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedFood);
});

app.put("/food/:id", async (req, res) => {
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
});

app.listen(5000, () => console.log("Server Started..."));
