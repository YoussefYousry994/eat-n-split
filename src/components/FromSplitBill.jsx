import PropTypes from "prop-types";
import Btn from "./Btn";
export default function FromSplitBill({ selectedFr }) {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with {selectedFr.name}</h2>

      <label>X Bill value</label>
      <input type="text" />

      <label>👦 Your expense</label>
      <input type="text" />

      <label>👨🏻‍🤝‍👨🏻 {selectedFr.name}&apos expense</label>
      <input type="text" disabled />

      <label>X Who is paying the bill</label>
      <select>
        <option value="user">You</option>
        <option value="friend">{selectedFr.name}</option>
      </select>

      <Btn>Split Bill</Btn>
    </form>
  );
}

FromSplitBill.propTypes = { selectedFr: PropTypes.object.isRequired };
