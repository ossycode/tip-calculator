export default function DisplayTotal({ tip, bill, people, onReset }) {
  const totalTip = bill * (tip / 100);
  const totalTipPerPerson = (totalTip / people).toFixed(2);

  const totalAmount = bill + totalTip;
  const totalAmountPerPerson = (totalAmount / people).toFixed(2);
  console.log(totalTipPerPerson);
  console.log(totalAmountPerPerson);
  return (
    <div className="main-right">
      <div>
        <div className="main-info">
          <div>
            <p className="total-text">Tip Amount</p>
            <span className="total-text-span">/ person</span>
          </div>

          <div className="total">
            ${totalTip === 0 || people === 0 ? "0.00" : totalTipPerPerson}
          </div>
        </div>

        <div className="main-info">
          <div>
            <p className="total-text">Total</p>
            <span className="total-text-span">/ person</span>
          </div>

          <div className="total">
            ${people === 0 ? "0.00" : totalAmountPerPerson}
          </div>
        </div>
      </div>

      <button
        className={
          isNaN(totalAmountPerPerson) && isNaN(totalTipPerPerson)
            ? "reset-btn-disabled"
            : "reset-btn"
        }
        type="reset"
        onClick={onReset}
      >
        RESET
      </button>
    </div>
  );
}
