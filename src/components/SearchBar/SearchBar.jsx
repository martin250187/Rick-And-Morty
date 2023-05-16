import styled from "./SearchBar.module.css";
import { useState } from "react";
const SearchBar = (props) => {
  const [id, setId] = useState("");

  const handleChange = (event) =>{
    setId(event.target.value)
  }
  return (
    <div className={styled.divContainer}>
      <input className={styled.input} type="search" onChange={handleChange} />
      <button className={styled.searchBtn} onClick={()=>props.onSearch(id)}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
