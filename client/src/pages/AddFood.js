import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

//Post Endpoint -require body
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
    <div>
      <Layout />
      <h1>{food.title}</h1>
    </div>
  );
}
export default AddFood;
