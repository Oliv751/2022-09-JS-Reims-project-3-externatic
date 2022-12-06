import React from "react";
import SampleCard from "./sampleCard";

export default function OfferCard({ offer }) {
  return (
    <div>
      <h2>{offer.name}</h2>
      <p>{offer.description}</p>

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
