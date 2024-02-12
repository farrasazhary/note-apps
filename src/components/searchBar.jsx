/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";
import PropTypes from "prop-types";

function SearchBar({ keyword, keywordChange }) {
  return (
    <input
      className="search-bar p-2 rounded"
      type="text"
      placeholder="Cari berdasarkan judul"
      value={keyword}
      onChange={(event) => keywordChange(event.target.value)}
    />
  );
}

SearchBar.propType = {
  keyword: PropTypes.string.isRequired,
  keywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
