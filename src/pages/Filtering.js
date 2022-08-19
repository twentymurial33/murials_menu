import axios from "axios";
import { useQuery } from "react-query";
import Layout from "../components/Layout";
import Button from "@mui/material/Button";
import "../index.css";

export default function App() {
  const { isLoading, data, error } = useQuery(["posts"], () =>
    axios("https://demo5940257.mockable.io/menu_items")
  );
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  console.log(data);

  function handleClick() {}

  return (
    <div>
      <Layout />
      <Button onClick={handleClick} style={{ marginLeft: "400px" }}>
        <input className="search" placeholder="Search" type="text" />
      </Button>

      {data.data.map((data) => (
        <div>
          {/* {data.title} */}

          <img src={data.img} alt="" />
        </div>
      ))}
    </div>
  );
}
