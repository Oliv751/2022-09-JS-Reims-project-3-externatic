import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { HiOutlinePlusCircle, HiOutlineMinusCircle } from "react-icons/hi";
import { CiEdit } from "react-icons/ci";
import { MdOutlineDeleteForever } from "react-icons/md";
import { AuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";
import "../styles/candidateExperience.scss";

function Experience() {
  const { auth } = useContext(AuthContext);
  const [showForm, setShowForm] = useState(false);
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

  const handleDelete = (experience) => {
    const { id } = experience;
    axios
      .delete(`${import.meta.env.VITE_BACKEND_URL}/experiences/${id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        if (response.status === 204) {
          alert("Votre expérience a bien été supprimée !");
          fetchExperiences();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleEdit = (experience) => {
    const { id } = experience;
    axios
      .put(`${import.meta.env.VITE_BACKEND_URL}/experiences/${id}`, formData, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        if (response.status === 204) {
          alert("Votre expérience a bien été modifiée !");
          fetchExperiences();
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

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
                <option>Sélectionnez une catégorie</option>
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
            <button className="submit-button" type="submit">
              Ajouter
            </button>
          </form>
        )}
      </section>
      <section className="experience-list">
        <h2 className="exp-title">Mes expériences professionnelles</h2>
        {experiences
          .map((experience) => (
            <div className="one-experience" key={experience.id}>
              <h3>
                {experience.job_name}
                <button
                  type="button"
                  onClick={() => {
                    handleEdit(experience);
                  }}
                >
                  <CiEdit className="edit-icon" />
                </button>
                <button
                  type="button"
                  onClick={() => {
                    handleDelete(experience);
                  }}
                >
                  <MdOutlineDeleteForever className="delete-icon" />
                </button>
              </h3>
              <p className="exp-company">{experience.company_name}</p>
              <p className="exp-desc">{experience.experience_description}</p>
              <p className="exp-date">
                <div className="exp-date-text">Date de début : </div>
                {experience.startDate.slice(0, 10)}
              </p>
              <p className="exp-date">
                <div className="exp-date-text">Date de fin :</div>
                {experience.endDate.slice(0, 10)}
              </p>
            </div>
          ))
          .sort((a, b) => {
            const dateA = new Date(a.props.children[4].props.children[1]);
            const dateB = new Date(b.props.children[4].props.children[1]);
            return dateB - dateA;
          })}
      </section>
    </>
  );
}

export default Experience;
