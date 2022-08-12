import Listing from "./pages/Listing";
import Filtering from "./pages/Filtering";
import React, { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Listing />} />
          <Route path="/filter" element={<Filtering />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
