export class Matrix {

  constructor(input) {
    this.matrix = input.split('\n').map(row => row.split(' ').map(Number));
  }

  get rows() {
    return this.matrix;
  }

  get columns() {
    if (!this._columns) {
      this._columns = this.calculateColumns();
    }
    return this._columns;
  }

  calculateColumns() {
    let colArray = [];
    for (let i = 0; i < this.matrix[0].length; i++) {
      let col = [];
      for (let j = 0; j < this.matrix.length; j++) {
        col.push(this.matrix[j][i]);
      }
      colArray.push(col);
    }
    return colArray;
  }
}
