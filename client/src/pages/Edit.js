import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryAPI } from "../util/fetchFromAPI";

function Edit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [editFood, setEditFood] = useState({
    title: "",
    author: "",
    img: "",
  });

  useEffect(() => {
    const editFoodId = async () => {
      queryAPI({
        url: `http://localhost:5000/menu_items/${id}/edit`,
        onSuccess: (result) => toast.success(result.data, { timeout: 2000 }),
        onError: (result) => toast.error(result.error),
        method: "GET",
      });
    };
    const foodResult = editFoodId();
    console.log(foodResult);
  }, [id]);

  const onInputChange = (e) => {
    setEditFood({ ...editFood, [e.target.name]: e.target.value });
  };

  const FormHandle = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/food/${id}/edit`, {
      method: "PUT",
      body: JSON.stringify(editFood),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const result = {
      data: null,
      error: null,
    };
    if (response.ok) {
      result.data = await response.json();
      toast.success("Success!", { timeout: 2000 });
    } else {
      console.log(response);
      navigate("/details");
      result.error = await response.text();
      toast.error(`Food item not saved.  Error: ${result.error}`);
    }
    return result;
  };

  return (
    <>
      <Container>
        <h1>Updated Food Items!</h1>
        <div>
          <form onSubmit={FormHandle}>
            <div>
              <label>Food Title</label>
              <input
                type="text"
                name="title"
                value={editFood.title}
                onChange={onInputChange}
              />
            </div>
            <div>
              <label>Food Author</label>
              <input
                type="text"
                name="author"
                value={editFood.author}
                onChange={onInputChange}
              />
            </div>
            <div>
              <label>Food Image</label>
              <input
                type="text"
                name="img"
                value={editFood.img}
                onChange={onInputChange}
              />
            </div>
            <Button variant="contained" type="submit">
              Update Item
            </Button>
            <ToastContainer />
            <Button variant="outlined" onClick={navigate}>
              Back To Menu
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  label {
    color: black;
    font-weight: bold;
    display: block;
    width: 150px;
    float: left;
  }

  h1 {
    text-align: center;
    color: white;
    margin-bottom: 50px;
  }

  Button {
    display: block;
    box-sizing: border-box;
    border-radius: 4px;
    padding: 20px;
    justify-content: center;
    color: #fff;
    margin: 30px;
    cursor: pointer;
  }
  input {
    display: block;
    box-sizing: border-box;
    width: 20%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 28px 10px;
    margin-bottom: 5px;
    font-size: 14px;
  }
`;
export default Edit;
