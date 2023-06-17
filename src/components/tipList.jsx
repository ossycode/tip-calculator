import Tip from "./tip";

export default function TipList({ onTip, onCustomTip, tip }) {
  return (
    <div className="tip-list-container">
      <h2>Select Tip %</h2>
      <div className="tip-list">
        <Tip num={5} onTip={onTip} tip={tip}>
          5
        </Tip>
        <Tip num={10} onTip={onTip} tip={tip}>
          10
        </Tip>
        <Tip num={15} onTip={onTip} tip={tip}>
          15
        </Tip>
        <Tip num={25} onTip={onTip} tip={tip}>
          25
        </Tip>
        <Tip num={50} onTip={onTip} tip={tip}>
          50
        </Tip>
        <input
          className="custom"
          type="number"
          placeholder="Custom"
          onChange={onCustomTip}
        ></input>
      </div>
    </div>
  );
}
