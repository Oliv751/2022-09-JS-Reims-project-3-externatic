import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./pages/AuthContext";
import Profil from "./pages/Profil";
import CandidateExperience from "./pages/CandidateExperience";
import OfferDetails from "./pages/OfferDetails";
import App from "./App";
import ConnexionPage from "./pages/ConnexionPage";
import CreateAccount from "./pages/CreateAccount";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/offers/:id" element={<OfferDetails />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/createaccount/:type" element={<CreateAccount />} />
          <Route path="/profil/:type" element={<Profil />} />
          <Route
            path="profil/candidate/experiences"
            element={<CandidateExperience />}
          />
          ;
        </Routes>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
