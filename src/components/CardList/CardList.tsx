import React from "react";
import styled from "styled-components";

import Card from "../Card/Card";
import { Monster } from "../../utils/types";

const cardList = ({ monsters }: { monsters: Array<Monster> }) => {
  return (
    <CardListMain>
      {monsters.map((monster: Monster) => {
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
