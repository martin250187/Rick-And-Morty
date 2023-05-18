import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./views/About/About.jsx";
import Detail from "./components/Detail/Detail";
import { useState } from "react";
import axios from "axios";
import { Routes, Route } from "react-router-dom";

function App() {
  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (!characters.find((char) => char.id === data.id)) {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          }
        } else {
          alert(`¡Ya existe el personaje con el ID ${id}!`);
        }
      })
      .catch(() => window.alert("No hay personaje con este ID!"));
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };

  const [characters, setCharacters] = useState([]);
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route path="/home" element={<Cards characters={characters} onClose={onClose} />} />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />

      </Routes>
    </div>
  );
}

export default App;
