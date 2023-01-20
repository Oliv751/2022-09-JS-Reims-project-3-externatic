import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "./AuthContext";
import Header from "../components/Header";
import "../styles/candidateExperience.scss";

function Experience() {
  const { auth } = useContext(AuthContext);
  const [experiences, setExperiences] = useState([]);
  const [categories, setCategories] = useState([]);

  const [formData, setFormData] = useState({
    job_name: "",
    company_name: "",
    experience_description: "",
    startDate: "",
    endDate: "",
    candidate_id: auth.id,
    category_id: null,
  });

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/experiences`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        setExperiences(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/categories`)
      .then((response) => {
        setCategories(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleChange = (event) => {
    if (event.target.id === "select") {
      setFormData({
        ...formData,
        [event.target.name]: parseInt(event.target.value, 10),
      });
    } else {
      setFormData({
        ...formData,
        [event.target.name]: event.target.value,
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/experiences`, formData, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        setExperiences([...experiences, formData]);
        if (response.status === 201) {
          alert("Votre expérience a bien été ajoutée !");
        }
        setFormData({
          job_name: "",
          company_name: "",
          experience_description: "",
          startDate: "",
          endDate: "",
          candidate_id: auth.candidateId,
          category_id: null,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <>
      <Header />
      <section className="experience_capture">
        <h1>Ajouter une expérience</h1>
        <form onSubmit={handleSubmit}>
          <label
            className="form-candidate-experience-input-category"
            htmlFor="category_id"
          >
            Categorie
          </label>
          <select name="category_id" onChange={handleChange} id="select">
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>

          <label className="job-name">
            Nom du poste :
            <input
              type="text"
              value={formData.job_name}
              onChange={handleChange}
              name="job_name"
            />
          </label>
          <label className="company-name">
            Nom de l'entreprise :
            <input
              type="text"
              value={formData.company_name}
              onChange={handleChange}
              name="company_name"
            />
          </label>
          <label className="experience-description">
            Description de l'expérience :
            <textarea
              value={formData.experience_description}
              onChange={handleChange}
              name="experience_description"
            />
          </label>
          <label className="start-date">
            Date de début :
            <input
              type="date"
              value={formData.startDate}
              onChange={handleChange}
              name="startDate"
            />
          </label>
          <label className="end-date">
            Date de fin :
            <input
              type="date"
              value={formData.endDate}
              onChange={handleChange}
              name="endDate"
            />
          </label>
          <button className="submit-button" type="submit">
            Ajouter
          </button>
        </form>
        <h2>Mes expériences professionnelles</h2>
        {experiences.map((experience) => (
          <section className="experience_list" key={experience.id}>
            <h3>{experience.job_name}</h3>
            <p>{experience.company_name}</p>
            <p>{experience.experience_description}</p>
            <p>Date de début : {experience.startDate}</p>
            <p>Date de fin : {experience.endDate}</p>
          </section>
        ))}
      </section>
    </>
  );
}

export default Experience;
