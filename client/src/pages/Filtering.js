import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import styled from "styled-components";
import Layout from "../components/Layout";
import "../index.css";

const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
  }
`;

const Image = styled.img`
  display: flex;
  margin-right: 10px;
`;

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
    <div>
      <Layout />
      <Input
        className="search"
        placeholder="Search..."
        value={search}
        onChange={handleSetSearch}
      />
      <ul className="list">
        {filteredMenuItems.map((data) => {
          return (
            <p key={data.id}>
              <Image src={data.img} alt="images" />
            </p>
          );
        })}
      </ul>
    </div>
  );
}
export default Filtering;
