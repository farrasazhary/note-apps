/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function NoteItemBody({ id, title, body, createdAt, archived }) {
  const formattedDate = new Date(createdAt).toLocaleDateString("id-ID", {
    weekday: "long", //
    day: "numeric", //
    month: "numeric",
    year: "numeric",
  });

  // const archivedValue = archived !== undefined ? archived : false;
  return (
    <div className="contact-item__body">
      <Link
        to={`/notes/${id}`}
        className="text-3xl font-bold text-black hover:text-orange-600"
      >
        <h3>{title}</h3>
      </Link>
      <p className="contact-item__createdAt">{formattedDate}</p>
      <p className="contact-item__username">{body}</p>
      {/* <p className="contact-item__archived">
        Archived: {archivedValue.toString()}
      </p> */}
    </div>
  );
}

NoteItemBody.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItemBody;
