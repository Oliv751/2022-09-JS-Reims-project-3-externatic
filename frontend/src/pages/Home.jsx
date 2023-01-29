import { useEffect, useState } from "react";
import axios from "axios";
import OfferList from "../components/OfferList";
import Header from "../components/Header";

function Home() {
  const [offers, setOffers] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/offers`).then((reponse) => {
      setOffers(reponse.data);
    });
  }, []);

  return (
    <div className="App">
      <Header searchBar />
      <OfferList
        offerList={offers.sort(
          (a, b) => new Date(b.publication_date) - new Date(a.publication_date)
        )}
      />
    </div>
  );
}

export default Home;
