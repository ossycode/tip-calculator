import Bill from "./bill";
import TipList from "./tipList";
import DisplayTotal from "./calculate-tip";
import People from "./people";
import { useState } from "react";

export default function Main() {
  const [bill, setBill] = useState(0);
  const [people, setPeople] = useState(0);
  const [tip, setTip] = useState(0);
  const [error, setError] = useState(false);

  function handleTip(e) {
    if (people === 0) {
      setError(true);
      return;
    }
    setTip(Number(e.target.innerText.slice(0, -1)));
  }
  function handleCustomTip(e) {
    setTip(Number(e.target.value));
  }

  function handleNumberOfPeople(e) {
    if (Number(e.target.value) < 1) return;
    setPeople(Number(e.target.value));
    setError(false);
  }

  function handleReset() {
    setTip(0);
    setPeople(0);
    setBill(0);
  }
  return (
    <main className="main">
      <div className="main-left">
        <Bill input={bill} onInput={setBill} />

        <TipList onTip={handleTip} onCustomTip={handleCustomTip} />

        <People input={people} onInput={handleNumberOfPeople} error={error} />
      </div>
      <DisplayTotal
        tip={tip}
        people={people}
        bill={bill}
        onReset={handleReset}
      />
    </main>
  );
}
