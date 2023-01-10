import Landing from "./pages/Landing";
import Details from "./pages/Details";
import AddFood from "./pages/AddFood";
import Edit from "./pages/Edit";
import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

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
            <Route exact path="/edit/:id" element={<Edit />} />
          </Routes>
        </BrowserRouter>
      </QueryClientProvider>
    </>
  );
}

export default App;
