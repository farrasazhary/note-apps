/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";
import { LocaleConsumer } from "../contexts/LocaleContext";

function DeleteButton({ id, onDelete }) {
  return (
    <LocaleConsumer>
      {({ locale }) => {
        return (
          <button className="contact-item__delete" onClick={() => onDelete(id)}>
            {locale === "id" ? "Hapus" : "Delete"}
          </button>
        );
      }}
    </LocaleConsumer>
  );
}

DeleteButton.propTypes = {
  id: PropTypes.string.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default DeleteButton;
