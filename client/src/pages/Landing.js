import Box from "@mui/material/Box";
import ImageButtonPage from "./ImageButtonPage";
import Layout from "../components/Layout";

export default function Landing() {
  return (
    <>
      <Layout />
      <Box
        sx={{
          display: "flex",
          minWidth: 300,
          width: "100%",
          paddingTop: "160px",
        }}
      >
        <ImageButtonPage />
      </Box>
    </>
  );
}
