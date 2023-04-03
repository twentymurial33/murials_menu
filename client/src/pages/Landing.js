import { createSearchParams, useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import ButtonBase from "@mui/material/ButtonBase";
import Layout from "../components/Layout";

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

export default function Landing() {
  const navigate = useNavigate();

  const openMenuItem = (q) => {
    navigate({
      pathname: `/Details`,
      search: createSearchParams({
        q: "lunch",
      }).toString(),
    });
  };

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
              <button onClick={openMenuItem}>Menu Item</button>
            </Image>
          </ImageButton>
        ))}
      </Box>
    </>
  );
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
