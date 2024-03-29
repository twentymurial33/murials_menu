const express = require("express");
const cors = require("cors");
const app = express();
const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use(express.json());

//endpoint to get Many
app.get("/menu_items", async (req, res) => {
  const getFood = await prisma.food.findMany();
  res.json(getFood);
});

//Add server endpoint to GET a single food item
app.get("/menu_items/:id", async (req, res) => {
  const { id } = req.params;
  const getFoodItem = await prisma.food.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.json(getFoodItem);
});

//Post menthod
app.post("/food", async (req, res) => {
  const { img, author, title } = req.body;
  console.log(req.body);
  const food = await prisma.food.create({
    data: {
      img,
      author,
      title,
    },
  });
  res.json(food);
});

//delete method
app.delete("/food/:id", async (req, res) => {
  const { id } = req.params;
  const deletedFood = await prisma.food.delete({
    where: {
      id: Number(id),
    },
  });
  res.json(deletedFood);
});

//put method
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

app.listen(process.env.PORT, () => console.log("Server Started..."));
