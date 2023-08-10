export const wrap = (text: string | null, maxWidth: number): string => {
  if (!text) return "";
  if (text.length <= maxWidth) return text;
  const breakPoint =
    text.lastIndexOf(" ", maxWidth) !== -1
      ? text.lastIndexOf(" ", maxWidth)
      : maxWidth;
  return `${text[0]}\n${wrap(text.slice(breakPoint).trim(), maxWidth)}`;
};
