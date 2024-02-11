/* eslint-disable react/jsx-no-duplicate-props */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
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

NoteList.propTypes = {
  notes: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      createdAt: PropTypes.instanceOf(Date).isRequired,
      archived: PropTypes.bool.isRequired,
    })
  ).isRequired,
  onDelete: PropTypes.func.isRequired, // PropTypes untuk onDelete
};

export default NoteList;
