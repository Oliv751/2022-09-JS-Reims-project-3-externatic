import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthContextProvider } from "./pages/AuthContext";
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
        </Routes>
      </Router>
    </AuthContextProvider>
  </React.StrictMode>
);
