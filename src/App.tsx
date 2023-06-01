import { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";
import "./App.css";

import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

import { Monster } from "./utils/types";
import { getData } from "./utils/data.utils";

function App() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event:ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    }

    fetchUsers();

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
        <SearchBox
          onSearchChange={onSearchChange}
          placeholder="search monsters"
        />
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
