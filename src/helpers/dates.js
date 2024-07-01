export const getDays = (bornDate) => {
  let initialDate = new Date(bornDate);
  let currentDate = new Date();

  let subtraction = currentDate.getTime() - initialDate.getTime();
  const days = Math.round(subtraction / (1000 * 60 * 60 * 24));
  return {
    years: Math.round(days / 365),
    months: Math.round(days / 30.6),
    weeks: Math.round(days / 7),
  };
};

export const getEmptyArray = (n) => Array(n).fill(undefined);

export const getConditions = (conditions) => {
  return {
    [conditions[0]]: {
      text: "Birth",
      class: "item--blue",
    },
    [conditions[1]]: {
      text: "30th Birthday",
      class: "item--green",
    },
    [conditions[2]]: {
      text: "60th Birthday",
      class: "item--red",
    },
  };
};

export const getBaseClasses = (n, conditions, conditionName) => {
  return (indexRow, index, date) => {
    let classes = "item";
    if (indexRow in conditions && index === 0) {
      classes += " " + conditions[indexRow].class;
    }
    const condition = (indexRow + 1) * n - (n - index);
    if (date[conditionName] > condition) {
      classes += " item--filled";
    }
    return classes;
  };
};
