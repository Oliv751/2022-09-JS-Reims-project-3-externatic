import "../styles/candidateArea.scss";
import React from "react";
import { Link } from "react-router-dom";
import externaticLogo from "../assets/logos/externaticLogo.png";

function CandidateArea() {
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
            <label htmlFor="firstName">Nom</label>
            <input id="name" type="text" value="wild code" />
          </div>
          <div>
            <label htmlFor="lastName">Prénom</label>
            <input id="name" type="text" value="wild code" />
          </div>
          <div>
            <label htmlFor="phone">Telephone</label>
            <input id="phone" type="text" value="0606060606" />
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <input id="mail" type="email" value="wild@wild.fr" />
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
