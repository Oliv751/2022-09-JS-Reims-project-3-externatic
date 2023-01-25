import "../styles/candidateArea.scss";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import Header from "../components/Header";

function CandidateArea() {
  const { auth } = useContext(AuthContext);
  const [candidateData, setCandidateData] = useState({});
  const [formData, setFormData] = useState({
    lastName: "",
    firstName: "",
    phone: "",
    email: "",
    address: "",
    contract: "",
  });
  const [submitionStatus, setSubmitionStatus] = useState("");
  const [candidateId, setCandidateId] = useState("");

  useEffect(() => {
    if (auth.isAuthenticated) {
      axios
        .get(`${import.meta.env.VITE_BACKEND_URL}/candidates/${auth.id}`, {
          headers: { Authorization: `Bearer ${auth.token}` },
        })
        .then((response) => {
          setCandidateData(response.data);
          setCandidateId(response.data.candidate_id);
          setFormData({
            ...formData,
            phone: response.data.phone,
            email: response.data.email,
            lastName: response.data.lastName,
            firstName: response.data.firstName,
            address: response.data.address,
            contract: response.data.contract,
            id: response.data.candidate_id,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, [auth.isAuthenticated]);

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    // Envoi des données modifiées à la base de données pour mise à jour
    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/users/${auth.id}`,
        {
          phone: formData.phone,
          email: formData.email,
        },
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

    axios
      .put(
        `${import.meta.env.VITE_BACKEND_URL}/candidates/${candidateId}`,
        {
          firstname: formData.firstName,
          lastname: formData.lastName,
          address: formData.address,
          contract: formData.contract,
        },
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      )
      .then((response) => {
        if (response.status === 204) {
          setSubmitionStatus("Modifications enregistrées !");
        }
      })
      .catch((error) => {
        console.error("Erreur lors de la mise à jour des données", error);
      });
  };

  return (
    <>
      <Header searchBar={false} />
      <div className="candidateArea">
        <form className="space" onSubmit={handleSubmit}>
          <section className="describeCandidate">
            <div>
              <label htmlFor="lastName">Nom</label>
              <input
                id="lastName"
                type="text"
                name="lastName"
                value={candidateData.lastName}
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
              <label htmlFor="email">Email</label>
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
            <div>
              <label htmlFor="contract">Type de contrat</label>
              <input
                id="contract"
                type="text"
                name="contract"
                value={formData.contract}
                onChange={handleChange}
              />
            </div>

            <section className="methodOfContact">
              <h1>Modes de contact</h1>
              <div className="methods">
                <div className="phoneCheckbox">
                  <label htmlFor="phone">Téléphone</label>
                  <input
                    id="phone"
                    type="checkbox"
                    name="phone"
                    checked={formData.phone}
                    onChange={handleChange}
                  />
                </div>
                <div className="emailCheckbox">
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
            <div className="buttons">
              <Link to="/profil/candidate/experiences">
                <button className="experience" type="button">
                  Renseigner mes expériences
                </button>
              </Link>
              <button className="submitForm" type="submit">
                Enregistrer les modifications
              </button>
              <p>{submitionStatus}</p>
            </div>
          </section>
        </form>
      </div>
    </>
  );
}

export default CandidateArea;
