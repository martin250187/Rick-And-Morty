import SearchBar from "../SearchBar/SearchBar";

const Nav = (props) => {
  return (
    <nav>
      <SearchBar onSearch={props.onSearch} />
    </nav>
  );
};
export default Nav;
