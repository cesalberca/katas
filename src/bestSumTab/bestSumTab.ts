export const bestSumTab = (targetSum: number, numbers: number[]) => {
  const table = Array(targetSum + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= targetSum; i++) {
    for (let num of numbers) {
      if (table[i] !== null) {
        const possibeNewArray = table[i].concat(num);
        if (!table[i + num] || table[i + num].length > possibeNewArray.length) {
          table[i + num] = possibeNewArray;
        }
      }
    }
  }
  return table[targetSum];
};
