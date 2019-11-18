export class Matrix {

  constructor(input) {
    this._matrix = input.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows() {
    return this._matrix;
  }

  get columns() {
    if (!this._columns) {
      this._columns = this.calculateColumns();
    }
    return this._columns;
  }

  calculateColumns() {
    let colArray = [];
    for (let i = 0; i < this._matrix[0].length; i++) {
      let col = [];
      for (let j = 0; j < this._matrix.length; j++) {
        col.push(this._matrix[j][i]);
      }
      colArray.push(col);
    }
    return colArray;
  }
}
