import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import styled from "styled-components";

function AddFood() {
  const [food, setFood] = useState("");
  const url = "http://localhost:5000/food";

  const mutation = useMutation({
    mutationFn: (newFood) => {
      return axios
        .post(url, { title: "title", img: "img", author: "author" })
        .then((response) => {
          setFood(response.data);
        });
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(url, { title: "title", img: "img", author: "author" });
  }

  function handleChange(e) {
    e.preventDefault();
  }
  return (
    <div className="form">
      <Layout />
      <h1>Add Food Items</h1>
      <Form onSubmit={handleChange}>
        <label>
          Food Name:
          <input type="text" name="name" />
        </label>
        <label>
          Food Author:
          <input type="text" name="name" />
        </label>
        <label>
          Food Image:
          <input type="text" name="name" />
        </label>
      </Form>
      <Button variant="contained" onClick={handleSubmit}>
        Submit
      </Button>
      <Button variant="contained">Clear</Button>
      <ul className="list">
        {Array.from(food).map((data) => {
          return (
            <>
              <p key={food.id}>
                <img src={food.img} alt="images" />
                <Box
                  lg={{
                    display: "flex",

                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 128,
                      height: 128,
                    },
                  }}
                  style={{
                    color: "white",
                    backgroundColor: "black",
                    width: "720px",
                  }}
                ></Box>
              </p>
            </>
          );
        })}
      </ul>
    </div>
  );
}

const Form = styled.form`
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    padding-left: 30px;
  }

  Button {
    margin: 5px;
  }

  Form {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
  }
`;

export default AddFood;
