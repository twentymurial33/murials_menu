import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function AddFood() {
  const [food, setFood] = useState("");
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(watch("example"));
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

  function onSubmit(e) {
    e.preventDefault();
    mutation.mutate(url, { title: "title", img: "img", author: "author" });
  }

  function handleChange(e) {
    setFood(e.target.value);
    console.log(e);
  }
  return (
    <div className="form">
      <Layout />
      <Form onSubmit={onSubmit}>
        <h2>Add a New Food Item </h2>
        <label>Food Name</label>
        <input
          type="text"
          name="food"
          {...register("food")}
          onChange={handleChange}
          value={food}
        />
        {errors.foodName?.type === "required" && (
          <p role="alert">Food name is required</p>
        )}
        <label>Food Description</label>
        <textarea></textarea>
        <label>Food author</label>
        <select>
          <option value="murial">murial</option>
          <option value="brent">brent</option>
        </select>
        <Button variant="contained" onClick={handleSubmit}>
          Submit
        </Button>
        <Button variant="contained">Clear</Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 60px;
    padding-left: 50px;
  }
  h2 {
    font-size: 20px;
    color: black;
    margin-bottom: 30px;
  }

  textarea {
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    height: 100px;
    display: block;
  }

  Button {
    margin: 5px;
    background: #f1356d;
    color: #fff;
    border: 0;
    padding: 8px;
    border-radius: 8px;
    cursor: pointer;
  }

  select {
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    display: block;
  }

  Form {
    max-width: 400px;
    margin: 0 auto;
    text-align: center;
  }
`;

export default AddFood;
