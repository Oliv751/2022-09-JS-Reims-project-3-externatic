import React from "react";
import PropTypes from "prop-types";

export default function OfferCard({ offer }) {
  return (
    <div>
      <h2>{offer.name}</h2>
      <p>{offer.description}</p>

      <div className="card" />
    </div>
  );
}

OfferCard.propTypes = {
  offer: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    logo: PropTypes.string,
  }),
};

OfferCard.defaultProps = {
  offer: { logo: null },
};
