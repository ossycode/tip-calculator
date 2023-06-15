import Tip from "./tip";

export default function TipList({ onTip, onCustomTip }) {
  return (
    <div className="tip-list-container">
      <h2>Select Tip %</h2>
      <ul className="tip-list">
        <Tip onTip={onTip}>5</Tip>
        <Tip onTip={onTip}>10</Tip>
        <Tip onTip={onTip}>15</Tip>
        <Tip onTip={onTip}>25</Tip>
        <Tip onTip={onTip}>50</Tip>
        <input
          className="custom"
          type="text"
          placeholder="Custom"
          onChange={onCustomTip}
        ></input>
      </ul>
    </div>
  );
}
