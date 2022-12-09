import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import styled from "styled-components";
import "../index.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

function AddFood() {
  const [food, setFood] = useState("");
  const [data, setData] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImage] = useState("");

  const schema = yup
    .object({
      title: yup.string().required(),
      img: yup.string().required(),
      author: yup.string().required(),
    })
    .required();
  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const url = "http://localhost:5000/food";

  const mutation = useMutation({
    mutationFn: (newFood) => {
      return axios.post(url, newFood).then((response) => {
        setFood(response.data);
      });
    },
  });

  function handleForm(e) {
    mutation.mutate(url, { title: "title", img: "img", author: "author" });
  }

  return (
    <div className="form">
      <Layout />
      <Form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
        <label>Food Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Food Author</label>

        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <label>Food Type</label>
        <select {...register("author", { required: true })}>
          <option value="Breakfast">Breakfast</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
        </select>
        <label>Food Description</label>
        <textarea value={img} onChange={(e) => setImage(e.target.value)} />
        <Button
          variant="contained"
          onClick={() =>
            handleForm({ Title: title, Author: author, Image: img })
          }
        >
          Submit
        </Button>
        <p>{data}</p>
        <Button onClick={() => reset()}>Reset Button</Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  input {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 140px;
    padding-left: 50px;
  }
  h2 {
    font-size: 20px;
    color: white;
    margin-bottom: 30px;
    text-align: center;
  }

  textarea {
    padding: 6px 10px;
    margin: 10px 0;
    border: 1px solid #ddd;
    box-sizing: border-box;
    height: 140px;
    display: block;
  }

  Button {
    margin: 5px;
    background: #f1356d;
    color: #fff;
    border: 0;
    padding: 20px;
    border-radius: 10px;
    cursor: pointer;
  }
  label {
    line-height: 2;
    text-align: left;
    display: block;
    margin-bottom: 13px;
    margin-top: 20px;
    color: white;
    font-size: 18px;
    font-weight: 200;
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
