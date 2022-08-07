import * as React from "react";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";

export default function Main() {
  return (
    <div>
      <Card sx={{ minWidth: 275, minHeight: 300 }}>
        <Button variant="contained" color="success">
          Success
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Card>
    </div>
  );
}
