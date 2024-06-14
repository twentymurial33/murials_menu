import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Layout from "../components/Layout";
import { useState, useEffect } from "react";
import ImageButtonPage from "./ImageButtonPage";
import Link from "@mui/material/Link";

const productTourSteps = [
  {
    title: "Welcome to Our Add Food Page",
    content: "Let's have you add menu items!",
    target: "/add",
  },
  {
    title: "Details Feature",
    content: "Delicate yet , robust feature I developed!",
    target: "/details",
  },
];

function trackEventAndStartTour(setShowTour) {
  window.CommandBar.trackEvent("product_tour_started", {});
  setShowTour(true);
}

function ProductTourComponent({ steps }) {
  return (
    <div>
      <div>
        {steps.map((step, index) => (
          <div key={index}>
            <h3>{step.title}</h3>
            <p>{step.content}</p>
            <Link to={step.target}>Continue to Pages</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Landing() {
  const [showTour, setShowTour] = useState(false);

  useEffect(() => {
    runCommandBar();
  }, []);
  return (
    <>
      <Layout />

      <ImageButtonPage />
    </>
  );
}
function runCommandBar() {
  window.CommandBar.boot();
}

const Image = styled("span")(({ theme }) => ({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.common.white,
}));

const Button = styled(ButtonBase)(({ theme }) => ({
  backgroundColor: "white",
  borderRadius: "10px",
  border: "none",
  color: "black",
  padding: "20px 22px",
  textAlign: "center",
  fontSize: "12px",
}));

const ImageButton = styled(ButtonBase)(({ theme }) => ({
  position: "relative",
  height: 400,
  [theme.breakpoints.down("sm")]: {
    width: "100% !important",
    height: 100,
  },
  "&:hover, &.Mui-focusVisible": {
    zIndex: 1,
    "& .MuiImageBackdrop-root": {
      opacity: 0.15,
    },
    "& .MuiImageMarked-root": {
      opacity: 0,
    },
    "& .MuiTypography-root": {
      border: "4px solid currentColor",
    },
  },
}));

const ImageSrc = styled("span")({
  position: "absolute",
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: "cover",
  backgroundPosition: "center 40%",
});
