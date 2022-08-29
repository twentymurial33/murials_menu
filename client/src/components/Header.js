import React from "react";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";
// import Container from "@mui/material/Container";
import "../App.css";

const Container = styled.h1`
 
  font-size: 1.5em;
  text-align: center;
  }
`;

// const Container = styled.container`
//   h1 {
//     font-size: 1.5em;
//     text-align: center;
//   }
// `;

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
