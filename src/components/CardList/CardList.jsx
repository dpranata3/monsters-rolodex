import React from "react";
import styled from "styled-components";

import Card from "../Card/Card";

const cardList = ({ monsters }) => {
  return (
    <CardListMain>
      {monsters.map((monster) => {
        const { name, email, id } = monster;
        return (
          <Card
            key={id}
            email={email}
            imgSource={`https://robohash.org/${id}/set=3&size=180x180`}
            name={name}
          />
        );
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
