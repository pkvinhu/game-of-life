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
    this.board[row][col] === 0 ? this.board[row][col] === 1 : this.board[row][col] === 0;
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
    // TODO: Return the count of living neighbors.
    const count = 0;
    if(this.board[row-1][col]) {
      count++;
    }
    if(this.board[row-1][col-1]) {
      count++;
    }
    if(this.board[row-1][col+1]) {
      count++;
    }
    if(this.board[row][col-1]) {
      count++;
    }
    if(this.board[row][col+1]) {
      count++;
    }
    if(this.board[row+1][col]) {
      count++;
    }
    if(this.board[row+1][col-1]) {
      count++;
    }
    if(this.board[row+1][col+1]) {
      count++;
    }
    return count;
  }


  /**
   * Given the present board, apply the rules to generate a new board
   */

  tick() {
    const newBoard = this.makeBoard();
    // TODO: Here is where you want to loop through all the cells
    // on the existing board and determine, based on it's neighbors,
    // whether the cell should be dead or alive in the new board
    // (the next iteration of the game)
    //
    // You need to:
    // 1. Count alive neighbors for all cells
    // 2. Set the next state of all cells in newBoard,
    // based on their current alive neighbors
    this.board = newBoard;
  }
}
