import styled from "styled-components";
import Button from "@mui/material/Button";

function Pets() {
  return (
    <div style={{ backgroundColor: "white", textAlign: "center" }}>
      <Form>
        <div>
          <h1>My Employee Profile</h1>
          <h2>VP of Marketing</h2>
        </div>
        <div>
          <img
            src="https://images.unsplash.com/photo-1526379879527-8559ecfcaec0?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="placeholder"
            width="50%"
          />
        </div>
        <Button variant="contained" type="submit">
          View More
        </Button>
      </Form>
    </div>
  );
}

const Form = styled.div`
  margin-top: 200px;
  margin-left: 200px;
  input {
    display: block;
    box-sizing: border-box;
    width: 30%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 30px 10px;
    margin-bottom: 5px;
    font-size: 14px;
  }

  Button {
    display: inline;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 10px;
    width: 150px;
    justify-content: center;
    color: #fff;
    margin: 60px;
    cursor: pointer;
  }
  label {
    color: black;
    display: block;
    width: 150px;
    float: left;
  }
`;

export default Pets;
