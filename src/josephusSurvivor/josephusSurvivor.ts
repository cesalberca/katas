export const josephusSurvivor = (n: number, k: number): number => {
  const items = Array.from({ length: n }, (_, i) => i + 1);

  const findLastSurvivor = (items: number[], index = 0): number => {
    if (items.length === 1) return items[0];
    const newIndex = (index + k - 1) % items.length;
    const itemsCopy = items.slice();
    itemsCopy.splice(newIndex, 1);

    return findLastSurvivor(itemsCopy, newIndex);
  };

  return findLastSurvivor(items);
};
