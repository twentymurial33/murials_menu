import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import ImageButtonPage from "./ImageButtonPage";
import Layout from "../components/Layout";

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
      <Box
        sx={{
          display: "flex",
          minWidth: 300,
          width: "100%",
          paddingTop: "160px",
        }}
      >
        <ImageButtonPage />
        <button
          style={{
            display: "inline-block",
            padding: "10px",
            marginLeft: "30px",
            fontSize: 18,
            borderRadius: 6,
            background: "pink",
            cursor: "pointer",
          }}
          onClick={() => trackEventAndStartTour(setShowTour)}
        >
          Start Product Tour
        </button>
        {showTour && (
          <ProductTourComponent
            steps={productTourSteps}
            onFinish={() => setShowTour(false)}
          />
        )}
      </Box>
    </>
  );
}

function runCommandBar() {
  window.CommandBar.boot();
}
