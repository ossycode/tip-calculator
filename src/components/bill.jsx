export default function Bill({ input, onInput, maxAmount }) {
  return (
    <div className="input-container">
      <label htmlFor="bill">
        Bill
        <span className="max-amount">
          {maxAmount ? "Max amount is 1000000" : ""}
        </span>
      </label>
      <input
        type="number"
        placeholder="0"
        value={input}
        onChange={onInput}
        id="bill"
      />
      <img src="images/icon-dollar.svg" alt="dollar" />
    </div>
  );
}
