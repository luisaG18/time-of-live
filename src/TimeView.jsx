import { useEffect, useState } from "react";
import { TimeInMonths } from "./TimeInMonths";
import { TimeInWeeks } from "./TimeInWeeks";
import { getDays } from "./helpers/dates";

export function TimeView({ component }) {
  const [date, setDate] = useState({ years: 0, months: 0, weeks: 0 });
  const [bornDate, setBornDate] = useState("1999-05-03");

  const handleChange = (event) => {
    setBornDate(event.target.value);
    updateDate();
  };

  const updateDate = () => {
    setDate(getDays(bornDate));
  };

  useEffect(() => {
    updateDate();
  }, []);

  return (
    <>
      <div>
        <input
          placeholder="Ingrese su edad"
          type="date"
          value={bornDate}
          onChange={(event) => {
            handleChange(event);
          }}
        />
      </div>
      {component === "TimeInMonths" && <TimeInMonths date={date} />}
      {component === "TimeInWeeks" && <TimeInWeeks date={date} />}
    </>
  );
}
