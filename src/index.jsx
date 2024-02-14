/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import NoteApp from "./components/noteApp";

//style
import "./styles/style.css";
import "./index.css";
import "./styles/responsive.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <NoteApp />
  </BrowserRouter>
);
