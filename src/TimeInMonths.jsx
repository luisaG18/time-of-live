import { useEffect, useState } from "react";
import {
  getBaseClasses,
  getConditions,
  getDays,
  getEmptyArray,
} from "./helpers/dates";

export function TimeInMonths() {
  const [date, setDate] = useState({ years: 0, months: 0 });
  const [bornDate, setBornDate] = useState("1999-05-03");

  const array25 = getEmptyArray(25);
  const array36 = getEmptyArray(36);

  const conditions = getConditions([0, 10, 20]);

  const getClasses = getBaseClasses(36, conditions, "months");

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
    <div className="app">
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
      <div className="info">Each row is 36 months = 3 years</div>
      <div className="box">
        {array25.map((itemRow, indexRow) => (
          <div className="row" key={indexRow}>
            {array36.map((item, index) => (
              <div
                className={getClasses(indexRow, index, date)}
                key={index}
                title={indexRow * 36 + (index + 1)}
              >
                {indexRow in conditions && index === 0 ? (
                  <div className="item-content">
                    <span>{conditions[indexRow].text}</span>
                    <span className="arrow"></span>
                  </div>
                ) : (
                  ""
                )}
                {indexRow === 24 && index === 35 ? "x" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
