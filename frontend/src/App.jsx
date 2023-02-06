import { useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import { ToastContainer } from "react-toastify";
import { AuthContext } from "./contexts/AuthContext";
import Home from "./pages/Home";
import Profil from "./pages/Profil";
import CandidateExperience from "./pages/CandidateExperience";
import OfferDetails from "./pages/OfferDetails";
import ConnexionPage from "./pages/ConnexionPage";
import CreateAccount from "./pages/CreateAccount";
import EditOffer from "./pages/EditOffer";
import ConsultCandProfile from "./pages/Consult_candProfile";

import "./App.css";

function App() {
  const { auth } = useContext(AuthContext);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="dark"
      />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/connexion" element={<ConnexionPage />} />
          <Route path="/offers/:id" element={<OfferDetails />} />
          <Route path="/createaccount/:type" element={<CreateAccount />} />
          <Route
            element={
              auth.isAuthenticated ? <Outlet /> : <Navigate to="/connexion" />
            }
          >
            <Route path="/profil/:type" element={<Profil />} />
            <Route path="/consultant/editOffer" element={<EditOffer />} />
            <Route
              path="profil/candidate/experiences"
              element={<CandidateExperience />}
            />
            <Route
              path="/ConsultCandProfile"
              element={<ConsultCandProfile />}
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
