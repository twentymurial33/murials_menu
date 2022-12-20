import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";

function Edit() {
  const [editFood, setEditFood] = useState({
    foodName: "",
    foodAuthor: "",
    img: "",
  });

  useEffect(() => {
    const editFoodId = async () => {
      const reqdata = await fetch("http://localhost:5000/food");
      const response = reqdata.json();
    };
    editFoodId();
  }, []);

  const onInputChange = (e) => {
    setEditFood({ ...editFood, [e.target.name]: e.target.value });
  };

  const FormHandle = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <Container>
        <h1>Updated Food Items!</h1>
        <div>
          <form onSubmit={(e) => FormHandle(e)}>
            <div>
              <label>Food Name</label>
              <input
                type="text"
                name="foodName"
                value={editFood.foodName}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label>Food Author</label>
              <input
                type="text"
                name="foodAuthor"
                value={editFood.foodAuthor}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div>
              <label>Food Image</label>
              <input
                type="text"
                name="img"
                value={editFood.img}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="container text-center">
              <Button variant="contained" type="submit">
                Updated Item
              </Button>
              <Button variant="contained" type="submit">
                Return To Home
              </Button>
            </div>
          </form>
        </div>
      </Container>
    </div>
  );
}

const Container = styled.div`
  input{
  font-size: 18px;
  padding:10px;
  margin: 10px;
  background: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
  }

`;
export default Edit;
