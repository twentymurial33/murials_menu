import { styled } from "@mui/material/styles";
import ButtonBase from "@mui/material/ButtonBase";
import Layout from "../components/Layout";
import Link from "@mui/material/Link";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
// import { Link } from "react-router-dom";
//import ImageButtonPage from "./ImageButtonPage";

const images = [
  {
    url: "https://res.cloudinary.com/dac1at79b/image/upload/v1663773423/joseph-gonzalez-zcUgjyqEwe8-unsplash_nqplbi.jpg",
    title: "Breakfast",
    width: "50%",
  },
  {
    url: "https://res.cloudinary.com/dac1at79b/image/upload/v1664214354/lidye-1Shk_PkNkNw-unsplash_hbeq0v.jpg",
    title: "Lunch",
    width: "50%",
  },
  {
    url: "https://res.cloudinary.com/dac1at79b/image/upload/v1664214328/anna-tukhfatullina-food-photographer-stylist-Mzy-OjtCI70-unsplash_mq6vml.jpg",
    title: "Dinner",
    width: "50%",
  },
  {
    url: "https://res.cloudinary.com/dac1at79b/image/upload/v1664214337/eiliv-aceron-ZuIDLSz3XLg-unsplash_vntgpn.jpg",
    title: "Dessert",
    width: "50%",
  },
];

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
        {images.map((image) => (
          <ImageButton
            key={image.title}
            style={{
              width: image.width,
            }}
          >
            <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
            <Image>
              <Button>
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
                <Link>
                  <a
                    href={`/Details?q=${image.title}`}
                    style={{ color: "black", textDecoration: "none" }}
                  >
                    Menu Item
                  </a>
                </Link>
              </Button>
            </Image>
          </ImageButton>
        ))}
      </Box>
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
