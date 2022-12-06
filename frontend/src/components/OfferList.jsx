import React from "react";
import OfferCard from "./OfferCard";
import SampleCard from "./sampleCard";

export default function OfferList({ offer }) {
  return (
    <div className="OfferList">
      <ul>
        <li key={offer.id}>
          <OfferCard offer={offer} />
        </li>
      </ul>
    </div>
  );
}

OfferList.defaultProps = {
  offer: [],
};

OfferList.propTypes = {
  offer: SampleCard,
};
