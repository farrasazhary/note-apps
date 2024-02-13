/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <button className="contact-item__delete" onClick={() => onArchive(id)}>
      {archived ? "Buka Kembali" : "Arsipkan"}
    </button>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
