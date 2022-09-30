import Landing from "./pages/Landing";
import Details from "./pages/Details";
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
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
