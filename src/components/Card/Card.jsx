import React from "react";
import styled from "styled-components";

const Card = ({ email, name, imgSource }) => {
  return (
    <CardContainer>
      <img alt={name} src={imgSource} />
      <h2>{name}</h2>
      <p>{email}</p>
    </CardContainer>
  );
};

export default Card;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #95dada;
  border: 1px solid grey;
  border-radius: 5px;
  padding: 25px;
  cursor: pointer;
  -moz-osx-font-smoothing: grayscale;
  backface-visibility: hidden;
  transform: translateZ(0);
  transition: transform 0.25s ease-out;

  :hover {
    transform: scale(1.05);
    background-color: #f0f728;
  }
`;