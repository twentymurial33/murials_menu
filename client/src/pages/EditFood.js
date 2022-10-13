import React from "react";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function EditFood() {
  const [anchorEl, setAnchorEl] =
    (React.useState < null) | (HTMLElement > null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? "demo-customized-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
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
      <Divider sx={{ my: 0.5 }} />
      <MenuItem onClick={handleClose} disableRipple>
        <ArchiveIcon />
        Archive
      </MenuItem>
      <MenuItem onClick={handleClose} disableRipple>
        <MoreHorizIcon />
        More
      </MenuItem>
    </div>
  );
}
export default EditFood;
