import React from "react";
import Layout from "../components/Layout";
import { useQuery } from "react-query";

function Filtering() {
  const { isLoading, error, data } = useQuery("menu_items", () =>
    fetch("https://demo5940257.mockable.io/menu_items").then((response) =>
      response.json()
    )
  );
  if (isLoading) return "Loading.";
  if (error) return "Error has occurred: " + error.message;
  return (
    <div>
      <Layout>
        <h1>{data.img}</h1>
        <p>{data.title}</p>
        <p>{data.author}</p>
      </Layout>
    </div>
  );
}
export default Filtering;
