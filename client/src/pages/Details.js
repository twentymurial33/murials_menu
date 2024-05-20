import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { useState } from "react";
import { Image } from "cloudinary-react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Layout from "../components/Layout";
import styled from "styled-components";
import { StyledContainer } from "./style";
import Dialog from "@mui/material/Dialog";
import Divider from "@mui/material/Divider";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import "../index.css";

function Details() {
  const navigate = useNavigate();
  const params = new URLSearchParams(window.location.search);
  const [search, setNewSearch] = useState(params.get("q"));
  const [open, setOpen] = useState(false);
  const { isLoading, data, error } = useQuery(["posts"], () =>
    axios(`${process.env.REACT_APP_API_URL}/menu_items`)
  );
  console.log(`${process.env.REACT_APP_API_URL}`);
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  console.log(data);

  const handleSetSearch = (e) => {
    setNewSearch(e.target.value);
  };

  const filteredMenuItems = !search
    ? data.data
    : data.data.filter((data) => {
        console.log(data.title);
        return data.title.toLowerCase().includes(search.toLowerCase());
      });

  const generateImageURL = (img) => {
    return (
      "https://res.cloudinary.com/dac1at79b/image/upload/c_fill,w_700/" + img
    );
  };

  const handleDelete = async (id) => {
    try {
      const foodItems = await axios.delete(
        `${process.env.REACT_APP_API_URL}/food/)` + id
      );
      console.log(foodItems);
    } catch (error) {
      console.error(error);
    }
  };

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
    <Layout>
      <Container>
        <ul className="list">
          {filteredMenuItems.map((data) => {
            return (
              <div key={data.id} style={{ display: "flex", margin: "20px" }}>
                <Image src={generateImageURL(data.img)} alt="cloudinary" />
                <Box
                  className="boxMenu"
                  lg={{
                    display: "flex",
                    "& > :not(style)": {
                      m: 1,
                      width: 100,
                      background: "#cfd4d1",
                      height: 100,
                    },
                  }}
                >
                  <h1 style={{ color: "black", textAlign: "center" }}>
                    {data.title}
                  </h1>
                  <p style={{ padding: "30px", color: "black" }}>{data.text}</p>{" "}
                  <button
                    className="deleteBtn"
                    variant="outlined"
                    onClick={handleClickOpen}
                    style={{ color: "white" }}
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
    </Layout>
  );
}

const Container = styled.div`
  display: grid;
  column-gap: 4px;
  padding-top: 90px;

  input {
    padding: 25px;
    width: 400px;
    margin-left: 20%;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    font-size: 14px;
    position: relative;
    background: #ffddf4;
    border-radius: 20px;
  }

  button {
    align-items: center;
    justify-content: center;
    border-radius: 4;
    elevation: 3;
    margin-top: 200px;
    width: 150px;
    padding: 15px;
    margin: 40px;
  }

  Box {
    margin-top: 60px;
  }
`;

export default Details;
