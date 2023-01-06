import "../styles/candidateArea.scss";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import externaticLogo from "../assets/logos/externaticLogo.png";
import { AuthContext } from "./AuthContext";

function CandidateArea() {
  const { auth } = useContext(AuthContext);
  const [candidateData, setCandidateData] = useState({});

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/candidates/${auth.id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        setCandidateData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <form className="space">
        <header>
          <nav>
            <Link to="/">
              <img
                className="externaticLogo"
                src={externaticLogo}
                alt="externaticLogo"
              />
            </Link>
          </nav>
        </header>
        <section className="describeCandidate">
          <div>
            <label htmlFor="lastName">Nom</label>
            <input id="name" type="text" value={candidateData.lastName} />
          </div>
          <div>
            <label htmlFor="firstName">Prénom</label>
            <input id="name" type="text" value={candidateData.firstName} />
          </div>
          <div>
            <label htmlFor="phone">Telephone</label>
            <input id="phone" type="text" value={candidateData.phone} />
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <input id="mail" type="email" value={candidateData.mail} />
          </div>
          <div>
            <label htmlFor="address">Adresse</label>
            <input id="address" type="text" value="10 rue de reims , REIMS" />
          </div>
        </section>

        <section className="methodOfContact">
          <h1>Modes de contact</h1>
          <div className="methods">
            <div>
              <label htmlFor="phone">Telephone</label>
              <input id="phone" type="checkbox" />
            </div>
            <div>
              <label htmlFor="mail">Email</label>
              <input id="mail" type="checkbox" />
            </div>
          </div>
        </section>

        <section className="typeOfContract">
          <h1>Type de contrat recherché</h1>
          <div>
            <label htmlFor="cdd">CDD</label>
            <input id="cdd" type="checkbox" />
          </div>
          <div>
            <label htmlFor="cdi">CDI</label>
            <input id="cdi" type="checkbox" />
          </div>
          <div>
            <label htmlFor="stage">Stage</label>
            <input id="stage" type="checkbox" />
          </div>
          <div>
            <label htmlFor="alternance">Alternance</label>
            <input id="alternance" type="checkbox" />
          </div>
        </section>

        <button className="experience" type="button">
          Renseigner mes expériences
        </button>

        <button className="save" type="button">
          Enregistrer
        </button>
      </form>
    </div>
  );
}

export default CandidateArea;
