import Layout from "../components/Layout";
import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import "../App.css";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const cards = [1, 2, 3, 4, 5, 6];

const theme = createTheme();

function Listing() {
  return (
    <>
      <Layout />
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <main>
          <Container
            sx={{ py: 8 }}
            maxWidth="md"
            style={{ backgroundColor: "black" }}
          >
            <Grid container spacing={4}>
              {cards.map((card) => (
                <Grid item key={card} xs={12} sm={6} md={4}>
                  <Card
                    sx={{
                      height: "100%",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      component="img"
                      sx={{
                        pt: "20.25%",
                      }}
                      image="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
                      alt="random"
                    />
                    <CardContent sx={{ flexGrow: 1 }}>
                      <Button variant="contained" color="success">
                        Click to Order
                      </Button>
                    </CardContent>
                    <CardActions></CardActions>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        </main>
      </ThemeProvider>
    </>
  );
}
export default Listing;
