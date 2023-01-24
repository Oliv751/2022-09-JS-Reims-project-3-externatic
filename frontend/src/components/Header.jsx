import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { MdAccountCircle, MdClose } from "react-icons/md";
import "../styles/Header.scss";
import { AuthContext } from "../pages/AuthContext";
import externaticLogo from "../assets/logos/externaticLogo.png";

function Header({ searchBar }) {
  const { auth, setAuth } = useContext(AuthContext);
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <header>
      <nav>
        <Link to="/">
          <img
            className="externaticLogo"
            src={externaticLogo}
            alt="externaticLogo"
          />
        </Link>
        {!auth.isAuthenticated && (
          <Link to="/connexion">
            <button type="button" className="button-connexion">
              <MdAccountCircle className="personIcon" />
              <p>Connectez vous</p>
            </button>
          </Link>
        )}

        {auth.isAuthenticated && (
          <div>
            <button
              type="button"
              className="button-connexion"
              onClick={() => {
                setMenuIsVisible(!menuIsVisible);
              }}
            >
              {!menuIsVisible ? (
                <>
                  <MdAccountCircle className="personIcon" />
                  <p>Connecté</p>
                </>
              ) : (
                <MdClose className="personIconClose" />
              )}
            </button>
            {menuIsVisible && (
              <div>
                <ul className="menuConnected">
                  <li>
                    <Link to={`/profil/${auth.role}`}>Profil</Link>
                  </li>
                  <li>
                    <button
                      type="button"
                      onClick={() => {
                        setAuth({
                          isAuthenticated: false,
                          token: null,
                          id: null,
                          role: null,
                        });
                      }}
                    >
                      Deconnexion
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </nav>
      {searchBar && (
        <input className="input" type="text" placeholder="Rechercher" />
      )}
    </header>
  );
}

Header.propTypes = {
  searchBar: PropTypes.bool.isRequired,
};
export default Header;
