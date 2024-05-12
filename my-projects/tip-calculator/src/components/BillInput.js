export default function BillInput({ onChange, bill }) {
  return (
    <form>
      <span>How much was the bill? </span>
      <input
        type="text"
        value={bill}
        onChange={(e) => onChange(e.target.value)}
      ></input>
    </form>
  );
}
