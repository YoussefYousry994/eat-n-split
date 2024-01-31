import PropTypes from "prop-types";
export default function Btn({ children, onClick }) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

Btn.propTypes = {
  children: PropTypes.shape({ name: PropTypes.string.isRequired }),
  onClick: PropTypes.shape({ name: PropTypes.string.isRequired }).isRequired,
};
