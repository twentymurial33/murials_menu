import React from "react";
import AppBar from "@mui/material/AppBar";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Header() {
  return (
    <AppBar style={{ height: "90px", backgroundColor: "black" }}>
      <Container maxWidth="xl">
        <h1 className="u-text--center">
          <a href="/">Murial's Restaurant</a>
        </h1>
        <section>
          <button
            style={{
              backgroundColor: "#de34eb",
              borderRadius: "100%",
              padding: "10px",
              margin: "0px 0px",
              bottom: "0px",
            }}
          >
            <a href="/add"> + </a>
          </button>
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
    color: #2c70de;
    text-align: center;
    align: center;
  }

  a {
    color: white;
  }
`;

export default Header;
