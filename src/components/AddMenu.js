import { useQuery } from "react-query";
import axios from "axios";

async function fetchItems() {
  const result = await axios.get("https://demo5940257.mockable.io/menu_items");
  return result.data;
}

function AddMenu() {
  const { data, error, isError, isLoading } = useQuery("foodItems", fetchItems);
  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    return <div>Error! {error.message}</div>;
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
