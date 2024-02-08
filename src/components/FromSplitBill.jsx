import PropTypes from 'prop-types';
import Btn from './Btn';
import { useState } from 'react';
export default function FromSplitBill({ selectedFr, onSplitBill }) {
  const [bill, setBill] = useState('');
  const [paidByUser, setPaidByUser] = useState('');
  const paidByFriend = bill ? bill - paidByUser : '';
  const [whoIsPaying, setWhoIsPaying] = useState('user');

  function handleSubmit(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user' ? paidByFriend : -paidByUser);
  }

  return (
    <form className='form-split-bill' onSubmit={handleSubmit}>
      <h2>Split a bill with {selectedFr.name}</h2>

      <label>💰 Bill value</label>
      <input
        type='text'
        value={bill}
        onChange={(e) => setBill(+e.target.value)}
      />

      <label>👦 Your expense</label>
      <input
        type='text'
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(+e.target.value) > bill ? paidByUser : +e.target.value
        }
      />

      <label>👨🏻‍🤝‍👨🏻 {selectedFr.name} expense</label>
      <input type='text' disabled value={paidByFriend} />

      <label>🤑 Who is paying the bill</label>
      <select
        value={whoIsPaying}
        onChange={(e) => setWhoIsPaying(e.target.value)}
      >
        <option value='user'>You</option>
        <option value='friend'>{selectedFr.name}</option>
      </select>

      <Btn>Split Bill</Btn>
    </form>
  );
}

FromSplitBill.propTypes = {
  selectedFr: PropTypes.object.isRequired,
  onSplitBill: PropTypes.object.isRequired,
};
