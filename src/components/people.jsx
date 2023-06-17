export default function People({ input, onInput, error }) {
  return (
    <div className="input-container">
      <label htmlFor="people">
        Number of people
        <span className="error">{error ? "Can't be zero" : ""}</span>
      </label>
      <input
        className={error ? "error" : ""}
        type="number"
        placeholder="0"
        value={input}
        onChange={onInput}
        id="people"
      />
      <img src="images/icon-person.svg" alt="person" />
    </div>
  );
}
