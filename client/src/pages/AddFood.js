import axios from "axios";
import { useQuery } from "react-query";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Layout from "../components/Layout";
import Paper from "@mui/material/Paper";
// import styled from "styled-components";
import "../index.css";

function AddFood({ feed }) {
  const { isLoading, data, error } = useQuery(["food"], () =>
    axios("http://localhost:3000/api/food")
  );
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  console.log(data);

  return (
    <div>
      <Layout />
      <Container>
        <ul className="list">
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
              <Paper />
            </Box>
          </p>
          );
        </ul>
      </Container>
    </div>
  );
}

export default AddFood;
