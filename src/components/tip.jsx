export default function Tip({ onTip, children }) {
  return (
    <li className="tip" onClick={onTip}>
      {children}%
    </li>
  );
}
