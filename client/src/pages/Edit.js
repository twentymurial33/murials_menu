import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

function Edit() {
  const navigate = useNavigate();
  const [editFood, setEditFood] = useState({
    foodName: "",
    foodAuthor: "",
    img: "",
  });

  useEffect(() => {
    const editFoodId = async () => {
      const response = await fetch("http://localhost:5000/food");
      const result = {
        data: null,
        error: null,
      };
      if (response.ok) {
        result.data = await response.json();
      } else {
        result.error = await response.text();
      }
      return result;
      console.log(response);
    };
    editFoodId();
  }, []);

  const onInputChange = (e) => {
    setEditFood({ ...editFood, [e.target.name]: e.target.value });
  };

  const FormHandle = (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/food", {
      method: 'POST',
      body: JSON.stringify(editFood),
      Content-Type: 'application/json',
    });
      const result = {
        data: null,
        error: null,
      };
      if (response.ok) {
        result.data = await response.json();
      } else {
        result.error = await response.text();
      }
      return result;
    console.log(res);
  };

  const navigateToEdit = () => {
    navigate("/details");
  };

  return (
    <div>
      <Container>
        <h1>Updated Food Items!</h1>
        <div>
          <form onSubmit={FormHandle}>
            <div>
              <label>Food Name</label>
              <input
                type="text"
                name="foodName"
                value={editFood.foodName}
                onChange={onInputChange}
              />
            </div>
            <div>
              <label>Food Author</label>
              <input
                type="text"
                name="foodAuthor"
                value={editFood.foodAuthor}
                onChange={onInputChange}
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
              <Button
                variant="contained"
                type="submit"
                onClick={navigateToEdit}
              >
                Return To Details Page
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
