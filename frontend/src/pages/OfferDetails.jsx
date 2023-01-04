import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import Header from "../components/Header";
import "../styles/offerDetails.scss";

function OfferDetails() {
  const offerId = useParams();

  const [offer, setOffer] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers/${offerId.id}`)
      .then((reponse) => {
        setOffer(reponse.data);
      });
  }, []);

  useEffect(() => {
    setDate(new Date(offer.publication_date).toLocaleDateString("fr-FR"));
  }, [offer]);

  return (
    <>
      <Header />
      <hr className="rounded1" />
      <article className="Offer-Details">
        <h2 className="Job-Name"> {offer.offer_name}</h2>
        <p className="Publication-Date">{date} </p>
        <p className="Job-Type">{offer.contract}</p>
        <p className="Job-Location">{offer.location}</p>
        <MdFavoriteBorder className="Favorite-Icon" />
        <AiOutlineShareAlt className="Share-Icon" />
        <BiMailSend className="Mail-Icon" />
        <section className="Job-Description">
          <hr className="rounded2" />
          <h1>Description de l'offre</h1>
          <p>{offer.offer_description}</p>
        </section>
        <section className="Entreprise-Description">
          <h1>L'entreprise</h1>
          <p>{offer.company_description}</p>
        </section>
      </article>
    </>
  );
}

export default OfferDetails;
