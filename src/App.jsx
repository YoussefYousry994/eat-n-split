import FriendsList from "./components/FriendsList";
import FormAddFriend from "./components/FormAddFriend";
import Btn from "./components/Btn";
import FromSplitBill from "./components/FromSplitBill";
import { useState } from "react";
import { initialFriends } from "./data";
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [sAF, setSAF] = useState(false);

  const [selectedFr, setSelectedFr] = useState({
    id: 0,
    name: "",
    image: "",
    balance: 0,
  });

  function handleSAF() {
    setSAF((show) => !show);
  }

  function handleAF(friend) {
    setFriends((friends) => [...friends, friend]);
    setSAF(false);
  }

  function handleSelection(friend) {
    setSelectedFr(friend);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          selectedFr={selectedFr}
          onSelection={handleSelection}
        />

        {sAF && <FormAddFriend onAF={handleAF} />}

        <Btn onClick={handleSAF}>{sAF ? "close" : "Add Friends"}</Btn>
      </div>
      {selectedFr && <FromSplitBill selectedFr={selectedFr} />}
    </div>
  );
}
