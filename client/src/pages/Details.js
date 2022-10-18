import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import styled from "styled-components";
import "../index.css";

function Details() {
  //change the response value to list in DB
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
  function deleteFood(title) {
    const newData = data.data.filter((data) => data.title !== title);
    console.log(newData);
  }
  return (
    <div>
      <Container>
        <input
          className="search"
          placeholder="Search..."
          value={search}
          onChange={handleSetSearch}
        />
        <ul className="list">
          {filteredMenuItems.map((data) => {
            return (
              <p key={data.id}>
                <img src={data.img} alt="images" />
                <Box
                  lg={{
                    display: "flex",
                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 128,
                      height: 128,
                    },
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>{" "}
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                    onClick={() => deleteFood(data.title)}
                  >
                    Delete
                  </Button>
                </Box>
              </p>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

const Container = styled.div`
  input{
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

  
`;

export default Details;
