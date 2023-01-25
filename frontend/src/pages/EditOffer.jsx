import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import "../styles/editOffer.scss";
import { AuthContext } from "../contexts/AuthContext";

export default function EditOffer() {
  const navigate = useNavigate();
  const [offer, setOffer] = useState({
    companyDescription: "",
    offerName: "",
    offerDescription: "",
    contract: "CDI",
    location: "",
  });

  const { auth } = useContext(AuthContext);

  const handleChange = (event) => {
    setOffer({ ...offer, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post(
        `${import.meta.env.VITE_BACKEND_URL}/offers`,
        { ...offer, consultantId: auth.consultantId },
        {
          headers: { Authorization: `Bearer ${auth.token}` },
        }
      )
      .then((response) => {
        if (response.status === 201) {
          navigate("/profil/consultant");
        }
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="pageEditOffer">
      <Header />
      <form className="editOffer" onSubmit={handleSubmit}>
        <div className="describe">
          <label htmlFor="describe">Description de l'entreprise</label>
          <textarea
            name="companyDescription"
            value={offer.companyDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="describe">
          <label htmlFor="tite">Titre de l'offre</label>
          <input
            type="text"
            name="offerName"
            value={offer.offerName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="describe">
          <label htmlFor="describe">Description de l'offre</label>
          <textarea
            name="offerDescription"
            value={offer.offerDescription}
            onChange={handleChange}
            required
          />
        </div>
        <div className="contract">
          <label htmlFor="contract">Type de contrat</label>
          <select
            name="contract"
            value={offer.contract}
            onChange={handleChange}
            required
          >
            <option value="cdi">CDI</option>
            <option value="cdd">CDD</option>
            <option value="stage">STAGE</option>
            <option value="alternance">ALTERNANCE</option>
          </select>
        </div>
        <div className="premises">
          <label htmlFor="premises">Lieux</label>
          <input
            type="text"
            name="location"
            value={offer.location}
            onChange={handleChange}
            required
          />
        </div>
        <input type="hidden" name="id" value={offer.id} />
        <button className="offerregister" type="submit">
          Enregistrer
        </button>
      </form>
    </div>
  );
}
