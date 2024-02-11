// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";

function noteApp() {
  return (
    <div className="contact-app">
      <header className="contact-app__header">
        <h1>Notes App</h1>
        <Navigation />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default noteApp;
