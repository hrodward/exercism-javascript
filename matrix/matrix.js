export class Matrix {

  constructor(input) {
    this.matrix = [];
    input.split('\n').forEach(textRow => this.matrix.push(textRow.split(' ').map(Number)));
    this.colsArray = [];
    this.columns = this.colsArray;
  }

  get rows() {
    return this.matrix;
  }

  set columns(arr) {
    for (let i = 0; i < this.matrix[0].length; i++) {
      let col = [];
      for (let j = 0; j < this.matrix.length; j++) {
        col.push(this.matrix[j][i]);
      }
      arr.push(col);
    }
  }

  get columns() {
    return this.colsArray;
  }
}
