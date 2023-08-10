const convertInMinutes = (alarm: string) =>
  +alarm.slice(0, 2) * 60 + +alarm.slice(-2);

const extractInHours = (min: number) => Math.trunc(min / 60);

const extractInMinutes = (min: number) => min % 60;

const calcInterval = (alarm1: number, alarm2: number) => alarm1 - (alarm2 + 1);

const calcIntervalTillNextDay = (alarm1: number, alarm2: number) =>
  convertInMinutes("24:00") - (alarm2 + 1) + alarm1;

const convertTimeInMinutes = (arr: string[]) => arr.map(convertInMinutes);

const calcMaxInterval = (arr: number[]) =>
  arr.reduce((maxInterval, _, i, completeAlarms) => {
    if (i === completeAlarms.length - 1) return maxInterval;

    const interval =
      completeAlarms[i + 1] > completeAlarms[i]
        ? calcInterval(completeAlarms[i + 1], completeAlarms[i])
        : calcIntervalTillNextDay(completeAlarms[i + 1], completeAlarms[i]);

    return interval > maxInterval ? interval : maxInterval;
  }, 0);

const sortAsc = (arr: number[]) => arr.sort((a, b) => a - b);

const removeDuplicates = (arr: string[]) => [...new Set(arr)];

const isLessThan10 = (num: number) => num < 10;

const buildTimeString = (num: number) =>
  `${isLessThan10(num) ? "0" : ""}${num}`;

export const solve = (alarms: string[]) => {
  if (alarms.length === 0) return "00:00";

  const sortedTimes = sortAsc(
    convertTimeInMinutes(removeDuplicates([...alarms]))
  );

  const result = calcMaxInterval([...sortedTimes, sortedTimes[0]]);

  result; //?
  const hours = extractInHours(result);

  const minutes = extractInMinutes(result);

  return `${buildTimeString(hours)}:${buildTimeString(minutes)}`;
};
