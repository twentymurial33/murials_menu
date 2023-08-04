import React, { useState, useEffect } from "react";
import { useMutation } from "react-query";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
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

  const url = `${process.env.REACT_APP_API_URL}/food/`;

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
        <div>
          <label>Title</label>
          <input type="text" {...register("title")} />
        </div>
        <div>
          <label>Author</label>
          <input type="text" {...register("author")} />
        </div>
        <div>
          <label>Image</label>
          <input type="text" {...register("img")} />
        </div>
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

const Form = styled.div`
  margin-top: 200px;
  margin-left: 200px;
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
  label {
    color: black;
    display: block;
    width: 150px;
    float: left;
  }
`;

export default AddFood;
