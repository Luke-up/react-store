import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./routes/Profile";
import Shop from "./routes/Shop";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Shop" element={<Shop />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
