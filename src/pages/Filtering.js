import axios from "axios";
import { useQuery } from "react-query";

export default function App() {
  const { isLoading, data, error } = useQuery(["posts"], () =>
    axios("https://demo5940257.mockable.io/menu_items")
  );
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  console.log(data);
  // return <div>
  return (
    <div>
      {data.data.map((data) => (
        <div>
          {data.title}||
          {data.author}
          <img src={data.img} alt="" />
        </div>
      ))}
    </div>
  );
}
