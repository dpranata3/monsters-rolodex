import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import "./App.css";

import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

import { Monster } from "./utils/types";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchValue, setSearchValue] = useState("");
  const onChangeSearch = (value: string) => {
    setSearchValue(value.toLocaleLowerCase());
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .catch((errors) => console.error(errors));

    return () => setMonsters([]);
  }, []);


  useEffect(() => {
    const filteredList = monsters.filter((monster: Monster) => {
      return monster.name.toLocaleLowerCase().includes(searchValue);
    });
    setFilteredMonsters(filteredList);
  }, [monsters, searchValue]);

  return (
    <div className="App">
      <Container>
        <TitleContainer>Monsters Rolodex</TitleContainer>
        <SearchBox onChangeSearch={(value: string) => onChangeSearch(value)} />
        <CardList monsters={filteredMonsters} />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
`;

const TitleContainer = styled.h1`
  color: #0ccac4;
  margin: 15px 0 30px 0;
  font-size: 56px;
  transition: 0.3s;
  :hover {
    color: #f0f728;
  } 
`;
