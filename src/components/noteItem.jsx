/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import NoteItemBody from "./noteItemBody";
import DeleteButton from "./deleteButton";

function NoteItem({ title, body, createdAt, id, onDelete, archived }) {
  return (
    <div className="contact-item">
      <NoteItemBody
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
      />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

export default NoteItem;
