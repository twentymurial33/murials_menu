import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Details() {
  const navigate = useNavigate();
  const [search, setNewSearch] = useState("");
  const [open, setOpen] = useState(false);
  const { isLoading, data, error } = useQuery(["posts"], () =>
    axios("http://localhost:5000/menu_items")
  );
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  console.log(data);
  const handleSetSearch = (e) => {
    setNewSearch(e.target.value);
  };

  const filteredMenuItems = !search
    ? data.data
    : data.data.filter((data) =>
        data.title.toLowerCase().includes(search.toLowerCase())
      );

  const handleDelete = async (id) => {
    try {
      const foodItems = await axios.delete("http://localhost:5000/food/" + id);
      console.log(foodItems);
    } catch (error) {
      console.error(error);
    }
  };

  //using URL as state
  const navigateToEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  function handleCancel() {
    setOpen(false);
  }

  function handleConfirm(id) {
    setOpen(false);
    handleDelete(id);
  }

  return (
    <div>
      <Layout />
      <Container>
        <ul className="list">
          {filteredMenuItems.map((data) => {
            return (
              <div key={data.id} style={{ display: "flex" }}>
                <img src={data.img} alt="images" />
                <Box
                  className="boxMenu"
                  lg={{
                    display: "flex",
                    "& > :not(style)": {
                      m: 1,
                      width: 80,
                      background: "#cfd4d1",
                      height: 100,
                    },
                  }}
                >
                  <h1 style={{ color: "white" }}> {data.title}</h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  </p>{" "}
                  <button
                    className="deleteBtn"
                    variant="outlined"
                    onClick={handleClickOpen}
                  >
                    Delete
                  </button>
                  <button
                    className="editBtn"
                    variant="contained"
                    onClick={() => navigateToEdit(data.id)}
                  >
                    Modify
                  </button>
                  <Dialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <h1>Delete</h1>
                    <Divider />
                    <DialogContent dividers>
                      <Typography gutterBottom>
                        Are you sure you want to Delete this Item?
                      </Typography>
                    </DialogContent>
                    <Divider />
                    <DialogActions>
                      <Button variant="outlined" onClick={handleCancel}>
                        Clear
                      </Button>

                      <Button
                        variant="contained"
                        onClick={() => handleConfirm(data.id)}
                      >
                        Delete
                      </Button>
                    </DialogActions>
                  </Dialog>
                </Box>
              </div>
            );
          })}
        </ul>
      </Container>
    </div>
  );
}

const Container = styled.div`
  display: grid;
  column-gap: 5px;

  button {
    align-items: center;
    justify-content: center;
    border-radius: 4;
    elevation: 3;
  }
`;

export default Details;
