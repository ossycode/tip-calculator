export default function People({ input, onInput, error }) {
  return (
    <div className="input-container">
      <label htmlFor="">
        Number of people
        <span className="error">{error ? "Can't be zero" : ""}</span>
      </label>
      <input
        className={error ? "error" : ""}
        type="text"
        placeholder="0"
        value={input}
        onChange={onInput}
      />
      <img src="images/icon-person.svg" alt="person" />
    </div>
  );
}
