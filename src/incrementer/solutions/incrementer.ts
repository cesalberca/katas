const extractLastDigitOfAnumber = (num: number, inc: number): number => {
  return Number((num + (inc + 1)).toString().at(-1))
}

export const incrementer = (nums: number[]) => {
  return nums.map((num, i) =>
    num + (i + 1) > 9 ? extractLastDigitOfAnumber(num, i) : num + (i + 1)
  )
}
