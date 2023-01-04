import PropTypes from "prop-types";

const SampleCard = PropTypes.shape({
  id: PropTypes.number.isRequired,
  offer_name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  publication_date: PropTypes.string.isRequired,
  logo: PropTypes.shape({ url: PropTypes.string }),
}).isRequired;

export default SampleCard;
