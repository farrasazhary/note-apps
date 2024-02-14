// eslint-disable-next-line no-unused-vars
import React from "react";
import { Route, Routes } from "react-router-dom";
import Navigation from "./navigation";
import HomePage from "../pages/HomePage";
import AddPage from "../pages/AddPage";
import DetailPage from "../pages/DetailPage";
import ArchivePage from "../pages/ArchivePage";
import NotFoundPage from "../pages/NotFoundPage";

function noteApp() {
  return (
    <div className="contact-app">
      <header className="">
        <Navigation className="mb-5" />
      </header>
      <main className="p-5">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/notes/new" element={<AddPage />} />
          <Route path="/notes/:id" element={<DetailPage />} />
          <Route path="/notes/archive" element={<ArchivePage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default noteApp;
