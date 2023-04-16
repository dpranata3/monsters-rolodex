import React from "react";
import styled from "styled-components";

import Card from "../Card/Card";

const cardList = ({ monsters }) => {
  return (
    <CardListMain>
      {monsters.map((monster) => {
        return <Card key={monster.id} monster={monster} />;
      })}
    </CardListMain>
  );
};

export default cardList;

const CardListMain = styled.div`
  width: auto;
  margin: 30px auto;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 25px;
`;
