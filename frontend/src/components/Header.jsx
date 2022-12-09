import React from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import "../styles/Header.css";
import externaticLogo from "../assets/logos/externaticLogo.png";

function Header() {
  return (
    <header>
      <nav>
        <img
          className="externaticLogo"
          src={externaticLogo}
          alt="externaticLogo"
        />
        <Link to="/connexion">
          <button type="button" className="button-connexion">
            <MdAccountCircle className="personIcon" />
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
