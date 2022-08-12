import axios from "axios";
import { useQuery } from "react-query";

export default function App() {
  const { isLoading, data, error } = useQuery(["posts"], () =>
    axios("https://jsonplaceholder.typicode.com/posts")
  );
  if (error) return <h2>Error </h2>;
  if (isLoading) return <h2> isLoading </h2>;
  console.log(data);
  // return <div>
  return (
    <div>
      {data.data.map((data) => (
        <div>{data.title}</div>
      ))}
    </div>
  );
}
