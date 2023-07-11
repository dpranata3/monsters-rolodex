import { ChangeEvent } from "react";
import styled from "styled-components";
interface ISearchBoxProps {
  placeholder?: string;
  onSearchChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const searchBox = ({ onSearchChange, placeholder }: ISearchBoxProps) => {
  return (
    <Container
      id="search-box"
      className="search-box"
      type="text"
      placeholder={placeholder}
      onChange={onSearchChange}
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