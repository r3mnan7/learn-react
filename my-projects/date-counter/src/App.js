import "./styles.css";
import { useState } from "react";

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  return (
    <>
      <div className="step">
        <button onClick={() => setStep((c) => c - 10)}>--</button>
        <button onClick={() => setStep((c) => c - 1)}>-</button>
        <span> Step: {step} </span>
        <button onClick={() => setStep((c) => c + 1)}>+</button>
        <button onClick={() => setStep((c) => c + 10)}>++</button>
        <button onClick={() => setStep((c) => 0)}>Reset</button>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <span> Count: {count} </span>
        <button onClick={() => setCount((c) => c + step)}>+</button>
        <button onClick={() => setCount((c) => 0)}>Reset</button>
      </div>
      <div className="output">
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <span>{date.toDateString()}</span>
      </div>
    </>
  );
}
