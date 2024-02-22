// eslint-disable-next-line no-unused-vars
import React from "react";
// import { addNote } from "../utils/data";
import { addNote } from "../utils/api";
import NoteInput from "../components/noteInput";
import { useNavigate } from "react-router-dom";

function AddPage() {
  const navigate = useNavigate();
  async function onAddNoteHandler(note) {
    await addNote(note);
    navigate("/");
  }

  return (
    <section>
      <h2 className="text-3xl font-bold ">Tambah Catatan</h2>
      <NoteInput addNote={onAddNoteHandler} />
    </section>
  );
}

export default AddPage;
