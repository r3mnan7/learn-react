import { useState } from "react";
import BillInput from "./BillInput";
import RatingInput from "./RatingInput";
import BillTotal from "./BillTotal";

export default function App() {
  const [bill, setBill] = useState(0);
  const [rating1, setRating1] = useState("15");
  const [rating2, setRating2] = useState("15");

  function handleSelectRating1(rtng1) {
    setRating1(rtng1);
  }
  function handleSelectRating2(rtng2) {
    setRating2(rtng2);
  }
  function handleChangeBill(bill) {
    setBill(bill);
  }
  function handleReset() {
    setBill(0);
    setRating1("15");
    setRating2("15");
  }

  const tipRate = Math.round((Number(rating1) + Number(rating2)) / 2) / 100;
  const tip = Math.round(tipRate * Number(bill));

  return (
    <div className="app">
      <h1>Tip Calculator</h1>
      <BillInput bill={bill} onChange={handleChangeBill} />
      <RatingInput rating={rating1} onChange={handleSelectRating1}>
        How did you like the service?
      </RatingInput>
      <RatingInput rating={rating2} onChange={handleSelectRating2}>
        How did your friend like the service?
      </RatingInput>
      <BillTotal bill={bill} tip={tip} />
      <button className="resetButton" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
}
