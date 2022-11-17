import React from "react";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Add from "../pages/AddFood";
import Details from "../pages/Details";
import Home from "../pages/Landing";

function Header() {
  return (
    <AppBar style={{ height: "90px", backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <h1 className="u-text--center">Murial's Restaurant</h1>
        <section>
          <Link style={{ color: "white", fontSize: "15px" }} to="/home">
            Landing |
          </Link>
          <Link style={{ color: "white", fontSize: "15px" }} to="/add">
            AddFood |
          </Link>
          <Link style={{ color: "white", fontSize: "15px" }} to="/details">
            Details |
          </Link>
        </section>
      </Container>
    </AppBar>
  );
}

const Container = styled.div`
  h1 {
    font-size: 1.5em;
    text-align: center;
    color: white;
  }
  section {
    backgroundcolor: white;
    text-align: center;
    align: center;
  }
`;
export default Header;
