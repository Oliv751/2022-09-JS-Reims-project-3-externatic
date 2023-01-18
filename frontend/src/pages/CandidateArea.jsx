import "../styles/candidateArea.scss";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import externaticLogo from "../assets/logos/externaticLogo.png";
import { AuthContext } from "./AuthContext";

function CandidateArea() {
  const { auth } = useContext(AuthContext);
  const [candidateData] = useState({});
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    address: "",
    contract: "",
  });
  const [submitionStatus, setSubmitionStatus] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/candidates/${auth.id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        setFormData({
          ...formData,
          phone: response.data[0].phone,
          email: response.data[0].email,
          lastName: response.data[0].lastName,
          firstName: response.data[0].firstName,
          address: response.data[0].address,
          contract: response.data[0].contract,
          id: response.data[0].candidate_id,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoi des données modifiées à l'API pour mise à jour en base de données
    axios
      .patch(
        `${import.meta.env.VITE_BACKEND_URL}/candidates/${candidateData.id}`,
        formData,
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      )
      .then((response) => {
        console.warn("Données mises à jour avec succès", response.data);
        setSubmitionStatus("Modifications enregistrées !");
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour des données", error);
      });
  };

  return (
    <div>
      <form className="space" onSubmit={handleSubmit}>
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
            <input
              id="lastName"
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="firstName">Prénom</label>
            <input
              id="firstName"
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="phone">Telephone</label>
            <input
              id="phone"
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="mail">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="address">Adresse</label>
            <input
              id="address"
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
        </section>

        <section className="methodOfContact">
          <h1>Modes de contact</h1>
          <div className="methods">
            <div>
              <label htmlFor="phone">Téléphone</label>
              <input
                id="phone"
                type="checkbox"
                name="phone"
                checked={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="checkbox"
                name="email"
                checked={formData.email}
                onChange={handleChange}
              />
            </div>
          </div>
        </section>

        <section className="typeOfContract">
          <h1>Type de contrat recherché</h1>
          <div>
            <label htmlFor="cdd">CDD</label>
            <input
              id="cdd"
              type="radio"
              name="contract"
              value="cdd"
              checked={formData.contract === "cdd"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="cdi">CDI</label>
            <input
              id="cdi"
              type="radio"
              name="contract"
              value="cdi"
              checked={formData.contract === "cdi"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="stage">Stage</label>
            <input
              id="stage"
              type="radio"
              name="contract"
              value="stage"
              checked={formData.contract === "stage"}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="alternance">Alternance</label>
            <input
              id="alternance"
              type="radio"
              name="contract"
              value="alternance"
              checked={formData.contract === "alternance"}
              onChange={handleChange}
            />
          </div>
        </section>

        <button className="experience" type="button">
          Renseigner mes expériences
        </button>
        <button className="submitForm" type="submit">
          Enregistrer les modifications
        </button>
        <p>{submitionStatus}</p>
      </form>
    </div>
  );
}

export default CandidateArea;
