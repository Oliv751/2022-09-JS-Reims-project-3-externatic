import React from "react";
import PropTypes from "prop-types";
import OfferCard from "./OfferCard";
import SampleCard from "./sampleCard";

export default function OfferList({ offerList }) {
  return (
    <div className="OfferList">
      <ul>
        {offerList.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
    </div>
  );
}

OfferList.defaultProps = {
  offerList: [],
};

OfferList.propTypes = {
  offerList: PropTypes.arrayOf(SampleCard),
};
