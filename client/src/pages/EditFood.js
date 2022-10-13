import React from "react";
import Layout from "../components/Layout";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function EditFood() {
  const handleClick = (event) => {};
  const handleClose = () => {};

  return (
    <div>
      <Layout />
      <Button
        id="demo-customized-button"
        aria-haspopup="true"
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
      >
        Options
      </Button>
      <MenuItem onClick={handleClose} disableRipple>
        <EditIcon />
        Edit
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <FileCopyIcon />
        Duplicate
      </MenuItem>
    </div>
  );
}
export default EditFood;
