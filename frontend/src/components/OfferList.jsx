import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import OfferCard from "./OfferCard";
import SampleCard from "./sampleCard";

export default function OfferList({ offerList }) {
  return (
    <section>
      <ul className="OfferList">
        {offerList.map((offer) => (
          <li key={offer.id}>
            <Link to={`/offers/${offer.id}`}>
              <OfferCard offer={offer} />
            </Link>
          </li>
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
