// eslint-disable-next-line no-unused-vars
import React from "react";
import { addNote } from "../utils/data";
import NoteInput from "../components/noteInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  function onAddNoteHandler(note) {
    addNote(note);
    navigate("/");
  }

  return (
    <section>
      <h2 className="text-3xl font-bold text-black">Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
