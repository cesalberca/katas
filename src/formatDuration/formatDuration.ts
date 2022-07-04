const displayTime = (time: number, unit: string) =>
  `${time ? `${time} ${unit}${time > 1 ? "s" : ""}` : ""}`;

const lastSeparator = (times: number): string => (times > 1 ? " and " : "");

const commaSeparator = (
  unit: string,
  obj: any,
  numUnitGTZero: number
): string => {
  if (obj[unit] === obj.hours && obj.minutes === 0) return "";
  return obj[unit] > 0 && numUnitGTZero > 2 ? ", " : "";
};

const calcGreaterThanZero = (nums: number[]): number =>
  nums.reduce((acc, curr) => (curr > 0 ? acc + 1 : acc), 0);

export const formatDuration = (secs: number): string => {
  if (secs === 0) return "now";
  const years = Math.floor(secs / 31536000);
  const days = Math.floor((secs - years * 31536000) / 86400);
  const hours = Math.floor((secs - (days * 86400 + years * 31536000)) / 3600);
  const minutes = Math.floor(
    (secs - (hours * 3600 + days * 86400 + years * 31536000)) / 60
  );
  const seconds =
    secs - (minutes * 60 + hours * 3600 + days * 86400 + years * 31536000);
  const numUnitGTZero = calcGreaterThanZero([
    minutes,
    seconds,
    hours,
    days,
    years,
  ]);

  const commaObj = {
    hours,
    days,
    years,
    seconds,
    minutes,
  };

  if ([days, years, seconds].every((n) => n === 0) && hours > 0 && minutes)
    return `${displayTime(hours, "hour")} and ${displayTime(
      minutes,
      "minute"
    )}`;
  if (seconds === 0)
    return `${displayTime(years, "year")}${commaSeparator(
      "years",
      commaObj,
      numUnitGTZero
    )}${displayTime(days, "day")}${commaSeparator(
      "days",
      commaObj,
      numUnitGTZero
    )}${displayTime(hours, "hour")}${lastSeparator(numUnitGTZero)}${displayTime(
      minutes,
      "minute"
    )}`;

  return `${displayTime(years, "year")}${commaSeparator(
    "years",
    commaObj,
    numUnitGTZero
  )}${displayTime(days, "day")}${commaSeparator(
    "days",
    commaObj,
    numUnitGTZero
  )}${displayTime(hours, "hour")}${commaSeparator(
    "hours",
    commaObj,
    numUnitGTZero
  )}${displayTime(minutes, "minute")}${lastSeparator(
    numUnitGTZero
  )}${displayTime(seconds, "second")}`;
};
