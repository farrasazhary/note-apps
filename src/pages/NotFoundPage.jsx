/* eslint-disable no-unused-vars */
import React from "react";
import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <p className="text-center">
        Maaf, halaman yang Anda cari tidak ditemukan.
      </p>
      <p className="text-center">
        Kembali ke{" "}
        <Link to="/" className="text-orange-600">
          beranda
        </Link>
        .
      </p>
    </div>
  );
}

export default NotFoundPage;
