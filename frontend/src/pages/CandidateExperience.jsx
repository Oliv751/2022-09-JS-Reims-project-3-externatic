import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
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

  const fetchExperiences = () => {
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
  };

  useEffect(() => {
    fetchExperiences();

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
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = {
      ...formData,
      category_id: parseInt(formData.category_id, 10),
    };
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/experiences`, form, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        if (response.status === 201) {
          alert("Votre expérience a bien été ajoutée !");
          setFormData({
            job_name: "",
            company_name: "",
            experience_description: "",
            startDate: "",
            endDate: "",
            candidate_id: auth.candidateId,
            category_id: null,
          });
          fetchExperiences();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Header />
      <section className="experience_capture">
        <h2 className="exp-title">
          Ajouter une expérience
          {showForm ? (
            <HiOutlineMinusCircle
              className="minus-icon"
              onClick={() => setShowForm(false)}
            />
          ) : (
            <HiOutlinePlusCircle
              className="plus-icon"
              onClick={() => setShowForm(true)}
            />
          )}
        </h2>
        {showForm && (
          <form onSubmit={handleSubmit}>
            <label className="job-category" htmlFor="category_id">
              Categorie
              <select name="category_id" onChange={handleChange} id="select">
                {categories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </label>

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
            <button
              className="submit-button"
              type="submit"
              onClick={() => setShowForm(false)}
            >
              Ajouter
            </button>
          </form>
        )}
      </section>
      <section className="experience-list">
        <h2 className="exp-title">Mes expériences professionnelles</h2>
        {experiences.map((experience) => (
          <div className="one-experience" key={experience.id}>
            <h3>{experience.job_name}</h3>
            <p>{experience.company_name}</p>
            <p>{experience.experience_description}</p>
            <p>Date de début : {experience.startDate}</p>
            <p>Date de fin : {experience.endDate}</p>
          </div>
        ))}
      </section>
    </>
  );
}

export default Experience;
