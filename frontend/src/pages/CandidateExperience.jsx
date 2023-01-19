import React, { useState } from "react";
import Header from "../components/Header";

function Experience() {
  const [experiences, setExperiences] = useState([]);
  const [experienceID, setExperienceID] = useState(0);
  const [title, setTitle] = useState("");
  const [company, setCompany] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newExperience = {
      id: experienceID,
      title,
      company,
      description,
      startDate,
      endDate,
    };

    if (
      title.length &&
      company.length &&
      description.length >= 20 &&
      startDate &&
      endDate
    ) {
      setExperiences([...experiences, newExperience]);
    }
    setExperienceID(experienceID + 1);
  };

  return (
    <>
      <Header className="header" />
      <section className="experience_capture">
        <h1>Mes Expériences</h1>
        <form onSubmit={handleSubmit}>
          <label className="job-name">
            Nom du poste :
            <input
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
          <label className="company-name">
            Nom de l'entreprise :
            <input
              type="text"
              value={company}
              onChange={(event) => setCompany(event.target.value)}
            />
          </label>
          <label className="experience-description">
            Description de l'expérience :
            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
          <label className="start-date">
            Date de début :
            <input
              type="date"
              value={startDate}
              onChange={(event) => setStartDate(event.target.value)}
            />
          </label>
          <label className="end-date">
            Date de fin :
            <input
              type="date"
              value={endDate}
              onChange={(event) => setEndDate(event.target.value)}
            />
          </label>
          <button className="submit-button" type="submit">
            Ajouter
          </button>
        </form>
        <h2>Expériences professionnelles</h2>
        {experiences.map((experience) => (
          <section className="experience_list" key={experience.id}>
            <h3>{experience.title}</h3>
            <p>{experience.company}</p>
            <p>{experience.description}</p>
            <p>Date de début : {experience.startDate}</p>
            <p>Date de fin : {experience.endDate}</p>
          </section>
        ))}
      </section>
    </>
  );
}

export default Experience;
