import { Link } from "react-router-dom";
import styled from "./Card.module.css";
import { addFav, removeFav } from "../../redux/actions";
import { connect } from "react-redux";
import { useState, useEffect } from "react";

const Card = ({
  id,
  name,
  status,
  species,
  gender,
  origin,
  image,
  onClose,
  addFav,
  removeFav,
  myFavorites,
}) => {
  const nameStyle = {
    fontFamily: "rick_and_morty_font",
    fontSize: "40px",
  };

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav({ id, name, status, species, gender, origin, image, onClose });
    }
  };

  useEffect(() => {
    for (let i = 0; i < myFavorites.length; i++) {
      if (myFavorites[i].id === id) {
        setIsFav(true);
      }
    }
  }, [myFavorites]);

  return (
    <div className={styled.containerCard}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      {/*Verifica si la Card esta en Favoritos y oculta el boton close*/}
      {isFav ? null : (
        <button className={styled.button} onClick={() => onClose(id)}>
          X
        </button>
      )}

      <Link to={`/detail/${id}`}>
        <h2 className={styled.box} style={nameStyle}>
          {name}
        </h2>
      </Link>
      <h2 className={styled.box}>{status}</h2>
      <h2 className={styled.box}>{species}</h2>
      <h2 className={styled.box}>{gender}</h2>
      <h2 className={styled.box}>{origin}</h2>
      <img
        className={styled.img}
        src={image}
        alt="No se encuentra la imágen!"
      />
    </div>
  );
};

//SUBSCRIBE
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Card);
