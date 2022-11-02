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
      <Button variant="contained" onClick={handleSubmit}>
        Go
      </Button>
      <Form>
        <form onSubmit={handleChange}>
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
          <input type="submit" value="Submit" />
          <input type="submit" value="Error" />
        </form>
      </Form>
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
  input{
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: white;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: black;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
  }

form{
  display: block;
    width: 100%;
    padding: .5rem .8rem .5rem .8rem;
    margin: .9vw 0 ;
    border:0;
    border-radius: 5px;
    font-size: 20px;
}

  
`;

export default AddFood;
