import PropTypes from "prop-types";

const SampleCard = PropTypes.shape({
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  logo: PropTypes.shape({ url: PropTypes.string }),
}).isRequired;

export default SampleCard;
