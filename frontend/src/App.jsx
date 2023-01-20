import { useEffect, useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import OfferList from "./components/OfferList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then((reponse) => {
      setOffers(reponse.data);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      <Link to="/profil/consultant">Consultant</Link>
      <OfferList offerList={offers} />
    </div>
  );
}

export default App;
