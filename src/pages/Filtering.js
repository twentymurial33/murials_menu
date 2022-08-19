import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import Layout from "../components/Layout";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import "../index.css";

export default function App() {
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, data, error } = useQuery(["posts"], () =>
    axios("https://demo5940257.mockable.io/menu_items")
  );
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  console.log(data);

  return (
    <div>
      <Layout />
      <form>
        <TextField
          id="search-bar"
          className="text"
          onInput={(e) => {
            setSearchQuery(e.target.value);
          }}
        />
        <IconButton>
          <SearchIcon style={{ fill: "blue" }} />
        </IconButton>
      </form>
      <div>{searchQuery}</div>
      {data.data.map((data) => (
        <div>
          <img src={data.img} alt="" />
        </div>
      ))}
    </div>
  );
}
