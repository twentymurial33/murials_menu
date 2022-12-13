import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import styled from "styled-components";
import "../index.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";

function AddFood() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [img, setImg] = useState("");

  const schema = yup
    .object({
      title: yup.string().required(),
      img: yup.string().required(),
      author: yup.string().required(),
    })
    .required();
  const { register, handleSubmit, reset } = useForm({
    resolver: null,
  });

  const url = "http://localhost:5000/food";

  const mutation = useMutation({
    mutationFn: async (newFood) => {
      console.log(newFood);
      const config = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newFood),
      };
      const response = await fetch(url, config);
      if (response.ok) {
        console.log(response);
        return await response.json();
      }
    },
  });

  function handleForm(data) {
    console.log(data);
    mutation.mutate({
      title: data.title,
      img: data.img,
      author: data.author,
    });
  }

  useEffect(() => {
    reset();
  }, []);

  return (
    <div className="form">
      <Layout />
      <Form onSubmit={handleSubmit((data) => handleForm(data))}>
        <label>Food Title</label>
        <input
          type="text"
          name="title"
          {...register("title")}
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Food Author</label>
        <input
          type="text"
          {...register("author")}
          name="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <label>Food Image</label>
        <input
          type="text"
          {...register("img")}
          name="img"
          value={img}
          onChange={(e) => setImg(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>

        <Button type="button" onClick={() => reset()}>
          Reset
        </Button>
      </Form>
    </div>
  );
}

const Form = styled.form`
  input {
    display: block;
    box-sizing: border-box;
    width: 100%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 10px 15px;
    margin-bottom: 10px;
    font-size: 14px;
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
    font-size: 14px;
    font-weight: 200;
    text-align: center;
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
