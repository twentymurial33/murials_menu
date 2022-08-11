import { useQuery } from "react-query";
import axios from "axios";

async function fetchItems() {
  const result = await axios.get("https://demo5940257.mockable.io/menu_items");
  if (!result.ok) {
    throw new Error("Network response was not ok");
  }
  return result.json;
}

function AddMenu() {
  const { data, error, isError, isLoading } = useQuery("foodItems", () =>
    fetchItems()
  );
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error}</div>;
  }

  return (
    <div className="container">
      <h1>Food Items</h1>
      {data.map((menu, index) => {
        return <li key={index}>{menu.title}</li>;
      })}
    </div>
  );
}

export default AddMenu;
