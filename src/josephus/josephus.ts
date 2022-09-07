export const josephus = (
  items: any[],
  k: number,
  result: any[] = [],
  index = 0
): any[] => {
  const itemsCopy = items.slice();

  if (itemsCopy.length <= 1) return [...result, ...itemsCopy];

  const newIndex = (index + k - 1) % itemsCopy.length;

  const permuted = itemsCopy.splice(newIndex, 1);

  return josephus(itemsCopy, k, [...result, ...permuted], newIndex);
};
