import { Link } from "react-router-dom";
import React from "react";
import "../styles/Header.css";
import logo from "../assets/externatic.png";

function Header() {
  return (
    <header>
      <nav>
        <img className="logo" src={logo} alt="logo" />
        <Link to="/connexion">
          <button type="button" className="button-connexion">
            connexion
          </button>
        </Link>
      </nav>
      <div className="search">
        <label>
          <input className="input" type="text" placeholder="Rechercher" />
        </label>
      </div>
    </header>
  );
}

export default Header;
