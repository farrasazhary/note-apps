/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import { Link } from "react-router-dom";

function NoteItemBody({ id, title, body, createdAt, archived }) {
  const formattedDate = new Date(createdAt).toLocaleDateString("id-ID", {
    weekday: "long", //
    day: "numeric", //
    month: "numeric",
    year: "numeric",
  });

  const archivedValue = archived !== undefined ? archived : false;
  return (
    <div className="contact-item__body">
      <Link to={`/notes/${id}`} className="contact-item__title">
        <h3>{title}</h3>
      </Link>
      <p className="contact-item__createdAt">{formattedDate}</p>
      <p className="contact-item__username">{body}</p>
      <p className="contact-item__archived">
        Archived: {archivedValue.toString()}
      </p>
    </div>
  );
}

export default NoteItemBody;