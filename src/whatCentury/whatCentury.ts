const extractlastNumberOfCentury = (century: number): number =>
  +century.toString().slice(-1);

export const whatCentury = (year: string): string => {
  if (+year % 1000 === 0 && year.length > 1) return `${year.slice(0, 2)}th`;

  const century = +year.slice(0, 2) + 1;

  if (extractlastNumberOfCentury(century) === 1 && century !== 11)
    return `${century}st`;

  if (extractlastNumberOfCentury(century) === 2 && century !== 12)
    return `${century}nd`;

  if (extractlastNumberOfCentury(century) === 3 && century !== 13)
    return `${century}rd`;

  return `${century}th`;
};
