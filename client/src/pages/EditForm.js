import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";

import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

export default function EditForm() {
  const [editing, setEditing] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  function isEditing() {
    console.log("edit mode activated");
    setEditing();
  }

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Typography component="h1" variant="h5">
            Edit
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <hr />
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Food Name"
              name="food"
              autoComplete="food"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="Author"
              label="Author"
              type="author"
              id="author"
              autoComplete="author"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              onClick
              sx={{ mt: 3, mb: 2 }}
            >
              Save
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
