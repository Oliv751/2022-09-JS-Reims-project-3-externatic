import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import SampleCard from "./sampleCard";
import "../styles/offercard-style.scss";

export default function OfferCard({ offer }) {
  const date = new Date(offer.publication_date);

  return (
    <li>
      <Link to={`/offers/${offer.id}`} className="cardsOffer">
        <section>
          <div className="description">
            <h2>{offer.offer_name}</h2>

            <p>offre publie le {date.toLocaleDateString("fr-FR")}</p>
          </div>
          <div>
            <MdLocationOn className="icon_description" />
            <p>{offer.location}</p>
          </div>
          <div>
            <FaFileSignature className="icon_description" />
            <p>{offer.contract}</p>
          </div>
        </section>
      </Link>
    </li>
  );
}

OfferCard.defaultProps = {
  offer: [],
};

OfferCard.propTypes = {
  offer: SampleCard,
};
