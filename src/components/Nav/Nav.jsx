import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className={style.navBar}>
      <div className={style.containerBtn}>
      <Link to="/home">
        <button className={style.navBtn}>Home</button>
      </Link>
      <Link to="/about">
        <button className={style.navBtn}>About</button>
      </Link>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
};
export default Nav;
