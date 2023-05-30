import React from "react";
import styled from "styled-components";

const searchBox = ({ onChangeSearch }: { onChangeSearch: Function }) => {
  return (
    <Container
      className="search-box"
      type="text"
      placeholder="search monsters"
      onChange={(event) => onChangeSearch(event.target.value)}
    />
  );
};

export default searchBox;

const Container = styled.input`
  border-radius: 4;
  border: none;
  height: 44px;
  line-height: 30px;
  margin: auto;
  outline: none;
  padding: 10px;
  width: 150px;
`;