import React from "react";

const cardList = ({ monsters }) => {
  return (
    <div>
      {monsters.map((monster) => {
        return <h1 key={monster.id}> {monster.name}</h1>;
      })}
    </div>
  );
};

export default cardList;
