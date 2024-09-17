export const getCouncilName = (name?: string) => {
  let councilIteration = new Date().getFullYear() - 1999;
  if (new Date().getMonth() >= 8 && new Date().getDate() >= 15)
    councilIteration++;

  let abbr = "th";
  if (councilIteration % 10 === 1) abbr = "st";
  else if (councilIteration % 10 === 2) abbr = "nd";
  else if (councilIteration % 10 === 3) abbr = "rd";

  return `The ${councilIteration}${abbr} ${name || "Aphelion"} Council`;
};
