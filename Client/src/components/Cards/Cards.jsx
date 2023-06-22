import React from "react";
import Card from "../Card/Card";
import styled from "./Cards.module.css";

const Cards = ({characters, onClose})=> {
  return (
    <div className={styled.container}>
      {characters.map((element) => {
        return (
          <Card
            key={element.id}
            id={element.id}
            name={element.name}
            status={element.status}
            species={element.species}
            gender={element.gender}
            origin={element.origin.name}
            image={element.image}
            onClose={onClose}
          />
        );
      })}
    </div>
  );
};

export default Cards