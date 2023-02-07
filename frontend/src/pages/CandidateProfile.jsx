import React, { useState } from "react";
import Header from "../components/Header";

function CandidateProfile() {
  const [firstName, setFirstName] = useState("Prénom");
  const [lastName, setLastName] = useState("Nom");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.warn(firstName, lastName);
    // ici vous pouvez soumettre les données à un serveur ou faire une autre action
  };

  return (
    <>
      <Header />
      <div>
        <form id="profile-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="candidate-firstname"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />

          <input
            type="text"
            id="candidate-lastname"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
          <br />
          <button className="lasstname" type="submit">
            Valider
          </button>
        </form>
      </div>
    </>
  );
}

export default CandidateProfile;
