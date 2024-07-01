import { getBaseClasses, getConditions, getEmptyArray } from "./helpers/dates";

export function TimeInWeeks({ date }) {
  const array25 = getEmptyArray(75);
  const array36 = getEmptyArray(52);

  const conditions = getConditions([0, 30, 60]);

  const getClasses = getBaseClasses(52, conditions, "weeks");

  return (
    <div>
      <div className="info-weeks">Weeks of the year ----</div>

      <div className="box">
        {array25.map((itemRow, indexRow) => (
          <div className="row" key={indexRow}>
            {array36.map((item, index) => (
              <div
                className={getClasses(indexRow, index, date)}
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
