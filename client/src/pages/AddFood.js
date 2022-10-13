import React from "react";
import axios from "axios";
import { useQuery } from "react-query";

function AddFood() {
  const { isLoading, data, error } = useQuery(["food"], () =>
    axios("http://localhost:3000/api/food")
  );

  console.log(data);
  return <div className="gallery"></div>;
}

export default AddFood;
