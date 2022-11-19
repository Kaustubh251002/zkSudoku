import { exportCallDataGroth16 } from "../snarkjsZkproof";

export async function sudokuCalldata(unsolved, solved) {
  const input = {
    unsolved: unsolved,
    solved: solved,
  };

  let dataResult;

  try {
    dataResult = await exportCallDataGroth16(
      input,
      "/zkproof/sudoku/main.wasm",
      "/zkproof/sudoku/sudoku_0001.zkey"
    );
  } catch (error) {
    window.alert("Wrong answer");
  }

  return dataResult;
}
