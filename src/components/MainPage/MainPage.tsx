import React, { useState, useEffect, ChangeEvent } from "react";
import styled from "styled-components";

import CardList from "../CardList/CardList";
import SearchBox from "../SearchBox/SearchBox";
import { Monster } from "../../utils/types";
import { getData } from "../../utils/data.utils";

const MainPage: React.FC = () => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [searchValue, setSearchValue] = useState("");

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSearchValue(event.target.value.toLocaleLowerCase());
  };

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        "https://jsonplaceholder.typicode.com/users"
      );
      setMonsters(users);
    };

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
    <Container>
      <TitleContainer>Monsters Rolodex</TitleContainer>
      <SearchBox
        onSearchChange={onSearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </Container>
  );
};

export default MainPage;

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
