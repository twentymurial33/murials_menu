import React, { useState } from "react";
import { useMutation } from "react-query";
import axios from "axios";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Input from "@mui/material/Input";

import InputLabel from "@mui/material/InputLabel";
import Fab from "@mui/material/Fab";
import Layout from "../components/Layout";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";

function AddFood() {
  const [food, setFood] = useState("");
  const url = "http://localhost:5000/food";

  //working with mutation but need to revisit - entirely not working
  const mutation = useMutation({
    mutationFn: (newFood) => {
      return axios
        .post(url, { title: "title", img: "img", author: "author" })
        .then((response) => {
          setFood(response.data);
        });
    },
  });

  //working with mutation but need to revisit - entirely not working
  function handleSubmit(e) {
    e.preventDefault();
    mutation.mutate(url, { title: "title", img: "img", author: "author" });
  }
  return (
    <div>
      <Layout />
      <Fab
        color="secondary"
        aria-label="add"
        onSubmit={handleSubmit}
        style={{ marginTop: "30px", marginBottom: "30px", marginRight: "30px" }}
      >
        Add
      </Fab>
      <Button variant="contained" onClick={handleSubmit}>
        Go
      </Button>
      <FormControl>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <InputLabel htmlFor="my-input">Email address</InputLabel>
        <Input id="my-input" aria-describedby="my-helper-text" />
      </FormControl>
      <TextField
        style={{
          backgroundColor: "white",
          width: "300px",
          height: "200px",
          marginTop: "30px",
        }}
      >
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
      </TextField>
    </div>
  );
}

export default AddFood;
