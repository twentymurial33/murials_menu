import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import Layout from "../components/Layout";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import TextField from "@mui/material/TextField";
import "../index.css";

export default function App() {
  const SearchBar = ({ setSearchQuery }) => (
    <form>
      <TextField
        id="search-bar"
        className="text"
        onInput={(e) => {
          setSearchQuery(e.target.value);
        }}
        label="Search Food "
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
      <IconButton type="submit" aria-label="search">
        <SearchIcon style={{ fill: "blue" }} />
      </IconButton>
    </form>
  );

  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading, data, error } = useQuery(["posts"], () =>
    axios("https://demo5940257.mockable.io/menu_items")
  );
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  // console.log(data);

  const filtered = data.data.filter((data) => {
    return data.title === "Burger";
  });

  return (
    <div>
      <Layout />
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      {filtered.map((data) => {
        return (
          <div key={data.id}>
            <h2>name: {data.title}</h2>
            <img src={data.img} alt="" />
            {/* <h2>country: {employee.country}</h2> */}

            <hr />
          </div>
        );
      })}
    </div>
    //   {data.data.map((data) => (
    //     <div>
    //       <img src={data.img} alt="" />
    //     </div>
    //   ))}
    // </div>
  );
}
