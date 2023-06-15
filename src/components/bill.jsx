export default function Bill({ input, onInput }) {
  return (
    <div className="input-container">
      <label htmlFor="">Bill</label>
      <input
        type="text"
        placeholder="0"
        value={input}
        onChange={(e) => onInput(Number(e.target.value))}
      />
      <img src="images/icon-dollar.svg" alt="dollar" />
    </div>
  );
}
