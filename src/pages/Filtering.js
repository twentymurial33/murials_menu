import React from "react";
import axios from "axios";
import { useQuery } from "react-query";
import Layout from "../components/Layout";

const Filtering = () => {
  const { isLoading, data } = useQuery("posts", () => {
    return axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
  });

  if (isLoading) {
    return <h2>Loading....</h2>;
  }
  console.log(data);
  return (
    <>
      <Layout />
      <h2>Results</h2>
      {data?.data.map((post) => {
        return <div key={post.title}>{post.title}</div>;
      })}
    </>
  );
};
export default Filtering;

//   const Filtering = async () => {
//   const { data, status } = await axios.get(
//     "https://jsonplaceholder.typicode.com/posts?_limit=10"
//   );
//   console.log(data);

//   return (
//     <div>
//       <Layout />
//       <div>{status === "success" && <div>{data}</div>}</div>
//     </div>
//   );
// };

// export default Filtering;
