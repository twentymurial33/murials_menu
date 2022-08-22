import React from "react";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import "../App.css";

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
