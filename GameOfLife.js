class GameOfLife {
  constructor(width, height) {
    this.width = width;
    this.height = height;
    this.board = this.makeBoard();
  }

  /**
   * Returns a 2D Array
   */

  makeBoard() {
    const board = [];

    while(board.length < this.height) {
      let width = [];
      for(let i = 0; i<this.width; i++) {
        width.push(0)
      }
      board.push(width);
    }
    return board;
  }

  getCell(row, col) { // returns the cell value for the given row and col coordinates
    if(row < 0 || row >= this.height || col < 0 || col >= this.width) {
      return 'dead';
    }
    return this.board[row][col];

  }

  setCell(value, row, col) { //Sets a new val for cell in given row and col coordinates
    if(row < 0 || row >= this.height || col < 0 || col >= this.width) {
      return 'dead';
    }
    this.board[row][col] = value;
  }

  toggleCell(row, col) { // toggle a cell value between dead and alive.
    this.board[row][col] === 0 ? this.board[row][col] = 1 : this.board[row][col] = 0;
    // if(this.board[row][col] === 0) {
    //   this.board[row][col] = 1;
    // }
    // else {
    //   this.board[row][col] = 0;
    // }
  }

  /**
   * Return the amount of living neighbors around a given coordinate.
   */

  livingNeighbors(row, col) {
    let count = 0;

    for (let currentRow = 0; currentRow < this.board.length; currentRow++) {
      for (let currentCol = 0; currentCol < this.board[currentRow].length; currentCol++) {
        let current = this.board[currentRow][currentCol];
        if (Math.abs(currentRow-row) <= 1 && Math.abs(currentCol-col) <= 1) {
          if(!(currentRow == row && currentCol == col) && current === 1) {
            count++;
          }
        }
      }
    }
    return count;
  }

  /**
   * Given the present board, apply the rules to generate a new board
   */
  forEachCell(fn){
    for(let i = 0; i < this.height; i++){
      for(let j = 0; j < this.width; j++){
        fn(i, j);
      }
    }
  }

  randomize() {
    this.forEachCell((row,col) => {
      this.board[row][col] = Math.round(Math.random());
    })
  }

  tick() {
    const newBoard = this.makeBoard();

    this.forEachCell((row, col) => {
      const alive = this.board[row][col] === 1;
      const dead = !alive;
      if(dead && this.livingNeighbors(row, col) === 3){
        newBoard[row][col] = 1;
      }
      if(alive && (this.livingNeighbors(row, col) === 2 || this.livingNeighbors(row, col) === 3)){
        newBoard[row][col] = 1;
      }
    });
    this.board = newBoard;
  }
}
//     for (let currentRow = 0; currentRow < this.board.length; currentRow++) {
//       for (let currentCol = 0; currentCol < this.board[currentRow].length; currentCol++) {
//         let alive = game.livingNeighbors(currentRow, currentCol);
//         let current = this.board[currentRow][currentCol];
//         let newCurrent = newBoard[currentRow][currentCol];
//          current === 1 && (alive === 2 || alive === 3) ? newCurrent = 0 : newCurrent = 1;
//          current === 0 && alive === 3 ? newCurrent = 1 : newCurrent = 0;
//       }
//     }

//     this.board = newBoard;
//   }
// }
if (typeof module !== 'undefined') {
  module.exports = GameOfLife;
}

