/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import NoteItemBody from "./noteItemBody";
import ArchiveButton from "./archiveButton";
import DeleteButton from "./deleteButton";

function NoteItem({ title, body, createdAt, id, onDelete,  onArchive, archived }) {
  return (
    <div className="contact-item shadow-2xl border-transparent">
      <NoteItemBody
        id={id}
        title={title}
        body={body}
        createdAt={createdAt}
        archived={archived}
      />
      <ArchiveButton id={id} onArchive={onArchive} archived={archived} />
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
  archived: PropTypes.bool.isRequired,
  onDelete: PropTypes.func.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default NoteItem;
