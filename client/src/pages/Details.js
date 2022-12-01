import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import styled from "styled-components";
import Dialog from "@mui/material/Dialog";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Details() {
  const navigate = useNavigate();
  const [search, setNewSearch] = useState("");
  const [counter, setCounter] = useState(0);
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

  const navigateToEdit = () => {
    navigate("/edit");
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

  const increaseCounter = () => {
    setCounter((count) => count + 1);
  };

  const decreaseCounter = () => {
    setCounter((count) => count - 1);
  };

  const reset = () => {
    setCounter(0);
  };

  return (
    <div>
      <Container>
        <input
          className="search"
          placeholder="Search..."
          value={search}
          onChange={handleSetSearch}
        />
        <ul className="list">
          {filteredMenuItems.map((data) => {
            return (
              <div key={data.id}>
                <img src={data.img} alt="images" />
                <h4>Food Calories</h4>
                <span className="counter__output">{counter}</span>
                <div className="btn__container">
                  <button className="control__btn" onClick={increaseCounter}>
                    +
                  </button>
                  <button className="control__btn" onClick={decreaseCounter}>
                    -
                  </button>
                  <button className="reset" onClick={reset}>
                    Reset
                  </button>
                </div>
                <Box
                  className="boxMenu"
                  lg={{
                    display: "flex",

                    flexWrap: "wrap",
                    "& > :not(style)": {
                      m: 1,
                      width: 128,
                      height: 128,
                    },
                  }}
                >
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
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
                    variant="outlined"
                    onClick={navigateToEdit}
                  >
                    <EditIcon />
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
  input{
  font-size: 18px;
  padding:10px;
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
`;

export default Details;
