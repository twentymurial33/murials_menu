import React, { useState, useEffect } from "react";
import axios from "axios";
import CardHeader from "@material-ui/core/CardHeader";
import Card from "@material-ui/core/Card";
import Layout from "../components/Layout";
import Avatar from "@material-ui/core/Avatar";

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
      <Card>
        {Array.from(food).map((data) => {
          return (
            <>
              <CardHeader avatar={<Avatar aria-label="recipe">R</Avatar>} />
              <p key={food.id}></p>
            </>
          );
        })}
      </Card>
    </div>
  );
}
export default AddFood;
