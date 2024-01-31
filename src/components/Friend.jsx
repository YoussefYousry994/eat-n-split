import PropTypes from "prop-types";
import Btn from "./Btn";
export default function Friend({ friend, onSelection, selectedFr }) {
  const isSelected = selectedFr.id === friend.id;
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name} />

      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} Owes You {Math.abs(friend.balance)}$
        </p>
      )}
      {friend.balance === 0 && (
        <p>
          You and {friend.name} are even {Math.abs(friend.balance)}$
        </p>
      )}
      <Btn onClick={() => onSelection(friend)}>Select</Btn>
    </li>
  );
}

Friend.propTypes = {
  selectedFr: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,
  friend: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    balance: PropTypes.number.isRequired,
  }).isRequired,
  onSelection: PropTypes.func.isRequired,
};
