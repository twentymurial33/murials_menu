import React from "react";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";

function Header() {
  return (
    <AppBar position="static" style={{ height: "80px" }}>
      <Container maxWidth="xl">
        <h1 style={{ textAlign: "center" }}>Murial's Restaurant</h1>
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
`;
export default Header;
