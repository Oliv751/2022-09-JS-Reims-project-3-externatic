import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { BiMailSend } from "react-icons/bi";
import Header from "../components/Header";
import { AuthContext } from "../contexts/AuthContext";
import "../styles/offerDetails.scss";

function OfferDetails() {
  const offerId = useParams();
  const { auth } = useContext(AuthContext);

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

  function handleContactRequest() {
    if (auth.isAuthenticated && auth.candidateId) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/offers/candidacy`,
          {
            userId: auth.id,
            consultantId: offer.consultant_id,
            offerId: offer.id,
          },
          {
            headers: { Authorization: `Bearer ${auth.token}` },
          }
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success(
              "Votre demande de contact a été envoyée au consultant, il vous contactera bientôt"
            );
          } else {
            toast.error(
              "Une erreur est survenue lors de l'envoi de votre demande de contact"
            );
          }
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      toast.error("Vous devez être connecté pour postuler à cette offre");
    }
  }

  return (
    <>
      <Header />
      <article className="Offer-Details">
        <h2 className="Job-Name"> {offer.offer_name}</h2>
        <p className="Publication-Date">{date} </p>
        <p className="Job-Type">{offer.contract}</p>
        <p className="Job-Location">{offer.location}</p>
        <section className="Job-Description">
          <button type="button" onClick={handleContactRequest}>
            <BiMailSend />
            Postuler
          </button>
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
