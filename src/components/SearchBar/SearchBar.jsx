import styled from "./SearchBar.module.css";
const SearchBar = (props) => {
  return (
    <div className={styled.divContainer}>
      <input className={styled.input} type="search" />
      <button className={styled.searchBtn} onClick={props.onSearch}>
        Agregar
      </button>
    </div>
  );
};

export default SearchBar;
