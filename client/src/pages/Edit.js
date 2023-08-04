import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { queryAPI } from "../util/fetchFromAPI";

const API_URL = process.env.REACT_APP_API_URL;

function Edit() {
  const navigate = useNavigate();
  const [data, dataSet] = useState("");
  const { id } = useParams();
  const [editFood, setEditFood] = useState({
    title: "",
    author: "",
    img: "",
  });

  useEffect(() => {
    const editFoodId = async () => {
      const foodResult = await queryAPI({
        url: `${API_URL}/menu_items/${id}`,
        onError: (result) => toast.error(result.error),
        method: "GET",
      });
      dataSet(foodResult);
      console.log(foodResult);
    };
    editFoodId();
  }, [id]);

  const onInputChange = (e) => {
    setEditFood({ ...editFood, [e.target.name]: e.target.value });
  };

  const FormHandle = async (e) => {
    e.preventDefault();
    const response = await fetch(`${API_URL}/food/${id}`, {
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

      result.error = await response.text();
      toast.error(`Food item not saved.  Error: ${result.error}`);
    }
    return result;
  };

  const handleNavigate = () => {
    navigate("/details");
  };
  return (
    <>
      <Layout />
      <Container>
        <div>
          <form onSubmit={FormHandle}>
            <div>
              <label>Title</label>
              <input
                type="text"
                name="title"
                value={editFood.title}
                onChange={onInputChange}
              />
              <h2>{data.title}</h2>
            </div>
            <div>
              <label>Author</label>
              <input
                type="text"
                name="author"
                value={editFood.author}
                onChange={onInputChange}
              />
              <h2>{data.author}</h2>
            </div>
            <div>
              <label>Image</label>
              <input
                type="text"
                name="img"
                value={editFood.img}
                onChange={onInputChange}
              />
            </div>
            <div>
              <img src={data.img} alt="editimage" />
            </div>
            <Button variant="contained" type="submit">
              Update Item
            </Button>
            {/* <ToastContainer /> */}
            <Button variant="outlined" onClick={handleNavigate}>
              Back To Menu
            </Button>
          </form>
        </div>
      </Container>
    </>
  );
}

const Container = styled.div`
  margin-top: 200px;
  margin-left: 200px;
  label {
    color: black;
    display: block;
    width: 150px;
    float: left;
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

  p {
    color: white;
  }
`;
export default Edit;
