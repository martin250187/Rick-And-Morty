import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { NavLink } from "../NavLink/NavLink";
import { Link } from "react-router-dom";

const Nav = (props) => {
  return (
    <nav className={style.navBar}>
      <div className={style.containerBtn}>
        <NavLink to={"/home"}>
          <button className={style.navBtn}>Home</button>
        </NavLink>
        <Link to={"/about"}>
          <button className={style.navBtn}>About</button>
        </Link>
        <Link to={"/favorites"}>
          <button className={style.navBtn}>Favorites</button>
        </Link>
      </div>
      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
};
export default Nav;
