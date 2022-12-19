import React from "react";
import PropTypes from "prop-types";
import OfferCard from "./OfferCard";
import SampleCard from "./sampleCard";

export default function OfferList({ offerList }) {
  return (
    <section>
      <ul className="OfferList">
        {offerList.map((offer) => (
          <OfferCard key={offer.id} offer={offer} />
        ))}
      </ul>
    </section>
  );
}

OfferList.defaultProps = {
  offerList: [],
};

OfferList.propTypes = {
  offerList: PropTypes.arrayOf(SampleCard),
};
