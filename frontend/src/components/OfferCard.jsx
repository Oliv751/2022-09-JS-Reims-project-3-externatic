import React from "react";
import { Link } from "react-router-dom";
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
            <img src="" alt="" />
            <p>{offer.location}</p>
          </div>
          <div>
            <img src="" alt="" />
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
