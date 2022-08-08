import React from "react";
import Layout from "../components/Layout";
import { useQuery } from "react-query";

function Filtering() {
  const { isLoading, error, data } = useQuery("menu_items", () => {
    console.log('Fetch call started');
    return fetch("https://demo5940257.mockable.io/menu_items").then(async (response) => {
      console.log('fetch call happened; server responded')
      const result = await response.json()
      // If the line below is never called, it means the .json() call is failing because the server isn't 
         returning JSON; likely because of a non-200 response.
      console.log({result})
      return result
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
