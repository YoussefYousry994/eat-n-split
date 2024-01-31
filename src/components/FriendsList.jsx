import "../data.js";
import PropTypes from "prop-types";
import Friend from "./Friend.jsx";

export default function FriendsList({ friends, onSelection, selectedFr }) {
  return (
    <div>
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            key={friend.id}
            selectedFr={selectedFr}
            onSelection={onSelection}
          />
        ))}
      </ul>
    </div>
  );
}

FriendsList.propTypes = {
  friends: PropTypes.array.isRequired,
  onSelection: PropTypes.func.isRequired,
  selectedFr: PropTypes.object.isRequired,
};
