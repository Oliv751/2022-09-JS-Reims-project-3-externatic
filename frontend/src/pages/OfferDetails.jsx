import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import Header from "../components/Header";
import "../styles/offerDetails.scss";

function OfferDetails() {
  const offerId = useParams();

  const [offer, setOffer] = useState([]);
  const [date, setDate] = useState("");
  const [userId, setUserId] = useState();
  const [userInfo, setUserInfo] = useState();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers/${offerId.id}`)
      .then((reponse) => {
        setOffer(reponse.data);
      });

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/user/info`)
      .then((response) => {
        setUserId(response.data.userId);
        setUserInfo(response.data.userInfo);
        setIsAuthenticated(response.data.isAuthenticated);
        setHasAccess(response.data.hasAccess);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setDate(new Date(offer.publication_date).toLocaleDateString("fr-FR"));
  }, [offer]);

  function handleContactRequest() {
    if (isAuthenticated && hasAccess && userInfo) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/offers/${offerId.id}/contact`,
          {
            userId,
            userInfo,
          }
        )
        .then((response) => {
          if (response.status === 200) {
            toast.success(
              "Un consultant prendra contacte avec vous très rapidement"
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
          <button type="button" onClick={handleContactRequest}>
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
