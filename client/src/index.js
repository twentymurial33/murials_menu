import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import { ReactQueryDevtools } from "react-query-devtools";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    {/* <ReactQueryDevtools initialIsOpen={false} /> */}
  </>
);
