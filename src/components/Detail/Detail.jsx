import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import style from "./Detail.module.css";
import axios from "axios";

const Detail = () => {
  const { id } = useParams(); //HOOKS
  //Devuelve un objeto con las propiedades y el valor de los segmentos dinamicos de la URL

  const [character, setCharacter] = useState({});
  //Variante del componentDidMount
  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          alert("No hay personajes con ese ID");
        }
      })
.catch((error) => {
  console.log(error);
  alert('Algo Fallo!')
});
    return setCharacter({});
  }, [id]);

  return (
    <div className={style.container}>
      <div className={style.textContainer}>
      <h1 className={style.nameTitle}>{character.name}</h1>
      <h2>Species| {character.species}</h2>
      <h2>Origin| {character.origin?.name}</h2>
      <h2>Location| {character.location?.name}</h2>
      <h2>Status| {character.status}</h2>
      <h2>Gender| {character.gender}</h2>
      </div>
      <div className={style.imgContainer}>
      <img className={style.img} src={character.image} alt={"No tiene imagen"}></img>
      </div>
    </div>
  );
};
export default Detail;
