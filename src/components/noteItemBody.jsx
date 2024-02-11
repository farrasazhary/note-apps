/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

function NoteItemBody({ title, body, createdAt, archived }) {
  const formattedDate = new Date(createdAt).toLocaleDateString("id-ID", {
    weekday: "long", //
    day: "numeric", //
    month: "numeric",
    year: "numeric",
  });

  const archivedValue = archived !== undefined ? archived : false;
  return (
    <div className="contact-item__body">
      <h3 className="contact-item__title">{title}</h3>
      <p className="contact-item__createdAt">{formattedDate}</p>
      <p className="contact-item__username">{body}</p>
      <p className="contact-item__archived">
        Archived: {archivedValue.toString()}
      </p>
    </div>
  );
}

export default NoteItemBody;
