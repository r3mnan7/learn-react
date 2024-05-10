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

  function handleReset() {
    setStep(1);
    setCount(0);
  }
  function formatCount(count) {
    const absCount = Math.abs(count);
    if (absCount < 365) {
      return `${absCount} days`;
    } else {
      const years = Math.floor(absCount / 365);
      const days = absCount % 365;
      return `${years} years and ${days} days`;
    }
  }
  return (
    <>
      <div className="step">
        <input
          type="range"
          min="1"
          max="365"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span> Step: {step} </span>
      </div>
      <div className="count">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>
      <div className="output">
        {count === 0
          ? "Today is "
          : count > 0
          ? `${formatCount(count)} from today is `
          : `${formatCount(count)} ago was `}
        <span>{date.toDateString()}</span>
      </div>
      {Math.abs(count) !== 0 ? (
        <div>
          <button onClick={handleReset}>Reset</button>{" "}
        </div>
      ) : null}
    </>
  );
}
