import React from "react";
import { Link } from "react-router-dom";
import navStyle from "../Styles/Navbar.module.css";
import { useContextGlobal } from "../Context/global.context";
import lightTheme from "../Styles/Theme.module.css";

const Navbar = () => {
  const { theme, handleChangeTheme } = useContextGlobal();

  return (
    <nav className={navStyle}>
      <Link to="/">
        <h1><span>D</span>H Odonto</h1>
      </Link>

      <div>
        <Link to="/">
          <h4>Home</h4>
        </Link>
        <Link to="/favs">
          <h4>Favs</h4>
        </Link>
        <Link to="/contact">
          <h4>Contact</h4>
        </Link>
      </div>

      <button onClick={handleChangeTheme}>
        {theme == lightTheme.light ? "🌙" : "☀️"}
      </button>
    </nav>
  );
};

export default Navbar;
