import { useEffect, useState } from "react";
import axios from "axios";
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
      <OfferList offerList={offers} />
    </div>
  );
}

export default App;
