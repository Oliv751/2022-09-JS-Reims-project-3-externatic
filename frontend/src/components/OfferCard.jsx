import React from "react";
import { Link } from "react-router-dom";
import { MdLocationOn } from "react-icons/md";
import { FaFileSignature } from "react-icons/fa";
import SampleCard from "./sampleCard";
import "../styles/offercard-style.scss";

export default function OfferCard({ offer }) {
  return (
    <li>
      <Link to={`/offers/${offer.id}`} className="cardsOffer">
        <section>
          <div className="description">
            <div>
              <h2>{offer.offerName}</h2>
              <h3>{offer.companyName}</h3>
            </div>
            <p>offre publie le {offer.publicationDate}</p>
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
