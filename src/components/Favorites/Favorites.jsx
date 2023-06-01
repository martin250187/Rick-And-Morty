import Card from "../Card/Card";
import style from "./Favorites.module.css";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filterCards, orderCards } from "../../redux/actions";

const Favorites = (/*{ myFavorites }*/) => {
  const favorites = useSelector((state) => state.myFavorites);

  const dispatch = useDispatch();
  const [aux, setAux] = useState(false);

  const handleOrder = (event) => {
    dispatch(orderCards(event.target.value));
    setAux(!aux);
  };
  const handleFilter = (event) => {
    dispatch(filterCards(event.target.value));
  };

  return (
    <div className={style.container}>
      <div className={style.containerBtn}>
        <select onChange={handleOrder}>
          <option value="A">Ascendente</option>
          <option value="D">Descendente</option>
        </select>
        <select onChange={handleFilter}>
          <option value="All">All</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
      {favorites.map(({ id, name, status, species, gender, origin, image }) => (
        <Card
          id={id}
          key={id}
          name={name}
          status={status}
          species={species}
          gender={gender}
          origin={origin}
          image={image}
        />
      ))}
    </div>
  );
};
/*
const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};*/
//export default connect(mapStateToProps, null)(Favorites);
export default Favorites;
