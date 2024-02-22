/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import { getNote } from "../utils/data";
import { getNote } from "../utils/api";

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

  const formattedDate = new Date(note.data.createdAt).toLocaleDateString(
    "id-ID",
    {
      weekday: "long", //
      day: "numeric", //
      month: "long",
      year: "numeric",
    }
  );

  return (
    <div className="note-body">
      <h2 className="text-3xl font-bold text-black">{note.data.title}</h2>
      <p className="text-sm pb-5">{formattedDate}</p>
      <p>{note.data.body}</p>
    </div>
  );
}

export default DetailPage;
