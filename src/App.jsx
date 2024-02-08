import FriendsList from './components/FriendsList';
import FormAddFriend from './components/FormAddFriend';
import Btn from './components/Btn';
import FromSplitBill from './components/FromSplitBill';
import { useState } from 'react';
import { initialFriends } from './data';
export default function App() {
  const [friends, setFriends] = useState(initialFriends);
  const [sAF, setSAF] = useState(false);

  const [selectedFr, setSelectedFr] = useState({
    id: 0,
    name: '',
    image: '',
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
    setSelectedFr((selected) => (selected?.id === friend.id ? null : friend));
    setSAF(false);
  }

  function handleSplitBill(val) {
    setFriends((friends) =>
      friends.map((friend) =>
        friend.id === selectedFr.id
          ? { ...friend, balance: friend.balance + val }
          : friend
      )
    );

    setSelectedFr(null);
  }

  return (
    <div className='app'>
      <div className='sidebar'>
        <FriendsList
          friends={friends}
          selectedFr={selectedFr}
          onSelection={handleSelection}
        />

        {sAF && <FormAddFriend onAF={handleAF} />}

        <Btn onClick={handleSAF}>{sAF ? 'close' : 'Add Friends'}</Btn>
      </div>
      {selectedFr && (
        <FromSplitBill
          selectedFr={selectedFr}
          onSplitBill={handleSplitBill}
          key={selectedFr.id}
        />
      )}
    </div>
  );
}
