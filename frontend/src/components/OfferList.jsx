import React from "react";
import PropTypes from "prop-types";
import OfferCard from "./OfferCard";

export default function OfferList({ offers }) {
  return (
    <div className="OfferList">
      <ul>
        {offers.map((offer) => {
          return (
            <li>
              <OfferCard key={offer.id} offer={offer} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

OfferList.propTypes = {
  offers: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      logo: PropTypes.string,
    })
  ),
};

OfferList.defaultProps = {
  offers: [],
};
