const axios = require("axios");
const URL_BASE = "https://rickandmortyapi.com/api/character";

const getCharById = (req, res) => {
  const { id } = req.params;
  axios(`${URL_BASE}/${id}`)
    .then((response) => {
      const { name, status, species, type, gender, origin, image } =
        response.data;
      const character = {
        id,
        name,
        status,
        species,
        type,
        gender,
        origin,
        image,
      };
      return character.name
        ? res.status(200).json(character)
        : res.status(404).send("Character not found");
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
};

module.exports = getCharById;
