export default function Tip({ onTip, children, num, tip }) {
  return (
    <button className={tip === num ? "tip active" : "tip"} onClick={onTip}>
      {children}%
    </button>
  );
}
