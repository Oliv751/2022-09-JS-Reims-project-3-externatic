import { React, useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../styles/consultantArea.scss";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import Header from "../components/Header";
import OfferCard from "../components/OfferCard";

export default function ConsultantArea() {
  const { auth } = useContext(AuthContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    consultant_description: "",
  });

  const [offers, setOffers] = useState([]);
  useEffect(() => {
    axios
      .get(
        `${import.meta.env.VITE_BACKEND_URL}/consultant/${
          auth.consultantId
        }/offers`,
        {
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      )
      .then((response) => {
        console.warn(response.data);
        setOffers(response.data);
      });
  }, []);

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
          setConsultantId(response.data.consultant_id);
          setData({
            ...data,
            firstName: response.data.firstName,
            lastName: response.data.lastName,
            email: response.data.email,
            consultant_description: response.data.consultant_description,
            phone: response.data.phone,
            id: response.data.consultant_id,
          });
        })
        .catch((err) => {
          console.error(err);
        });
    }
  }, [auth]);

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
        `${import.meta.env.VITE_BACKEND_URL}/consultants/${consultantId}`,
        {
          consultantId: auth.consultantId,
          firstName: data.firstName,
          lastName: data.lastName,
          consultant_description: data.consultant_description,
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
                value={data.firstName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="lastname">Nom</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={data.lastName}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="phone">Telephone</label>
              <input
                id="phone"
                type="text"
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
                id="consultant_description"
                name="consultant_description"
                value={data.consultant_description}
                onChange={handleChange}
              />
            </div>
            <div className="btnSave">
              <button type="submit">Enregistrer</button>
              <p>{submitForm}</p>
            </div>
          </section>
        </form>
        <div>
          <div className="offer">
            <h2>Mes offres</h2>

            <NavLink to="/consultant/editOffer" className="button">
              <button type="button">Ajouter une offre</button>
            </NavLink>
          </div>
          {offers.map((offer) => {
            return <OfferCard key={offer.id} offer={offer} />;
          })}
        </div>
      </section>
    </>
  );
}
