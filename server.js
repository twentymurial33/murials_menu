const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

//new get endpoint
app.get("/menu_items", function (req, res) {
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

//Post Method
app.post("/menu_items", (req, res, next) => {
  res.send(JSON.stringify(req.body));
});

//Delete by ID Method
app.delete("/delete/:id", (req, res) => {
  res.send("Delete by ID API");
});

app.listen(5000, () => console.log("Server Started..."));
