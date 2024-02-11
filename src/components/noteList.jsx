/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItem from "./noteItem";

function NoteList({ notes, onDelete }) {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem key={note.id} onDelete={onDelete} {...note} />
        ))
      ) : (
        <p>Tidak ada catatan.</p>
      )}
    </div>
  );
}

export default NoteList;
