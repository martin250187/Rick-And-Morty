import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Form from "./components/Form/Form";
import About from "./views/About/About.jsx";
import Detail from "./components/Detail/Detail";
import { useEffect, useState } from "react";
import axios from "axios";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

function App() {
const {pathname} = useLocation()

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

  const navigate = useNavigate();
  const [access, setAccess] = useState(false);
  const EMAIL = 'ejemplo@gmail.com';
  const PASSWORD = 'asd123';
  function login(userData) {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
       setAccess(true);
       navigate('/home');
    }
 }

 useEffect(()=>{
  !access && navigate('/');
 },[access])

  return (
    <div className="App">
      {(pathname !== '/' && <Nav onSearch={onSearch} />)}
      <Routes>
        <Route path="/" element={<Form login={login}/>} />

        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />

        <Route path="/about" element={<About />} />

        <Route path="/detail/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
