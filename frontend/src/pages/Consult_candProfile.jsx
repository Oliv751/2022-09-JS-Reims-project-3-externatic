import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import "../styles/consultCandProfile.css";

function ConsultCandProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [candidateData, setCandidateData] = useState(null);

  const { auth } = React.useContext(AuthContext);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Recuperation de l'id du candidat à partir des prénom et nom
      const candidateResponse = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/candidates`,
        {
          params: {
            firstName: formData.firstName,
            lastName: formData.lastName,
          },
          headers: {
            Authorization: `Bearer ${auth.token}`,
          },
        }
      );
      if (candidateResponse.data.length > 0) {
        const candidate = candidateResponse.data[0];
        const candidateId = candidate.id;

        // Récupération des informations du candidat à partir de son id
        const candidateInfoResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/candidates/${candidateId}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        const candidateInfo = candidateInfoResponse.data;

        // Récupération des informations de l'utilisateur correspondant à l'id de candidat
        const userResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/users/${candidateInfo.user_id}`,
          {
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        const user = userResponse.data;

        // Récupération des expériences du candidat
        const experienceResponse = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/experiences`,
          {
            params: {
              candidate_id: candidateId,
            },
            headers: {
              Authorization: `Bearer ${auth.token}`,
            },
          }
        );
        const experiences = experienceResponse.data;

        setCandidateData({
          ...candidateInfo,
          email: user.email,
          phone: user.phone,
          experiences,
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onChange = (e) =>
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  return (
    <div>
      {auth && (
        <div className="container">
          <Header />
          <form onSubmit={onSubmit} className="CPForm">
            <div className="form-group">
              <label htmlFor="firstName">Prénom</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Nom</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
                required
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Consulter
            </button>
          </form>
          {candidateData && (
            <div className="candidate-info">
              <div className="candidate-personal-info">
                <h3 className="perso-title">Informations personnelles</h3>
                <p className="detailsCand">
                  <span>Prénom:</span>
                  {candidateData.firstname}
                </p>
                <p className="detailsCand">
                  <span>Nom:</span>
                  {candidateData.lastname}
                </p>
                <p className="detailsCand">
                  <span>Email:</span>
                  {candidateData.email}
                </p>
                <p className="detailsCand">
                  <span>Téléphone:</span>
                  {candidateData.phone}
                </p>
              </div>
              <div className="candidate-experience">
                <h3 className="experience-title">Expériences</h3>
                {candidateData.experiences.map((experience) => (
                  <div key={experience.id} className="experience">
                    <p>
                      <span>Poste:</span>
                      {experience.job_name}
                    </p>
                    <p>
                      <span>Entreprise:</span>
                      {experience.company_name}
                    </p>
                    <br />
                    <p className="exp-date">
                      <time dateTime={experience.startDate}>
                        {experience.startDate?.slice(0, 10)}
                      </time>{" "}
                      &gt;{" "}
                      <time dateTime={experience.endDate}>
                        {experience.endDate?.slice(0, 10)}
                      </time>
                    </p>
                    <br />
                    <p className="description">
                      <span>Description:</span>
                      <br />
                      <br />
                      {experience.experience_description}
                    </p>
                    <hr />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ConsultCandProfile;
