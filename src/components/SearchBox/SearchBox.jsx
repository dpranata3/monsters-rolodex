import React from "react";

const searchBox = ({ onChangeSearch }) => {
  return (
    <input
      className="search-box"
      type="text"
      placeholder="search monsters"
      onChange={(event) => onChangeSearch(event.target.value)}
    />
  );
};

export default searchBox;
