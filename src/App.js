import { useState, useEffect } from 'react';
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
      <SearchBox onChangeSearch={(value) => onChangeSearch(value)} />
      <CardList monsters={filteredList} />
    </div>
  );
}

export default App;
