import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import Header from "../components/Header";
import { AuthContext } from "./AuthContext";
import "../styles/offerDetails.scss";

function OfferDetails() {
  const offerId = useParams();
  const { auth } = useContext(AuthContext);

  const [offer, setOffer] = useState([]);
  const [date, setDate] = useState("");
  const [user, setUser] = useState({});
  const [consultant, setConsultant] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [hasAccess, setHasAccess] = useState(false);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/offers/${offerId.id}`)
      .then((reponse) => {
        setOffer(reponse.data);
      });
    const consultantId = offer.consultant_id;
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/consultants/${consultantId}`)
      .then((response) => {
        setConsultant(response.data);
      });

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/${auth.id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        setUser(response.data.user);
        setIsAuthenticated(response.data.isAuthenticated);
        setHasAccess(response.data.hasAccess);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error(
            "Vous devez être connecté pour accéder à cette ressource"
          );
        } else {
          console.error(error);
        }
      });

    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/users/candidates/${auth.id}`, {
        headers: { Authorization: `Bearer ${auth.token}` },
      })
      .then((response) => {
        setUser(response.data.user);
        setIsAuthenticated(response.data.isAuthenticated);
        setHasAccess(response.data.hasAccess);
      })
      .catch((error) => {
        if (error.response.status === 401) {
          toast.error(
            "Vous devez être connecté pour accéder à cette ressource"
          );
        } else {
          console.error(error);
        }
      });
  }, []);

  useEffect(() => {
    setDate(new Date(offer.publication_date).toLocaleDateString("fr-FR"));
  }, [offer]);

  function handleContactRequest() {
    if (isAuthenticated && hasAccess && user) {
      axios
        .post(
          `${import.meta.env.VITE_BACKEND_URL}/offers/${offerId.id}/contact`,
          {
            userId: auth.id,
            consultantEmail: consultant.email,
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
    } else if (!isAuthenticated) {
      toast.error("Vous devez être connecté pour postuler à cette offre");
    } else if (!user) {
      toast.error(
        "Une erreur est survenue lors de la récupération des informations de l'utilisateur, veuillez réessayer"
      );
    } else if (!hasAccess) {
      toast.error(
        "Vous n'avez pas les autorisations pour postuler à cette offre"
      );
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
