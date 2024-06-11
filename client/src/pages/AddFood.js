import React, { useEffect } from "react";
import { useMutation } from "react-query";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import { StyledAddFormContainer } from "./style";
import "../index.css";
import { useForm } from "react-hook-form";

function AddFood() {
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
    <>
      <div className="form">
        <Layout>
          <StyledAddFormContainer
            onSubmit={handleSubmit((data) => handleForm(data))}
          >
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
          </StyledAddFormContainer>
        </Layout>
      </div>
    </>
  );
}
export default AddFood;
