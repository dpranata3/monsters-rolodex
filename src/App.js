import { useState, useEffect } from 'react';
import styled from 'styled-components';
import './App.css';

import CardList from "./components/CardList/CardList";
import SearchBox from "./components/SearchBox/SearchBox";

function App() {
  const [monsters, setMonsters] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const onChangeSearch = (value) => {
    setSearchValue(value.toLocaleLowerCase());
  }

  const filteredList =  monsters.filter((monster) => {
    return monster.name.toLocaleLowerCase().includes(searchValue);
  });

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      .catch((errors) => console.error(errors));

    /** when component is unmounted */
    return () => setMonsters([]);
  }, []);

  return (
    <div className="App">
      <Container>
        <SearchBox onChangeSearch={(value) => onChangeSearch(value)} />
        <CardList monsters={filteredList} />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
`