export default function RatingInput({ rating, onChange, children }) {
  return (
    <form>
      {children}
      <select value={rating} onChange={(e) => onChange(e.target.value)}>
        <option value="1">Dissatisfied (1%)</option>
        <option value="10">It was okay (10%)</option>
        <option value="15">It was good (15%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </form>
  );
}
