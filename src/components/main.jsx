import Bill from "./bill";
import TipList from "./tipList";
import DisplayTotal from "./calculate-tip";
import People from "./people";
import { useState } from "react";

export default function Main() {
  const [bill, setBill] = useState(null);
  const [people, setPeople] = useState(null);
  const [tip, setTip] = useState(0);
  const [error, setError] = useState(false);
  const [maxAmount, setMaxAmount] = useState(false);

  function handleTip(e) {
    if (people === null) {
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

  function handleBill(e) {
    // setBill(Number(e.target.value) > 1000000 ? bill : Number(e.target.value) )
    Number(e.target.value) > 1000000
      ? setBill(bill) && setMaxAmount(true)
      : setBill(Number(e.target.value));

    Number(e.target.value) > 1000000 ? setMaxAmount(true) : setMaxAmount(false);
    // if (Number(e.target.value) > 1000000) {
    //   setMaxAmount(true);
    //   setBill(bill);
    // }
    // setBill(Number(e.target.value));
    // setMaxAmount(false);
  }

  function handleReset() {
    setTip(0);
    setPeople(0);
    setBill(0);
  }
  return (
    <main className="main">
      <div className="main-left">
        <Bill input={bill} onInput={handleBill} maxAmount={maxAmount} />

        <TipList onTip={handleTip} onCustomTip={handleCustomTip} tip={tip} />

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
