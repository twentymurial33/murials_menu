import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

export default function AddFood({ food }) {
  const [loading, error, data] = useQuery(food, () =>
    axios("http://localhost:3000/api/food")
  );
  if (error) return <h2>Error </h2>;
  if (loading) return <h2> loading </h2>;
  console.log(data);
  return (
    <div>
      return (
      <div>
        <button>Add Me</button>
        <p>{food.Name}</p>
      </div>
      );
    </div>
  );
}
