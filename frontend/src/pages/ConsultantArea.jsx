import { React, useContext, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/consultantArea.scss";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import Header from "../components/Header";

export default function ConsultantArea() {
  const navigate = useNavigate();
  const { auth } = useContext(AuthContext);
  const firstnameRef = useRef();
  const lastnameRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const descriptionRef = useRef();

  function handleSubmit() {
    navigate("/consultant/editOffer");
  }

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/consultants/${auth.id}`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((reponse) => {
        const { firstname, lastname, consultantDescription, email, phone } =
          reponse.data;
        firstnameRef.current.value = firstname;
        lastnameRef.current.value = lastname;
        emailRef.current.value = email;
        descriptionRef.current.value = consultantDescription;
        phoneRef.current.value = phone;
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Header searchBar={false} />
      <form
        className="area"
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}
      >
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
    </>
  );
}
