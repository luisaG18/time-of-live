import { useEffect, useState } from "react";

export function TimeInWeeks() {
  const [date, setDate] = useState({ years: 0, months: 0, weeks: 0 });
  const [bornDate, setBornDate] = useState("1999-05-03");

  const getDays = () => {
    let initialDate = new Date(bornDate);
    let currentDate = new Date();

    let subtraction = currentDate.getTime() - initialDate.getTime();
    const days = Math.round(subtraction / (1000 * 60 * 60 * 24));
    console.log({
      years: Math.round(days / 365),
      months: Math.round(days / 30.6),
      weeks: Math.round(days / 7),
    });
    return {
      years: Math.round(days / 365),
      months: Math.round(days / 30.6),
      weeks: Math.round(days / 7),
    };
  };

  const array25 = Array(75).fill(undefined);
  const array36 = Array(52).fill(undefined);

  const conditions = {
    0: {
      text: "Birth",
      class: "item--blue",
    },
    30: {
      text: "30th Birthday",
      class: "item--green",
    },
    60: {
      text: "60th Birthday",
      class: "item--red",
    },
  };

  const getClasses = (indexRow, index) => {
    let classes = "item";
    if (indexRow in conditions && index === 0) {
      classes += " " + conditions[indexRow].class;
    }
    const weeks = (indexRow + 1) * 52 - (52 - index);
    if (date.weeks > weeks) {
      classes += " item--filled";
    }
    return classes;
  };

  const handleChange = (event) => {
    setBornDate(event.target.value);
    updateDate();
  };

  const updateDate = () => {
    setDate(getDays());
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
      <div className="info-weeks">Weeks of the year ----</div>

      <div className="box">
        {array25.map((itemRow, indexRow) => (
          <div className="row" key={indexRow}>
            {array36.map((item, index) => (
              <div
                className={getClasses(indexRow, index)}
                key={index}
                title={indexRow * 52 + (index + 1)}
              >
                <div className="number__itemColumn">
                  {index == 0 && (indexRow + 1) % 5 == 0 ? indexRow + 1 : ""}
                </div>
                <div className="number__itemRow">
                  {indexRow === 0 && (index + 1) % 5 == 0 ? index + 1 : ""}
                </div>
                {indexRow in conditions && index === 0 ? (
                  <div className="item-content">
                    <span>{conditions[indexRow].text}</span>
                    <span className="arrow"></span>
                  </div>
                ) : (
                  ""
                )}
                {indexRow === 74 && index === 51 ? "x" : ""}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
