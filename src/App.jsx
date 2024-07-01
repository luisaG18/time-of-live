import { useState } from "react";
import "./App.css";
import { TimeInMonths } from "./TimeInMonths";
import { TimeInWeeks } from "./TimeInWeeks";

function App() {
  const [component, setComponent] = useState("");

  function clickHandler(component) {
    switch (component) {
      case "timeInMonths":
        setComponent("TimeInMonths");
        break;
      case "timeInWeeks":
        setComponent("TimeInWeeks");
        break;
    }
  }
  return (
    <div className="app">
      <h1>A 75-Year Human Life in Months</h1>
      <div className="buttons">
        <button onClick={() => clickHandler("timeInMonths")}>
          Tiempo en meses
        </button>
        <button onClick={() => clickHandler("timeInWeeks")}>
          Tiempo en semanas
        </button>
      </div>
      {component === "TimeInMonths" && <TimeInMonths />}
      {component === "TimeInWeeks" && <TimeInWeeks />}
    </div>
  );
}

export default App;
