import { React, useContext, useEffect, useRef, useState } from "react";
import { useNavigate, Link, NavLink } from "react-router-dom";
import { MdAccountCircle } from "react-icons/md";
import "../styles/consultantArea.scss";
import axios from "axios";
import { AuthContext } from "./AuthContext";

import externaticLogo from "../assets/logos/externaticLogo.png";

export default function ConsultantArea() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const [setData] = useState([]);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();
  // const [data, setData] = useState(null);

  function handleSubmit() {
    navigate("/consultant/editOffer");
  }

  useEffect(() => {
    console.warn(auth.id);
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/consultants/${auth.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((reponse) => {
        setData(reponse.data);
        console.warn("reponse /consultant/id");
        console.warn(reponse);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <form
      className="area"
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <header>
        <nav>
          <Link to="/">
            <img
              className="externaticLogo"
              src={externaticLogo}
              alt="externaticLogo"
            />
          </Link>
          <NavLink to="/connexion" className="button-connexion">
            <MdAccountCircle className="personIcon" />
          </NavLink>
        </nav>
      </header>
      <section className="describeConsultant">
        <div>
          <label htmlFor="firstname">Prénom</label>
          <input ref={firstnameRef} id="name" type="text" />
        </div>
        <div>
          <label htmlFor="lastname">Nom</label>
          <input ref={lastnameRef} id="name" type="text" />
        </div>
        <div>
          <label htmlFor="phone">Telephone</label>
          <input ref={phoneRef} id="phone" type="number" />
        </div>
        <div>
          <label htmlFor="mail">Email</label>
          <input ref={emailRef} id="mail" type="email" />
        </div>
        <div>
          <label htmlFor="Description">Description</label>
          <textarea ref={descriptionRef} id="description" />
        </div>
        <div className="btnSave">
          <button type="submit">Enregistrer</button>
        </div>
      </section>

      <section className="offres">
        <div className="header">
          <h2>Mes offres</h2>
          <button type="submit">Ajouter une offre</button>
        </div>
      </section>
    </form>
  );
}
