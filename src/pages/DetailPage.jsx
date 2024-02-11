/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useParams } from "react-router-dom";
import { getNote } from "../utils/data";

function DetailPage() {
  const { id } = useParams();
  const [note, setNote] = useState(null);

  useEffect(() => {
    // Mengambil data catatan berdasarkan id
    const fetchNote = async () => {
      const fetchedNote = await getNote(id);
      setNote(fetchedNote);
    };

    fetchNote();
  }, [id]);

  if (!note) {
    return <div>Catatan tidak ditemukan</div>;
  }

  return (
    <div>
      <h2>{note.title}</h2>
      <p>{note.body}</p>
    </div>
  );
}

DetailPage.propTypes = {};

export default DetailPage;
