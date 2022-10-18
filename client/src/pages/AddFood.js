import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../components/Layout";

//Put Endpoint
function AddFood() {
  const [food, setFood] = useState("");
  const url = "http://localhost:3000/api/food";

  useEffect(() => {
    axios.put(url).then((response) => {
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
