const axios = require("axios");
const URL_BASE = "https://rickandmortyapi.com/api/character";

const getCharById = (res, id) => {
  axios(`${URL_BASE}/${id}`)
    .then((response) => {
      const { name, status, species, type, gender, origin, image } =
        response.data;
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(
        JSON.stringify({
          id,
          name,
          status,
          species,
          type,
          gender,
          origin,
          image,
        })
      );
    })
    .catch((err) => {
      res.writeHead(500, { "Content-Type": "text/plain" });
      res.end(err.message);
    });
};

module.exports = getCharById;
