import Layout from "../components/Layout";
import * as React from "react";
import "../App.css";

function Listing() {
  return (
    <>
      <Layout />
      <input className="search" placeholder="Search" type="text" />
    </>
  );
}
export default Listing;
