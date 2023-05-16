import "./App.css";
//import Card from './components/Card.jsx';
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
//import characters from "./data.js";
import { useState } from "react";
import axios from "axios";

function App() {
  const [characters, setCharacters] = useState([]);

  function onSearch(id) {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (!characters.find((char) => char.id === data.id)) {
          if (data.name) {
            setCharacters((oldChars) => [...oldChars, data]);
          } 
        }
        else {
          alert(`¡Ya existe el personaje con el ID ${id}!`);
         }
      }).catch(()=> window.alert('No hay personaje con este ID!'))
  }

  const onClose = (id) => {
    setCharacters(characters.filter((char) => char.id !== Number(id)));
  };
  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Cards characters={characters} onClose={onClose} />
    </div>
  );
}

export default App;
