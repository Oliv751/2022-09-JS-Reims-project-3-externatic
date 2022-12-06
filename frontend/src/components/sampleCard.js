import PropTypes from "prop-types";

const SampleCard = PropTypes.shape({
  id: PropTypes.number.isRequired,
  companyName: PropTypes.string.isRequired,
  offerName: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  contract: PropTypes.string.isRequired,
  publicationDate: PropTypes.string.isRequired,
  logo: PropTypes.shape({ url: PropTypes.string }),
}).isRequired;

export default SampleCard;
