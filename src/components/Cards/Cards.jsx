import React from "react";
import Card from "../Card/Card";
import styled from "./Cards.module.css"

const Cards = (props) => {
  return (
    <div className={styled.container}>
      {props.characters.map((element) => {
        return (
          <Card
            onClose={element.onClose}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
          />
        );
      })}
    </div>
  );
};

export default Cards;
