import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import Layout from "../components/Layout";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import "../index.css";

//Search Component- Read in CRUD

function Filtering() {
  const [search, setNewSearch] = useState("");
  const { isLoading, data, error } = useQuery(["posts"], () =>
    axios("http://localhost:5000/menu_items")
  );
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  console.log(data);

  const handleSetSearch = (e) => {
    setNewSearch(e.target.value);
  };

  const filteredMenuItems = !search
    ? data.data
    : data.data.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
      );

  return (
    <div className="app">
      <Layout />
      <input
        className="search"
        placeholder="Search..."
        value={search}
        onChange={handleSetSearch}
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue", marginTop: "20px" }} />
      </IconButton>
      <ul className="list">
        {filteredMenuItems.map((data) => {
          return (
            <p key={data.id}>
              <img src={data.img} alt="images"></img>
            </p>
          );
        })}
      </ul>
    </div>
  );
}
export default Filtering;
