/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./noteItemBody";
import ArchiveButton from "./archiveButton";
import DeleteButton from "./deleteButton";

function NoteItem({ title, body, createdAt, id, onDelete, archived }) {
  return (
    <div className="contact-item shadow-2xl border-transparent">
      <NoteItemBody
        id={id}
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
      />
      <ArchiveButton id={id} archived={archived} />
      <DeleteButton id={id} onDelete={onDelete} />
    </div>
  );
}

NoteItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)])
    .isRequired,
  onDelete: PropTypes.func.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default NoteItem;
