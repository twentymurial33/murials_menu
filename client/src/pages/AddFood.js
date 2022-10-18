import React, { useState } from "react";
import axios from "axios";
import Layout from "../components/Layout";

//Put Endpoint
function AddFood() {
  const [food, setFood] = useState("");
  const url = "http://localhost:3000/api/food";
  axios.put(url).then((response) => {
    setFood(response.data);
    console.log(response);
  });

  return (
    <div>
      <Layout />
      <h1>Add the Food !</h1>
    </div>
  );
}
export default AddFood;
