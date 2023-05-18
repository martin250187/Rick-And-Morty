import { Link } from "react-router-dom";
import styled from "./Card.module.css";
const Card = (props) => {
  const nameStyle = {
    fontFamily: "rick_and_morty_font",
    fontSize: "40px",
  };

  return (
    <div className={styled.containerCard}>
      <button className={styled.button} onClick={() => props.onClose(props.id)}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className={styled.box} style={nameStyle}>
          {props.name}
        </h2>
      </Link>
      <h2 className={styled.box}>{props.status}</h2>
      <h2 className={styled.box}>{props.species}</h2>
      <h2 className={styled.box}>{props.gender}</h2>
      <h2 className={styled.box}>{props.origin}</h2>
      <img
        className={styled.img}
        src={props.image}
        alt="No se encuentra la imágen!"
      />
    </div>
  );
};

export default Card;
