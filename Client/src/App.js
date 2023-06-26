import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Form from "./components/Form/Form";
import About from "./views/About/About.jsx";
import Detail from "./components/Detail/Detail";
import Favorites from "./components/Favorites/Favorites";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
  const { pathname } = useLocation();

  function onSearch(id) {
    axios(`http://localhost:3001/rickandmorty/character/${id}`)
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
    setCharacters(characters.filter((char) => char.id != id));
  };

  const [characters, setCharacters] = useState([]);

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  function login(userData) {
    const { email, password } = userData;
    const URL = "http://localhost:3001/rickandmorty/login/";
    axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
      const { access } = data;
      setAccess(access);
      access && navigate("/home");
    });
  }

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  return (
    <div className="App">
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/favorites" element={<Favorites />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
