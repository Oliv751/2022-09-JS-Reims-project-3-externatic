import { useParams } from "react-router-dom";
import "./offerDetails.scss";

function OfferDetails() {
  // Recupere l'id passer en params
  const offer = useParams();

  // recupère les données de la bdd avec l'id

  return (
    <article className="Offer-Details">
      <h2 className="Job-Name">Job Name {offer.id}</h2>
      <h3 className="Entreprise-Name">Entreprise Name</h3>
      <p className="Publication-Date">Publication Date</p>
      <p className="Job-Type">Job Type</p>
      <p className="Job-Location">Location</p>
      <section className="Job-Description">
        <h1>Description de l'offre</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>
      </section>
      <section className="Entreprise-Description">
        <h1>L'entreprise</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Donec a diam
          lectus. Set sit amet ipsum mauris. Maecenas congue ligula as quam
          viverra nec consectetur ant hendrerit. Donec et mollis dolor. Praesent
          et diam eget libero egestas mattis sit amet vitae augue. Nam tincidunt
          congue enim, ut porta lorem lacinia consectetur.
        </p>
      </section>
    </article>
  );
}

export default OfferDetails;
