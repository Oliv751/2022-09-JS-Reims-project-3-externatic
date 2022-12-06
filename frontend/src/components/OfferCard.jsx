import React from "react";
import SampleCard from "./sampleCard";

export default function OfferCard({ offer }) {
  return (
    <div>
      <h1>{offer.companyName}</h1>
      <h2>{offer.offerName}</h2>
      <p>{offer.location}</p>
      <p>{offer.contract}</p>
      <p>{offer.publicationDate}</p>

      <div className="card" />
    </div>
  );
}

OfferCard.defaultProps = {
  offer: [],
};

OfferCard.propTypes = {
  offer: SampleCard,
};
