import AddFood from "./pages/AddFood";
import Filtering from "./pages/Filtering";
import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Filtering />} />
          <Route path="/add" element={<AddFood />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
