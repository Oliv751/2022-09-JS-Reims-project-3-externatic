import { React, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/consultantArea.scss";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import Header from "../components/Header";

export default function ConsultantArea() {
  const { auth } = useContext(AuthContext);
  const [consultantData, setConsultantData] = useState({});
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    description: "",
  });

  const [submitForm, setSubmitForm] = useState("");
  const [consultantId, setConsultantId] = useState("");

  useEffect(() => {
    if (auth.isAuthenticated) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/consultants/${auth.id}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        })
        .then((response) => {
          setConsultantData(response.data);
          setConsultantId(response.data.consultant_id);
          setData({
            ...data,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            description: response.data.description,
            phone: response.data.phone,
            id: response.data.consultant_id,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [auth.isAuthenticated]);

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Envoi des données modifiées à la base de données pour mise à jour
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/users/${auth.id}`,
        {
          phone: data.phone,
          email: data.email,
        },
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      )
      .then((response) => {
        console.warn("Données mises à jour avec succès", response.data);
        setSubmitForm("Modifications enregistrées !");
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour des données", error);
      });

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/consultant/${consultantId}`,
        {
          firstname: data.firstName,
          lastName: data.lastName,
          description: data.description,
        },
        {
          headers: { Authorization: `bearer ${auth.token}` },
        }
      )
      .then((response) => {
        console.warn("Données mises à jour avec succès", response.data);
        setSubmitForm("Modifications enregistrées !");
        setConsultantData(response.data);
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour des données", error);
      });
  };

  return (
    <>
      <Header searchBar={false} />
      <section className="area">
        <form onSubmit={handleSubmit}>
          <section className="describeConsultant">
            <div>
              <label htmlFor="firstname">Prénom</label>
              <input
                id="firstName"
                type="text"
                name="firstName"
                value={consultantData.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastname">Nom</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={consultantData.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Telephone</label>
              <input
                id="phone"
                type="number"
                name="phone"
                value={data.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="mail">Email</label>
              <input
                id="mail"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="Description">Description</label>
              <textarea
                id="description"
                type="text"
                name="description"
                value={data.description}
                onChange={handleChange}
              />
            </div>
            <div className="btnSave">
              <button type="submit">Enregistrer</button>
              <p>{submitForm}</p>
            </div>
          </section>
        </form>
        <div className="offer">
          <h2>Mes offres</h2>
          <NavLink to="/consultant/editOffer" className="button">
            <button type="button">Ajouter une offre</button>
          </NavLink>
        </div>
      </section>
    </>
  );
}
