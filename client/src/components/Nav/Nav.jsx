import SearchBar from "../SearchBar/SearchBar";
import style from "./Nav.module.css";
import { Link } from "react-router-dom";

const Nav = ({ onSearch }) => {
  return (
    <div className={style.nav}>
      

      <Link to="/home">
        <button>Home</button>
      </Link>

      <Link to="/favorites">
        <button>Favorites</button>
      </Link>

      <Link to="/about">
        <button>About</button>
      </Link>

      <Link to="/">
        <button>Cerrar Sesion</button>
      </Link>

      <SearchBar onSearch={onSearch} />
    </div>
  );  
};

export default Nav;