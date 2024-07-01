export function ViewSelector({ component, updateComponent }) {
  function clickHandler(component) {
    if (component === "timeInMonths") {
      updateComponent("TimeInMonths");
    } else {
      updateComponent("TimeInWeeks");
    }
  }
  return (
    <>
      <h1>A 75-Year Human Life in Months</h1>
      <div className="buttons">
        <button onClick={() => clickHandler("timeInMonths")}>
          Tiempo en meses
        </button>
        <button onClick={() => clickHandler("timeInWeeks")}>
          Tiempo en semanas
        </button>
      </div>
    </>
  );
}
