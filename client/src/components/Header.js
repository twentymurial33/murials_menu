import React from "react";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";
import "../App.css";

const Container = styled.header`
  h1 {
    font-size: 1.5em;
    text-align: center;
  }
`;

function Header() {
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <h1>Murial's Restaurant</h1>
      </Container>
    </AppBar>
  );
}

export default Header;
