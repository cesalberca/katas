const displayTime = (time: number) => `${time > 9 ? "" : 0}${time}`;

export function humanReadable(sec: number): string {
  const hours = Math.floor(sec / 3600);
  const minutes = Math.floor((sec - 3600 * hours) / 60);
  const seconds = sec - (60 * minutes + 3600 * hours);
  return `${displayTime(hours)}:${displayTime(minutes)}:${displayTime(
    seconds
  )}`;
}
