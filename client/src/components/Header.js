import React from "react";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";

function Header() {
  return (
    <AppBar style={{ height: "90px", backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <h1 className="u-text--center">
          <a href="/">Murial's Menu</a>
        </h1>
        <div
          style={{
            position: "fixed",
            right: "20px",
            bottom: "20px",
          }}
        >
          <button>
            <a href="/add">+</a>
          </button>
        </div>
      </Container>
    </AppBar>
  );
}

const Container = styled.div`
  display: flex;
  h1 {
    font-size: 1em;
    padding: 10px 0;
    text-align: center;
    color: white;
    margin-right: 40px;
    margin-left: 560px;
  }
  a {
    color: white;
    text-decoration: none;
    zoom: 2;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    width: 70px;
    height: 70px;
    background-color: #ff00ff;
  }
`;

export default Header;
