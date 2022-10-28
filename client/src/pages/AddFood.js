import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";
import Layout from "../components/Layout";

function AddFood() {
  const [food, setFood] = useState("");
  const url = "http://localhost:5000/food";

  useEffect(() => {
    axios
      .post(url, { title: "title", img: "img", author: "author" })
      .then((response) => {
        setFood(response.data);
      });
  }, [url]);

  return (
    <>
      <Layout />
      <Fab
        color="secondary"
        aria-label="add"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <AddIcon />
      </Fab>
      {Array.from(food).map((data) => {
        return <Card>{food.id}</Card>;
      })}
    </>
  );
}

export default AddFood;
