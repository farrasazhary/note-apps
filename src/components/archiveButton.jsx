/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { archiveNote, unarchiveNote } from "../utils/data";

function ArchiveButton({ id, archived }) {
  const handleArchiveToggle = () => {
    if (archived) {
      unarchiveNote(id);
    } else {
      archiveNote(id);
    }
  };

  return (
    <button className="contact-item__delete" onClick={handleArchiveToggle}>
      {archived ? "Buka Kembali" : "Arsipkan"}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
};

export default ArchiveButton;
