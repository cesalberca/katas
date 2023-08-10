const IsNumber = (num: number) => typeof num === "number" && !isNaN(num);

const incrementField = (field: string) => `${+field + 1}`;

const isMine = (field: string) => field === "*";

export const mineField = (board: string) => {
  const boardArr = board.split("\n");
  let solvedBoard: string[][] = [];

  for (let y = 0; y < boardArr.length; y++) {
    let solveField: string[] = [];
    for (let i = 0; i < boardArr[y].length; i++) {
      if (isMine(boardArr[y][i])) {
        if (IsNumber(+solveField[i - 1])) {
          solveField[i - 1] = incrementField(solveField[i - 1]);
        }
        if (solvedBoard[y - 1] && IsNumber(+solvedBoard[y - 1][i])) {
          solvedBoard[y - 1][i] = incrementField(solvedBoard[y - 1][i]);
        }

        if (solvedBoard[y - 1] && IsNumber(+solvedBoard[y - 1][i - 1])) {
          solvedBoard[y - 1][i - 1] = incrementField(solvedBoard[y - 1][i - 1]);
        }

        if (solvedBoard[y - 1] && IsNumber(+solvedBoard[y - 1][i + 1])) {
          solvedBoard[y - 1][i + 1] = incrementField(solvedBoard[y - 1][i + 1]);
        }
        solveField.push("*");
        continue;
      }
      solveField.push("0");
      if (isMine(boardArr[y][i - 1])) {
        solveField[i] = incrementField(solveField[i]);
      }

      if (solvedBoard[y - 1] && isMine(solvedBoard[y - 1][i])) {
        solveField[i] = incrementField(solveField[i]);
      }

      if (solvedBoard[y - 1] && isMine(solvedBoard[y - 1][i - 1])) {
        solveField[i] = incrementField(solveField[i]);
      }

      if (solvedBoard[y - 1] && isMine(solvedBoard[y - 1][i + 1])) {
        solveField[i] = incrementField(solveField[i]);
      }
    }
    solvedBoard.push(solveField);
  }

  return solvedBoard.map((row) => row.join("")).join("\n");
};
