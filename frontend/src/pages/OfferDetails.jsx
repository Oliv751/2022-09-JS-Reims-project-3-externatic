import { useParams } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { AiOutlineShareAlt } from "react-icons/ai";
import { BiMailSend } from "react-icons/bi";
import Header from "../components/Header";
import "./offerDetails.scss";

function OfferDetails() {
  // Recupere l'id passer en params
  const offer = useParams();

  // recupère les données de la bdd avec l'id

  return (
    <>
      <Header />
      <hr className="rounded1" />
      <article className="Offer-Details">
        <h2 className="Job-Name">JOB NAME {offer.id}</h2>
        <h3 className="Entreprise-Name">Entreprise Name</h3>
        <p className="Publication-Date">Publication Date</p>
        <p className="Job-Type">Job Type</p>
        <p className="Job-Location">Location</p>
        <MdFavoriteBorder className="Favorite-Icon" />
        <AiOutlineShareAlt className="Share-Icon" />
        <BiMailSend className="Mail-Icon" />
        <section className="Job-Description">
          <hr className="rounded2" />
          <h1>Description de l'offre</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a
            diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as
            quam viverra nec consectetur ant hendrerit. Donec et mollis dolor.
            Praesent et diam eget libero egestas mattis sit amet vitae augue.
            Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
          </p>
        </section>
        <section className="Entreprise-Description">
          <h1>L'entreprise</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a
            diam lectus. Set sit amet ipsum mauris. Maecenas congue ligula as
            quam viverra nec consectetur ant hendrerit. Donec et mollis dolor.
            Praesent et diam eget libero egestas mattis sit amet vitae augue.
            Nam tincidunt congue enim, ut porta lorem lacinia consectetur.
          </p>
        </section>
      </article>
    </>
  );
}

export default OfferDetails;
