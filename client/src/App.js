import Landing from "./pages/Landing";
import Details from "./pages/Details";
import AddFood from "./pages/AddFood";
import EditFood from "./pages/EditFood";
import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/details" element={<Details />} />
          <Route exact path="/add" element={<AddFood />} />
          <Route exact path="/edit" element={<EditFood />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
