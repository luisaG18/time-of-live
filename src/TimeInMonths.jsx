import { useEffect, useState } from "react";

export function TimeInMonths() {
  const [date, setDate] = useState({ years: 0, months: 0 });
  const [bornDate, setBornDate] = useState("1999-05-03");

  const getDate = () => {
    let fecha1 = new Date(bornDate);
    let fecha2 = new Date();

    let resta = fecha2.getTime() - fecha1.getTime();
    const dias = Math.round(resta / (1000 * 60 * 60 * 24));
    console.log({
      years: Math.round(dias / 365),
      months: Math.round(dias / 30.6),
    });
    return {
      years: Math.round(dias / 365),
      months: Math.round(dias / 30.6),
    };
  };

  const array25 = Array(25).fill(undefined);
  const array36 = Array(36).fill(undefined);

  const conditions = {
    0: {
      text: "Birth",
      class: "item--blue",
    },
    10: {
      text: "30th Birthday",
      class: "item--green",
    },
    20: {
      text: "60th Birthday",
      class: "item--red",
    },
  };

  const getClasses = (indexRow, index) => {
    let classes = "item";
    if (indexRow in conditions && index === 0) {
      classes += " " + conditions[indexRow].class;
    }
    const months = (indexRow + 1) * 36 - (36 - index);
    if (date.months > months) {
      classes += " item--filled";
    }
    return classes;
  };

  const handleChange = (event) => {
    setBornDate(event.target.value);
    updateDate();
  };

  const updateDate = () => {
    setDate(getDate());
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
                className={getClasses(indexRow, index)}
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
