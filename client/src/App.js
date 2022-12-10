import Landing from "./pages/Landing";
import Details from "./pages/Details";
import AddFood from "./pages/AddFood";
import EditForm from "./pages/EditForm";
import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query-devtools";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="/details" element={<Details />} />
            <Route exact path="/add" element={<AddFood />} />
            <Route exact path="/edit" element={<EditForm />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
    </>
  );
}

export default App;
