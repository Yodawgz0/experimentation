// Import the required components and hooks from React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FormSearch from "./pages/FormSearch";
import "./styles.css";
import React from "react";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<FormSearch />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
