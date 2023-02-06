import React, { useState } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContext";
import Header from "../components/Header";

function ConsultCandProfile() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
  });
  const [candidateData, setCandidateData] = useState(null);

  const { auth } = React.useContext(AuthContext);

  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/experiences`, {
        headers: {
          Authorization: `Bearer ${auth.token}`,
        },
      })
      .then((response) => {
        if (response.data) {
          console.warn(response.data);
          setCandidateData(response.data);
        }
      });
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
          <form onSubmit={onSubmit}>
            <div className="form-group">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                className="form-control"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={onChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                className="form-control"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={onChange}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Search
            </button>
          </form>
          {candidateData && (
            <div>
              <h2>Candidate Information</h2>
              <p>Email: {candidateData.email}</p>
              <p>Phone: {candidateData.phone}</p>
              <p>Address: {candidateData.address}</p>
              <p>Contract: {candidateData.contract}</p>
              {candidateData.experiences && (
                <div>
                  <h3>Experiences</h3>
                  {candidateData.experiences.map((experience) => (
                    <div key={experience.id}>
                      <p>Job Name: {experience.job_name}</p>
                      <p>Company Name: {experience.company_name}</p>
                      <p>Start Date: {experience.start_date}</p>
                      <p>End Date: {experience.end_date}</p>
                      <p>Job Description: {experience.job_description}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default ConsultCandProfile;
