import styled from "./Card.module.css";
const Card = (props) => {
  return (
    <div className={styled.containerCard}>
      <button className={styled.button} onClick={() => props.onClose(props.id)}>
        X
      </button>
      <h2 className={styled.box}>{props.name}</h2>
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
