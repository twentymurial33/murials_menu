import React from "react";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";

function Header() {
  return (
    <AppBar style={{ height: "90px", backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <h1 className="u-text--center">
          <a href="/">Murial's Restaurant</a>
        </h1>
        <div>
          <button
            variant="outline"
            style={{
              borderRadius: "40px",
              padding: "30px",
              backgroundColor: "hotpink",
            }}
          >
            <a href="/add"> + </a>
          </button>
        </div>
      </Container>
    </AppBar>
  );
}

const Container = styled.div`
  display: flex;

  h1 {
    font-size: 1.5em;
    text-align: center;
    color: white;
    margin-right: 40px;
    margin-left: 560px;
  }

  a {
    color: white;
  }
`;

export default Header;
