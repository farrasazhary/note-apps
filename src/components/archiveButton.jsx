/* eslint-disable no-unused-vars */
import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function ArchiveButton({ id, archived, onArchive }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <button
            className="contact-item__delete"
            onClick={() => onArchive(id)}
          >
            {archived
              ? locale === "en"
                ? "Unarchive"
                : "Buka Kembali"
              : locale === "en"
              ? "Archive"
              : "Arsipkan"}
          </button>
        );
      }}
    </LocaleConsumer>
  );
}

ArchiveButton.propTypes = {
  id: PropTypes.string.isRequired,
  archived: PropTypes.bool.isRequired,
  onArchive: PropTypes.func.isRequired,
};

export default ArchiveButton;
