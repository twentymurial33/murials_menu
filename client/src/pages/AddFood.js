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
    mutation.mutate({
      title: data.title,
      img: data.img,
      author: data.author,
    });
  }

  useEffect(() => {
    reset();
  }, [reset]);

  return (
    <div className="form">
      <Layout />
      <Form onSubmit={handleSubmit((data) => handleForm(data))}>
        <label>Food Title</label>
        <input type="text" {...register("title")} />
        <label>Food Author</label>
        <input type="text" {...register("author")} />
        <label>Food Image</label>
        <input type="text" {...register("img")} />
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
    background: #1e081a;
    width: 60%;
    border-radius: 4px;
    border: 1px solid white;
    padding: 28px 10px;
    margin-bottom: 0px;
    font-size: 14px;
  }
  h2 {
    font-size: 20px;
    color: white;
    margin-bottom: 30px;
    text-align: center;
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
    margin-top: 60px;
    color: white;
    font-size: 14px;
    font-weight: 200;
    text-align: center;
  }
`;

export default AddFood;
