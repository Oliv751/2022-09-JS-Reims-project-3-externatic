import React, { useState } from "react";
import Header from "../components/Header";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExperience = {
      title,
      company,
      description,
    };
    setExperiences([...experiences, newExperience]);
    setTitle("");
    setCompany("");
    setDescription("");
  };

  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div>
        <h1>Mes Expériences</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Titre de l'expérience :
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <br />
          <label>
            Nom de l'entreprise :
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </label>
          <br />
          <label>
            Description de l'expérience :
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <br />
          <button type="submit">Ajouter</button>
        </form>
        <br />
        <h2>Expériences professionnelles</h2>
        {experiences.map((experience) => (
          <div key="">
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.description}</p>
          </div>
        ))}
      </div>
    </>
  );
}

export default Experience;
