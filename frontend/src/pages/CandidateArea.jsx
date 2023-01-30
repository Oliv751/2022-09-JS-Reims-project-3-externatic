import "../styles/candidateArea.scss";
import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";

function CandidateArea() {
  const { auth } = useContext(AuthContext);
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
    if (event.target.name === "contract") {
      if (event.target.checked) {
        setFormData({
          ...formData,
          contract: `${formData.contract},${event.target.value}`,
        });
      } else {
        setFormData({
          ...formData,
          contract: formData.contract
            .split(",")
            .filter((typeOfContract) => typeOfContract !== event.target.value)
            .join(","),
        });
      }
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
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
        if (response.status === 204) {
          setSubmitionStatus("Modifications enregistrées !");
        }
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
                  type="checkbox"
                  name="contract"
                  value="cdd"
                  checked={formData.contract.includes("cdd")}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="cdi">CDI</label>
                <input
                  id="cdi"
                  type="checkbox"
                  name="contract"
                  value="cdi"
                  checked={formData.contract.includes("cdi")}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="stage">Stage</label>
                <input
                  id="stage"
                  type="checkbox"
                  name="contract"
                  value="stage"
                  checked={formData.contract.includes("stage")}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="alternance">Alternance</label>
                <input
                  id="alternance"
                  type="checkbox"
                  name="contract"
                  value="alternance"
                  checked={formData.contract.includes("alternance")}
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
