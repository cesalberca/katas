export const isValidMessage = (message: string): boolean => {
  if (message === "") return true;
  if (isNaN(+message[0])) return false;

  const messageAndDigitSeperated = message.split(/(?<=\D)(?=\d)|(?<=\d)(?=\D)/);

  if (messageAndDigitSeperated.length % 2 !== 0) return false;

  for (let i = 0; i < messageAndDigitSeperated.length - 1; i++) {
    if (i % 2 !== 0) continue;
    if (+messageAndDigitSeperated[i] !== messageAndDigitSeperated[i + 1].length)
      return false;
  }

  return true;
};
