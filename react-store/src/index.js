import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Profile from "./routes/Profile";
import Shop from "./routes/Shop";
import ProfileEdit from "./routes/ProfileEdit";

const root = ReactDOM.createRoot(document.getElementById("root"));
//The function uses the 'browser router' to organise the 'pages' accessed through 'links' in the navigation bar and one other on the profile page which alows editting of the user details
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/ProfileEdit" element={<ProfileEdit />} />
      <Route path="/Shop" element={<Shop />} />
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
