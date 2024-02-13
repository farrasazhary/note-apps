/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import NoteItem from "./noteItem";

function NoteList({ notes, onDelete, onArchive }) {
  return (
    <div className="note-list">
      {notes.length > 0 ? (
        notes.map((note) => (
          <NoteItem
            key={note.id}
            onDelete={onDelete}
            onArchive={onArchive}
            {...note}
          />
        ))
      ) : (
        <p>Tidak ada catatan.</p>
      )}
    </div>
  );
}

NoteList.propTypes = {
  notes: PropTypes.arrayOf(PropTypes.object).isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteList;
